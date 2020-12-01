const { entries } = require('./src/expense-report.json');
const { findTwoAndMultiply, findThreeAndMultiply } = require('./src/util');

console.log(findTwoAndMultiply([...entries], 2020));
// console.log(findThreeAndMultiply([...entries], 2020));