
type Users = {

    name:string,
    age:number
}

function isLegal(user:Users) {
    
console.log("hi " + user.name)

}



///////////

type strno = string | number

function greet(id:strno) {
    console.log(id)
}
greet(2)
greet("3")

//////////////////////


type manage = {
    name:string,
    age:number
}

type ceo  = {
    tenure:number
}


type teamlead = manage & ceo 

const t :teamlead ={
    name:"nee",
    age:23,
    tenure:234
}