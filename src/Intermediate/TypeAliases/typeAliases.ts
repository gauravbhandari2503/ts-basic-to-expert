// Definition: Type aliases give a custom name to a type.
// Task: Create a type alias Point for an object with x and y properties as numbers.

export const typeAliases = (): void => {
    console.log("Type Aliases");
    type Point = {
        x: number;
        y: number;
    }

    let point: Point = {
        x: 10,
        y: 20
    };
    console.log(point);
};