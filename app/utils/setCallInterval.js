export const setCallInterval = (callback, callInterval = 1000) => {
  let nextCallAfter = 0;

  return (...args) => {
    const currentTime = Date.now();
    if (nextCallAfter < currentTime) {
      nextCallAfter = currentTime + callInterval;
      callback(...args);
    }
  };
};
