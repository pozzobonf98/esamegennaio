const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const areaRoutes = require('./area');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/area", areaRoutes)

app.get('/', function(req, res) {
	res.send('Hello! The application is running');
});


module.exports = app;