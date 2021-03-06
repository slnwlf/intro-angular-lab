var app = angular.module("myApp", []);

app.controller("MovieCtrl", ['$scope', function($scope) {
	$scope.moviesToWatch = [{
		title: 'Titantic',
		rating: 'R',
		type: 'Romance'
	}, {
		title: 'Ex-Machina',
		rating: 'R',
		type: 'SciFi'
	}, {
		title: 'Star Wars',
		rating: 'PG-13',
		type: 'SciFi'
	}, {
		title: 'Star Trek',
		rating: 'R',
		type: 'SciFi'
	}, {
		title: 'Inside Out',
		rating: 'G',
		type: 'Animated'
	}];

	// $scope.movie = {};
	$scope.addMovie = function() {
		var newMovie = $scope.newMovie;
		$scope.moviesToWatch.push(newMovie);
		$scope.newMovie = {};
	};

	$scope.deleteMovie = function(movie) {
		var movieIndex = $scope.moviesToWatch.indexOf(movie);
		$scope.moviesToWatch.splice(movieIndex, 1);
	};

}]);