const express = require('express');
const app = express();

// read from app setting (important for App Service demo)
let injectError = process.env.INJECT_ERROR === "1";

app.get("/", (req, res) => {
    if (injectError) {
        res.status(500).send("Simulated failure (HTTP 500)");
    } else {
        res.send("App is healthy ✅");
    }
});

// optional endpoints (for manual testing)
app.get("/inject-error", (req, res) => {
    injectError = true;
    res.send("Error Enabled");
});

app.get("/fix-error", (req, res) => {
    injectError = false;
    res.send("Error Disabled");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on port ${port}`));