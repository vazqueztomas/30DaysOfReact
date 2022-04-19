import './countries' 
import './web_techs.js';

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice('Honey')
shoppingCart.replace('Tea', 'Green Tea');

countries.includes('Ethiopia') ? console.log('Ethiopia') : countries.push('Ethiopia');

if (webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Exercise: Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(Math.min(ages), Math.max(ages));

let mediaAge = ages.length / 2
console.log(mediaAge)

let totalAges = ages.length
for (let index = 0; index < ages.length; index++) {
    let sum = 0
    sum += ages[index]    
}
let averageAge = sum / totalAges
console.log(averageAge);

console.log(coutries.slice(0,9));

let middleCountries = countries.length / 2
console.log(countries[middleCountries]);

if (middleCountries % 2 == 0) {
    console.log('even', countries.slice(0,middleCountries))
} else {
    console.log('odd', countries.slice(0, middleCountries + 1))
}