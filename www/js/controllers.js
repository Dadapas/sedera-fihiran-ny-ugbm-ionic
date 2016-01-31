var db = null;
angular.module('sedera.controllers', ['ngSanitize', 'ngCordova'])
// Ici les messages de bienvenue dans l'application
.controller('HomeCtrl', function ($scope) {
    /*
     * Ici c'est vraimment affichage de de bienvenue
     */
})
.controller('ExampleCtrl', function ($scope, $cordovaSQLite){
   $scope.insert = function (firstname, lastname) {
     var query = "INSERT INTO people(firstname, lastname) VALUES (?, ?)";
     $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function (results) {
       console.log('INSERT ID->'+ results.insertId)
     }, function (error) {
       console.log(error);
     });
   }

   $scope.select = function (lastname) {
     var query = "SELECT firstname, lastname WHERE lastname = ?";
     $cordovaSQLite.execute(db, query, [lastname]).then(function (results) {
       if (results.row.length > 0){
         console.log('SELECTED ->'+ results.rows.item(0).firstname + ' '+ results.rows.item(0).lastname);
       }
     }, function (error) {
       console.log(error);
     })
   }
 })
    .controller('SederaCtrl', function ($scope, SederaFactory) {
        $scope.sederas = SederaFactory.findAll();
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
