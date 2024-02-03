//Copy oparation over Array in js always makes shellow copy, means changes are made in the main copy of array.
const arr = [0,1,7,5,6,9]
console.log(arr[4])
arr.push(17)
arr.push(67)
console.log(arr)
arr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice : slice can only cut the some portion of array but don't change the array
//splice : splice can cut the some portion of array and change the array permanently

console.log("A ", arr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = myArr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);