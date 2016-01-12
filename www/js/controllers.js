angular.module('sedera.controllers', ['ngSanitize', 'ngAnimate'])

// Ici les messages de bienvenue dans l'application
.controller('HomeCtrl', function ($scope) {
    /*
     * Ici c'est vraimment affichage de de bienvenue
     */
})

.controller('SederaCtrl', function ($scope, SederaFactory) {
    /*
     * Tous les listes de sedeara sont ici
     * Il est accompagner avec de input de type search (recherche)
     * On affiche par ordre croissant
     */
    $scope.sederas = SederaFactory.findAll();

    // Clear the input search
    $scope.clearSearch = function() {
      $scope.query = "";
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
});
