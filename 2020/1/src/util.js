function _multiply (array) {
  let sum = 1;
  for (var i=0; i<array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;
}

const findTwoAndMultiply = (array, sum) => {
  let hashMap = {};
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push(hashMap[array[i]], array[i])
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  const product = _multiply(results);
  return product;
};

// @todo: actually solve
const findThreeAndMultiply = (array, sum) => {
  let hashMap = {};
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push(hashMap[array[i]], array[i], array[i])
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  const product = _multiply(results);
  return product;
};

module.exports = {
  findTwoAndMultiply,
  findThreeAndMultiply,
  _multiply
};