

// type keys = "up" | "down" | "left" | "right" /// another way to do it

/// enum way to do it
// you have better way to do it using enum
// 
enum keys{

    /// by default it starts from zero

    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3

}


/// can also give custom values 

// enum keys{
//     Up = "Up"
//     Down = "Down"
//     Left  = "Left"
//     Right  = "Right"
// }


function dosomething(keypressed:keys) {
    
    if (keypressed == keys.Up) {
        // do something 
    }

}

dosomething(keys.Up) /// calling it is also specific to enums

//////////////////////////////////////////////