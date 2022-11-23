var express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        error: false,
        message: 'Hello World!'
    });
});

const PORT = process.env.PORT || 8000;
//console.log("process.env.PORT: " + process.env.PORT);
app.listen(PORT, () => {
    console.log("Env: " + process.env.NODE_ENV);
    console.log("Server opened! Port: " + PORT);
});