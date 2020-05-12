import R from 'ramda';

export const query = (data) => {
  const toString = (v) => R.is(Date, v) && v.toISOString() || v;
  const isObject = (v) => {
    if (R.is(Date, v)) { return false; }
    return R.is(Object, v);
  };
  const toQueryParam = (obj, prevName = '') =>
    R.keys(obj).map((key) =>
      (isObject(obj[key]) && toQueryParam(obj[key], `${prevName}${key}.`)) ||
      `${prevName}${key}=${toString(obj[key]) || ''}`);

  return `?${R.flatten(toQueryParam(data)).join('&')}`;
};
