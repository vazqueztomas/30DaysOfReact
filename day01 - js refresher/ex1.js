// Ex 1 - Level 1

// 1
const arr = []
// 2
const names = ['tomas', 'lucas','pedro','juancruz','lorenzo']
// 3
console.log(`lenght : ${names.length}`)
// 4
console.log(`first item: ${names[0]}, middle item: ${names[2]}, last item: ${names[4]}`)
// 5
const mixedDataTypes = [1, 'Juan', ['apple', 'banana','strawberry'], {'key':'valor'}, 4.5]
// 6
const itCompanies = ['Facebook', 'google','Microsoft', 'Apple',' IBM',' Oracle', 'Amazon']
// 7
console.log(itCompanies)
// 8
console.log(`numbers of companies: ${itCompanies.length}`);
// 9
console.log(`first company: ${itCompanies[0]}, middle company: ${itCompanies[3]}, last company: ${itCompanies[6]}`);
// 10
itCompanies.forEach((item) => {console.log(item)})
// 11
itCompanies[0].toUpperCase();
itCompanies[1].toUpperCase();
itCompanies[2].toUpperCase();
itCompanies[3].toUpperCase();
itCompanies[4].toUpperCase();
itCompanies[5].toUpperCase();
itCompanies[6].toUpperCase();
// 12
const splittingArray = itCompanies.join(',')
console.log(splittingArray, 'are big IT Companies')
// 13
let certainCompany = 'Netflix';
let index = itCompanies.indexOf(certainCompany)

index != -1 ? console.log(certainCompany) : console.log('Not found.')
// 14
itCompanies.filter((item) => {
    if (item.includes('oo')){
        console.log(item)
    }
})
// 15
let sortedArr = itCompanies.sort()
console.log(sortedArr)
// 16
let reversedArr = itCompanies.reverse()
console.log(reversedArr);
// 17
console.log(itCompanies.slice(3,itCompanies.length))
// 18
console.log(itCompanies.slice(0, itCompanies.length - 3))
// 19 
console.log(itCompanies.slice(4))
//20
let removeFirstItem = itCompanies.shift()
console.log(removeFirstItem)
// 21
let removeMiddleItem = itCompanies.slice(4)
console.log(removeMiddleItem)
// 22
let removeLastItem = itCompanies.pop()
console.log(removeLastItem)
// 23
let removeAllItems = itCompanies.splice()
console.log(removeAllItems);

