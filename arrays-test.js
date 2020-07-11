const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = new Array(1, 2, 3, 3, 4)
const fruit = ['Apple', 'Banana', 'Orange']
const mixed = [22, true, undefined, null, { a: 1, b: 2 }, new Date(), ]

let val


// console.log(numbers)
// console.log(fruit)
// console.log(mixed)

// Get array length
val = numbers.length
    // Check if is Array
val = Array.isArray(numbers)
    // Get single value
val = numbers[0]

// insert into array
numbers[2] = 100
val = numbers.push(1)
    // find index of value
val = numbers.indexOf(4)
    // MUTATING Arrays

// Add to the end 
numbers.push(1000)
    // add on to the front 
numbers.unshift()
    // take off from end 
numbers.pop()
numbers.pop()
numbers.pop()

// take of from front
numbers.shift()
    // splice values 
numbers.splice(1, 4)
    // reverse array
numbers.reverse()


// concatenate array
val = numbers.concat(numbers2)
    //sorting array
    // val = numbers.sort()
    //use the compare function 
val = numbers.sort(function(x, y) {
    return x - y
})

val = numbers2.sort(function(x, y) {

        return y - x
    })
    //reverse comparison

// find
function under5(num) {
    return num < 5
}

val = numbers.find(under5)

console.log(val)
console.log(numbers)