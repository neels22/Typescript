"use strict";
//let x : number = 3
//console.log(x)
let n = "neel";
function heello(name) {
    console.log("heleo " + name);
}
heello(n);
//// asigning types to function return if not given a type then it infers it
// type inference 
function summ(a, b) {
    return a + b;
}
const value = summ(1, 32);
console.log(value);
function ageChecker(age) {
    return age > 18 ? true : false;
}
const res = ageChecker(234);
console.log(res);
function fnrunner(fn) {
    setTimeout(fn, 1000);
}
fnrunner(function () {
    console.log("hi");
});
