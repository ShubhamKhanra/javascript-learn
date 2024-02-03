//object litarels
let sym = Symbol("Hello")
let obj = {
                Name : "Shubham",
                Emp_ID : 10714264,
                Email : "Shubham.10714264@ltimindtree.com",
                Attendenc : ["Tuesday", "Wednesday"],
                Base_Loc : "Airoli",
                [sym] : "Software Engineer"
           }

console.log(obj["Base_Loc"],"\t")
console.log(obj.Attendenc[1])
obj.Emp_ID = 10714266
console.log(obj)
Object.freeze(obj["Email"])//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
obj["Email"] = "Khanra.10714264@ltimindtree.com"//we can't change email id
console.log(obj[sym],"\t")
obj.fun1 = function(){
     console.log("Hello")
}
obj.fun2 = function(){
     console.log(`My name is ${this.name} and my age is 23`)
}
console.log(obj.fun1) //just getting the refarance of the function
console.log(obj.fun1())
console.log(obj.fun2)
