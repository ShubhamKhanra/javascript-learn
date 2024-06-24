let obj = {
    colage : "CIEM",
    Departmant : "CSE",
    Passout : 2022,
    Summary : function(name)//we can't provide elements of the object
    {
        return console.log(`I am ${name}, a ex-student of ${this.colage} and my department was ${this.Departmant}`)
    }
}
console.log(obj)
console.log(obj.Summary("Shubham Khanra"))
console.log("\t")

console.log(this)// output - {}. because, In case of vs code, they have empty object as global object as they can't afford to implement browser or nodejs global object apis and properties.
                //if we run it in the broweser console then we will get the output as Window object.

function thisProperty()
{
    console.log(this)
}
thisProperty()//there will be verious value and properties will be shown

function thisPropertyextra()
{
    let user = "Shubham"
    console.log(this.user)
}
thisPropertyextra()//The output will come "undefined" because will can't use this 
