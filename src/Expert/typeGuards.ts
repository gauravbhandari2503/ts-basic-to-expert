// Definition: Type guards allow narrowing the type of a variable at runtime.
// Task: Write a type guard that checks if a value is a string.


export const typeGuards = () => {
    function isString(value: unknown): value is string {
        return typeof value === "string";
    }

    type Person = {
        name: string;
        age: number;
    };

    const person = {
        name: "Gaurav",
        age: 24
    };

    function isPerson(value: unknown): value is Person {
        if (typeof value !== "object" || value === null) {
            return false;
        }

        const requiredKeys: (keyof Person)[] = ["name", "age"];
        return requiredKeys.every(key => key in value);
    }

    if (isPerson(person)) {
        console.log(person, "is a person");
    } else {
        console.log(person, "is not a person");
    }

    const name = "Gaurav";
    if (isString(name)) {
        console.log(name, "is a string");
    } else {
        console.log(name, "is not a string");
    }
}