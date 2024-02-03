let veg = ["Panir","Potato","Apple","Bread"]
let nonveg =["chicken","motton","fish","pawrn"]
veg.push(nonveg)// nonveg array push as an element of veg array 
console.log(veg)

console.log("\t")
let mix = veg.concat(nonveg)// all elements of two array marged up in between a single array
console.log(mix)

let a = [...nonveg,...veg]//... is spread oparator
console.log(a)


let complexArr = [3,9,[3,0,2],8,4,[23,96,[28,64],67]]
let simpleArr = complexArr.flat(1)
console.log(simpleArr)

console.log(Array.isArray(5819376))
console.log(Array.from("5819376"))
console.log(Array.from({digit : "5819376"}))

const nam1 = "moly"
const nam2 = "doly"
const nam3 = "poly"
console.log(Array.of(nam1,nam2,nam3))