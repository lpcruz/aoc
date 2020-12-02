/**
 * 
 * @param {Array} array - The array to loop through and check 
 * @param {*} value - The value to check for in terms of occurrence
 */
function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

/**
 * 
 * @param {Object} limits - Contains the max and min thresholds 
 * @param {*} given
 */
function validate(limits, value) {
  if (!limits) {
    throw new Error(`You must pass in a max and min limit. Received ${limits}`);
  }
  if (value === limits.max) {
    console.log(`🎉 ${value} fulfills expected max limit of ${limits.max}`);
    return true;
  }
  if (value === limits.min) {
    console.log(`🎉 ${value} fulfills expected min limit of ${limits.min}`);
    return true;
  }
  console.error(`👎 ${value} did not fulfill either the max limit of ${limits.max} or min limit of ${limits.min}`);
  return false;
}

module.exports = {
  getOccurrence,
  validate
}