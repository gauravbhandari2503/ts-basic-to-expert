// Definition: Mapped types create new types by transforming each property in a type.
// Task: Create a mapped type that makes all properties of a Person optional.

export const mappedTypes = function mappedTypes(): void {
    console.log("Mapped Types");
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
    console.log(person);

    // mapped types

    type OptionalPerson = {
        [P in keyof Person]?: Person[P];
    }

    const person2: OptionalPerson = {};
    console.log(person2);
}