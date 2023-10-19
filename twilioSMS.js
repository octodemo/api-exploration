// service for sending sms via twilio

var twilio = require('twilio');

var accountSid = 'ACc9875dafa0b2ffcead02c109b6688484'; // Your Account SID from www.twilio.com/console
var authToken = 'c2b2b2b2b2b2b2b2b2b2b2b2b2b2b2b';   // Your Auth Token from www.twilio.com/console

//var client = new twilio.RestClient(accountSid, authToken);
var client = new twilio(accountSid, authToken);

var sendSMS = function (to, from, body) {
    client.messages.create({
        body: body,
        to: to,  // Text this number
        from: from // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

sendSMS('17326157295', '18447343869', 'Hello World!');