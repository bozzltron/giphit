const fetch = require('node-fetch');

exports.handler = async (event) => {
    
    console.log('event', event);

    let response, res;
    let headers = {
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin": "*",
    };

    try { 

        let url; 

        if (event.queryStringParameters && event.queryStringParameters.q && event.queryStringParameters.q !== '') {
            url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&offset=${event.queryStringParameters.offset || 0}&limit=25&q=${event.queryStringParameters.q}`;
        } else {
            url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`;
        }

        console.log('url', url);

        res = await fetch(url).then(res => res.json())

    } catch (e) {
        
        response = {
            statusCode: 500,
            body: JSON.stringify(e),
            headers: headers
        };

    }

    response = {
        statusCode: 200,
        body: JSON.stringify(res),
        headers: headers
    };

    return response;
};
