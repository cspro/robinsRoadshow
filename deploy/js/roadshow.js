var roadshow = roadshow || (roadshow = {});

roadshow.App = angular.module('roadshow.App', []);

roadshow.MainCtrl = function($scope, $timeout) {
	
	$scope.positions = [
		[-1000, 0]
	];
	
	$scope.testPos = '-1000';
	
	$timeout(function() {
		impress().init();
	}, 0);
};
