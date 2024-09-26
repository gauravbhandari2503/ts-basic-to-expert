// Definition: Conditional types allow defining types based on conditions.
// Task: Create a type IsString<T> that resolves to true if T is a string, else false.

export const conditionalTypes = (): void => {
    console.log("Conditional Types");
    type IsString<T> = T extends string ? true : false;

    function checkType<T>(value: T): IsString<T> {
        return (typeof value === 'string') as IsString<T>;
    }

    const isString = checkType("Hello");
    console.log(isString);
    const isNotAString = checkType({});
    console.log(isNotAString);
    
}