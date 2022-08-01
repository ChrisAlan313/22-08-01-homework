const not_optional_chain = require('./optional-chaining');
const optional_chain = require('./optional-chaining');

const test_object = {
haver: 'Dave',
thing: {
  name: 'Something'
  }
};

test('not_optional_chain', () => {
  expect(not_optional_chain(test_object, 'Something')).toBe(true);
});