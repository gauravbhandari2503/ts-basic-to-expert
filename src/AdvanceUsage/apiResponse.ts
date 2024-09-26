type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };


// API response structure
type ApiResponse<T> = 
    | { success: true; data: T } 
    | { success: false; error: string };


// API call function
async function ApiCall<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
    try {
        const fetchOptions: [string, RequestInit?] = [endpoint];
        if (options) {
            fetchOptions.push(options);
        }
        const response = await fetch(...fetchOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: T = await response.json();
        return { success: true, data };
    } catch (error) {
        return { success: false, error: (error instanceof Error) ? error.message : 'Unknown error' };
    }
}

// Repository interface with generic CRUD operations
interface Repository<T> {
    getById(id: string): Promise<ApiResponse<T>>;
    getAll(): Promise<ApiResponse<T[]>>;
    create(item: T): Promise<ApiResponse<void>>;
    update(id: string, item: Partial<T>): Promise<ApiResponse<void>>;
    delete(id: string): Promise<ApiResponse<void>>;
}
  
// Generic API repository implementing the Repository interface
class GenericApiRepository<T> implements Repository<T> {
    constructor(private baseUrl: string) {}

    async getById(id: string): Promise<ApiResponse<T>> {
        return await ApiCall<T>(`${this.baseUrl}/${id}`);
    }

    async getAll(): Promise<ApiResponse<T[]>> {
        return await ApiCall<T[]>(this.baseUrl);
    }

    async create(item: T): Promise<ApiResponse<void>> {
        return await ApiCall<void>(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    async update(id: string, item: Partial<T>): Promise<ApiResponse<void>> {
        return await ApiCall<void>(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' },
        });
    }

    async delete(id: string): Promise<ApiResponse<void>> {
        return await ApiCall<void>(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
        });
    }
}

export const apiResponse = () => {
    console.log("API Response");
    const todoRepository = new GenericApiRepository<Todo>('https://jsonplaceholder.typicode.com/todos');
    
    // Get all todos
    todoRepository.getAll().then((response) => {
        if (response.success) {
            console.log(response.data);
        } else {
            console.log(response.error);
        }
    });

    // Get a todo by id
    todoRepository.getById('1').then((response) => {
        if (response.success) {
            console.log(response.data);
        } else {
            console.log(response.error);
        }
    });
}