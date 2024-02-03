const arr = ["earth",54,83.999,'k',true]
//const arr = [1,8,5,13]
for(let i of arr)
{
    const index = arr.indexOf(i)
    console.log(`${index} no position value is - ${i}`)
}