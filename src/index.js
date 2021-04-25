// *******************************************************************************************************************
// #1 - capitalize() 
// Makes the first character of a given string uppercase. 
// *******************************************************************************************************************

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

String.prototype.capitalize = function() {
  return capitalize(this)
}

console.log(capitalize('hi there')) // Hi there
const word_one = 'hello world'
console.log(word_one.capitalize()) // Hello world

// *******************************************************************************************************************
// #2 - allCaps() 
// Makes all characters uppercase. 
// *******************************************************************************************************************

function allUpperCase(str) {
  return str.toUpperCase()
}

String.prototype.allUpperCase = function() {
  return this.toUpperCase()
}

console.log(allUpperCase('banana')) // BANANA
const word_two = 'orange'
console.log(word_two.allUpperCase()) // ORANGE

// *******************************************************************************************************************
// #3 - capitalizeWords() 
// Makes the first character of each word uppercase. Imagine that each word is separated by a space.
// *******************************************************************************************************************

function capitalizeWords(str) {
  const words = str.split(' ')
  const upperWords = words.map( word => word.capitalize() )
  return upperWords.join(' ') 
}

String.prototype.capitalizeWords = function() {
  return capitalizeWords(this)
}

console.log(capitalizeWords('the sky is red')) // The Sky Is Red
const word_three = 'the sky is blue'
console.log(word_three.capitalizeWords()) // The Sky Is Blue 

// *******************************************************************************************************************
// #4 - removeExtraSpaces() 
// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
// If more than one space appears in the middle of a string it is replaced by a single space.
// *******************************************************************************************************************

function removeExtraSpaces(str) {
  const trimString = str.trim()
  const takeSpaces = trimString.split(' ')
  const filtered = takeSpaces.filter( (c) => c !== '')
  return filtered.join(' ')
}
String.prototype.removeExtraSpaces = function() {
  return removeExtraSpaces(this)
}

console.log(removeExtraSpaces('hey    there!!!        ')) // hey there!!!
const word_four = '   hello     world   '
console.log(word_four.removeExtraSpaces()) // hello world

// *******************************************************************************************************************
// #5 - kebobCase() 
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
// *******************************************************************************************************************

function kebobCase(str, separator = '-') {
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

String.prototype.kebobCase = function() {
  return kebobCase(this)
}

console.log(kebobCase('they are outside!! YES 1, 2, !!')) // they-are-outside-yes-1-2
const word_five = '    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '
console.log(word_five.kebobCase()) // hello-world-a-hypenated-word-1-2-3-5-and-77

// *******************************************************************************************************************
// #6 - snakeCase()
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
// *******************************************************************************************************************

function snakeCase(str) {
  return kebobCase(str,'_')
}
String.prototype.snakeCase = function() {
  return snakeCase(this)
}

console.log(snakeCase('hi, How are you?!!')) // hi_how_are_you
const word_six = '    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '
console.log(word_six.snakeCase()) // hello_world_ahypenatedword_1_2_3_5_and_77

// *******************************************************************************************************************
// #7 - camelCase() 
// Lowercases the first character of the first word. Then uppercases the first character of all 
// other words, and removes all spaces
// *******************************************************************************************************************

function camelCase(str) {
   // split on the space ' ' to get an array of words
   const words = str.split(' ')
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

String.prototype.camelCase = function() {
 return camelCase(this)
}

console.log(camelCase('it is here')) // itIsHere
const word_seven = 'Hello there how are you'
console.log(word_seven.camelCase()) // helloThereHowAreYou

// *******************************************************************************************************************
// #8 - shift() 
// This method will take the first character of a string and move to the end of a string.
// *******************************************************************************************************************

function shift(str) {
  const firstLetter = str[0]
  const newWord = str.slice(1)
  return newWord + firstLetter
}

String.prototype.shift = function() {
  return shift(this)
}

// console.log(shift('the chair is broken')) // he chair is brokent
const word_eight = 'hey hi' 
console.log(word_eight.shift()) // ey hih

// *******************************************************************************************************************
// #9 - makeHashTag(str)
// This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. 
// Each word in the phrase begins with an uppercase letter.
// *******************************************************************************************************************

function makeHashTag(str) {
  // split string
  const words = str.split(' ')
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
String.prototype.makeHashTag = function() {
  return makeHashTag(this)
}

console.log(makeHashTag('the day is here')) // [ '#the', '#day', '#is', '#here' ]
const word_nine = 'Amazing bongo drums for sale'
console.log(word_nine.makeHashTag()) // [ '#amazing', '#bongo', '#drums', '#for', '#sale' ]

// *******************************************************************************************************************
// #10 - isEmpty(str)
// Returns true if the given string is empty or contains only whitespace.
// *******************************************************************************************************************

function isEmpty(str) {
  const split = str.split(' ')
  const filtered = split.filter(word => word === '')
  return split.length === filtered.length ? true : false
}

String.prototype.isEmpty = function() {
  return isEmpty(this)
}

console.log(isEmpty('ad  a')) // false
const word_ten = 'Abd def'
const word_te = ' '
console.log(word_ten.isEmpty()) // false
console.log(word_te.isEmpty()) // true

module.exports.capitalize = capitalize
module.exports.allUpperCase = allUpperCase
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
