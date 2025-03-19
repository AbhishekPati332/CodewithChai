// Types of data type
// 1. Primitive Data Type
// 7 Types : String , Number , Boolean , Null , undefined, Symbol, BigInt

// 2. Reference (Non primitive)
// Array , Objects , Functions

// JavaScript is a dynamic language and not static, 
// which means that variables can hold values of 
// different types during runtime.
// or
// This means that variable types are determined at runtime, 
// and you do not need to explicitly
//  declare the type of a variable before using it
// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare 
// the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name: "abhishek",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// Non primitive type ka return object hi aata hai.
// function ka return object function

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object