import fetch from 'node-fetch';

/**
 * Sends an HTTP request with the given method, URL, and optional body.
 *
 * @param {string} url - The address to send the request to.
 * @param {string} method - The HTTP method to use (like 'GET', 'POST', etc.).
 * @param {Object} [body] - The data to send with the request (for POST, PUT, etc.).
 *
 * @returns {Promise<string>} A formatted JSON string from the server's response.
 *
 * This function automatically sets the 'Content-Type' to 'application/json'
 * and converts the request body to JSON. It also parses the JSON response.
 */

export default async function sendHttpRequest(url, method, body) {

    try { 

    let response = await fetch(url, {
                
        method: method,

        headers: {'Content-Type': 'application/json'},

        body: JSON.stringify(body)

    });

    return JSON.stringify(await response.json(), null, 2)

    } catch(err) {return err}
}

