const express = require('express');
const app = express();

// Read failure flag from App Service config
const injectError = process.env.INJECT_ERROR === "1";

// Home endpoint
app.get('/', (req, res) => {
  if (injectError) {
    res.status(500).send("Simulated App Failure (HTTP 500)");
  } else {
    res.send("App is healthy ✅");
  }
});

// Optional manual trigger (for local testing)
app.get('/inject-error', (req, res) => {
  res.status(500).send("Error manually triggered");
});

// Must use PORT from Azure
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
