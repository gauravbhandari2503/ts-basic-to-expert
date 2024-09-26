// Definition: You can specify the type of elements in an array.
// Task: Create an array scores that only accepts numbers.

export const arrayWithTypes = (): void => {
    console.log("Array With Types");
    let scores: number[] = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    console.log(scores);
}