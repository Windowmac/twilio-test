require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.post('/api/twilio', (req, res) => {
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secure
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  const message = req.body.message;

  if (req.body) {
    client.messages
      .create({
        body: message,
        from: process.env.FROM_NUM,
        to: process.env.TO_NUM,
      })
      .then((message) => res.status(200).json(message.sid));
  } else {
    res.status(400).json('no body in request');
  }
});

app.listen(PORT, () => {
    console.log('listening on ', PORT);
});