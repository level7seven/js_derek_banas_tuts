const firstName = 'Willy'
const lastName = 'Johnson'
const str = "hello there  my name is eminem"
const tags = 'web design, programming, back-end'

//concatenation
val = firstName + ' ' + lastName
age = 34
val = 'Brad '
val += 'Traversy'

val = 'Hello, my name is ' + firstName + ', and I am ' + age

// Escaping 
val = 'That\'s awesome i can\'t wait'

// length 
val = firstName.length

// concat() 
val = firstName.concat(' ', lastName)


//to uppercase and lowercase
val = firstName.toUpperCase() + lastName.toLowerCase()

// index 
val = firstName[0]

// index of
val = firstName.indexOf('y')
val = firstName.lastIndexOf('i')

// charAt() 
val = firstName.charAt(4)

// last character of a stirng
val = firstName.charAt(firstName.length - 1)

//substring
val = firstName.substring(0, 4)

// slice
val = firstName.slice(0, 4)
val = firstName.slice(-3)

// split 
val = str.split(' ')
val = tags.split(',')

//replace 
val = str.replace('eminem', 'footwork')

//includes():
val = str.includes('hello')



console.log(val)