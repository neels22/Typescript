"use strict";
// type keys = "up" | "down" | "left" | "right" /// another way to do it
/// enum way to do it
// you have better way to do it using enum
// 
var keys;
(function (keys) {
    /// by default it starts from zero
    keys[keys["Up"] = 0] = "Up";
    keys[keys["Down"] = 1] = "Down";
    keys[keys["Left"] = 2] = "Left";
    keys[keys["Right"] = 3] = "Right"; // 3
})(keys || (keys = {}));
/// can also give custom values 
// enum keys{
//     Up = "Up"
//     Down = "Down"
//     Left  = "Left"
//     Right  = "Right"
// }
function dosomething(keypressed) {
    if (keypressed == keys.Up) {
        // do something 
    }
}
dosomething(keys.Up); /// calling it is also specific to enums
//////////////////////////////////////////////
