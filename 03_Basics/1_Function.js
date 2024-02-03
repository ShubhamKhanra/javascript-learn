function addTwo(a,b)
{
    return a + b
}
const Res = addTwo(75,62)
console.log(`${Res} is the Result`)


//--------------------------------------------------------------------------------------


function cricketBall(ballclr)
{
    if(!ballclr)//"ballclr == undefined" logic same as "!ballclr"
    {
       return console.log("Please! Entar a Valied Ball colour")
    }
    else if(ballclr == "Red" || ballclr == "White" || ballclr == "Pink")
    {
        return console.log("Game On")
    }
    else
        return console.log(`${ballclr} is the Invalid Colour of the ball`)
}

cricketBall(" ")


//-----------------------------------------------------------------------------------------------------

function cricketBall(ballclr = "Red")
{
    if(!ballclr)//"ballclr == undefined" logic same as "!ballclr"
    {
       return console.log("Please! Entar a Valied Ball colour")
    }
    else if(ballclr == "Red" || ballclr == "White" || ballclr == "Pink")
    {
        return console.log("Game On")
    }
    
}

console.log(cricketBall())

//Spread Oparetor (...) using to get the multiple parameter

 function manyScore(...score)
 {
    let result = 0;
    for(let i=0; i< score.length; i++)
    {
        result = score[i] + result 
    }
    return result
 }

 function manyScore(val1, val2, ...score)
 {
    return score
 }

 console.log(manyScore(23,78,39,194,54,67))

 //Object in Function

 let details = {
    country : "Jorjia",
    name : "Fedrik Alen",
    age : 28
 }
 function fatchObj(anyobject)
 {
    return console.log(`${anyobject.name} is the resident of ${anyobject.country} and he is a ${anyobject.age} year old guy`)
 }
 fatchObj(
    {
        country : "Austria",
        name : "David Copper",
        age : 37
    }, details)

    //Array as a Perameter
    arr = [97,65,29,25,83]
    function getSecond(arr)
    {
        return arr[2]
    }
    console.log(getSecond(arr))