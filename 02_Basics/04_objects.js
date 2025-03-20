// Object singleton
const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object ke ander object

const regularUser = {
    email: "abhishek@google.com",
    fullname: {
        userfullname: {
            firstname: "abhishek",
            lastname: "patidar",
        }
    }
}

console.log(regularUser.fullname.userfullname);

//combining of object

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

const obj3 = {obj1, obj2}   //obj ke ander objects
// console.log(obj3)

const obj4 = Object.assign(obj1, obj2)    //object combin
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2)   //object combin
// console.log(obj5);

const obj6 = {...obj1, ...obj2}        //best way to combin object //spread operator
console.log(obj6);


const users =[
    {
        id: 1,
        email: "abhishek@gmail.com"
    },
]

// users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));