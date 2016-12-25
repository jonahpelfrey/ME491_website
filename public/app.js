var app = angular.module('badgerloop', ['teamController', 'homeController', 'designController', 'loginController', 'ngRoute']);

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
	.when('/login', {
		templateUrl: 'pages/login.html',
		controller: 'LoginController'
	})
	.otherwise({
		redirectTo: '/'
	});
});





