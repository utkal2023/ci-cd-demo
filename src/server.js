const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        application: "CI/CD Demo",
        version: "1.0.0",
        message: "Application is running successfully"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}`);
});
