// Definition: Union types allow a variable to have more than one type.
// Task: Create a variable status that can be either string or number.

export const unionTypes = (): void => {
    console.log("Union Types");
    let status: string | number = "Active";
    console.log(status, 'string');
    status = 10;
    console.log(status, 'number');
};