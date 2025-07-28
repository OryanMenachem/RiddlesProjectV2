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
    console.log(`\n${message}\n`);
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
    this.status = null;
  }
}

/**
 * Check if a value is invalid (wrong type or too short).
 * @param {*} val - Value to check.
 * @param {string} [type="string"] - Expected type.
 * @param {number} [minLen=1] - Minimum length for strings.
 * @returns {boolean} True if invalid, false if valid.
 */
export function isInvalid(val, type = "string", minLen = 1) {
  if (val == null) return true;
  if (typeof val !== type) return true;
  if (type === "string" && val.trim().length < minLen) return true;
  return false;
}
