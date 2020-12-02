/**
 * 
 * @param {Array} entry - JSON data to format
 */
function format(entry) {
  const parsed = _parseString(entry);
  const info = Object.assign({...parsed});
  const data = {
    password: info[4].split(''),
    max: parseInt(info[1]),
    min: parseInt(info[0]),
    letter: info[2]
  };
  return data;
}

/**
 * 
 * @param {Array} array - The array to loop through and check 
 * @param {*} value - The value to check for in terms of occurrence
 */
function getOccurrence(array, value) {
  return parseInt(array.filter((v) => (v === value)).length);
}

/**
 * 
 * @param {Object} limits - Contains the max and min thresholds 
 * @param {*} value
 */
function validate(limits, value) {
  if (!limits) {
    throw new Error(`You must pass in a max and min limit. Received ${limits}`);
  }
  if (value > limits.max) {
    return false;
  }
  if (value < limits.min) {
    return false;
  }
  return true;
}

function _parseString(string) {
  return string.replace(/[-:]/g,' ').split(' ');
}

module.exports = {
  getOccurrence,
  validate,
  format,
  _parseString
}