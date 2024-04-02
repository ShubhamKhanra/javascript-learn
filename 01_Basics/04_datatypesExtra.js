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
