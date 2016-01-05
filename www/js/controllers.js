angular.module('sedera.controllers', ['ngSanitize'])

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
})

.controller('HiraCtrl', function ($scope, SederaFactory, $stateParams, $http) {
    /*
     * Selection de tous les sedera hira
     * Dans le sedera par les parametre de $stateParams
     */
    $scope.Headers = SederaFactory.findOneByNum($stateParams.num);

    $http.get('/sedera/sedera.json').success(function (data) {
        $scope.Sedera = data;
    });
})

.controller('AboutCtrl', function ($scope) {
    /*
     * Ici c'est l'appropos du sedera
     * ugbm
     * A propos du concepteur et réalisateur du projet
     */
});