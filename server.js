const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Serve static files (index.html)
app.use(express.static(__dirname));

// Default route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log("App running on port " + port);
});