'use strict';

var mocha = require('mocha');
var chai = require('chai');
var sinon = require('sinon');
var myReverse = require('../modules');
var expect = chai.expect;
var app = require('../app');
var request = require('supertest');


describe('Module: myReverse', function() {
	it('should reverse the input string', function() {
		expect(myReverse('input')).to.equal('tupni');
	});
});

describe('POST /post', function() {
    it('should return text that was sent', function(done){
        request(app)
          .post('/post')
          .send('myinput=reversethis')
          .expect('sihtesrever')
          .expect(200, done);
    });
});
