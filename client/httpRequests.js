import fetch from 'node-fetch';

export default async function sendRequest(url, method) {

    try { 

    let response = await fetch(url, {method : `${method}`} );

    response = response.json()

    return response

    } catch(err) {return err}
}

