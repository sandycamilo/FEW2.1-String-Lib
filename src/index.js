
// run script test 
// console.log('Hello World')
// const str = "hello world"
// console.log(str[0])
// console.log(str.length)
// console.log(str.toUpperCase())


// *******************************************************************************************************************
// #1 - capitalize() 
// Makes the first character of a given string uppercase. 
// *******************************************************************************************************************

// first version 
String.prototype.capitalize = function() {
  const firstLetter = this[0].toUpperCase()
  const restOfLetters = this.slice(1)
  const newWord = firstLetter + restOfLetters
  return newWord
}

const str = 'hello world'
console.log(str.capitalize())

// second version 
// function capitilize(str) {
//   const arr = str.split('')
//   arr[0] = arr[0].toUpperCase()
//   return arr.join('')
// }

// console.log(capitalize('strawberry'))

// *******************************************************************************************************************
// #2 - allCaps() 
// Makes all characters uppercase. 
// *******************************************************************************************************************

String.prototype.allUpperCase = function() {
  return this.toUpperCase()
}

const word = 'orange'
console.log(word.allUpperCase())

// *******************************************************************************************************************
// #3 - capitalizeWords() 
// Makes the first character of each word uppercase. Imagine that each word is separated by a space.
// *******************************************************************************************************************

String.prototype.capitalizeWords = function() {
  const words = this.split(' ')
  const upperWords = words.map( word => word.capitalize() )
  return upperWords.join(' ')
}

const word_two = 'the sky is blue'
console.log(word_two.capitalizeWords())

// *******************************************************************************************************************
// #4 - removeExtraSpaces() 
// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
// If more than one space appears in the middle of a string it is replaced by a single space.
// *******************************************************************************************************************

String.prototype.removeExtraSpaces = function() {
  const trimString = this.trim()
  const takeSpaces = trimString.split(' ')
  const filtered = takeSpaces.filter( (c) => c !== '')
  return filtered.join(' ')
}

const word_three = '   hello     world   '
console.log(word_three.removeExtraSpaces())

// *******************************************************************************************************************
// #5 - kebobCase() 
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// *******************************************************************************************************************

String.prototype.kebobCase = function(separator = '-') {
  // lowercase
  const lowerCase = this.toLowerCase()
  // split 
  const array = lowerCase.split('')
  // filter 
  const filtered = array.filter( (c) => {
    const code = c.charCodeAt(0)
    if (code > 96 && code < 123) { // keep letters
      return true
    } else if (code > 47 && code < 58) { // keep numbers
      return true
    } else if (code === 32 || code === separator.charCodeAt(0)) { // keep space and hyphen
      return true
    }
    return false
  })
  // remove extra spaces 
  const spaceFree = filtered.join('').removeExtraSpaces()
  // split, join and return 
  return spaceFree.split(' ').join(separator)
}

const word_four = '    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '
console.log(word_four.kebobCase())

// *******************************************************************************************************************
// #6 - snakeCase()
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
// *******************************************************************************************************************

String.prototype.snakeCase = function() {
  return this.kebobCase('_')
}

const word_five = '    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '
console.log(word_five.snakeCase())

// *******************************************************************************************************************
// #7 - camelCase() 
// Lowercases the first character of the first word. Then uppercases the first character of all 
// other words, and removes all spaces
// *******************************************************************************************************************

String.prototype.camelCase = function() {
  // split on the space ' ' to get an array of words
  const words = this.split(' ')
  // loop over the words 
  const camelWords = words.map((word, i) => {
      // lowercase the first word 
      if (i === 0) {
        return word.toLowerCase()
      }
      // uppercase the others 
      return word.capitalize()
  })
  // join the words on the ' ' empty string    
  return camelWords.join('')
}

const word_six = 'Hello there how are you'
console.log(word_six.camelCase())

// *******************************************************************************************************************
// #8 - shift() 
// This method will take the first character of a string and move to the end of a string.
// *******************************************************************************************************************

String.prototype.shift = function() {
  const firstLetter = this[0]
  const newWord = this.slice(1)
  return newWord + firstLetter
}

const word_seven = 'Hello World'
console.log(word_seven.shift())

// *******************************************************************************************************************
// #9 - makeHashTag(str)
// This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. 
// Each word in the phrase begins with an uppercase letter.
// *******************************************************************************************************************

String.prototype.makeHashTag = function() {
  // split string
  const words = this.split(' ')
  // check length 
  if (words.length >= 3) {
    // sort length
    words.sort((a,b) => {
      b.length - a.length
    })
  }
  // lowercase each and add # at beginning
  const hashtag = words.map(word => `#${word.toLowerCase()}`)
  return hashtag
}

const word_eight = 'Amazing bongo drums for sale'
console.log(word_eight.makeHashTag())

// *******************************************************************************************************************
// #10 - isEmpty(str)
// Returns true if the given string is empty or contains only whitespace.
// *******************************************************************************************************************

String.prototype.isEmpty = function() {
  const split = this.split(' ')
  const filtered = split.filter(word => word === '')
  return split.length === filtered.length ? true : false
}

const word_nine = 'Abd def'
const word_ten = ' '
console.log(word_nine.isEmpty())
console.log(word_ten.isEmpty())