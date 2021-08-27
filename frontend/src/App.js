//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


//class App extends Component {
  //render() {
    //console.log("Host URL"+process.env.PUBLIC_URL);
    //return (

      //<Router basename={process.env.PUBLIC_URL}>
        //<div className="App">
        //<header className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h1 className="App-title">Simple React App</h1>
        //</header>
      //</div>
    //</Router>
    //);
  //}
//}

//export default App;




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
app.get('/employees/add', employees.add);
app.post('/employees/add', employees.save);
app.get('/employees/delete/:id', employees.delete);
app.get('/employees/edit/:id', employees.edit);
app.post('/employees/edit/:id', employees.update);

app.listen(3000, function () {
    console.log('Server is running.. on Port 4000');
});