//For-of loop
//For of loop used to iterate the array or string
const arr = ["earth",54,83.999,'k',true]
//const arr = [1,8,5,13]
for(let i of arr)//apply for array
{
    const index = arr.indexOf(i)
    console.log(`${index} no position value is - ${i}`)
}

let str = "LTIMindtree"
for(i of str)//apply for string
{
    console.log(i)
}

//map is a collection of elements where each element is stored as a Key, value pair
const map = new Map()
map.set('Virat','India')
map.set('Smith','Australia')
map.set('Root','England')
map.set('Amla','South Africa')
map.set('Babar','Pakistan')
for(let [player,country] of map)
{
    console.log(`${player} plays for ${country}`)
}
