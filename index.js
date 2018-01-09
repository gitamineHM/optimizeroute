/*jslint node: true */
/*jslint white: true */
'use strict';

function API() {

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var test_data = require('./tests/test_data'); // test data
var morgan = require('morgan');
var f = require('./functions')
var Param = require('./Param')

//Promise based HTTP client for the browser and node.js

var app = express();

app.use(cors());
// app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', function (req, res) {
    res.status(200).send('ok');
  });

app.post('/routeOptimizer', function(req, res, next) {
    if (req.body) {
      var input_data = req.body;
      // console.log(input_data)
      f.Optimize_To_API(input_data).then( (result) => {
        // console.log(result)
      res.json(result)
      }).catch(function (err) {
      res.send(err)
      });
  }
  });

var server = app.listen(Param.API_PORT, Param.API_HOST, function(){
//console.log('Listening on %s:%d...', Param.API_HOST || '*', Param.API_PORT);
});

process.on('uncaughtException', function(err) { //Deal with already : switch to next port
        if(err.errno === 'EADDRINUSE' && err.port === Param.API_PORT)
            { console.log('Port ' + Param.API_PORT + ' already in use.');
             app.listen( (parseInt(Param.API_PORT) + 1) , function(){
               console.log('listening on *: ' + ( parseInt(Param.API_PORT) + 1));
             });
           }
         });

// f.Optimize_To_API(input_data).then((res) => console.log(res))
return server;

}

API()

module.exports = API
