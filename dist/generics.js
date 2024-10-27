"use strict";
function val(arr) {
    return arr[0];
}
/// what is the problem in this approach 
// lets say i want to do uppercase but uppercase is not available on INput type
const va = val(["nel", "hi"]);
console.log(va);
// but 
// console.log(va.toUpperCase()) /// there is an error  
///// generics 
function identity(arg) {
    return arg;
}
function arr(arr) {
    return arr;
}
const otp1 = identity("mystring");
const otp2 = identity(1000);
const otp3 = arr([234, 23,]);
const otp4 = arr(["adsf", "asdf"]);
const otp5 = arr([{ name: "neel" }]);
console.log(otp1.toUpperCase());
