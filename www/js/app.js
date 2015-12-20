// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

myApp.controller('HomeCtrl', function($scope, $state) {
	$scope.search = function(city){
		$state.go('weather', {city: city});
	}
});

myApp.controller('WeatherCtrl', function($scope, $ionicLoading $stateParams, $http) {
	
	var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $stateParams.city + "&mode=json&units=metric&cnt=10";
	$ionicLoading.show({
		template: 'Chargement...'
	});
	$http.get(url).success(function(response){
		$ionicLoading.hide();
		$scope.weather = response;
	})
});

myApp.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	})
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutCtrl'
	})
	$stateProvider.state('weather', {
		url: '/weather/:city',
		templateUrl: 'templates/weather.html',
		controller: 'WeatherCtrl'
	})
	
	$urlRouterProvider.otherwise('/home')
});