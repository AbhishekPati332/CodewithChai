// Types of Memory
// Stack and Heap
// stack used in all primitive type
// heap used in all non primitive type

// jab bhi stack memory use hoti hai apne jo variable use kiya hai uska copy milta hai
// jab bhi memory heap ke  ander define hoti hai toh vha se reference milta hai vo original value mai change hoga

let myYoutubename = "Abhishek.P."
let anothername = "Patidar.S."
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "abhishek@google.com"
console.log(userOne.email);

// stack ke ander uska copy hi milta hai
// heap ke ander refernce hi milta hai
// means jo bhi changes updates vo original value ke ander hi krte hai