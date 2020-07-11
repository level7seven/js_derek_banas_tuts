const numbers = [];
const numbers2 = new Array(1, 2, 3, 3, 4)
const fruit = ['Apple', 'Banana', 'Orange']
const mixed = [22, true, undefined, null, { a: 1, b: 2 }, new Date(), ]

let val

numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9)

// console.log(numbers)
// console.log(fruit)
// console.log(mixed)

// Get array length
val = numbers.length

// Check if is Array
val = Array.isArray(numbers)

// Get single value
val = numbers[0]
val = numbers[3]

// insert into array
numbers[2] = 100

// find index of value
val = numbers.indexOf(100)

// MUTATING Arrays

// Add to the end push()
numbers.push(250)
    // add on to the fron unshift()
numbers.unshift(10)
    // take off from end pop()
numbers.pop()
    // take of from front
numbers.shift()
    // splice values 
numbers.splice(1, 3)
    // reverse array
numbers.reverse()
    // concatenate array
val = numbers.concat(numbers2)
    //sorting array
val = fruit.sort()
val = numbers.sort()


//use the compare function 
val = numbers.sort(function(x, y) {
    return x - y
})

//reverse comparison
val = numbers.sort(function(x, y) {
    return y - x
})

// find
function under5(num) {
    return num < 5
}

val = numbers.find(under5)

console.log(numbers)
console.log(val)