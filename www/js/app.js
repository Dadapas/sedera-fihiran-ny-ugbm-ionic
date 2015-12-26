// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'ui.router'])

        .run(function ($ionicPlatform) {
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
        });
myApp.factory('SederaFactory', function ($http, $q) {
    var factory = {
        Sederas: [
            {
                "num": "1",
                "titre": "Mitoria ny famonjena",
                "hira": {
                    "1": [
                        "Mitoria ny famonjena",
                        "Ry Tanora ny Jeso",
                        "Mbola maro sesehena",
                        "Reo namanao zay maizina",
                        "Mitoria, Mitoria, Mitoria",
                        "Mitoria ny fa-mo-nje-na",
                        "Zay izao no baiko azonao ka meteza re izao"
                    ],
                    "2": [
                        "Indro Jeso Kapiteny",
                        "Mialoha anao izao",
                        "Ny fiainany omeny",
                        "Ka manaraha azy izao",
                        "Mandroso, Mandroso, Mandroso",
                        "Mandroso sy ma-zo-to-a",
                        "Zay izao no baiko azonao",
                        "Ka meteza re izao"
                    ],
                    "3": [
                    ]
                }
            },
            {
                "num": "11",
                "titre": "Misaotra Anao 'zahay ry Ray",
                "hira": {
                    "1": [
                        "Misaotra Anao 'zahay ry Ray",
                        "Noho ny fitiavanao",
                        "Ny aizin-kitroka nisy ahy",
                        "Indro fa nidiranao",
                        "He hazavana lehibe no",
                        "Indro fa naposakao",
                        "Ka ravoravo ery ny fo",
                        "Izay midera Anao"
                    ],
                    "2": [
                        "Na dia tsy mendrika ry Ray",
                        "Ireto te-hidera anao",
                        "Dia notoloranao tokoa ny",
                        "Fanavotan-dehibe",
                        "Na dia mahantra aza re dia",
                        "Novidin'ny zanakao",
                        "Tamin'ny rany izay madio",
                        "Mba ho isan'ny anao"
                    ],
                    "3": [
                        "He menatra tokoa ry Ray",
                        "Hifanatrika Aminao",
                        "Kanefa noho ny zanakao dia",
                        "Indro fa manatona aho",
                        "Manery ahy izany foko",
                        "Resin'ny fitiavanao",
                        "'Lay fo maniry mafy anao",
                        "Ka indro anjakao"
                    ],
                    "ref": [
                        "Inona àry no havaliko anao",
                        "Noho ireo soa efa narotsakao",
                        "He hazavana lehibe no",
                        "Indro fa naposakao",
                        "Ka ravoravo ery ny fo",
                        "Izay midera Anao"
                    ]
                }
            },
            {
                "num": "13",
                "titre": "Andriamanitra he mahagaga",
                "hira": {
                    "1": [
                        "Andriamanitra he mahagaga",
                        "Ny zavatra nataon'ny tànanao",
                        "Ny kintana ny kotrokoran'andro",
                        "Ampisehoanao ny herinao"
                    ],
                    "2": [
                        "Raha mitsangatsangana an'ala",
                        "Ka mahare ny hiram-borona",
                        "Sy rivotra mitsoka moramora",
                        "Ary mahita tendrombohitra"
                    ],
                    "3": [
                        "Raha tsaroako fa Jeso Tompo",
                        "Natolotry ny Ray an-danitra",
                        "Ho avotra noho ny fahotako",
                        "'Zay vita tao Gologota avokoa"
                    ],
                    "ref": [
                        "Midera Anao Andriamanitra",
                        "Fa lehibe tokoa Ianao"
                    ]
                }
            },
            {
                "num": "15",
                "titre": "Raha eo am-pahitana",
                "hira": {
                    "1": [
                        "Ny volana aman-kintana",
                        "Izay noforonina",
                        "Mitory avokoa",
                        "Ny fahalehibeazanao",
                        "Ny tombon'andro izay",
                        "Mbola divinay izao",
                        "Dia famindrampo avy Aminao"
                    ],
                    "2": [
                        "Ny toeram-boninahitra",
                        "Izay anananao",
                        "Dia nafoinao",
                        "Mba hanavotanao",
                        "Ny olona ety",
                        "Izay efa nandao Anao",
                        "Mba mahagaga ny fitiavanao"
                    ],
                    "3": [
                        "Ny fiverenanao izay",
                        "Mbola andrasako",
                        "Ny fananganana",
                        "Amin'ny maty koa",
                        "Dia mbola ho anisan'ny",
                        "Asanao avokoa",
                        "'Zay manamafy ny finoako",
                    ],
                    "ref": [
                        "Raha eo am-pahitana",
                        "Ny asan-dratsan-tànanao",
                        "Sy ny nitiavanao",
                        "Izao tontolo izao",
                        "Dia zovy no hanamafy fo",
                        "Ka tsy hidera Anao",
                        "Fa Tompo manan-kery Ianao"
                    ]
                }
            },
            {
                "num": "18",
                "titre": "Tsy hitsahatra hidera",
                "hira": {
                    "1": [
                        "Na hariva e",
                        "Na maraina"
                    ],
                    "2": [
                        "E! ny fahamarinanao",
                        "Mandrakizay"
                    ],
                    "3": [
                        "Eny tsara fo Ianao",
                        "Ka mamiko indrindra",
                    ],
                    "4": [
                        "Maharavo e",
                        "Ny asanao",
                    ],
                    "5": [
                        "Mihoby Anao aho",
                        "Ianao ry Mpahary",
                    ],
                    "6": [
                        "Mihoby Anao aho",
                        "Ianao, ry Mpamonjy",
                    ],
                    "7": [
                        "Ary Ianao e",
                        "Manamasina anay",
                    ],
                    "ref": [
                        "Tsy hitsahatra hidera",
                        "Hidera Anao ny foko"
                    ]
                }
            },
            {
                "num": "19",
                "titre": "He hiakam-pifaliana",
                "hira": {
                    "1": [
                        "Ianao no Tompoko",
                        "Sy Andriamanitro",
                        "Nitady Anao tokoa",
                        "Ny fanahiko"
                    ],
                    "2": [
                        "Raha vao maraina koa",
                        "Ianao no sainiko",
                        "Feno hafaliana",
                        "Ny fo ny alina"
                    ],
                    "3": [
                        "Feno fiandanam-po",
                        "Ambany elatrao",
                        "Ianao no vonjiko",
                        "Ianao no tokiko"
                    ],
                    "4": [
                        "Tiako ho hita ny",
                        "Fitoera-masinao",
                        "Ny voninahitrao",
                        "Ary ny herinao"
                    ],
                    "ref": [
                        "He hiakam-pifaliana",
                        "No hiderako Anao",
                        "Asandratro ny tànanao",
                        "Hiderako Anao"
                    ]
                }
            },
            {
                "num": "20",
                "titre": "Noho 'ty hafaliana ity,Haleloia!",
                "hira": {
                    "1": [
                        "Noho 'ty hafaliana ity,Haleloia!",
                        "Nomenao ity foko ity,Haleloia!",
                        "Dia hihira aho Kristy,Haleloia!",
                        "Ho Anao Mpamonjiko,Haleloia!"
                    ],
                    "2": [
                        "Mbola averiko eto indray,Haleloia!",
                        "Fa Ianao dia maty ho ahy,Haleloia!",
                        "Izany no iderako Anao,Haleloia!",
                        "'Zay herena soa ho ahy,Haleloia!"
                    ],
                    "3": [
                        "Isan'andro, isan'ora,Haleloia!",
                        "Ho tempolinao aho,Haleloia!",
                        "Toy ny voninkazo tsara,Haleloia!",
                        "Mani-pofona ho Anao,Haleloia!"
                    ]
                }
            },
            {
                "num": "24",
                "titre": "Rehefa misaina",
                "hira": {
                    "1": [
                        "Rehefa misaina",
                        "Ny famonjen'ny Jesosy aho",
                        "Sy izay rehetra nataony tamiko",
                        "Te hiantso mafy aho hoe:",
                        "Haleloia",
                        "Isaorako Azy ny famonjeny"
                    ],
                    "2": [
                        "Rehefa misaina",
                        "Ny fitiavan'i Jesosy aho"
                    ],
                    "3": [
                        "Rehefa misaina",
                        "Ny famindrampon'i Jesosy aho"
                    ]
                }
            },
            {
                "num": "27",
                "titre": "O nivoha",
                "hira": {
                    "1": [
                        "'Zao tanintsika izao",
                        "Sy ny zava-tsoa",
                        "'Zay mandravaka azy",
                        "'Zao tenantsika izao",
                        "Sy ny zava-maro",
                        "Nomeny antsika",
                        "Dia samy asa-tanan'ilay",
                        "Mahefa namonjy antsika",
                        "Eny e! eny e!",
                        "'Ndeha isika",
                        "Hihoby ny Tompo"
                    ],
                    "2": [
                        "Iza àry no hiakatra",
                        "Ny tanànan'ny",
                        "Tompontsika",
                        "Zovy àry no hanjaka",
                        "hifehy",
                        "Ny lanitra sy ny tany",
                        "Moa ve tsy 'lay nandresy",
                        "Eny e! eny e",
                        "'Ndeha isika",
                        "Hihoby ny Tompo"
                    ],
                    "3": [
                        "Andrao ny tataonareo",
                        "Ry varavarana fahagola",
                        "Hidiran'ilay Mpanjaka'ny",
                        "Voninahitra tsy hay fefena",
                        "Kristy Ilay nandresy",
                        "Ka notoloranao fahefana",
                        "Kristy, Ilay nandresy",
                        "Ka notolorana fahefana",
                        "Eny e! eny e!",
                        "Hihoby ny Tompo"
                    ],
                    "ref": [
                        "O nivoha",
                        "Nivoha ny varavaran'ny lanitra",
                        "Eo anatrehan'ny Tompo",
                        "Omban-pahefana sy laza",
                        "Kristy no Tompo Mpandresy"
                    ]
                }
            },
        ],
        get: function (num) {
            console.log($http.get('bower.json'));
            return factory.Sederas[num-1];
        },
        getSederas: function () {
            return factory.Sederas;
        }
    };
    return factory;
});
// Ici les messages de bienvenue dans l'application
myApp.controller('HomeCtrl', function ($scope) {
    /*
     * Ici c'est vraimment affichage de de bienvenue
     */
});

myApp.controller('SederaCtrl', function ($scope, SederaFactory) {
    /*
     * Tous les listes de sedeara sont ici
     * Il est accompagner avec de input de type search (recherche)
     * On affiche par ordre croissant
     */
    $scope.sederas = SederaFactory.getSederas();
});

myApp.controller('HiraCtrl', function ($scope, SederaFactory) {
    /*
     * Selection de tous les sedera hira
     * Dans le sedera par les parametre de $stateParams
     */
    $scope.Sedera = SederaFactory.get(6);
});

myApp.controller('AboutCtrl', function ($scope) {
    /*
     * Ici c'est l'appropos du sedera
     * ugbm
     * A propos du concepteur et réalisateur du projet
     */
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