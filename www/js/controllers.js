angular.module('starter.controllers', [])

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
    $scope.sederas = SederaFactory.getSederas();
})

.controller('HiraCtrl', function ($scope, SederaFactory, $stateParams) {
    /*
     * Selection de tous les sedera hira
     * Dans le sedera par les parametre de $stateParams
     */
    var sedera = SederaFactory.get(2);
    $scope.Sedera = sedera;
})

.controller('AboutCtrl', function ($scope) {
    /*
     * Ici c'est l'appropos du sedera
     * ugbm
     * A propos du concepteur et r�alisateur du projet
     */
});