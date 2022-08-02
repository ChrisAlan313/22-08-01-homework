
const notOptionalChain = (test_object, thing_name) => {
  return test_object.thing.name === thing_name;
}

const optionalChain = function(test_object, thing_name) {
  return test_object.thing?.name === thing_name;
}

module.exports = { notOptionalChain, optionalChain };
