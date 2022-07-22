const SendEmail = async (from: string, to: string,) => {    
    fetch('https://api.sendgrid.com/v3/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',        
          'Authorization': `Bearer ${process.env.APIKEY_SENDGRID}`,          
        },
        body: `{"personalizations":[{"to":[{"email":"${to}","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"${from}","name":"Sam Smith"},"reply_to":{"email":"${from}","name":"Sam Smith"}}`
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
    
}

export default SendEmail