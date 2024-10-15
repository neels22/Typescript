
type Users = {

    name:string,
    age:number
}

function isLegal3(user:Users) {
    
console.log("hi " + user.name)

}



///////////

type strno = string | number

function greet2(id:strno) {
    console.log(id)
}
greet2(2)
greet2("3")

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