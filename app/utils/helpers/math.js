import { isNum } from './checkTypes';

const toRound = (x, n) => {
  if (isNum(x)) {
    return Number(x.toFixed(n));
  }
  return null;
};

export { toRound };
