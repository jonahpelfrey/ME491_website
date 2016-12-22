var app = angular.module("badgerloop", ["ngRoute"]);

app.config(function($routeProvider) {
	'use strict';

	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'HomeController'
	})
	.when('/braking', {
		templateUrl: 'pages/braking.html',
		controller: 'HomeController'
	})
	.when('/electrical', {
		templateUrl: 'pages/electrical.html',
		controller: 'HomeController'
	})
	.when('/levitation', {
		templateUrl: 'pages/levitation.html',
		controller: 'HomeController'
	})
	.when('/vaccuum', {
		templateUrl: 'pages/vaccuum.html',
		controller: 'HomeController'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'TeamController'
	})
	.when('/analysis', {
		templateUrl: 'pages/structuralanalysis.html',
		controller: 'HomeController'
	})
	.when('/design', {
		templateUrl: 'pages/structuraldesign.html',
		controller: 'DesignController'
	})
	.otherwise({
		redirectTo: '/'
	});
})

var TeamController = app.controller('TeamController', ['$scope', function($scope) {

	$scope.teams = [
		{team: "President", firstname: "Dave", lastname: "Van Veen", email: "vanveen@wisc.edu"},
		{team: "Technical Director", firstname: "Duncan", lastname: "Adams", email: "deadams2@wisc.edu"},
		{team: "Operations Director", firstname: "Claire", lastname: "Holesovsky", email: "holesovsky@wisc.edu"},
		{team: "Electrical", firstname: "Eric", lastname: "Amikam", email: "amikam@wisc.edu"},
		{team: "Structural Design", firstname: "Anthony", lastname: "Palumbo", email: "ajpalumbo@wisc.edu"},
		{team: "Fabrication", firstname: "Max", lastname: "Henry", email: "henry5@wisc.edu"},
		{team: "Power Systems", firstname: "Jon", lastname: "Barker", email: "jdbarker2@wisc.edu"},
		{team: "Software", firstname: "Jonah", lastname: "Pelfrey", email: "pelfrey@wisc.edu"},
		{team: "Virtual Reality", firstname: "Peter", lastname: "Procek", email: "procek@wisc.edu"},
		{team: "Composites", firstname: "Nathan", lastname: "Orf", email: "norf@wisc.edu"},
		{team: "Stability", firstname: "Justin", lastname: "Williams", email: "justin.williams@wisc.edu"},
		{team: "Controls", firstname: "Vaughn", lastname: "Kottler", email: "vkottler@wisc.edu"},
		{team: "Braking", firstname: "Matthew", lastname: "Benbenek", email: "mbenbenek@wisc.edu"},
		{team: "Levitation", firstname: "Ben", lastname: "Farley", email: "bjfarley@wisc.edu"},
		{team: "Feasability", firstname: "Michael", lastname: "Schlicting", email: "Schlicting@wisc.edu"},
		{team: "Industry Relations", firstname: "Kali", lastname: "Kinziger", email: "kkinziger@wisc.edu"},
		{team: "Media", firstname: "Eric", lastname: "Schirtzinger", email: "schirtzinger@wisc.edu"},
		{team: "Finance", firstname: "Zuf", lastname: "Wang", email: "xwang523@wisc.edu"},
		{team: "Marketing", firstname: "Jack", lastname: "McGinty", email: "jtmcginty@wisc.edu"},
		{team: "Outreach", firstname: "Noah", lastname: "Pulvermacher", email: "npulvermache@wisc.edu"}
	]

	$scope.advisors = [
		{firstname: "Duncan", lastname: "Carlsmith", dep: "Physics", topic: "Magnetic Levitation"},
		{firstname: "Michael", lastname: "Cheadle", dep: "Mechanical Engineering", topic: "Mechanical Design"},
		{firstname: "John", lastname: "Booske", dep: "Electrical & Computer Engineering", topic: "Electromagnetics"},
		{firstname: "Daniel", lastname: "Ludois", dep: "Electrical & Computer Engineering", topic: "Power Electronics"},
		{firstname: "Kyle", lastname: "Hanson", dep: "Electrical & Computer Engineering", topic: "Batteries"},
		{firstname: "Mark", lastname: "Allie", dep: "Electrical & Computer Engineering", topic: "Printed Circuit Boards"},
		{firstname: "Joe", lastname: "Krachey", dep: "Electrical & Computer Engineering", topic: "Embedded Systems"},
		{firstname: "Chuck", lastname: "Dyer", dep: "Computer Science", topic: "Virtual Reality"},
		{firstname: "Suman", lastname: "Banjeree", dep: "Computer Science", topic: "Network Communication"},
		{firstname: "Christopher", lastname: "Rutland", dep: "Mechanical Engineering", topic: "Fluid Dynamics"},
		{firstname: "David", lastname: "Noyce", dep: "Civil Engineering", topic: "Transport Feasability"},
	]
}]);

var HomeController = app.controller('HomeController', ['$scope', function($scope) {

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
}]);

var DesignController = app.controller('DesignController', ['$scope', function($scope) {

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
		$scope.title = "Sheet Metal Holes";
		$scope.challenge = true;
		$scope.specs = false;
		$scope.solution = false;
	};
	$scope.showSpec = function() {
		$scope.title = "Rivet Procedure";
		$scope.challenge = false;
		$scope.specs = true;
		$scope.solution = false;
	};
	$scope.showSol = function() {
		$scope.title = "Structure";
		$scope.challenge = false;
		$scope.specs = false;
		$scope.solution = true;
	};
}]);

