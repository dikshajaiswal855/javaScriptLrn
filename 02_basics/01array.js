//array
const arr=[1,2,3,4,"name"];
// console.log(arr);

// array methods

arr.push(6);
arr.push(7)
arr.pop();

// it inserts at starts  but inceases load on computer
arr.unshift(0);

//it removes from start
arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexof(3));

//it converts array to string
// const newarr=arr.join();

// console.log(arr)
// console.log(newarr);

//slice ,splice

console.log("a",arr);

const nn1=arr.slice(1,3);

console.log(nn1);
console.log("b", arr);

const nn2=arr.splice(1,3)
//so splice manipulates the original array
console.log("now a",arr);
console.log(nn2);

