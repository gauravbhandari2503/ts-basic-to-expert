import { typeAnnotations } from "./Basic/TypeAnnotations/typeAnnotations";
import { unionTypes } from "./Basic/UnionTypes/unionTypes";
import { arrayWithTypes } from "./Basic/ArrayWithTypes/arrayWithTypes";
import { typeAliases } from "./Intermediate/TypeAliases/typeAliases";
import { interfaces } from "./Intermediate/Interfaces/interfaces";
import { generics } from "./Intermediate/Generics/generics";
import { functionOverloading } from "./Advanced/FunctionOverloading/functionOverloading";
import { mappedTypes } from "./Advanced/MappedTypes/mappedTypes";
import { conditionalTypes } from "./Advanced/ConditionalTypes/conditionalTypes";
import { keyOfAndLookupTypes } from "./Advanced/KeyOfAndLookUpTypes/keyOfAndLookupTypes";
import { advanceUtilityTypes } from "./Expert/advanceUtilityTypes";
import { neverType } from "./Expert/neverType";
import { typeGuards } from "./Expert/typeGuards";
import { decorators } from "./Expert/decorators";
import { apiResponse } from "./AdvanceUsage/apiResponse";

/**
 * Runs all TypeScript example functions.
 */
const runExamples = () => {
  // console.log("Running all TypeScript examples...\n");
  // typeAnnotations();
  // console.log(greet("Gaurav"));
  // unionTypes();
  // arrayWithTypes();
  // typeAliases();
  // interfaces();
  // generics();
  // functionOverloading();
  // mappedTypes();
  // conditionalTypes();
  // keyOfAndLookupTypes();
  // advanceUtilityTypes();
  // neverType();
  // typeGuards();
  decorators();
  apiResponse();
};

/**
 * This function returns a greeting to the user.
 *
 * @param name - The name of the user to greet
 * @returns A greeting string
 */
function greet(name: string): string {
  return `Hello ${name}`;
}

runExamples();