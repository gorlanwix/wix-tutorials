'use strict';

angular.module('wixApp').filter('myReverseFilter', function(myReverse) {
	return function(input) {
		if (typeof input === 'string') {
			return myReverse(input);
		} else {
			return '';
		}
	}
});