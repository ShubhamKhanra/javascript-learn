const police = ["Inspectar","OC","Constable","DM"]
if(police)
    console.log("Thay have police station")
else
    console.log("Thay have not police station")

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


//Array is Empty or Not Checking
if (police.length === 0) 
    console.log("Array is empty")
else
    console.log("Not an Empty Array")


//Object is Empty or Not Checking
const obj = {}
if(Object.keys(obj).length === 0)
    console.log("Object Empty")


// Nullish Coalescing Operator (??): null undefined
val1 = null ?? 83
val2 = undefined ?? 83
val3 = 74 ?? 83 ?? 30
console.log(val1, val2, val3)// output 83