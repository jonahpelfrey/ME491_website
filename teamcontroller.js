angular.module('badgerloop', []).controller('TeamController', function($scope, $location, $http) {
	$scope.name = "Data Bound";
	$scope.count = 0;
	$scope.showBody = false;
	$scope.master = {firstName: "John", lastName: "Doe"};
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.teams = [
		{team: "Electrical", firstname: "Eric", lastname: "Amikam", email: "amikam@wisc.edu"},
		{team: "Software", firstname: "Jonah", lastname: "Pelfrey", email: "pelfrey@wisc.edu"},
		{team: "Fabrication", firstname: "Anthony", lastname: "Palumbo", email: ""},
		{team: "Fabrication", firstname: "Gabe", lastname: "Montoya-Rivera", email: ""},
		{team: "Structural & Thermal Analysis", firstname: "Ben", lastname: "Moldenhauer", email: ""},
		{team: "Vaccuum Compatibility", firstname: "Brandon", lastname: "Hahn", email:""},
		{team: "Team Operations", firstname: "Claire", lastname: "Holesovsky", email: ""},
		{team: "Braking", firstname: "Ian", lastname: "Wortley", email: ""},
		{team: "Levitation & Air Suspension", firstname: "Vladimir", lastname: "Bouriakov", email: ""}
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
