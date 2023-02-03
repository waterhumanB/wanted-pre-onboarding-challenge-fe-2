/** @function addition
 * @param {number} a 연산하고자 하는 0 이상의 정수
 * @param {number} b 연산하고자 하는 0 이상의 정수
 * @returns {number} a + b
 */

const addition = (a, b) => a + b;

/**
 * a는 b보다 크거나 같다
 * a가 b보다 적은 수라면 -1을 반환한다
 * @function subtraction
 * @param {number} a 연산하고자 하는 0 이상의 정수
 * @param {number} b 연산하고자 하는 0 이상의 정수
 * @returns {number} a - b
 */

const subtraction = (a, b) => (a >= b ? a - b : -1);
