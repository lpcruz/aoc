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

/**
 * 
 * @param {Object} data - The object containing the password information
 * @param {*} value - The letter to check for
 */
function validatePosition(data, value) {
  if (!data) {
    throw new Error(`You must pass in a max and min limit. Received ${data}`);
  }
  const info = {
    letter: value,
    max: data.max,
    min: data.min,
    password: data.password
  };
  const positions = _getPositions(info.password.join(""), info.letter);
  if (positions.includes(info.max) && positions.includes(info.min)) {
    return false;
  }
  if (positions.includes(info.max)) {
    return true;
  }
  if (positions.includes(info.min)) {
    return true;
  }
}

function _parseString(string) {
  return string.replace(/[-:]/g,' ').split(' ');
}

function _getPositions(str, value) {
  const indices = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === value) {
      indices.push(i + 1);
    }
  }
  return indices;
}

module.exports = {
  getOccurrence,
  validate,
  validatePosition,
  format,
  _parseString
}