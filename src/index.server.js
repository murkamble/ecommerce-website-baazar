const express = require('express')
const env = require('dotenv')

// environment variable or you can say constants
const app = express();
env.config();

// 
app.get("/", (req, res) => {
    res.status(200).json({ message: 'Welcome, server side.' })
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});