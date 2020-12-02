/**
 * 
 * @param {Array} array - The array to loop through and check 
 * @param {*} value - The value to check for in terms of occurrence
 */
function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

module.exports = {
  getOccurrence
}