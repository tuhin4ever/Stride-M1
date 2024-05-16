/* 
DataTypes in JavaScript
primitive data types : number, string, boolean, undefined, null, symbol
non-primitive data types : Reference Variables (Object, Array, Function)
*/

// *primitive data types
// primitive data types don't share their reference
// value <- reference
let a = 5;
let b = a;
b = 6;
console.log('a:', a)
console.log('b:', b)

// *non-primitive data types
let nums1 = [1,2,3,4,5];
let nums2 = nums1; // their reference is same
nums2.push(6);
console.log('num1:', nums1)
console.log('nums:', nums2)


