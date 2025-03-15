let score = "33abc"
// let score = 33,null, undefine

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)      //string se number mai convert kar rhe hai
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "abhishek"
let booleanIsLoggedIn = Boolean(isLoggedIn)     //1 ko boolean mai convert kar rhe
console.log(booleanIsLoggedIn);

// 1 => true;  0 => false;   "abhishek" => true;

let someNumber = 33
let StringsomeNumber = String(someNumber)       //33 ko string mai convert kiya
console.log(StringsomeNumber)
console.log(typeof StringsomeNumber);