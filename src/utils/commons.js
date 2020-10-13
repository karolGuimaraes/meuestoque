const R = require('ramda');

const isNull = arg => R.isNil(arg) || R.isEmpty(arg);

module.exports = {
  isNull
}