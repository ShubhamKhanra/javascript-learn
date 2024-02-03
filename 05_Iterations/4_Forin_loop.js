let obj = {
    kitten : "Cat",
    puppy : "Dog",
    cub : "Lion"
}
for(let x in obj)
{
    console.log(obj[x])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) // for-in doesn't applicable for map
{
     console.log(key);
}
