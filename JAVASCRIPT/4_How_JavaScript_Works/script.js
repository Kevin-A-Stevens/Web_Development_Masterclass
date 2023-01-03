"use strict";
// About JavaScript
// High-level = manages resources
// Garbage-collected = removes all unused objects from memory
// Interpreted or just in time compiled = occurs inside JavaScript engine
// Multi-paradigm = mindset of structuring code (procedural, OOP, functional)
// Prototype-based object-oriented = everything is an object
// First-class functions = functions treated as variables
// Dynamic = No data type definitions
// Single-threaded = can only do one thing at a time
// None-blocking event loop = executes long running tasks in background

// When JavaScript code enters the engine
// 1. Parsing = reads the code parses into the Abstract Syntax Structure (AST)
// 2. Compilation = takes the AST and compiles into machine code, then execute
//
// How JavaScript is executed in the Call Stack
// 1. Creation of global execution context (not inside a function)
// 2. Execution of top level code (global execution)
// 3. Execution of functions and waiting for callbacks

// Cal Stack = where execution context gets stacked

// Scoping and the Scope chain
// Scoping controls how our programs variables are organized and accessed
// Lexical scoping = controlled by placement of functions and blocks in code
// Scope is the space or environment where a variable is declared
// Scope of a variable = region of our code where a variable can be accessed
// three types of scope = global, function, and block
// Global = for top level code ot outside of any function or block
// Function = variables only accessible inside that function
// Block = variables between {} like an if or loop. Accessible inside block
// only let and const variables are restricted in that block
// functions are also block scoped in strict mode

// Hoisting = makes variables useable in code before they are declared
// Code is scanned for variable declaration before being executed

// This keyword = automatically created for every execution (every function)
// Depends on how the function is called
// Assigned only when the function is actually called
// Four ways a function can be called
// 1. As a method = this = <Object that is calling the method>
// 2. Simple function call = this = undefined
// 3. Arrow functions = this = <this of parent function (lexical this)>
// 4. Event listener = this = <DOM element handler function is attached to>

// Regular functions vs arrow functions
