const name = "anshu"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('an-shuc-c')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherstring = gameName.slice(0,4)
console.log(anotherstring);

const newstringOne = "   anshu   "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://anshudot.com/anshu%20verma"
console.log(url.replace('%20', '-'))
console.log(url.includes('verma'))
console.log(gameName.split(' '))

