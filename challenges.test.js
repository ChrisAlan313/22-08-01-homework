const challenges = require('./challenges');
const numberFilter = challenges.numberFilter;
const indexedNumberFilter = challenges.indexedNumberFilter;
// const indexedGreaterThanOneNumberFilter = challenges.indexedGreaterThanOneNumberFilter;

const testOne = {
  test: ['a', 2 , 'c', 4],
  numberFilterExpected: [2, 4]
};
const testTwo = {
  test: ['a', challenges, 984894849, 3/4],
  numberFilterExpected: [984894849, 0.75]
};

test('numberFilter removes non-number items from array', () => {
  expect(
    numberFilter(...testOne.test)
  ).toStrictEqual(testOne.numberFilterExpected);
  expect(
    numberFilter(...testTwo.test)
  ).toStrictEqual(testTwo.numberFilterExpected);
});

test('indexedNumberFilter adds index number', () => {
  const indexedTestOne = {
    test: ['a', 2 , 'c', 4, 42, "er"],
    indexExpected: [[0, 2], [1, 4], [2, 42]]
  };
  const indexedTestTwo = {
    test: ['a', challenges, 984894849, 3/4],
    indexExpected: [[0, 984894849], [1, 0.75]]
  };

  expect(
    indexedNumberFilter(...indexedTestOne.test)
  ).toStrictEqual(
    indexedTestOne.indexExpected
  );
  expect(
    indexedNumberFilter(...indexedTestTwo.test)
  ).toStrictEqual(
    indexedTestTwo.indexExpected
  );
});

// test('indexedGreaterThanOneNumberFilter remov')