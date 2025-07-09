

/**
 * Measures the execution time of a given synchronous function.
 * @param {Function} fn - The function to be executed and measured.
 * @returns {number} The time in seconds it took to execute the function.
 */


export default function timeDecorator(fn) {

    const start = Date.now();
    fn();
    const end = Date.now();
    
    return (end - start) / 1000;

}