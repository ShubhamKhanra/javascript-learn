let myTime = new Date();
console.log(myTime.toISOString());
console.log(myTime.toDateString());
console.log(myTime.toISOString());
console.log(myTime.toLocaleString());
console.log(myTime.toJSON());
console.log(typeof myTime);// Output : Object
console.log(myTime);

console.log("\t");
let createDate = new Date("01-05-1999");
let timeStamp = Date.now()// melisecond value from 1970
console.log(Math.floor(createDate.getTime()/1000))
console.log(Math.floor(timeStamp/1000))

console.log("\t");
console.log(myTime.toLocaleString('default', {
    weekday: "long",
}))
