'use strict';

angular.module('wixApp').factory('myReverse', function () {
	return function(query) {
//		if (typeof query === 'string') {
 	   		return query.split('').reverse().join('');
// 	   	} else {
// 	   		return '';
// 	   	}
	}
});