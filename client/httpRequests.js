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

export default async function sendHttpRequest(url, method, data = null) {

    try { 

    let response = await fetch(url, {
                
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: data != null ? JSON.stringify(data) : null

      });

      if (!response.ok) {
  
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }
  
      return await response.json();
      
    } catch(err) { return `\nERROR \nlocation: client/httpRequests.js.  \ndetails: ${err.message}\n`}
}
  


   


