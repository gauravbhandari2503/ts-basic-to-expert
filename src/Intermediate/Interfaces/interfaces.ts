// Definition: Interfaces define the structure of an object and are often used in OOP.
// Task: Create an interface Person with name as a string and age as a number.

export const interfaces = (): void => {
    console.log("Interfaces");
    interface Person {
        name: string;
        age: number;
    }

    let person: Person = {
        name: "Gaurav",
        age: 25
    };
    console.log(person);

    interface Car {
        make: string;
        model: string;
        year?: number;
    }

    let car: Car = {
        make: "Toyota",
        model: "Camry",
    };
    console.log(car);
};