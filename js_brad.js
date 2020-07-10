const num1 = 100;
const num2 = 60
let val;

// Simple math with numbers
val = num1 + num2
val = num1 - num2
val = num1 * num2
val = num1 / num2
val = num1 % num2

// Math object with
val = Math.PI;
val = Math.E;
val = Math.round(2.6) // 3
val = Math.ceil(2.6) // 3
val = Math.floor(2.6) // 2

val = Math.sqrt(16) // 4
val = Math.abs(-445) // 445
val = Math.pow(4, 4) // 4**4 or 4^4 = 256

val = Math.min(4, 7, 22, 44, 66, 8, 3, 6) // minimum = 3
val = Math.max(4, 7, 22, 44, 66, 8, 3, 6) // maximum = 66

val = Math.random() // gives a random number

val = Math.random() * 20 // gives a random number < 20
val = Math.floor(Math.random() * 20 + 1) // gives a random integer number < 20

console.log(val)