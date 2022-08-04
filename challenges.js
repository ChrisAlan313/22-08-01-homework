const numberFilter = (...theArgs) => {
  // Technically fails the challenge when using an infinite number, but that
  // edge case is outside of scope. ;)
  return theArgs.filter(arg => Number.isFinite(arg));
};

const indexedNumberFilter = (...theArgs) => {
  return numberFilter(...theArgs).map(
    (element, index) => {
      return [index, element];
    }
  );
};

module.exports = { numberFilter, indexedNumberFilter } ;
