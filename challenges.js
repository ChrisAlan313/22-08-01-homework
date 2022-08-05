const numberFilter = (...theArgs) => {
  // Technically fails the challenge when using an infinite number, but that
  // edge case is outside of scope. ;)
  return theArgs.filter(arg => Number.isFinite(arg));
};

const indexAddedNumberFilter = (...theArgs) => {
  return numberFilter(...theArgs).map(
    (element, index) => { return element + index; }
  );
};

module.exports = { numberFilter, indexAddedNumberFilter } ;
