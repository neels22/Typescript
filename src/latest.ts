
//////////////  PICK --- create subset 

interface Users1{
    id:number;
    name:string;
    age:number;
    email:string;
    password:string;
}

// what you want to pick from interface or type and second is what properties you want

type updateProps = Pick<Users1 , 'name'| 'age' | 'email'>

function updateuser(updateProps : updateProps ) {
        console.log(updateProps.name + " " + updateProps.email)
}

/////////////////////////////////////////////// PARTIAL

type updatePropsoptional = Partial<updateProps> 



/////////////////////////////////////////////// READONLY

type Uzar = {
    readonly name:string;
    readonly age:number;
}

const user :Uzar = {
    name:"st",
    age:234
}

// const user :Readonly<Uzar> = {
//     name:"st",
//     age:234
// }

//user.age = 23 //// this will give error inner values will stay constant 


/////////////////////////////////////////////// Record and Map

// type uzar2 = {

//     [key:string]:string
// }

// const users : uzar2 ={
//     "asdf":"Adf",   
//     "asdd":"Adf"
// }

// above code looks ugly 

type users = Record<string , {age:number; name:string}>

const uzar : users  = {
    "aer" : {age:23 , name:"asdf"}
}


uzar["aer"].age = 23 // this is ugly 


////// MAP --> another way to create key value pair 

type users3 = {
    age:number
}

const users = new Map<string,users3>()
users.set("first" , {age:34})
users.set("second" , {age:34})

const users2 = users.get("first")
console.log(users2)



/////////////////////////////////////////////// EXCLUDE

type eventype = 'click' | 'scroll' | 'mousemove'

type excludevent = Exclude<eventype , 'scroll' >

const handlevent = (event:excludevent) => {
    console.log(   `event ${event}`  )
}
handlevent("click")
// handlevent("scroll") /// this will give error 











