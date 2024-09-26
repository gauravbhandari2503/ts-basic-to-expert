// Without factory
function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

// With factory
function LoggerFactory(logString: string) {
    return function (constructor: Function) {
        console.log("Logging...");
        console.log(logString);
        console.log(constructor);
    }
}

// Property Decorator 
function LoggerProperty(target: any, propertyKey: string | symbol) {
    console.log("Property Decorator");
    console.log(target, propertyKey);
}

// Accessor Decorator
function LoggerAccessor(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator");
    console.log(target, propertyKey, descriptor);
}

// Method Decorator
function LoggerMethod(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target, propertyKey, descriptor);
}

// Parameter Decorator
function LoggerParameter(target: any, propertyKey: string | symbol, parameterIndex: number) {
    console.log("Parameter Decorator");
    console.log(target, propertyKey, parameterIndex);
}

@Logger
@LoggerFactory('Logging Person')
class Person {
    @LoggerProperty
    name:string = 'Max';
    private _price: number;

    constructor(name: string, price: number) {
        console.log("Person Object");
        this.name = name;
        this._price = price;
    }

    set price(price: number) {
        if (price < 0) {
            throw new Error('Price cannot be negative');
        }
        this._price = price;
    }

    @LoggerMethod
    getPriceWithTax(@LoggerParameter tax: number): number {
        return this._price * (1 + tax);
    }
}

export const decorators = () => {
    console.log("Decorators");
    const person = new Person('Garry', 100);
    console.log(person);
}



// Key things to note 
// 1) When we have multiple decorators, then Decorators exectue from bottom to top
// 2) Class decorators have one argument, which is the class itself
// 2) Property decorators have two arguments, which are prototype of the object and the property
// 3) Accessor Decorator have three arguments, which are proptype of the object, property and property descriptor
// 4) Method decorators have three arguments, which are the protype, the property and the descriptor of the method
// 5) Parameter Decorators have three arguments, which are the protoype, the method name, and the parameter index