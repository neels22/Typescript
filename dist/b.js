"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi" + user.name);
}
isLegal({
    name: "neel",
    age: 18,
});
greet({
    name: "neel",
    age: 18,
});
