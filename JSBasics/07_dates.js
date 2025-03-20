//Dates
// dates ka type object hi hoga
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2023 , 0 , 23 , 5 ,3)
console.log(myCreateDate.toLocaleString());

myCreateDate = new Date("2023-02-14")
console.log(myCreateDate.toLocaleString());

// timestamp used in quizes , polls
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// newDate.toLocalString('default' , {
//     weekday: "long",
// })



