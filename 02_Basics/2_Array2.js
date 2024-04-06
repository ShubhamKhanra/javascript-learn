let veg = ["Panir","Potato","Apple","Bread"]
let nonveg =["chicken","motton","fish","pawrn"]
veg.push(nonveg)// nonveg array push as an element of veg array -->["Panir","Potato","Apple","Bread",["chicken","motton","fish","pawrn"]]
console.log(veg)

console.log("\t")
let mix = veg.concat(nonveg)// all elements of two arrays merged up in between a single array -->["Panir","Potato","Apple","Bread","chicken","motton","fish","pawrn"]
console.log(mix)

let a = [...nonveg,...veg]//... is spread operator. Output: -->["Panir","Potato","Apple","Bread","chicken","motton","fish","pawrn"]
console.log(a)


let complexArr = [3,9,[3,0,2],8,4,[23,96,[28,64],67]]
let simpleArr = complexArr.flat(1)
console.log(simpleArr)// Output : [3,9,3,0,2,8,4,23,96,[28,64],67]
let simpleArr1 = complexArr.flat(infinite)
console.log(simpleArr1)// Output : [3,9,3,0,2,8,4,23,96,28,64,67]

console.log(Array.isArray(5819376))//true
console.log(Array.from("5819376"))//[5,8,1,9,3,7,6]
console.log(Array.from({digit : "5819376"}))//Can't covert object to an array.

const nam1 = "moly"
const nam2 = "doly"
const nam3 = "poly"
console.log(Array.of(nam1,nam2,nam3))//["moly","doly","poly"]
