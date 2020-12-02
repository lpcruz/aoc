const passwords = require('./src/passwords.json');
const { getOccurrence, validate, validatePosition, format } = require('./src/util');

const getPasswordInfo = data => {
  return data.map(password => format(password));
};

const getEachPasswordOccurrence = info => {
  return getOccurrence(info.password, info.letter);
}

const validateEachPassword = data => {
  const passwordInfo = getPasswordInfo(data);
  const res = passwordInfo.map(pw => validate(pw, getEachPasswordOccurrence(pw)));
  const count = res.filter(Boolean).length;
  console.log(`${count} valid out of ${res.length} passwords`);
}

const validateEachPasswordPosition = data => {
  const passwordInfo = getPasswordInfo(data);
  const res = passwordInfo.map(pw => validatePosition(pw, pw.letter));
  const count = res.filter(Boolean).length;
  console.log(`${count} valid out of ${res.length} passwords based on position policy`);
}

validateEachPassword(passwords);
validateEachPasswordPosition(passwords);