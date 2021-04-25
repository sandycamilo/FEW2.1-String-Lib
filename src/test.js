const str = require('./index')

test('test capitalize', () => {
  expect('the boots'.capitalize()).toBe('The boots')
  expect('The boots'.capitalize()).toBe('The boots')
  expect(' '.capitalize()).toBe(' ')
  expect('the boots are under the bed.'.capitalize()).toBe('The boots are under the bed.')
  //prototype 
  expect(str.capitalize('the boots')).toBe('The boots')
  expect(str.capitalize('The boots')).toBe('The boots')
  expect(str.capitalize(' ')).toBe(' ')
  expect(str.capitalize('the boots are under the bed.')).toBe('The boots are under the bed.')
})

test('test allUpperCase', () => {
  expect('apples'.allUpperCase()).toBe('APPLES')
  expect('The apples'.allUpperCase()).toBe('THE APPLES')
  expect(' '.allUpperCase()).toBe(' ')
  expect('the apples are here.'.allUpperCase()).toBe('THE APPLES ARE HERE.')
  //prototype 
  expect(str.allUpperCase('oranges')).toBe('ORANGES')
  expect(str.allUpperCase('The oranges')).toBe('THE ORANGES')
  expect(str.allUpperCase(' ')).toBe(' ')
  expect(str.allUpperCase('the oranges on the table!')).toBe('THE ORANGES ON THE TABLE!')
})

test('test capitalizeWords', () => {
  expect('hello'.capitalizeWords()).toBe('Hello')
  expect('The trees are tall'.capitalizeWords()).toBe('The Trees Are Tall')
  expect('the sun is out!!!'.capitalizeWords()).toBe('The Sun Is Out!!!')
  //prototype 
  expect(str.capitalizeWords('bag')).toBe('Bag')
  expect(str.capitalizeWords('The table is red')).toBe('The Table Is Red')
  expect(str.capitalizeWords('the phone is ringing!!!')).toBe('The Phone Is Ringing!!!')
})

test('test removeExtraSpaces', () => {
  expect('hey there     '.removeExtraSpaces()).toBe('hey there')
  expect(' '.removeExtraSpaces()).toBe('')
  expect('HEY     HOW   ARE  YOU'.removeExtraSpaces()).toBe('HEY HOW ARE YOU')
  expect('hey  !'.removeExtraSpaces()).toBe('hey !')
  // prototype 
  expect(str.removeExtraSpaces('the lamp     ')).toBe('the lamp')
  expect(str.removeExtraSpaces(' ')).toBe('')
  expect(str.removeExtraSpaces('THE      LAMP    IS      ON')).toBe('THE LAMP IS ON')
  expect(str.removeExtraSpaces('Hi   !!!')).toBe('Hi !!!')
})

test('test kebobCase', () => {
  expect('hey there!!!-yes I know'.kebobCase()).toBe('hey-there-yes-i-know')
  expect(' '.kebobCase()).toBe('')
  expect('HEY     HOW   ARE  YOU'.kebobCase()).toBe('hey-how-are-you')
  expect('hi, how are you  !'.kebobCase()).toBe('hi-how-are-you')
  // prototype 
  expect(str.kebobCase('the lamp     ')).toBe('the-lamp')
  expect(str.kebobCase(' ')).toBe('')
  expect(str.kebobCase('THE      LAMP    IS  ??,    ON')).toBe('the-lamp-is-on')
  expect(str.kebobCase('hey, Hi   !!!')).toBe('hey-hi')
})

test('test snakeCase', () => {
  expect('    Hello World!!!!  a-hypenated-word  1, 2, 3, 5 and 77   '.snakeCase()).toBe('hello_world_ahypenatedword_1_2_3_5_and_77')
  expect(' '.snakeCase()).toBe('')
  expect('HEY     HOW   ARE  YOU'.snakeCase()).toBe('hey_how_are_you')
  expect('hi, there  !'.snakeCase()).toBe('hi_there')
  // prototype 
  expect(str.snakeCase('the lamp     ')).toBe('the_lamp')
  expect(str.snakeCase(' ')).toBe('')
  expect(str.snakeCase('THE      LAMP    IS  ??,    OFF')).toBe('the_lamp_is_off')
  expect(str.snakeCase('hey, MAYA   !!!')).toBe('hey_maya')
})

test('test camelCase', () => {
  expect('it is here'.camelCase()).toBe('itIsHere')
  expect('hey How are you'.camelCase()).toBe('heyHowAreYou')
  expect('hey How are you? ok'.camelCase()).toBe('heyHowAreYou?Ok')
  // // prototype 
  expect(str.camelCase('the lamp')).toBe('theLamp')
  expect(str.camelCase('the table Is Blue?')).toBe('theTableIsBlue?')
  expect(str.camelCase('hey Maya!! hi')).toBe('heyMaya!!Hi')
})

test('test shift', () => {
  expect('the chair is broken'.shift()).toBe('he chair is brokent')
  expect('hey How are you'.shift()).toBe('ey How are youh')
  expect('hey How are you? ok!!'.shift()).toBe('ey How are you? ok!!h')
  // // prototype 
  expect(str.shift('the lamp')).toBe('he lampt')
  expect(str.shift('the table Is Blue?')).toBe('he table Is Blue?t')
  expect(str.shift('hey Maya!! hi')).toBe('ey Maya!! hih')
})

test('test makeHashTag', () => {
  expect('the chair is broken'.makeHashTag()).toBe["#the", "#chair", "#is", "#broken"]
  expect('hey How are you'.makeHashTag()).toBe["#hey", "#How", "#are", "#you"]
  expect('hey yes!!'.makeHashTag()).toBe["#hey", "#yes!!"]
  // // // prototype 
  expect(str.makeHashTag('the lamp')).toBe["#the", "#lamp"]
  expect(str.makeHashTag('the table Is Blue?')).toBe["#the", "#table", "#Is", "#Blue?"]
})

test('test isEmpty', () => {
  expect('ad  a'.isEmpty()).toBe(false)
  expect(''.isEmpty()).toBe(true)
  // // // prototype 
  expect(str.isEmpty('the lamp')).toBe(false)
  expect(str.isEmpty('')).toBe(true)
})