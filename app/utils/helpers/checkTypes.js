import R from 'ramda';

const isFunc = (el) => R.is(Function, el);
const isString = (el) => R.is(String, el);
const isObject = (el) => R.is(Object, el);
const isBool = (el) => R.is(Boolean, el);
const isArr = (el) => R.is(Array, el);
const isNum = (el) => R.is(Number, el);

export {
  isFunc,
  isString,
  isObject,
  isBool,
  isArr,
  isNum
};
