const spreadFunc = require('./spreadFuncs');

const arr = ["a", 2, "c"];
const arrToString = arr[0] + arr[1] + arr[2];

test('spreadFunc takes an array as argument and splits it', () => {
  expect(spreadFunc(...arr)).toBe(arrToString);
});
