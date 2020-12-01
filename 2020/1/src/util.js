function _multiply (array) {
  let sum = 1;
  for (var i=0; i<array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;
}

function findTwoAndMultiply (array, sum) {
  let hashMap = {};
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]]) {
      results.push(hashMap[array[i]], array[i])
    } else {
      hashMap[sum - array[i]] = array[i];
    }
  }
  return _multiply(results);
};

function findThreeAndMultiply (arr, target) {  
  let results = [];
  for (let i = 0; i < arr.length; i++) { 
    let final = target - arr[i];    
    let map = {};
    for (let j = i + 1; j < arr.length; j++) {
      if (map[arr[j]]) {
        results.push([arr[j], arr[i], map[arr[j]]]);
      } else {
        map[final - arr[j]] = arr[j];
      }
    }
  }
  return _multiply(...results);
}

module.exports = {
  findTwoAndMultiply,
  findThreeAndMultiply,
  _multiply
};