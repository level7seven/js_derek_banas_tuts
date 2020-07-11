let val

const today = new Date()
let birthday = new Date('9-10-1998 11:34')
birthday = new Date('September 10 1998')
    // birthday = new Date('9/10/2001')



val = today.getMonth()
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getTime()

birthday.setMonth(2)
birthday.setFullYear(2010)
birthday.setHours(23)
birthday.setMinutes(23)

console.log(birthday)
console.log(val)