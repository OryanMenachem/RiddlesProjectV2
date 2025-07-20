import fetch from 'node-fetch';


/**
 * Sends an HTTP request with the given method, URL, and optional JSON body.
 *
 * Automatically sets the 'Content-Type' header to 'application/json'.
 * If the response status is not OK (4xx or 5xx), throws an error.
 *
 * @async
 * @param {string} url - The URL to send the request to.
 * @param {string} method - HTTP method to use (e.g., 'GET', 'POST').
 * @param {Object|null} [data=null] - Optional data to send as a JSON body.
 * @returns {Promise<Object|string>} Parsed JSON response if successful, or an error message string.
 */

export default async function sendHttpRequest(url, method, data = null) {
    
    try { 

        let options  = {
                
        method: method,
        headers: {'Content-Type': 'application/json'},
      };
     

      if (method != "GET" && data != null ) {options ["body"] = JSON.stringify(data) }

      let response = await fetch(url, options);
      
      if (!response.ok) {
  
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }
      
      
      return await response.json();
      
    } catch(err) { return {error : err.message}}
}
  

      


   


