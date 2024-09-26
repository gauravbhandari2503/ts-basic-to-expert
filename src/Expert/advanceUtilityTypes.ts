// Definition: These types allow complex manipulation of existing types.
// Task: Use Omit to create a type from Person that excludes the age property

// Pick - The Pick utility type selects a set of properties from a given type.
// Omit - The Omit utility type removes a set of properties from a given type.
// Extract - The Extract utility type constructs a type by extracting from a union of types.
// Exlcude -The Exclude utility type constructs a type by excluding from a union of types.

// Partial - The Partial utility type constructs a type by picking properties from a given type. It makes them optional.

export const advanceUtilityTypes = () => {
    type Person = {
        name: string;
        age: number;
        address: {
            street: string;
            city: string;
            country: string;
        };
        phone: string;
    };
    
    // Pick 
    // type PickedPerson = Pick<Person, "name"| "address">
    // const pickedPerson: PickedPerson = {
    //     name: "Gaurav",
    // };
    // In the above example, if we only need to enter the name and make the address Optional, then it will give us the error, how to resolve this ?

    type PickedPerson =  Partial<Pick<Person, "name" | "address">>;
    const pickedPerson: PickedPerson = {
        name: "gaurav"
    }
    console.log(pickedPerson, 'Pick');


    // Omit
    type OmittedPerson = Partial<Omit<Person, "age" | "phone">>;
    const omittedPerson: OmittedPerson = {
        name: "gaurav"
    }
    console.log(omittedPerson, 'Omit');

    // Extract
    type Status = "active" | "inactive" | "pending" | "deleted";

    type ExtractedStatus = Extract<Status, "active" | "inactive">;
    const extractedStatus: ExtractedStatus = "active";
    console.log(extractedStatus, 'Extract');

    // Exclude
    type ExcludedStatus = Exclude<Status, "active" | "inactive">;
    const excludedStatus: ExcludedStatus = "deleted";
    console.log(excludedStatus, 'Exclude');

};