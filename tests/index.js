'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var test_data = require('./test_data.js'); // test data
var f = require('../functions.js');// functions
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

// const server = 'http://localhost:6001'
// var server = require('../index.js')
chai.use(chaiHttp);


describe('Testing functions', function() {

  it('Should use Predict_futur_trafic to get unitary trafic estimation', function(done) {
    var a = test_data.input_data_3
    f.Predict_futur_trafic(a.home.lat,a.home.lng,a.destination.lat,a.destination.lng,a.departureTime).then((res) => {
    res.trafictime.should.equal(550)
    done()
  })
  });

  it('should transform API JSON', function() {
    var a = test_data.input_data_1;
    var b = test_data.output_data_3;
    var c = f.API_JSON_TO_GOOGLE_JSON(a)
    expect(c).to.deep.equal(b);
  });

  it('should encode query parameter', function() {
    var a = test_data.output_data_3;
    var b = test_data.output_data_4;
    var c = f.Encode_Query_String(a)
    expect(c).to.equal(b);
  });

  it('should compute trafic duration', function() {
     var a = test_data.output_data_5;
     var c = f.computeTraficDuration(a)
     expect(c).to.deep.equal(550);
  });

  it('should predict futur trafic', function(done) {
     f.Predict_futur_trafic('48.865878','2.3558864','48.8627003','2.3382061','1613243521').then((res) =>
      {
       expect(res.trafictime).to.equal(550);
       done()
     })
  });

})

describe('Endpoint POST /routeOptimizer', function() {
  var server;

  this.timeout(10000); // How long to wait for a response (ms)

  beforeEach(function() {
   server = require('../index.js')(); // Load server
  });

  afterEach(function(done) {
    server.close(done); // close server after each test
  });

  it('Check server UP', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              // res.body.should.be.a('array')
              done()
          });
    });


  it('Endpoint POST /routeOptimizer test with input data ', function(done) {
      chai.request(server)
      .post('/routeOptimizer')
      .send(test_data.input_data_1)
      .end((err,res) => {
        //console.log(res.body)
        res.should.have.status(200);
        res.body.should.be.a('object');

        done()
      });
  });

});
