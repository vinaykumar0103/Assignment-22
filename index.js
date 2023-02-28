"use strict"

// Q- Remove array element by shifting elements from right to left
// remove(n) in the comments below indicates remove elements from the nth index of the
// array

// examples of suggested inputs and outputs-
// // [1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]
// // [1, 2, 3, 4, 5, 6] -- remove(2) --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4,
// 5, 6]
// // [1, 2, 3, 4, 5, 6] -- remove(0) --> [2, 3, 4, 5, 6, 6] --> [2, 3, 4,
// 5, 6]
// // [1] -- remove(0) --> [1] --> []

function remove(arr, n) {
  
  for (let i = n + 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  
  arr.length--;
  return arr;
}


let arr = [1, 2, 3];
remove(arr, 1); 
console.log(arr); 

arr = [1, 2, 3, 4, 5, 6];
remove(arr, 2); 
console.log(arr); 

arr = [1, 2, 3, 4, 5, 6];
remove(arr, 0); 
console.log(arr); 

arr = [1];
remove(arr, 0); 
console.log(arr); 
