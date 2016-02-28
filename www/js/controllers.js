angular.module('sedera.controllers', ['ngSanitize', 'ngCordova'])

// Ici les messages de bienvenue dans l'application
.controller('HomeCtrl', function ($scope, $ionicScrollDelegate) {

})

.controller('SederaCtrl', function ($scope, SederaFactory, $ionicScrollDelegate) {
	$scope.sederas = SederaFactory.findAll();

	$scope.clearSearch = function() {
    	$scope.search = '';
  	}
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
  $scope.version = "1.5.2",
  $scope.angularVersion = angular.version;
})

.filter('search', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.first_name.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  }
});