const name = "abhishek"
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// ``backticks used to write complete string 
// ${} used to inject variables in it
// string interpolation  place holders are created

// String ke methods niche

const gameName = new String('abhishek-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20patidar"
console.log(url.trim())
console.log(url.replace('20', '-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'));







