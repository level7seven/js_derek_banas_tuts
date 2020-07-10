// var, let, const
var name = "John Doe"
console.log(name)

//

name = "steve smith"
console.log(name)

//Init var 

var greeting;
console.log(greeting)
greeting = "Hello!"
console.log(greeting)

// rules and conventions
// letters, numbers, _, $
// Can't start with a number

var firstName = "John" // Camel case
var first_name = "Steve" // Underscore
var FirstName = " Miqel" // Pascal case

// CONST

const name2 = 'John'
console.log(name2)
    //     // can't reassign
    // name2 = "blanka" // error
    // have to assign a value
    // const greeting; // error

const person = {
    name: "John",
    age: 34
}

// mutate 
person.name = "Sarah"
person.age = 38

console.log(person)

// Arrays

const numbers = [1, 2, 3, 4, 5, 6]
numbers.push(8)
console.log(numbers)

//Primitive data types : string, number, boolean, null, undefined, symbols(es6)

//Reference data types : Arrays,Object literals, Functions, Dates, anything else

//

console.clear()

//Primitive data types

//String data
const name3 = 'John Doe'
console.log(name3)
console.log(typeof name3)
    // Number
const age_ = 14
console.log(typeof age_)
    // null
const car = null;
console.log(typeof car)
    // boolean
const isValid = true;
console.log(typeof isValid)
    // undefined
let test;
console.log(typeof test)
    // symbol(es6)
const sym = Symbol()
console.log(typeof sym)

// REFERENCE types

// array types
const arr1 = []
console.log(typeof arr1)
    // object literals
const addres3 = {
    city: 'Boston',
    state: 'MA'
}
console.log(typeof addres3)

// Primitive
const today = new Date();
console.log(today)
console.log(typeof today)


console.clear(0)


// Type conversion & cooercion
let val;

// Number to string conversion
val = String(6);
val = String(40 + 4)

// Bool to string conversion
val = String(true)

//Date to string
val = String(new Date())

//Array to string conversion
val = String([1, 2, 3, 4, 5])

//toString() converts
val = (5).toString()
val = (true).toString()


// String to nubmers conversion
val = Number('5')
val = Number(false)
val = Number(true)
val = Number(null)
val = Number('hello')
val = Number([1, 2, 3, 4, 5])

val = parseInt('100.30')
val = parseFloat('100.30')

// Output 
console.log(val)
console.log(typeof val)
    // console.log(val.length)
console.log(val.toFixed(1))
    //e.log(val.toFixed(3))

// Type coersion

const val1 = '5'
const val2 = String(6)
const sum = val1 + val2

console.log(sum)
console.log(typeof sum)