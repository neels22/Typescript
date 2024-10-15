

interface User{
    name:string,
    age:number,
    email?:string //// optional 
}




function isLegal(user:User) {    
    if (user.age > 18) {
        return true
    }
    else{
        return false 
    }
}

function greet(user:User) {
    
    console.log("hi" + user.name)
}


isLegal({
    name:"neel",
    age:18,
})

greet({
    name:"neel",
    age:18,
})