"use strict";
function sumofage(user1, user2) {
    return user1.age + user2.age;
}
const ans = sumofage({
    name: "neel",
    age: 23
}, {
    name: "adf",
    age: 234
});
console.log(ans);
