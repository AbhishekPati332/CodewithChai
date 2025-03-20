// object literals
const mySym = Symbol("key1")       //interview  //ek symbol lo usko object ki key mai add kro aur print krke dikha do

const JsUser = {     //object bnaya
    name: "abhishek",
    "full name": "Abhishek Patidar",
    [mySym]: "mykey1",                 //inter
    age: 21,
    location: "jalandhar",
    email: "abhishek@google.com",
    isLoggedIn: false,
    lastlogindays: ["monday", "saturday"]
}

// object ki value ko access kerna
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])              //inter

JsUser.email = "patidar@google.com"      //object ke ander vakue chng krna
console.log(JsUser.email)

// Object.freeze(JsUser)              //freez kr dena koi chng nhi hoga

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());

console.log(JsUser)


