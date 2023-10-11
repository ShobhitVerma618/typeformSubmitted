const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3198; // Change this to your desired port

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Endpoint for receiving webhook POST requests
app.post('/webhook', (req, res) => {
  const webhookData = req.body;

  // Do something with the webhook data, e.g., log it
  console.log('Received a webhook:', webhookData);

  // Send a response (optional)
  res.status(200).json({ message: 'Webhook received successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook receiver server is running on port ${port}`);
});
