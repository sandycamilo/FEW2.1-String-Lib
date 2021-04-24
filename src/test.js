const fb = require('./index')

test('capitalize', () => {
  expect(fb.capitalize('the boots')).toBe('The boots')
  expect(fb.capitalize('The Boots')).toBe('The Boots')
  expect(fb.capitalize(' ')).toBe(' ')
  expect(fb.capitalize('boots')).toBe('Boots')

})
