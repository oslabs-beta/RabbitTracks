// need this file to provide Typescript type information about an API that's written in JavaScript.
// needed to properly import jpg into Error Page container

declare module "*.jpg";

/* 
When a TypeScript script gets compiled there is an option to generate a declaration file (with the extension .d.ts) 
that functions as an interface to the components in the compiled JavaScript. In the process the compiler strips away all 
function and method bodies and preserves only the signatures of the types that are exported. The resulting declaration 
file can then be used to describe the exported virtual TypeScript types of a JavaScript library or module when a third-party 
developer consumes it from TypeScript.
*/