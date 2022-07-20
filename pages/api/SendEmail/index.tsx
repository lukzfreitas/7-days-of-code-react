const SendEmail = async (from: string, to: string,) => {
    console.log(to);
    console.log(from);    
    // const response = await fetch('https://api.sendgrid.com/v3/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-My-Custom-Header': 'value-v',
    //       'Authorization': `Bearer ${process.env.api_key_send_grid}`,          
    //     },
    //     body: `{"personalizations":[{"to":[{"email":"${to}","name":"John Doe"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"${from}","name":"Sam Smith"},"reply_to":{"email":"${from}","name":"Sam Smith"}}`
    // })
    // console.log(response);
}

export default SendEmail