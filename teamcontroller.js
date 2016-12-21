angular.module('badgerloop', []).controller('TeamController', function($scope, $location, $http) {
	$scope.name = "Data Bound";
	$scope.count = 0;
	$scope.showBody = false;
	$scope.master = {firstName: "John", lastName: "Doe"};
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.teams = [
		{team: "President", firstname: "Dave", lastname: "Van Veen", email: "amikam@wisc.edu"},
		{team: "Technical Director", firstname: "Duncan", lastname: "Adams", email: "amikam@wisc.edu"},
		{team: "Operations Director", firstname: "Claire", lastname: "Holesovsky", email: ""},
		{team: "Electrical", firstname: "Eric", lastname: "Amikam", email: "amikam@wisc.edu"},
		{team: "Structural Design", firstname: "Anthony", lastname: "Palumbo", email: "amikam@wisc.edu"},
		{team: "Fabrication", firstname: "Max", lastname: "Henry", email: ""},
		{team: "Power Systems", firstname: "Jon", lastname: "Barker", email: ""},
		{team: "Software", firstname: "Jonah", lastname: "Pelfrey", email: "pelfrey@wisc.edu"},
		{team: "Virtual Reality", firstname: "Peter", lastname: "Procek", email: ""},
		{team: "Composites", firstname: "Nathan", lastname: "Orf", email: ""},
		{team: "Stability", firstname: "Justin", lastname: "Williams", email: ""},
		{team: "Controls", firstname: "Vaughn", lastname: "Kottler", email: ""},
		{team: "Braking", firstname: "Matthew", lastname: "Benbenek", email: ""},
		{team: "Levitation", firstname: "Ben", lastname: "Farley", email: ""},
		{team: "Dynamic Modeling", firstname: "Alec", lastname: "Fisher", email: ""},
		{team: "Feasability", firstname: "Michael", lastname: "Schlicting", email: ""},
		{team: "Industry Relations", firstname: "Kali", lastname: "Kinziger", email: ""},
		{team: "Media", firstname: "Eric", lastname: "Schirtzinger", email: ""},
		{team: "Finance", firstname: "Zuf", lastname: "Wang", email: ""},
		{team: "Marketing", firstname: "Jack", lastname: "McGinty", email: ""},
		{team: "Outreach", firstname: "Noah", lastname: "Pulvermacher", email: ""}
	]

	$scope.advisors = [
		{firstname: "", lastname: "", dep: ""},
	]

	$scope.myUrl = $location.absUrl();
	$http.get("http://www.w3schools.com/angular/customers.php ").then(function (response) {
		$scope.myResponse = response.data;
		$scope.responseNames = response.data.records;
	});

	$scope.showFunc = function() {
		$scope.showMe = !$scope.showMe;
	}

	$scope.showPanelBody = function() {
		$scope.showBody = !$scope.showBody;
	}

})
.directive('teamInfo', function() {
	return {
		template: "Custom Directive"
	}
});
