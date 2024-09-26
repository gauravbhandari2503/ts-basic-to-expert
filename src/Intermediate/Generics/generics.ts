// Definition: Generics allow functions or classes to work with any type.
// Task: Write a generic function identity that returns the value it receives.

export const generics = (): void => {
    console.log("Generics");
    function identity<T>(value: T): T {
        return value;
    }
    console.log(identity([1, 3, 4]));
}