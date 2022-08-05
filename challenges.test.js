const challenges = require('./challenges');
const numberFilter = challenges.numberFilter;
const indexAddedNumberFilter = challenges.indexAddedNumberFilter;
// const indexedGreaterThanOneNumberFilter = challenges.indexedGreaterThanOneNumberFilter;

const testOne = {
  test: ['a', 2 , 'c', 4],
  numberFilterExpected: [2, 4]
};
const testTwo = {
  test: ['a', challenges, 984894849, 3/4],
  numberFilterExpected: [984894849, 0.75]
};

const indexAddedTestOne = {
  test: ['a', 2 , 'c', 4, 42, "er"],
  indexExpected: [2, 5, 44]
};
const indexAddedTestTwo = {
  test: ['a', challenges, 984894849, 3/4],
  indexExpected: [984894849, 1.75]
};

// const indexedTestOne = {
//   test: ['a', 2 , 'c', 4, 42, "er"],
//   indexExpected: [2, 4, 42]
// };
// const indexedTestTwo = {
//   test: ['a', challenges, 984894849, 3/4],
//   indexExpected: [984894849, 0.75]
// };

test('numberFilter removes non-number items from array', () => {
  expect(
    numberFilter(...testOne.test)
  ).toStrictEqual(testOne.numberFilterExpected);
  expect(
    numberFilter(...testTwo.test)
  ).toStrictEqual(testTwo.numberFilterExpected);
});

test('indexAddedNumberFilter adds index number', () => {
  expect(
    indexAddedNumberFilter(...indexAddedTestOne.test)
  ).toStrictEqual(
    indexAddedTestOne.indexExpected
  );
  expect(
    indexAddedNumberFilter(...indexAddedTestTwo.test)
  ).toStrictEqual(
    indexAddedTestTwo.indexExpected
  );
});

// test('> 1 filter removes numbers 1 or less', () => {
//   expect(
//     greaterThanOneNumberFilter(...indexedTestOne.test)
//   ).toStrictEqual(
//     indexedTestOne.indexExpected
//   );
// });