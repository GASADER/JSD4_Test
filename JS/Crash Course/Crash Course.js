// variable
const myName = 'Save'
let height = 170

//Data Type

//Primitive Type
String
Number
Boolean
let isMale = false

undefined
let go

null
let city = null

Symbol
BigInt
let bigNumber = 10n;

console.log(myName,height,isMale,go,city,bigNumber)

//Reference Type
// Object {}
const person = {
    name: 'Save',
    height: 170,
    city: 'bangkok'
}
console.log(person)
console.log(person.name)

person.height = 180;
console.log(person)

person.weight = 100;
console.log(person)

// Array []
const Numbers = [5,10,15,20];
console.log(Numbers[2])
Numbers.push(25)
console.log(Numbers)
Numbers.pop()
console.log(Numbers)
Numbers.shift()
console.log(Numbers)

// Arithmetic Operators
// - + * / % **
let result = 10*2
console.log(result)

//condition

let password =''

    if(password === ''){
        console.log('Password is requred')
    }
    else if( password.length >= 8 && password.length <= 12 ){
        console.log('Password is vaild')
    } else {
        console.log('Password is invaild')
    }


// Function()
function calculateVat(money, vat){
    return money * vat / 100;
}

const totalVat = calculateVat(100,7);
console.log(totalVat)

//Flow Controls,Loop
for (let counter = 0; counter <10; counter++){
    if (counter % 2 !== 0 ){
        console.log(counter)
    }
}