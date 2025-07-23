import fetch from 'node-fetch';


/**
 * Sends an HTTP request using the specified method, URL, and optional data payload.
 *
 * - Automatically sets the 'Content-Type' header to 'application/json'.
 * - For non-GET requests, serializes the `data` object as a JSON string and includes it in the request body.
 * - Introduces a 1-second artificial delay before sending the request.
 * - If the response status is not OK (i.e., status code 4xx or 5xx), throws an error which is caught and returned.
 *
 * @async
 * @function sendHttpRequest
 * @param {string} url - The URL to which the HTTP request is sent.
 * @param {string} method - The HTTP method to use (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {Object|null} [data=null] - Optional data to send in the request body (ignored for GET requests).
 * @returns {Promise<Object>} A promise that resolves to:
 *   - Parsed JSON response on success.
 *   - An object with an `error` property containing the error message on failure.
 *
 * @example
 * const result = await sendHttpRequest('https://localhost:5000/riddles', 'POST', { key: value });
 * if (result.error) {
 *   console.error('Request failed:', result.error);
 * } else {
 *   console.log('Success:', result);
 * }
 */



export default async function sendHttpRequest(url, method, data = null) {
    
    try {
      
      // const result = {
      //   error: false,
      //   message: null,
      //   data: null
      // }

      const options  = {
        method: method,
        headers: {'Content-Type': 'application/json'},
      }; 

      if (method != "GET" && data != null ) {options.body = JSON.stringify(data) }

      await new Promise(res => setTimeout(res, 2000));

      let response = await fetch(url, options);

      if (!response.ok) {
  
        throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
      }
            
      return await response.json();
      
    } catch(error) { return {error : error.message}}
}
  

      


   


