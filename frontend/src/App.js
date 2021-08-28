const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

var employees = require('./routes/employees');
var routes = require('./routes');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/employees', employees.list);


app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});