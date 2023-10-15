const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();
const DOMAIN = 'sandbox53cb4f00876a4dc696e8afe46bdb59e9.mailgun.org'; 
const mg = mailgun({ apiKey: '9aabc92c5de5b7d684588583baaa905b-7ca144d2-4e036bec', domain: DOMAIN });

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const data = {
    from: 'jhanviaggarwal1610@gmail.com', 
    to: to,
    subject: subject,
    text: text,
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      res.send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
