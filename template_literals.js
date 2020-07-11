console.log('yo');

const name = 'John'
const age = 'Web DEV'
const city = 'Miami'
let html

// without template literals es5
html = '<ul><li>Name: ' + name + '</li><li>Age : ' + age + '< /li></ul>';

// es6
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
</ul>
`

console.log(html)


// basic syntax for the template literals

let example = `${name},${city},${age > 40 ? 'Over 40' : 'Under 40'}`

console.log(example)