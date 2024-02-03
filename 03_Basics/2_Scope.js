let b = 28
if(true)
{
    let a = 34
    let b = 89
    console.log("INNER",b)
}
console.log("OUTER",b)

//------------------------------------------------------

function netflix(val1,val2)
{
    let movie = val1
    let x = val2
    function seris(x)
    {
        let drama = x
        console.log(drama)
    }
    seris("Dark")
    console.log(movie)
}
netflix("The Railway Man","Dark")// seris() dose not call from the outer part of the netflix() function block

//-------------------------------------------------------------------------------------------------------------------------------

console.log(addone(5))
function addone(value)
{
    return value+1
}

console.log(addTwo(7))
let addtwo = function(value)// Is not working
{
    return value+2
}