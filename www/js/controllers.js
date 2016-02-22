angular.module('sedera.controllers', ['ngSanitize', 'ngCordova'])

// Ici les messages de bienvenue dans l'application
.controller('HomeCtrl', function ($scope) {

})

.controller('SederaCtrl', function ($scope, SederaFactory) {
	$scope.sederas = SederaFactory.findAll();
})

.controller('HiraCtrl', function ($scope, $stateParams, SederaFactory) {
    $scope.Sedera = SederaFactory.findOneByNum($stateParams.num);
})

.controller('AboutCtrl', function ($scope) {
    /*
     * Ici c'est l'appropos du sedera
     * ugbm
     * A propos du concepteur et réalisateur du projet
     */
  $scope.version = "1.0.0@dev",
  $scope.angularVersion = angular.version;
});
