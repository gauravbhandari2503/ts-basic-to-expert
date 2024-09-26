// Definition: never represents a value that will never occur (like a function that always throws an error).
// Task: Write a function fail that throws an error and returns never.

export const neverType = () => {
    function fail(): never {
        throw new Error("This is an error");
    }

    fail();
}