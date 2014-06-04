'use strict';

describe('Factory: myReverse', function () {

  var myReverse;

  beforeEach(module('wixApp'));

  beforeEach(inject(function (_myReverse_) {
	myReverse = _myReverse_;
   }));

  it('should reverse the input query', function() {
  	expect(myReverse('input')).toBe('tupni');
  });
  // it('should return an empty string given a null input', function () {
  // 	expect(myReverse(null)).toBe('');
  // });
  // it('should return an empty string given an undefined input', function () {
  // 	expect(myReverse(undefined)).toBe('');
  // });

 });