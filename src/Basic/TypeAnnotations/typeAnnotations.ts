// Definition: TypeScript allows you to define types for variables, ensuring type safety.
// Task: Create a variable username of type string and age of type number.

/**
 * Demonstrates type annotations in TypeScript.
 */
export const typeAnnotations = (): void => {
    console.log("Type Annotations");
    let username: string = "Gaurav";
    let age: number = 25;
    console.log(username);
    console.log(age);
};

// Definition: You can add types to function parameters and return values to make functions safer.
// Task: Write a function greet that accepts a name: string and returns a string.

export const greet = (name: string): string => {
    return `Hello, ${name}!`;
}