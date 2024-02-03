// Immediately Invoked Function Expression(IIFE)
//IIFE use to Avoid pollution from the global scope.
(function ciem(a,b){
    return console.log(`${b} will come today and ${a} came yesterday`)
})("Rupam","Snigdhajeet");

((a,b) => console.log(a + b))(5,9);// we can use arrow function

((...ball) => {
    //for(i=0;i<ball.length;i++)
    return console.log(`Pool has ${ball} balls`)
    
})("Black","White","Perpel","Green","Blue","Red","Yellow","Brown","Orange")