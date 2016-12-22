var app = angular.module("badgerloop", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "pages/home.html"
	})
	.when("/braking", {
		templateUrl: "pages/braking.html"
	})
	.when("/electrical", {
		templateUrl: "pages/electrical.html"
	})
	.when("/levitation", {
		templateUrl: "pages/levitation.html"
	})
	.when("/vaccuum", {
		templateUrl: "pages/vaccuum.html"
	})
	.when("/contact", {
		templateUrl: "pages/contact.html"
	})
	.otherwise({
		templateUrl: "pages/home.html"
	});
});

