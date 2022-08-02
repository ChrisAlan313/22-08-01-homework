const chainFuncs = require('./chainFuncs');
const notOptionalChain = chainFuncs.notOptionalChain
const optionalChain = chainFuncs.optionalChain

const test_object1 = { haver: 'Dave', thing: { name: 'Something' } };
const test_object2 = { wanter: 'Steve',  thing: { name: 'Nothing' } };
const test_object3 = { gone: 'Sad' };

test('notOptionalChain throws error for missing value', () => {
  expect(notOptionalChain(test_object1, 'Something')).toBe(true);
  expect(notOptionalChain(test_object2, 'Something')).toBe(false);

  // This has to be wrapped in a function to prevent the error from blowing up
  // the test suite.
  function callFailingNotOptionalChain() {
    notOptionalChain(test_object3, 'Something');
  }

  expect(callFailingNotOptionalChain).toThrow(TypeError);
});

test('optionalChain does not throw error for missing value', () => {
  expect(optionalChain(test_object1, 'Something')).toBe(true);
  expect(optionalChain(test_object2, 'Something')).toBe(false);
  expect(optionalChain(test_object3, 'Something')).toBe(false);

  // This has to be wrapped in a function to prevent the error from blowing up
  // the test suite.
//   function callFailingOptionalChain() {
//     optionalChain(test_object3, 'Something');
//   }

//  expect(callFailingOptionalChain).toThrow(TypeError);
});
