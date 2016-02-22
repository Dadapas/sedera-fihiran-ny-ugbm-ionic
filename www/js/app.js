// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('sedera', ['ionic', 'ui.router', 'sedera.controllers', 'sedera.services'])
	.run(function ($ionicPlatform, $cordovaDeviceOrientation) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
    document.addEventListener("deviceready", function () {

    $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {
      var magneticHeading = result.magneticHeading;
      var trueHeading = result.trueHeading;
      var accuracy = result.headingAccuracy;
      var timeStamp = result.timestamp;
    }, function(err) {
      // An error occurred
      console.log(err);
    });



    var options = {
      frequency: 3000,
      filter: true     // if frequency is set, filter is ignored
    }

    var watch = $cordovaDeviceOrientation.watchHeading(options).then(
      null,
      function(error) {
        // An error occurred
        console.log(error);
      },
      function(result) {   // updates constantly (depending on frequency value)
        var magneticHeading = result.magneticHeading;
        var trueHeading = result.trueHeading;
        var accuracy = result.headingAccuracy;
        var timeStamp = result.timestamp;
      });


    watch.clearWatch();
    // OR
    $cordovaDeviceOrientation.clearWatch(watch)
      .then(function(result) {
        // Success!
        console.log(result);
      }, function(err) {
        // An error occurred
        console.log(err);
      });

    }, false);
  });

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            })
            .state('sedera', {
                url: '/sedera',
                templateUrl: 'templates/sedera.html',
                controller: 'SederaCtrl'
            })
            .state('hira', {
                url: '/sedera/:num',
                templateUrl: 'templates/hira.html',
                controller: 'HiraCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            })

    $urlRouterProvider.otherwise('/home')
});
