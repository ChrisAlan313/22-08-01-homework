
const notOptionalChain = (test_object, thing_name) => {
  return test_object.thing.name === thing_name;
}

const optional_chain = function() {}

module.exports = notOptionalChain;
