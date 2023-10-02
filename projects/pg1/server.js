const express = require('express');
const path = require('path');
const morgan = require('morgan');  //http logging library for node.js https://www.geeksforgeeks.org/what-is-morgan-in-node-js/
const bodyParser = require('body-parser');

/* eslint-disable no-console */ //turns off parsing && disallows calls/assignments to methods of console

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //use json api https://jsonapi.org/

app.use(express.static(path.join(__dirname, './')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log(`App at: http://localhost:${port}`);
    }
});
module.exports = app;