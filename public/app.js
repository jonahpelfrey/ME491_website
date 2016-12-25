var app = angular.module('badgerloop', ['teamController', 'homeController', 'designController', 'ngRoute']);

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
});





