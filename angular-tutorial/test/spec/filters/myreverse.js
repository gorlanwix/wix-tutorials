'use strict';

describe('Filter: myReverse', function () {

  var myReverse;

  var myReverseFactory;

  beforeEach(module('wixApp', function($provide) {
  	myReverseFactory = jasmine.createSpy('myReverseFactorySpy');
  	$provide.value('myReverse', myReverseFactory);
  }));

  beforeEach(inject(function ($filter) {
  	myReverse = $filter('myReverseFilter');
  }));

  it('should use myReverse factory', function() {
  	myReverse('test');
  	expect(myReverseFactory).toHaveBeenCalled();
  })
  it('should not use myReverse factory', function() {
  	myReverse(null);
  	expect(myReverseFactory).not.toHaveBeenCalled();
  })
 });