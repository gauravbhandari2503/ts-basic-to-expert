// Definition: You can define multiple signatures for a function with different parameter types.
// Task: Overload a function getLength to accept either a string or an array.

export const functionOverloading = (): void => {
    console.log("Function Overloading");
    function getLength(x: string): number;
    function getLength(x: any[]): number;
    function getLength(x: any): number {
        return x.length;
    }
    console.log(getLength("Hello, world!"));
    console.log(getLength([1, 2, 3]));
}