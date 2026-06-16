//Hoisting
// console.log(x); //declared undefined vayara host hunxa
// //declare garnu vanda agade naii call garxa top ma move garxa initialize gardaiina
//initialize hoina
// let x= 10;
// console.log(x);

// //function declaration
// hoist();
// function hoist(){
//     console.log (hoist);

// }
//hoist();

//function expression
// fn(); //undefined
// var fn = function () {     //function initialize
//     console.log("var function");
// }
//fn();
// console.log(y); //temporal dead zone(TDZ)
// let y = 20;

// let z= 20; 

// console.log(z);
// const z = 40;
//let, const hoist hunxa tara tdz vaya ra
//var as a undefined vaya ra initialize hunxa



//javascript is what type of language?

//2 phase ma kam garxa
//1. memory creation phase-scam garxa focus on memory allocation 
//memory allocation 
//{x: undefine, hoist(){}}
//script : { y: <not available>}

//2. execution phase -> 
//{x: 34, hoist(){}, z=20  }
// memory initialize garxa, code execute garxa
 
// console.log(x);
// var x = 24;
// console.log(x);

// // //function declaration
//  hoist();
//  function hoist(){
//      console.log (hoist);

//  }
// hoist();

// let z= 20;

//implement with code

//todo: callstack
//The Call Stack is a real-time management mechanism that tracks which context is currently executing
//Step 1: Program StartsThe browser or runtime loads the file.The Global Execution Context (GEC) is created and pushed onto the Call Stack.
// Memory Phase: globalVar, ans1, and ans2 are allocated memory and set to undefined. 
// The function square stores its complete body.Stack State: [ GEC ]
// Step 2: Line-by-Line Execution (Global)globalVar is assigned the value 10.
// The code skips the square definition block and hits var ans1 = square(globalVar);.
// Step 3: Invoking square(globalVar)The square function is called with the argument 10.
// A new Function Execution Context (FEC 1) is created specifically for this call and pushed onto the stack.
// Memory Phase (FEC 1): Parameters and local variables (num, result) are set up in memory as undefined.
// Execution Phase (FEC 1): num becomes 10. result calculates 10 * 10 = 100. 
// The function encounters return result;.Stack State: [ FEC 1 (square), GEC ]
// Step 4: Leaving square(globalVar)The value 100 is returned and assigned to global variable ans1.
// FEC 1 is completed and popped off the Call Stack.Stack State: [ GEC ]
// Step 5: Invoking square(5)The code hits var ans2 = square(5);.
// A brand new Function Execution Context (FEC 2) is created and pushed to the top of the stack.Execution Phase (FEC 2): num is 5, result becomes 25. 
// It encounters the return statement.Stack State: [ FEC 2 (square), GEC ]
// Step 6: CompletionThe value 25 is returned to ans2.FEC 2 is popped off the stack.The global script finishes running, and finally, the GEC is popped off. The stack becomes empty.


// var globalVar = 10;
// const ans1 = square(globalVar);
// const ans2 = square(5);

// function square(num) {
//     //var result = num * num;
//    // return result;
//     return num * num;
    
// }

// //let ans1 = square(globalVar);
// //let ans2 = square(5);

// console.log(ans1); // 100
// console.log(ans2); // 25


//execution context


// An Execution Context is the environment in which JavaScript code is evaluated and executed. It contains information about variables, functions, and the value of this.

// Types of Execution Context
// Global Execution Context (GEC)
// Created when a JavaScript program starts.
// Only one global execution context exists.
// this refers to the global object (window in browsers).
// Function Execution Context (FEC)
// Created whenever a function is invoked.
// Each function call gets its own execution context.
// Eval Execution Context
// Created when code is executed inside eval().
// Rarely used.


// Phases of Execution Context
// 1. Memory Creation Phase (Creation Phase)

// JavaScript scans the code and:

// Allocates memory for variables.
// Stores function definitions.
// Initializes variables with undefined.

// 2. Execution Phase
// Assigns values to variables.
// Executes code line by line.
// Invokes functions when called.


// Example

// var x = 10;

// function square(num) {
//     var result = num * num;
//     return result;
// }

// var ans1 = square(x);
// var ans2 = square(5);

// console.log(ans1);
// console.log(ans2);


// Step 1: Global Execution Context Creation

// Memory Phase:

// Variable/Function	Memory
// x	                undefined
// square	            Function Definition
// ans1                	undefined
// ans2	                undefined

// Execution Phase:

// x = 10;
// ans1 = square(10);
// ans2 = square(5);


// Step 2: Function Execution Context for square(10)

// Memory Phase:

// Variable	     Memory
// num	          10
// result	      undefined

// Execution Phase:

// result = 10 * 10; // 100
// return 100;

// The function context is removed from the call stack after returning.


// Step 3: Function Execution Context for square(5)

// Memory Phase:

// Variable  	Memory
// num	         5
// result	   undefined

// Execution Phase:

// result = 5 * 5; // 25
// return 25;

// The function context is removed after execution.


const a = () => {
    console.log("a");
const b = () => {
    console.log("b");
const c = () => {
    console.log("c");

};
c();
};
b();
};
a();


    //kunai pani function ko scope complete vayo vana to empty hunxa-function execute vayo vana destroy hunxa
    //reference xaina vana


    //closure
    //inner(child) scope la outre(parent) scope ko access garna pauxa

    










