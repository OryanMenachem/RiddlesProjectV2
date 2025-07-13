import fetch from 'node-fetch';


/**
 * Sends an HTTP request with the given method, URL, and optional JSON body.
 * 
 * Automatically sets 'Content-Type' to 'application/json'.
 * Throws an error if the server response is not OK (status 4xx or 5xx).
 * 
 * @async
 * @param {string} url - The URL to send the request to.
 * @param {string} method - HTTP method (e.g., 'GET', 'POST').
 * @param {Object} [body=null] - Optional data to send as JSON.
 * @returns {Promise<string>} JSON-formatted response or error message.
 */

export default async function sendHttpRequest(url, method, body = null) {

    try { 

    let response = await fetch(url, {
                
        method: method,

        headers: {'Content-Type': 'application/json'},

      });

      if (method != "GET") {response[body] = JSON.stringify(body)}

    if (!response.ok) {

      throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
    }

    const msg = await response.json();
    
    return msg;

    } catch(err) { return JSON.stringify({error : err.message}, null, 2) }
}

