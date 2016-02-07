angular.module('sedera.controllers', ['ngSanitize', 'ngCordova'])
// Ici les messages de bienvenue dans l'application
.controller('HomeCtrl', function ($scope) {
    /*
     * Ici c'est vraimment affichage de de bienvenue
     */
})
    .controller('SederaCtrl', function ($scope, SederaFactory) {
        $scope.sederas = SederaFactory.SomeSedera;

        $scope.loadMore = function (){
            $scope.sederas.push(SederaFactory.findOneByNum($scope.sederas.length));
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }

        $scope.$on('$stateChangeSuccess', function () {
            $scope.loadMore();
        })
    })

.controller('HiraCtrl', function ($scope, SederaFactory, $stateParams) {
    $scope.Sedera = SederaFactory.findOneByNum($stateParams.num);
})

.controller('AboutCtrl', function ($scope) {
    /*
     * Ici c'est l'appropos du sedera
     * ugbm
     * A propos du concepteur et réalisateur du projet
     */
  $scope.version = "1.0.0@dev"
})

.controller('DiviceOrientationCtrl', function($cordovaDeviceOrientation) {

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
})
;
