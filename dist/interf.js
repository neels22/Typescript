"use strict";
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(` ${phrase} ${this.name} `);
    }
}
const e = new Employee("neel", 3);
e.greet("hi there ");
