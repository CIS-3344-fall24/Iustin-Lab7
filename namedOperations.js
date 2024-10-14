// This module will export 'add' and 'subtract' functions as named exports.

/**
 * Function -> this function will add 2 numbers, and it will be exported to the main.js
 *
 * @param x
 * @param y
 * @returns {*}
 */
export function add(x, y){
    return x + y;
}

/**
 * Function -> this function will add 2 numbers, and it will be exported to the main.js
 *
 * @param x
 * @param y
 * @returns {number}
 */
export function subtract(x, y){
    return x - y;
}