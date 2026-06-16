//scope->visibility of accessibility of varibles
//1. Global varible
 let x=10;
 const y = 20;
 var z  = 30;
// //blocl scppe {}, if,  let and const is a block scope and var is not a block scope
 if (true){
    const scope = () =>{
        let x=10;
        const y = 20;
        //var z  = 30;

     };
     scope();
     console.log(z);
 }

//1. var-> function vitra vayo van function scope if not it is a global scope
//it is redeclarable in same scope
// it ignore the block statement such as if statement and for loops.
//it is initialized as undefined
//var is function-scoped. 
// It ignores code blocks like if statements or for loops. 
// If declared inside a function, it belongs to that function. 
// If declared outside, it becomes global.

// function exampleFunction() {
//     if (true) {
//         var leaked = "I am visible outside this block!";
//     }
//     console.log(leaked); // Works: Logs "I am visible outside this block!"
// }


// in interview it is a important question
// 2. let and const -> not declare in the same scope
// unitialized
//let and const are block-scoped. 
// They only exist inside the immediate curly braces {} where they are defined.


//  function Block() {
//      if (true) {
//          let securedLet = "Hidden!";
//          const securedConst = "Also Hidden!";
//      }
//      console.log(securedLet);   // Throws ReferenceError
//      console.log(securedConst); // Throws ReferenceError
//  }

//1. lexical scope
//JavaScript uses Lexical Scoping, which means the placement of functions in the source code determines their scope. 
// An inner function will always have access to the variables of its outer (parent) function
//scope chain la garda payexa child 

//  function outerFunction() {
//      let outerVar = "I am outside";

//      function innerFunction() {
//          // Can access parent variable due to lexical scoping
//          //console.log(outerVar); 
//          console.log("I am sapana Gurung");// modify pani garna milxa
//      }

//      innerFunction();
//  }

//  outerFunction(); // Outputs: I am outside

//scope chain
//The scope chain in JavaScript is the hierarchical mechanism the engine uses 
// to find the value of a variable by searching from the innermost current scope outward to the global scope.
//afno scope vatana vana ek step mathi janxa last ma root ma pugxa root vanako global scope tha pani vatana vana error auxa.

// 1. Global Scope
// const globalUser = "sapana"; 

// function outerFunction() {
//     // 2. Outer Function Scope
//     const outerSkill = "JavaScript"; 

//     function innerFunction() {
//         // 3. Inner Function Scope
//         const localStatus = "Learning"; 

//         // Looking up variables via the scope chain
//         console.log(localStatus); // Outputs: "Learning"
//         console.log(outerSkill);  // Outputs: "JavaScript"
//         console.log(globalUser);  // Outputs: "sapana"
//         //console.log(unknownVar);  // Throws: ReferenceError
//     }

//     innerFunction();
// }

// outerFunction();

//declare, global, hoisting-let, var, const
