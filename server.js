const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve index.html
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// simulate error endpoint (for SRE demo)
app.get("/error", (req, res) => {
    throw new Error("Simulated failure");
});

app.listen(port, () => {
    console.log("App running on port " + port);
});