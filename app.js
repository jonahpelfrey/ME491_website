var app = angular.module("badgerloop", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/braking", {
		templateUrl: "braking.html"
	})
	.when("/electrical", {
		templateUrl: "electrical.html"
	})
	.when("/levitation", {
		templateUrl: "levitation.html"
	})
	.when("/vaccuum", {
		templateUrl: "vaccuum.html"
	})
	.when("/contact", {
		templateUrl: "contact.html"
	})
	.otherwise({
		templateUrl: "home.html"
	});
});

