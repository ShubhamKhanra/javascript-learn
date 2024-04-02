let name = "Shubham"
let repoCount = 97
console.log(`${name} can score ${repoCount}`)

let strName = new String("Debasmita")// another way to initialization of string
console.log(strName.__proto__);
console.log(strName.length)
console.log(strName[3])
console.log(strName.__proto__);
console.log(strName.charAt(2));
console.log(strName.indexOf('t'));

const newString = strName.substring(0, 4)
console.log(newString);//  Output : Deba

const anotherString = strName.slice(-8, 4)
console.log(anotherString);//Output : ba

const newStringOne = "   shubham    "
console.log(newStringOne);
console.log(newStringOne.trim());//"shubham"

const url = "https://shubham.com/shubham%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))// false

console.log(url.split('/'));// Output : [ 'https:', '', 'shubham.com', 'shubham%20khanra' ]
