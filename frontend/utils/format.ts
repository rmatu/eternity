/**
 * Display the number with 2 digits
 * @param {number} number
 */

export const twoDecimals = (number) => {
  return Math.floor(number / 100).toFixed(2);
};

/**
 * Capitalize first letter
 * @param {string} string
 */
export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Capitalize first letter and split every capitalized word in string
 * @param {string} name
 */
export const splitAndCapitalize = (name: string) => {
  return capitalizeFirstLetter(name)
    .match(/[A-Z][a-z]+|[0-9]+/g)
    .join(" ");
};
