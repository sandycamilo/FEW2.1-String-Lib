
// run script test 
// console.log('Hello World')
// const str = "hello world"
// console.log(str[0])
// console.log(str.length)
// console.log(str.toUpperCase())


// *******************************************************************************************************************
// Challenge 1 - capitalize() 
// Makes the first character of a given string uppercase. 
// *******************************************************************************************************************

// first version 
function capitalize(str) {
  const firstLetter = str[0].toUpperCase()
  const restOfLetters = str.slice(1)
  const newWord = firstLetter + restOfLetters
  return newWord
}

console.log(capitalize('dog'))

// second version 
function capitilize(str) {
  const arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

console.log(capitalize('strawberry'))

// *******************************************************************************************************************
// Challenge 2 - allCaps() 
// Makes all characters uppercase. 
// *******************************************************************************************************************

function allUpperCase(str) {
  return str.toUpperCase()
}

console.log(allUpperCase('orange'))

// *******************************************************************************************************************
// Challenge 3 - capitalizeWords() 
// Makes the first character of each word uppercase. Imagine that each word is separated by a space.
// *******************************************************************************************************************

function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => capitalize(word) )
  return upperWords.join(' ')
}

console.log(capitalizeWords('the sky is blue'))

// *******************************************************************************************************************
// Challenge 4 - removeExtraSpaces() 
// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
// If more than one space appears in the middle of a string it is replaced by a single space.
// *******************************************************************************************************************

function removeExtraSpaces(str) {
  const trimString = str.trim()
  const takeSpaces = trimString.split(' ')
  const filtered = takeSpaces.filter( (c) => c !== '')
  return filtered.join(' ')
}

console.log(removeExtraSpaces('   hello     world   '))

// *******************************************************************************************************************
// Challenge 5 - kebobCase() 
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// *******************************************************************************************************************

function kebobCase(str) {
  // lowercase
  const lowerCase = str.toLowerCase()
  // split 
  const array = lowerCase.split('')
  // filter 
  const filtered = array.filter( (c) => {
    const code = c.charCodeAt(0)
    if (code > 96 && code < 123) { // keep letters
      return true
    } else if (code > 47 && code < 58) { // keep numbers
      return true
    } else if (code === 32 || code === 45) { // keep space and hyphen
      return true
    }
    return false
  })
  // remove extra spaces 
  const spaceFree = removeExtraSpaces(filtered.join(''))
  // split, join and return 
  return spaceFree.split(' ').join('-')
}

console.log(kebobCase('    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '))

// *******************************************************************************************************************
// Challenge 6 - snakeCase()
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
// *******************************************************************************************************************


// *******************************************************************************************************************
// Challenge 7 - camelCase() 
// Lowercases the first character of the first word. Then uppercases the first character of all 
// other words, and removes all spaces
// *******************************************************************************************************************


// *******************************************************************************************************************
// Challenge 8 - shift() 
// This method will take the first character of a string and move to the end of a string.
// *******************************************************************************************************************


// *******************************************************************************************************************
// Challenge 9 - makeHashTag(str)
// This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. 
// Each word in the phrase begins with an uppercase letter.
// *******************************************************************************************************************


// *******************************************************************************************************************
// Challenge 10 - isEmpty(str)
// Returns true if the given string is empty or contains only whitespace.
// *******************************************************************************************************************
