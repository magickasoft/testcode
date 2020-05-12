/**
 * Runs provided function and prints errors of the function to the console
 * @param {Function} fun Function to run
 * @param {String} errorComment comment of an error
 * @returns {Function} function to execute
 */
export const handleError = (fun, errorComment = 'Error in "handleError"') => (...params) => {
  try {
    fun(...params);
  } catch (error) {
    console.log(`${errorComment}: ${error}`);
  }
};
