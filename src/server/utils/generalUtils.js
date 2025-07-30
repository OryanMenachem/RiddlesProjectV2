/**
 * Utility functions and classes for general use in the server.
 * Includes: colored console output, input validation, timing, and a standard response object.
 */

import readline from 'readline-sync';
import chalk from 'chalk';

// Color functions for console output
export const colors = {
  cyan: chalk.cyan,
  error: chalk.red,
  success: chalk.green,
};

/**
 * Prompt the user for input in the console.
 * Keeps asking until a non-empty string is entered.
 * @param {string} [message] - Optional message to display before input.
 * @returns {string} The user's input.
 */
export function input(message) {
  if (message) {
    console.log('\n' + message + '\n');
  }

  let userInput;

  while (true) {
    userInput = readline.question(colors.cyan('> ')).trim();
    console.log();
    if (userInput) {
      return userInput;
    }
    console.log(colors.error('\nNo input was entered!\n'));
  }
}

/**
 * Measure how long a synchronous function takes to run.
 * @param {Function} fn - The function to execute.
 * @returns {number} Time in seconds.
 */
export function timeDecorator(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  return (end - start) / 1000;
}

/**
 * Standard response object for API and DAL functions.
 */
export class Response {
  constructor() {
    this.message = null;
    this.error = false;
    this.content = null;
  }
}

/**
 * Determines if a value is invalid based on its type.
 * Returns true if the value is null/undefined or does not match the expected type.
 * @param {*} val - The value to validate.
 * @param {string} type - The expected JavaScript type as a string (e.g., "string", "number").
 * @returns {boolean} True if the value is invalid, false otherwise.
 */
export function isInvalid(val, type = "string") {
    if (val == null) return true;
    if (typeof val !== type) return true;
    return false;
}

export function isTooShort(str, minLen = 1) {
      return str.trim().length < minLen;
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
};