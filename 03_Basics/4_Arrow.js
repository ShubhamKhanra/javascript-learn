let leu = (name,job) => 
{
    let a = name
    let b = job
    return `Name of my leu is ${a} and she is a ${b}`
}
 console.log(leu("Debasmita Jana", "Nurse"))


 const thisPropertyextra = () =>
{
    let user = "Shubham"
    console.log(this)
}
thisPropertyextra()

//-----------------------------------------------------------

let addTwo = (num1, num2) => (num1 + num2)//Implicite return
//When our function has only one line for return then we can rap it up in a single brace () without using "return" keyword
//Note : When we start our funtion body with curly brace {} then we will use return keyword otherwise we will do implicit return
console.log(addTwo(3,89))

let obj = () => ({name : "Ritu",
               NikName : "Leu",
               Profetion : "Nurse",
                Age : 23 })
console.log(obj())