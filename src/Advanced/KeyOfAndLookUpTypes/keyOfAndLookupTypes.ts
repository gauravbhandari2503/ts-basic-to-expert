// Definition: keyof creates a union of all keys of a type, and lookup types access a property by its key.
// Task: Write a function getValue that takes an object and a key, and returns the value of that key.

export const keyOfAndLookupTypes = (): void => {
    console.log("KeyOf and Lookup Types");
    type Person = {
        name: string;
        age: number;
        email: string;
    }

    const person: Person = {
        name: "Gaurav",
        age: 25,
        email: "gauravbhandari@gmail.com"
    };

    // using type in the function, which is not optimal
    // function getValue(obj: Person, key: keyof Person) : any {
    //     return obj[key];
    // }

    // console.log(getValue(person, "name"));

    // using generic type, which is also not optimal
    // function getValue<T>(obj: T, key: keyof T): T[typeof key] {
    //     return obj[key];
    // }
    // console.log(getValue(person, "name"));

    // using lookup type, which is optimal
    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    console.log(getValue(person, "name"));
}