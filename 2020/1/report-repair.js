const { entries } = require('./src/expense-report.json');
const { findTwoAndMultiply, findThreeAndMultiply } = require('./src/util');

console.log(`🎉 The product for two entries is ${findTwoAndMultiply([...entries], 2020)}`);
console.log(`🎉 The product for three entries is ${findThreeAndMultiply([...entries], 2020)}`);