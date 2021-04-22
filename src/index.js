
// run script test 
// console.log('Hello World')
// const str = "hello world"
// console.log(str[0])
// console.log(str.length)
// console.log(str.toUpperCase())

// challenge 1 - capetalizes the first letter of given string 
// first version 
function capitalize(str) {
  const firstLetter = str[0].toUpperCase()
  const restOfLetters = str.slice(1)
  const newWord = firstLetter + restOfLetters
  return newWord
}

console.log(capitalize('dog'))

// // second version 
function capitilize(str) {
  const arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

console.log(capitalize('strawberry'))

// challenge 2 - makes all characters uppercase
function allUpperCase(str) {
  return str.toUpperCase()
}

console.log(allUpperCase('orange'))

// challenge 3 - capitalize first letter of each word 
function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}

console.log(capitalizeWords('the sky is blue'))






