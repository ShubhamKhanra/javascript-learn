// Singleton object
let obj = new Object()
console.log(obj)
obj.id = "Ritu@9775"
obj.nam = "joyita"
obj.isLogedin = false
obj.realname = {
                fullname:{
                            firstname : 'Shuham',
                            lastname : 'Khanra'
                        }
}
console.log(obj)
const obj1 =  {
                id1 : "Pupu@6296",
                nam1 : "Subham",
                isLogedin1 : true,
                fullname:{
                    firstname : 'Debasmita',
                    lastname : 'jana'
                }
            }
let obj2 = Object.assign({}, obj, obj1)//
let obj3 = {...obj, ...obj1}// multiple object joining using split(...) function
console.log(obj2)
console.log(obj3)

let userLogin = [
                    {
                        id : 874,
                        name : "rohan"
                    },
                    {
                        id : 855,
                        name : "roshni"
                    },
                    {
                        id : 831,
                        name : "rohit"
                    },
                    {
                        id : 893,
                        name : "rahim"
                    }
                ]
console.log(userLogin[2])

console.log(Object.keys(obj2))// all keys are displayed
console.log(Object.values(obj2))// all values are displayed
console.log(Object.entries(obj2))// all keys and values both are displayed
console.log(obj2.hasOwnProperty("wife"))

//Object destructureing 
console.log("\t\t")
const {id1 : Info} = obj1
console.log(Info)

/*JSON Formet
{
    "Goods": "Salt",
    "Price": "18",
}*/
