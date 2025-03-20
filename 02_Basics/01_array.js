// js arrays are resizable means we can add elemnts after declare
// not associative
// js array-copy operations create shallow copies ,,
// properties share the same reference means changes will effect on original array
// deep copies :- properties not share the same reference

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakitman" , "naagraj"]

const myArr2 = new Array(1, 2, 3, 4,)
console.log(myArr[0]);
console.log(myArr);

// Array methods
myArr.push(6)
myArr.push(7)
console.log(myArr);

// myArr.pop()  removes last value
myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(5))
console.log(myArr.indexOf(9))

const newArr = myArr.join()
console.log(newArr);










