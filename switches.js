const color = 'dpolo'

switch (color) {
    case 'blue':
        console.log('color is blue')
        break
    case 'red':
        console.log('color is red')
        break
    default:
        console.log('yazoooo')
        break
}

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday'
        break
    case 1:
        day = 'Monday'
        break
    case 2:
        day = 'Tuesday'
        break
    case 3:
        day = 'Wed'
        break
    case 4:
        day = 'Thu'
        break
    case 5:
        day = 'Fri'
        break
    case 6:
        day = 'Sat'
        break
}

console.log(`Today is ${day}`)