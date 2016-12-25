angular.module('homeController', [])
.controller('HomeController', function($scope) {

	$scope.title = "Challenge";
	$scope.challenge = true;
	$scope.specs = false;
	$scope.solution = false;
	$scope.pa = true;
	$scope.pb = false;

	$scope.showPartA = function() {
		$scope.pa = true;
		$scope.pb = false;
	};

	$scope.showPartB = function() {
		$scope.pa = false;
		$scope.pb = true;
	};

	$scope.showChal = function() {
		$scope.title = "Challenge";
		$scope.challenge = true;
		$scope.specs = false;
		$scope.solution = false;
	};
	$scope.showSpec = function() {
		$scope.title = "Specifications";
		$scope.challenge = false;
		$scope.specs = true;
		$scope.solution = false;
	};
	$scope.showSol = function() {
		$scope.title = "Solution";
		$scope.challenge = false;
		$scope.specs = false;
		$scope.solution = true;
	};
});