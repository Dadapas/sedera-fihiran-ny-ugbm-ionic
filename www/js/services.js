angular.module('sedera.services', [])

.factory('SederaFactory', function () {

    var factory = {
        Sederas: [
            {
                "num" : "1",
                "titre": "Mitoria ny famonjena"
            },
            {
                "num" : "11",
                "titre": "Misaotra Anao 'zahay ry Ray"
            },
            {
                "num" : "13",
                "titre": "Andriamanitra he mahagaga"
            },
            {
                "num" : "15",
                "titre": "Raha eo am-pahitana"
            },
            {
                "num" : "18",
                "titre": "Tsy hitsahatra hidera"
            },
            {
                "num" : "19",
                "titre": "He hiakam-pifaliana"
            },
            {
                "num" : "20",
                "titre": "Noho 'ty hafaliana ity,Haleloia!"
            },
            {
                "num" : "24",
                "titre": "Rehefa misaina"
            },
            {
                "num" : "27",
                "titre": "(O nivoha)"
            }
        ],
        findOneByNum: function (num) {
            return factory.Sederas[num-1];
        },
        findAll: function () {
            return factory.Sederas;
        }
    };

    return factory;
})