/**
 * Display the number with 2 digits
 * @param {number} number
 */

export const twoDecimals = (number) => {
  return Math.floor(number / 100).toFixed(2);
};
