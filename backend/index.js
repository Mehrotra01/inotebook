const conToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000

conToMongo();
app.get('/', (req, res) => {
    res.send('Hello notes')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})