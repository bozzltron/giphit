const fetch = require('node-fetch');

exports.handler = async (event) => {

    let response, res;

    try { 

        let url; 

        if (event.query && event.query.q && event.query.q !== '') {
            url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}
                    &offset=${event.query.offset || 0}&limit=100&q=${event.query.q}`;
        } else {
            url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`;
        }

        res = await fetch(url).then(res => res.json())

    } catch (e) {
        
        response = {
            statusCode: 500,
            body: JSON.stringify(e),
            headers: {
                "Access-Control-Allow-Credentials" : true,
                "Access-Control-Allow-Origin": "*",
            }
        };

    }

    response = {
        statusCode: 200,
        body: JSON.stringify(res),
        headers: {
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin": "*",
        }
    };

    return response;
};