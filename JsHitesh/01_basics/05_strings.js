const name="hitesh"
const repoCount=50

// console.log(name+repoCount+"Value");//outdated syntax
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interpolation

const gameName=new String('Hitesh-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //character at the position

// console.log(gameName.indexOf('t'));//position of the character

// console.log(gameName.toUpperCase());
const newString=gameName.substring(0,4)//cannot have negative indices
console.log(newString);
const anotherString=gameName.slice(-8,4)// can perform on negative indices
console.log(anotherString);
const newString1="   hitesh    "
console.log(newString1);
newString1.trim()
console.log(newString1);
console.log(newString1.trim());
// trimstart() and trimend() and it works only on whitespace character only not on line terminator.

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));//convert it to array


// node 01_basics/05_strings.js