const person = {
    firstName: 'Steve',
    lastName: 'Johnski',
    age: 33,
    isMarried: false,
    hobbies: ['music', 'jogging', 'weed'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2017 - this.age
    }
}

let value

val = person.age
val = person['firstName']
val = person.hobbies[1]
val = person.address.state
val = person.address['city']
val = person.getBirthYear()

console.log(val)

const friends = [
    { name: 'johnny', age: 50 },
    { name: 'margaret', age: 30 },
    { name: 'carlos', age: 22 }
]

// for (let i of friends) {
//     return console.log(friends)
// }

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i].name)
// }

console.log(friends)