//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
const a = 20

let idA = Symbol("8934")
let idB = Symbol("8934")
console.log(idA === idB)

//non-primitive or refarance type
// 3 types : array, obj, Function 

arr =["df","wv","qm"]
let myObj ={        //Object in javascript
    name: "Ritu",
    age: 23,
    course: "Nursing"
}

let myFun = function(){
    console.log("India")
}
console.log(myFun)
console.log(typeof myFun)//type will be the -> function
console.log(typeof arr)
console.log(typeof a)


//There are two types of memory - Stack and Heap. Primitive datatypes are stored in Stack Memory and Non Primitive datatypes are stored in Heap memory.
//Stack Memory always provides a copy of the variable and Heap memory provides the reference. 

let tiger = "wild"
let cat = tiger
cat = "Domestic"
console.log(cat)
console.log(tiger)
//The value of the cat does not affect the value of the tiger because those variables are stored in the Stack memory.


let obj = {
    animal : "Tiger",
    colour : "Yellow"
}
let obj1 = obj
obj1.colour = "Black"
console.log(obj.colour)// output will be Black because if I change the value of the variable once then it will affect all the values.
