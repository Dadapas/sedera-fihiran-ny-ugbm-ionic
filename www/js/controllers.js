angular.module('sedera.controllers', ['ngSanitize'])
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


        $scope.clearSearch = function () {
            $scope.query = "";
        }
        $scope.scrollTop = function () {
            $ionicScrollDelegate.scrollTop();
        }
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
});
