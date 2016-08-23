
var app = angular.module('mean-boilerplate', [
	'ui.router',
	'ngFileUpload'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "templates/main.html",
			controller: 'MainCtrl'
		});

	$urlRouterProvider.otherwise("/");
});