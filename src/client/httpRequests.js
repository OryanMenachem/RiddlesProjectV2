import fetch from 'node-fetch';






/**
 * Sends an HTTP request and returns the response as a JSON object.
 * @async
 * @function sendHttpRequest
 * @param {string} url - The endpoint to send the request to.
 * @param {string} method - The HTTP method (GET, POST, etc.).
 * @param {object|null} [body=null] - The request body for methods like POST or PUT.
 * @returns {Promise<object>} The parsed JSON response object, or an error object if the request fails.
 */
export default async function sendHttpRequest(url, method, body = null) {
  const options = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

    if (method.toUpperCase() !== "GET" && body !== null) {
        options.body = JSON.stringify(body);
    }

    await new Promise(res => setTimeout(res, 1000));

    try {
        let res = await fetch(url, options);

        let response;
        try {
            response = await res.json();
        } catch (jsonError) {
            response.error = true;
            response.message = jsonError.message;
            response.status = res.status;
            return response;
        }


        if (!res.ok) {
            response.error = true;
            response.message = res.statusText;
            response.status = res.status;
            return response;
        }

        return response;
      } catch (error) {
          response.error = true;
          response.message = error.message;
          response.status = 500;
          return response;
      }
}


