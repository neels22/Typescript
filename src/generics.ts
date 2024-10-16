


type Input = number | string

function val(arr:Input[]) {

    return arr[0]
}

/// what is the problem in this approach 

// lets say i want to do uppercase but uppercase is not available on INput type

const va = val(["nel","hi"])
console.log(va)
// but 
// console.log(va.toUpperCase()) /// there is an error  

///// generics 

function identity<T>(arg:T) {

    return arg
    
}

function arr<T>(arr:T[]) {

    return arr
    
}

interface Us{
    name:string,
    age?:number
}

const otp1 = identity<string>("mystring")
const otp2 = identity<number>(1000)

const otp3 = arr([234,23,])
const otp4 = arr<string>(["adsf","asdf"])

const otp5 = arr<Us>([{name:"neel"}])

console.log(otp1.toUpperCase())





