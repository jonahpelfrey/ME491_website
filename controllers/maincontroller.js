angular.module('badgerloop', []).controller('MainController', function($scope, $location, $http) {
	$scope.name = "Data Bound";
	$scope.count = 0;
	$scope.showMe = false;
	$scope.showBody = false;
	$scope.firstName = "Jonah";
	$scope.lastName = "Pelfrey";
	$scope.master = {firstName: "John", lastName: "Doe"};
	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	}
	$scope.names = [
		'Jani',
		'Carl',
		'Margareth',
		'Joe',
		'Gustav',
		'Birgit',
		'Mary',
		'Kai'
	];

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

	$scope.eventFunction = function(myE) {
		$scope.x = myE.clientX;
		$scope.y = myE.clientY;
	}
});
