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
	.when('/customer', {
		templateUrl: 'pages/customer.html',
		controller: 'CustomerController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.factory('socket', ['$rootScope', function($rootScope) {
	var socket = io.connect();

	return {
		on: function(eventName, callback) {
			socket.on(eventName, callback);
		},
		emit: function(eventName, data) {
			socket.emit(eventName, data);
		}
	};
}]);

app.controller('CustomerController', function($scope, socket) {
	$scope.newCustomers = [];
	$scope.currentCustomer = {};
	
	$scope.join = function() {
		socket.emit('add-customer', $scope.currentCustomer);
	};

	$scope.leave = function() {
		socket.emit('rem-customer', $scope.currentCustomer);
	}
	
	socket.on('add-notify', function(data) {
		$scope.$apply(function() {
			$scope.newCustomers.push(data.customer);
		});
	});

	socket.on('rem-notify', function(data) {
		$scope.$apply(function() {
			var index = $scope.newCustomers.indexOf(data.customer.name);
			$scope.newCustomers.splice(index, 1);
		})
	})

	// socket.on('rem-notify', function(data) {
	// 	$scope.$apply(function() {
	// 		$scope.newCustomers.
	// 	})
	// })
}); 

