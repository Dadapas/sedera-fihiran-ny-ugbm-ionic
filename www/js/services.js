angular.module('sedera.services', [])

.factory('SederaFactory', function () {

    var factory = {
        Sederas: [
            {
              "num" : "1",
              "titre": "Mitoria ny famonjena",
              "hira": "<pre><h4 class='padding'><em>1.</em>	Mitoria ny famonjena\nRy Tanora ny Jeso\nMbola maro sesehena\nReo namanao zay maizina\nMitoria, Mitoria, Mitoria\nMitoria ny famonjena\nIzany izao no baiko azonao\nKa meteza re izao\n\n<em>2.</em> 	Mitsangàna, mandehana\nAza miandry ianao\nF'efa akaiky izao Kanana\n'Lay tany izay ho lovanao\nMitoria ! Mitoria !\nMitoria ny famonjena\nIzany izao no baiko azonao\nKa meteza re izao\n\n<em>3.</em>    Indro Jeso Kapiteny\nMialoha anao izao\nNy fiainany omeny\nKa manaraha Azy izao\nMandrosoa ! Mandrosoa !\nFa ny hery sy ny fiainam-baovao\nNo atolotra anao</h4></pre>",
              "mark" : "FANEVA ZAIKABE -I (1974)"
            },
            {
              "num": "2",
              "titre": "Ry Jeso Kristy Tompo",
              "hira": "<pre><h4 class='padding'>\n1.  Ry Jeso Kristy Tompo\nVato fehizoronay\nVato fanorenanay\nVatolampy tsy hikoro\nHavaozinao izao\n‘zahay mpanomponao\nMba hilanja ny faneva\nHitory koa ny famonjena.\n\n2.  Ry Fanahy mpanavao\nMiandrandra Anao izahay\nMba tariho hazavao\nSao lavo eto indray\n\n3.  Ry Rainay be fitia\n‘Ndreto vonon’izahay\nKa hanaiky hanara-dia\nIlay Jeso Zokinay</h4></pre>",
              "mark": "faneva zaikabe -ii (1977)"
            },
            {
              "num": "3",
              "titre": "'Zao indray no ho fenitray",
              "hira": "<pre><h4 class='padding'>\n1.  ‘Zao indray no fenitray\nNy hitombo amin-javatra rehetra\nHo amin’izay Loha dia Ianao\nRy Jeso Mpanjakanay.\n  Koa miandrandra Anao izahay\n  Mba hiasa ao anatinay\n  Na ny fikasana na fanaovana\n  Hahatanteraka ny sitrakao.\n\n2.  Ny finoana ampinganay\nFahamarinana izay sikinanay\nAry ny Teninao Sabatray\n‘Reo no hitomboanay\n\n3.  Tiana hitombo ao am-ponay\nNy hetaheta hanambara ny asanao\nAmin’ity firenena ity\n‘Zay irina hahalala Anao.\n\n4.  Ny fankatoavana Anao\nAry ny fifankatiavanay\nsy izay mety ho sitrakao\nAoka hitombo ho fiainanay</h4></pre>",
              "mark": "faneva zaikabe -iii (1980)"
            },
            {
              "num": "4",
              "titre": "Anao ry Tomponay",
              "hira": "<pre><h4 class='padding'>\n1.  Anao ry Tomponay (Tomponay)\nAnao ny saotra sy fankasitrahanay\n(Anao ny fankasitrahanay)\nIzahay mandray ny teny mamy\nTeninao ‘zay ifalianay\nNy hamoa voa tsara ihany\nSitrakao ho fiainanay (fiainanay)\nMba ho tena hasin’ny tany\n‘Reo nateraka indray.\n  (Satry re) Satry re hiray Aminao\n  (Mba) Mba hamoa bebe kokoa.\n\n2.  Irinay hanasoa ny tanindrazanay\n(Irinay hanasoa ny taninay)\nKa hikatsaka izay hampandroso\nSy honenam-piadanana\nIanao Jeso no hambara\nAmin’ireo havanay (havanay)\nAminao no misy ny tsara\nDia fiainana ho anay.\n\n3.  Havaozinay anie (anie)\nNy fanoloran-tena\nHanompoana Anao\n(Ny fanoloran-tena ho Anao)\n‘Zay rehetra mbola ho tontosaina\nMba hombay ny fitantananao\nIanao Ray no mampitombo\nMampaharitra ny voa (vokatray)\nMiarova ireto mpanompo\nKely tsy mba mahasoa. </h4></pre>",
              "mark": "faneva zaikabe -iv (1983)"
            },
            {
              "num": "5",
              "titre": "Irinay ny hitoetra",
              "hira": "<pre><h4 class='padding'>\n1.  Irinay ny hitoetra\nHiorina tsy hisy fetra\nAry hitombo sy hamoa\nHo mendrika tokoa\nNy satroboninahitra\nHo an’ny maharitra\nNy famonjena efa azonay\nNo ho tokinay ry Ray.\n\n2.  F’izay efa noraisinay\nNo ho torinay indray\nHanazava sy hanavao\nIzao tontolo izao\nHo tonga voa tsara\nHo an’ireo izay mandre\nHo fiadanana mandrakizay\nHo an’ireo izay mandray.\n\n3.  Ilay finoana anananay\nNo nanavotana anay\nIo no hiorenanay\nHampianarina indray\nJeso Kristy Tompo soa\nNo hampitoetra tokoa\nKa hampijoro sy hampahery\nKapiteny modely.</h4></pre>",
              "mark": "faneva zaikabe -v (1986)"
            },
            {
              "num": "6",
              "titre": "Misikina, aoka hirehareha",
              "hira": "<pre><h4 class='padding'>\n1.  Misikina, aoka hirehitra\nNy jironareo\n‘Ndeha izao anio izao\nJereo izao tontolo izao\nFaingàna fa rakotra aizina ny tany\nMaro ireo mitomany,\nMiomàna ka andao.\n  Mihazavà ka mandehana\n  Mitoria ny famonjena\n  Vitan’i Jeso Tomponao\n  Asehoy ny tena fahazavana\n  Malakia, ’ndao zarao, izay azonao.\n\n2.  Misikìna, aoka ho\nMendrika izay atao\nFa izao tontolo izao\nDia mijery anao\nMiaingà ka asehoy Jeso Tompo\n‘Zay fitafiana mendrika\nNy mpanompo\n\n3.  Ry Fanahy Masina ô!\nMiandrandra Anao ’zahay\nMitoera maharitra aty anatinay\nKa havaozy isan’andro\nNy fanahinay\nMba hahaizanay\nHanazava ireo namanay.</h4></pre>",
              "mark": "faneva zaikabe -vi (1989)"
            },
            {
              "num": "7",
              "titre": "Ry Tompo ô ! Mpanjakanay",
              "hira": "<pre><h4 class='padding'>\nRy Tompo ô! Mpanjakanay\n(Tompo ô Mpanjaka)\nAnkalazaina ny Anaranao\n(Derainay ny Anaranao)\nIsaoranay Ianao\n(Ianao)\nF’Ianao no mitantana\nNy fikambananay\n(No andrin’ny fikambananay)\n\n1.  Folo taona lasa izay\n  No nijoroan’ny fikambananay\n  Lalan-tsarotra sy ady\n  No efa nolalovanay\n  Nefa Ianao tokoa\n  (No)Vatolampinay\n  Fototry ny fandresena azonay.\n\n2.  Ny hitory famonjena\n  No tsy maintsy ho tohizanay\n  Marobe no mila vonjy\n  Ka ampio izahay\n  Fa Ianao tokoa\n  (No) mampahery anay\n  Ka hiasa am-pifaliana izahay.</h4></pre>",
              "mark": "faneva faha-10 taona ugbm (1986)"
            },
            {
              "num": "8",
              "titre": "Feno folo taona izao",
              "hira": "<pre><h4 class='padding'>\n1.  Feno folo taona izao\n  Ny fikambananay\n  Folo taona mampitodika\n  Ny lasa indray\n  Ny mitory famonjena\n  No hany fenitray\n  Amin’ireo\n  Iray dabilio aminay\n  Folo taona niaretana\n  Ny mafy koa\n  Fanenjehana sy\n  Eson-teny nandrera-po\n  Nefa dia nahery hatrany\n  Rehefa nosokofanay\n  Ny Baiboly izay fandinikay.\n\n2.  Mbola mpianatra avokoa\n  Ny ankamaroanay\n  Ka matetika tsy ampy\n  Ny am-batanay\n  Ho entina manatanteraka\n  Ny asanay\n  Tsy nanao\n  Fitadiavam-bola izahay\n  Ireo lohalikay roa\n  No naforitray\n  Teny an-kalamanjana\n  Na niaretan-tory koa\n  Fa ny vavaka ihany\n  No fitaovana entinay\n  Nandresena ny olana hatrizay.\n\n3.  Teny am-piandohana\nDia fito no isanay\n  Nefa ankehitriny izao\n  Arivo izahay\n  Raha hibanjina ny hoavy\n  No fanevanay\n  Tsy isa ihany\n  No hitomboanay\n  Andriamanitra anefa\n  No hany tokinay\n  Ka na inona vita\n  N’inona inona hatao koa\n  Dia tsy ho hisy ho rehareha\n  Afa tsy izao ihany\n  Ny hazofijalianao Jeso.</h4></pre>",
              "mark": "hira faha -10 taona (1986)"
            },
            {
              "num": "9",
              "titre": "Miorena tsara aza miova",
              "hira": "<pre><h4 class='padding'>\nMiorena tsara aza miova\nRy sakaiza rahalahy malala\nMahefà be mandrakariva\nAmin’ny asan’i Jeso.\n\n1.  Folo taona nijoroana izao\n  Noho ny antso izay noraisinao\n  Ka ny Tompo ‘zay fanorenana\n  No mendrika deraina sy isaorana\n\n2.  Folo taona nanompoana izao\n  Tao anaty fiombonana \n  Tamin’ny asa maro izay natao\n  Dia vonona hanampy sy hanohana\n\n3.  Folo taona niasana izao\n  Nampahafantarinao, fa ianao\n  Ianao vavolombelona\n  Hitory an’Ilay Jeso Mpamonjinao.</h4></pre>",
              "mark": "faneva faha-10 taona sakaiza (1986)"
            },
            {
              "num": "10",
              "titre": "Mifohaza,ry matory",
              "hira": "<pre><h4 class='padding'>\n1.  Mifohaza(3), ry matory ô\n  Miantso anao Jeso Tompo\n  Hiarak’Aminy indray\n  Roapolo taona izao\n  No nijoro ny fikambananay\n  Ka am-pifaliana tokoa re\n  No iantsoany anao\n  Mifohaza (2), indro\n  (Mifohaza re ianao izay matory)\n  Fa miantso anao Jeso Tompo\n  Mifohaza (2), indro\n  (Mifohaza re ianao izay matory)\n  Fa miandry anao Jeso Tompo\n\n2.  Mitsangàna (3) ry matory ô\n  Mbola lavitra ny dia\n  Izay alehanao izao\n  Jeso Tompo kapiteny\n  No mitarika ny dianao\n  Ka am-pfaliana tokoa re\n  No itantanany anao\n  Mitsangàna (2), indro\n  (Mitsangàna ianao izay matory)\n  Fa miantso anao Jeso Tompo\n  Mitsangàna (2), indro\n  (Mitsangàna ianao izay matory)\n  Fa miandry anao Jeso Tompo\n\n3.  Indro Tompo (3) vonona izahay\n  Mahare ny antsonao\n  Na manaiky ho irakao\n  Ny hanao ny sitrakao\n  No tena ilofosanay\n  Ka am-pifaliana tokoa re\n  No hanaovanay ny asanao\n  Indro Tompo (2), indro\n  (Indro Tompo ho Anao manontolo)\n  Atolotray ny tenanay\n  Indro Tompo (2), indro\n  (Indro Tompo ho Anao manontolo)\n  Fa ho Anao mandrakizay.</h4></pre>",
              "mark": "faneva faha-20 ugbm (1989)"
            },
            {
              "num": "11",
              "titre": "Misaotra Anao 'zahay ry Ray",
              "hira": "<pre><h4 class='padding'>\n1.	Misaotra Anao 'zahay ry Ray\nNoho ny fitiavanao\nNy aizin-kitroka nisy ahy\nIndro fa nidiranao\nHe hazavana lehibe no\nIndro fa naposakao\nKa ravoravo ery ny fo\nIzay midera Anao\n\nInona àry no havaliko anao\nNoho ireo soa efa narotsakao\nHe hazavana lehibe no\nIndro fa naposakao\nKa ravoravo ery ny fo\nIzay midera Anao\n\n2.	Na dia tsy mendrika ry Ray\nIreto te-hidera anao\nDia notoloranao tokoa ny\nFanavotan-dehibe\nNa dia mahantra aza re dia\nNovidin'ny zanakao\nTamin'ny rany izay madio\nMba ho isan'ny anao\n\n3.	He menatra tokoa ry Ray\nHifanatrika Aminao\nKanefa noho ny zanakao dia\nIndro fa manatona aho\nManery ahy izany foko\nResin'ny fitiavanao\n'Lay fo maniry mafy anao\nKa indro anjakao</h4></pre>"
            },
            {
              "num": "12",
              "titre": "Midera ny anaranao",
              "hira": "<pre><h4 class='padding'>\n1.  Midera ny Anaranao \n  ‘Zahay ry Tompo ô\n  Ka hira no ventesinay\n  Hoe : haja, saotra, hery.\n  Mba raiso ho Anao\n\n2.  He, voahombo Ianao\n  Nisolo heloka, \n  Ka mendrika hanaovanay\n  Hoe : haja, saotra, hery\n  Mba raiso ho Anao.\n\n3.  Endrey! ny fitiavanao\n  Endrey! ny herinao, \n  Tra-pamonjena izahay\n  Ka haja, saotra, hery\n  Mba raiso ho Anao.\n\n4.  Raha tonga ao an-danitra\n  ’Zahay ry mpanomponao\n  Hitohy re ny hiranay\n  Hoe : haja, saotra, hery\n  Mba raiso ho Anao.</h4></pre>"
            },
            {
                "num" : "13",
                "titre": "Andriamanitra he mahagaga",
                "hira": "<pre><h4 class='padding'>\n1.  Andriamanitra he mahagaga\n  Ny zavatra nataon’ny tànanao\n  Ny kintana, ny kotrokoran’andro\n  Ampisehoanao ny herinao\n    <i>Midera Anao Andriamanitra ô !\n    Fa lehibe tokoa Ianao</i>\n\n2.  Raha mitsangatsangana an’ala\n  Ka mahare ny hiram-borona\n  Sy rivotra mitsoka moramora\n  Ary mahita tendrombohitra\n\n3.  Raha tsaroako fa Jeso Tompo\n  Natolotry ny Ray an-danitra\n  Ho avotra noho ny fahotako \n  ‘Zay vita tao Golgota avokoa\n\n4.  Ho tonga indray Jesosy Tompo soa\n  Hitondra ahy ho any an-danitra\n  Hiondrika aho sy hitsaoka Azy\n  Andriamanitra ô fa lehibe</h4></pre>"
            },
            {
              "num": "14",
              "titre": "Midera Anao, midera Anao",
              "hira": "<pre><h4 class='padding'>\n1.  Midera Anao, midera Anao\n  Zahay ry Tompo Andriamanitray\n  Ka hira no ventesinay\n  Ny saotra no aterinay \n  Fa Ianao no nahary ny tontolo\n  Izao rehetra izao\n  Dia tsara avokoa\n  Ka dera aman-daza no atolotray\n  Atolotray ho Anao, \n  Anao ry Tomponay\n  Ka dera aman-daza no atolotray\n  Ry Mpanjakanay Masina tokoa\n  Ka ny saotra aterinay\n  Ho Anao mandrakizay Tompo\n  Raiso, mba raiso ho Anao\n\n2.  Midera Anao, midera Anao\n  Zahay ry Tompo Andriamanitray\n  Ka hira no ventesinay\n  Ny haja no asandratray\n  Fa ny Zanaka malalanao tokoa\n  No nafoinao mba ho solonay\n  Fitiavan-dehibe no nasehonao\n  No nasehonao anay ry Tompo ô\n  Ny famonjena izay nataonao\n  Dia tonga lafatra tokoa\n  Ka ny haja aterinay\n  Ho Anao mandrakizay Tompo\n  Raiso, mba raiso ho Anao.</h4></pre>"
            },
            {
                "num" : "15",
                "titre": "Raha eo am-pahitana",
                "hira": "<pre><h4 class='padding'>\nRaha eo am-pahitana\nNy asan-dratsan-tànanao\nSy ny nitiavanao\nIzao tontolo izao\nDia zovy no hanamafy fo\nKa tsy hidera Anao\nFa Tompo manan-kery Ianao\n\n1.  Ny volana aman-kintana\n  Izay noforoninao\n  Mitory avokoa\n  Ny fahalehibeazanao\n  Ny tombon’andro izay\n  Mbola diavinay izao\n  Dia famindrampo avy Aminao\n\n2.  Ny toeram-boninahitra\n  Izay anananao\n  Dia nafoinaon  Mba hanavotanao\n  Ny olona ety\n  Izay efa nandao Anao\n  Mba mahagaga ny fitiavanao\n\n3.  Ny fiverenanao izay\n  Mbola andrasako\n  Ny fananganana\n  Amin’ny maty koa\n  Dia mbola ho anisan’ny\n  Asanao avokoa\n  ‘Zay manamafy ny finoako</h4></pre>"
            },
            {
              "num" : "16",
              "titre": "Ny hira velona ato am-poko",
              "hira": "<pre><h4 class='padding'>\n1.  Ny hira velona ato am-poko\n  Sady mamin’ny fanahy\n  Ny hira izay nomen’ny Tompoko\n  Feno fitiavana\n  He manakoako ato am-poko\n  Ilay hira kanto taminao Jeso\n  Hira soan’ny lanitra ao ambony\n  Feno fitiavana\n\n2.  Jesosy Kristy tonga ho ahy\n  Hanadio ny otako\n  Ny foko faly ravo am-panahy\n  Ka hanao ilay hira soa\n\n3.  Rehefa mby an-danitra aho\n  Tsy mba hisy farany\n  Hiaraka amin’ny anjely koa\n  No hanao ilay hira soa.</h4></pre>"
            },
            {
              "num" : "17",
              "titre": "Jeso, Mpanjaka malaza",
              "hira": "<pre><h4 class='padding'>\n1.  Jeso, Mpanjaka malaza, \n  No Tompo Mpanjakanay;\n  Mahery sy tsara indrindra, \n  Ka Izy no aronay.\n  Mendrika hankalazaina\n  Noho ny heriny;\n  Eran-tany sy lanitra koa\n  Ny zo aman-dazany;\n\n    Ry Tompo, Mpanjaka\n    Mahery ô! Mihainoa!\n    Avy manaiky tokoa izahay\n    Fa tompon’ny hery\n    Rehetra Ianao\n    Tsy misy mihitsy ny toa Anao\n    Tsy tratry ny saina \n    Ny herinao\n    Ny fiderana izay entinay, \n    Raiso re!\n    Ny haja atolotra Anao ety;\n    Raiso izao!\n\n2.  Tompo, Mpandahatra hendry, \n  Mpanao izao rehetra izao.\n  Ny zara sy tendry ataony\n  Dia tsara sy mahasoa\n  Mendrika ny hoderaina\n  Ny fandaharany;\n  Atolory ho Azy ny saotra, \n  Fa Izy tandrifin’io;\n  Ry Tompo, Mpanjaka, sns...\n\n3.  Tompo, Mpanjaka Tsitoha\n  Kanefa be indrafo;\n  Deraina eram-po eran-tsaina\n  Deraina mandrakizay;\n  He! ny mpanompo voavonjy;\n  Samy mihoby hoe :\n  «  Haleloia, ho amin’ny Avo, \n  Fa Jeso no Tomponay  »!\n  Ry Tompo, Mpanjaka, sns...</h4></pre>"
            },
            {
                "num" : "18",
                "titre": "Tsy hitsahatra hidera",
                "hira": "<pre><h4 class='padding'>\nTsy hitsahatra hidera\nHidera Anao ny foko\n\n1.  Na hariva e,\n     Na maraina\n\n2.  E! ny fahamarinanao\n     Mandrakizay\n\n3.  Eny tsara fo Ianao\n     Ka mamiko indrindra\n\n4.  Maharavo e\n     Ny asanao\n\n5.  Mihoby Anao aho\n     Ianao ry Mpahary.\n\n6.  Mihoby Anao aho\n     Ianao, ry Mpamonjy\n\n7.  Ary Ianao e\n     Mpanamasina anay.</h4></pre>"
            },
            {
                "num" : "19",
                "titre": "He hiakam-pifaliana",
                "hira": "<pre><h4 class='padding'>\nHe hiakam-pifaliana\nNo hiderako Anao\nAsandratro ny tananao\nHiderako Anao\n\n1.	Ianao no Tompoko\n	Sy Andriamanitro\n	Nitady Anao tokoa\n	Ny fanahiko\n\n2.	Raha vao maraina koa\n	Ianao no sainiko\n	Feno hafaliana\n	Ny fo ny alina\n\n3.	Feno fiandanam-po\n	Ambany elatrao\n	Ianao no vonjiko\n	Ianao no tokiko\n\n4.	Tiako ho hita ny\n	Fitoera-masinao\n	Ny voninahitrao\n	Ary ny herinao</h4></pre>"
            },
            {
                "num" : "20",
                "titre": "Noho 'ty hafaliana ity,Haleloia!",
                "hira": "<pre><h4 class='padding'>\n1.  Noho ‘ty hafaliana ity, Haleloia!\n  Nomenao ity foko ity, Haleloia!\n  Dia hihira aho Kristy, Haleloia\n  Ho Anao Mpamonjiko, Haleloia!\n\n2.  Mbola averiko eto indray, Haleloia!\n  Fa Ianao dia maty ho ahy, Haleloia!\n  Izany no hiderako Anao, Haleloia!\n  ‘Zay harena soa ho ahy, Haleloia!\n  3.  Isan’andro, isan’ora, Haleloia!\n  Ho tempolinao aho, Haleloia!\n  Toy ny voninkazo tsara, Haleloia!\n  Mani-pofona ho Anao, Haleloia!</h4></pre>"
            },
            {
              "num" : "21",
              "titre": "Velona, velona ny Tompo",
              "hira": "<pre><h4 class='padding'>\nVelona, velona ny Tompo (2)\nDerao, ankalazao\nFa Mpamonjy Mpanafaka\n\n1.  Tsy nahita fiainana\n  Fa niraparapa tao\n  Ahiahy, tahotra\n  ‘Zany androko taloha\n\n2.  Nefa ankehitriny izao\n  Feno fiadanam-po\n  Hafaliana betsaka\n  Avy amin’i Kristy\n\n3.  O! avia ry namako ô\n  Manatòna an’i Jeso\n  Dia ho hitanao tokoa\n  Izany fitiavany</h4></pre>"
            },
            {
              "num" : "22",
              "titre": "Jesosy ô! Ianao, Ianao Mpamonjiko",
              "hira": "<pre><h4 class='padding'>\nJesosy ô! Ianao, Ianao Mpamonjiko\nJesosy ô! Ianao Mpanavotro\nJesosy ô! Ianao Mpisoloko\nJesosy ô! Ianao Mpanjakako\n\n  O! ankalazao, hobio\n  Ny Tomponao\n  O! derao, hirao izao\n  Ny Anarany\n  O! ankalazao, hobio\n  Ny Tomponao\n  Ambarao, torio, lazao\n  Ny fitiavany.</h4></pre>"
            },
            {
              "num" : "23",
              "titre": "Misaotra Anao 'zahay",
              "hira": "<pre><h4 class='padding'>\n1.  Misaotra Anao ‘Zahay\n  Ry Jehovah Ray ô!\n  Fa lehibe ny fitiavanao\n  Aizina no hitako hatramin’izay\n  Fa indro mazava no naposakao.\n    Raiko ô! Raiko ô! hoderaiko Ianao\n    Raiko ô! Raiko ô! be fiantra Ianao\n    Apetrako ny foko ry Jehovah ô!\n    Hankato ny didinao mandrakizay.\n\n2.  Fanilon’ny tongotro ny Teninao\n  Sy fanazavana ny làlako\n  Ampinga sy heriko ny Teninao\n  Famonjena ahy sy fiarovako\n    Raiko ô! Raiko ô! ets...\n\n3.  Miantso ny Tompo, faingàna ianao\n  Meteza hanompo izao anio izao\n  Mahantra ny tany sy maizina koa\n  Baiboly no hanazava sy hanasoa\n    Ô! avia, o! avia, matokia ianao\n    Fa Jeso, fa Jeso no manampy anao\n    Ny latsa sy eso aza heverinao\n    Fa Kristy no homba anao\n    Mandrakizay.</h4></pre>"
            },

            {
              "num" : "24",
              "titre": "Rehefa misaina",
              "hira": "<pre><h4 class='padding'>\n1.  Rehefa misaina\n     Ny famonjen’i Jesosy aho\n     Sy izay rehetra nataony tamiko\n     Te hiantso mafy aho hoe :\n     Haleloia, \n     Isaorako Azy ny famonjeny\n\n2.  Rehefa misaina\n     Ny fitiavan’i Jesosy aho\n\n3.  Rehefa misaina\n     Ny famindrampon’i Jesosy aho.</h4></pre>"
            },
            {
              "num" : "25",
              "titre": "Ny foko mankalaza",
              "hira": "<pre><h4 class='padding'>\n1.  Ny foko mankalaza\n  An’Andriamanitra\n  Fa zava-dehibe anie\n  Nataony tamiko\n  He ravoravo izao\n  Ny fon’ankizivaviny\n  Izay tsy mendrika\n  Izao fahasoavany.\n\n2.  Ny foko mankalaza\n  Ny Tompo be fitia\n  Fa efa nojereny\n  Ny fahambaniako\n  Kanefa nofidiny re\n  Izaho zanany\n  Ho fanaka voahasina\n  Mba ho fananany.\n\n3.  Isaorana ny Tompo\n  Mpamonjy ahy re\n  Fa lehibe ny indrafo\n  Sy fitiavany\n  Ankehitriny aho re\n  Dia sambatra tokoa\n  Fa zava-dehibe anie\n  Nataony tamiko.</h4></pre>"
            },{
              "num" : "26",
              "titre": "Jeso no mendrika ho deraina",
              "hira": "<pre><h4 class='padding'>\n1.  Jeso no mendrika ho deraina\n  Noho ny fahasoavanao\n  Fa to izay rehetra nokasaina\n  Izy no nihaviany\n  Fankasitrahana sy fihobiana\n  Ho an’ilay Mpamonjy soa\n\n2.  Jeso no fehizoro mafy\n  Iorenan’ny fiainanay\n  Ho vatolampy tsy mikoro\n  Izy no mihazona azy\n  Ny fitahiany sy ny fiarovany\n  No antokay mandrakizay.\n\n3.  Jeso sakaiza mahatoky\n  Fototry ny fitiavana\n  No nampiray ny fo, fanahy\n  Izy no tena antony\n  Ny fahamarinany sy fahamasinany\n  No lamba itafianay.</h4></pre>"
            },
            {
                "num" : "27",
                "titre": "(O nivoha)",
                "hira": "<pre><h4 class='padding'>\n(O nivoha)\nNivoha ny varavaran’ny lanitra\nTeo anatrehan’ny Tompo\nOmbam-pahefana sy laza\nKristy no Tompo Mpandresy.\n\n1.  ‘Zao tanintsika izao\n  Sy ny zava-tsoa\n  ‘Zay mandravaka azy\n  ‘Zao tenantsika izao\n  Sy ny zava-maro\n  Nomena antsika\n  Dia samy asa-tanan’ilay\n  Mahefa namonjy antsika\n  Eny e! eny e!\n  ’Ndeha isika\n  Hihoby ny Tompo\n  (O nivoha)\n  Nivoha ny varavaran’ny lanitra\n  Teo anatrehan’ny Tompo\n  Ombam-pahefana sy laza\n  Kristy no Tompo Mpandresy.\n\n1.  ‘Zao tanintsika izao\n  Sy ny zava-tsoa\n  ‘Zay mandravaka azy\n  ‘Zao tenantsika izao\n  Sy ny zava-maro\n  Nomena antsika\n  Dia samy asa-tanan’ilay\n  Mahefa namonjy antsika\n  Eny e! eny e!\n  ’Ndeha isika\n  Hihoby ny Tompo.\n\n2.  Iza àry no hiakatra\n  Ny tanànan’ny Tompontsika\n  Zovy àry no hanjaka hifehy\n  Ny lanitra sy ny tany\n  Moa ve tsy ‘lay nandresy\n  Ny fahafatesana ho antsika\n  Eny e! eny e!\n  ’Ndeha isika\n  Hihoby ny Tompo.\n\n3.  Andrao ny tataonareo\n  Ry varavarana fahagola\n  Hidiran’Ilay Mpanjakan’ny\n  Voninahitra tsy hay fefena\n  Kristy Ilay nandresy\n  Ka notolorana fahefana\n  Eny e! eny e!\n  ’Ndeha isika\n  Hihoby ny Tompo.</h4></pre>"
            },
          {
            "num" : "28",
            "titre": "Ny voninahitr'Andriamanitra Ray",
            "hira": "<pre><h4 class='padding'>\nNy voninahitr’Andriamanitra Ray\nMamirapiratra eo amin’ny Kristy\nEo amin’ny fiangonany mandrakizay\nMandrakizay, e mandrakizay\n\n1.  Derao Andriamanitra\n  Any an-toerany masina\n  Derao eny an-danitra\n  Isehoan’ny heriny\n  Derao amin’ny asany\n  Feno fahefana\n  Derao fa ambony\n  Lehibe tapitr’ohatra\n\n2.  Derao Izy amin’ny\n  feon’anjomara\n  Derao Izy amim-baliha sy lokanga\n  Derao Izy amin’ny jejy sy sodina\n  Derao Izy amin’ny dihy sy amponga\n\n3.  Derao Andriamanitra\n  Be voninahitra\n  Derao koa ny Zanaka\n  Fa voninahiny\n  Derao ny Fanahy\n  Noho Izy nirahiny\n  Hampientana antsika\n  Hihira ny anarany</h4></pre>"
          },
          {
            "num" : "29",
            "titre": "Isaoranay Zanahary",
            "hira": "<pre><h4 class='padding'>\nIsaoranay Zanahary\nF’Izy nitahy sy niaro\n\n-  Izay miakatra ho any an-danitra\n   Tsy mba nisy nitondra vatsy\n\n-  Izay mahazo paradise\n   Velona mandrakizay\n\n-  Andriamanitra maneho ny fitiavany\n   Fa fony mbola mpanota isika (2)\n   Dia maty hamonjy antsika re Kristy</h4></pre>"
          },
          {
            "num" : "30",
            "titre": "Ho deraina anie Ianao",
            "hira": "<pre><h4 class='padding'>\n1.  Ho deraina anie Ianao\n  Ry Endrik’Andriamanitra\n  Ry Lahimatoa talohan’\n  Izao zavatra rehetra izao\n  Fa tao Aminao no\n  Nahariana ny rehetra\n  Na ny any an-danitra\n  Na ny eto an-tany koa.\n  Ny fiandrianam-panjakana\n  Na ny fanapahana\n  Na ny fahefana koa\n  Dia mbola ho Anao avokoa\n  Izany no nanery ahy\n  Hihira hatrany hoe :\n  «  Ho lohany\n  Amin-javatra rehetra Ianao  ».\n\n2.  Ity tenako ity\n  Sy ireto ankohonako\n  Na dia tsy mendrika\n  Ny hiantso akory Ilay Anaranao\n  Dia atolotro Anao\n  Ho anisan’ny fanjakanao\n  Am-pifaliana no hiderany Anao</h4></pre>"
          },
          {
            "num" : "31",
            "titre": "Fitiavana Ianao",
            "hira": "<pre><h4 class='padding'>\n1.  Fitiavana Ianao\n  Ry Tompo Mpamonjy\n  Na dia Mpanjaka Tsitoha\n  Midera anao\n  Ity olom-boavonjy\n  ‘Zay efa novanao fo\n  Raha mamiko loatra\n  Ilay famonjena\n  Efa natolotrao ahy\n  Dia ny fahasoavanao\n  No naha toy izao ahy\n\n    Nanao ahoana ny fiainako ety\n    Raha tsy nanehoanao fitia\n    Mbola natolotrao ahy indray\n    Ny fiainana mandrakizay, raha...\n\n2.  Impiry moa aho\n  No nandray fitahiana\n  Sy fanambinana koa\n  Ao ny Fanahy\n  Manome fifaliana\n  Sy fiadanan’ny fo\n  Raha mamiko loatra\n  Ilay famonjena\n  Efa natolotrao ahy\n  Dia ny fahasoavanao\n  No nahatoy izao ahy\n\n3.  Ianao no nametraka\n  Ato am-poko\n  Fitiavana feno tokoa\n  Fototr’iorenan’\n  Ilay fanompoako\n  Anao sy ‘reo havako koa\n  Raha mamiko loatra\n  Ilay famonjena\n  Efa natolotrao ahy\n  Dia ny fahasoavanao\n  No nahatoy izao ahy</h4></pre>"
          },
          {
            "num" : "32",
            "titre": "Ny fitiavan'ny Mpahary",
            "hira": "<pre><h4 class='padding'>\n1.  Ny fitiavan’ny Mpahary\n  Tsy takatra heverina\n  Hatrao an-dapany izany\n  Ho ren’ny farahidiny\n  Ny zanaka malalany\n  Nirahin-dray taty\n  Hamonjy sy hanavotra\n  Antsika izay mania\n\n    Ny fitiavan’ny Mpahary\n    Antsika olony\n    Dia indrafo tsy hita lany \n    Mandrakizay doria.\n\n2.  Mihelina nyandrontsika\n  Miova izao rehetra izao\n  Na dia maro tsy tafita\n  Mandà ny famonjena soa\n  Jehovah Ray mamindra fo\n  Amin’ny olony\n  Ny fitiavany izao\n  Mandrakizay doria\n\n3.  Na dia manjary ranomainty\n  Ny ranomasina aty\n  Ka na horonan-taratasy\n  Ny lanitra ambony\n  Tsy ampy hahavita re, \n  Izany soratra\n  Ny amin’i Jehovah Ray\n  Be fitiavana</h4></pre>"
          },
          {
            "num" : "33",
            "titre": "Ry Tompo Mpamonjiko malala",
            "hira": "<pre><h4 class='padding'>\n    Ry Tompo Mpamonjiko malala\n    Indreto ny mpanomponao\n    Hankalaza ny Anaranao\n    Satria lehibe ny fitiavanao\n\nHaleloia! Miderà an’i Jehovah\nMiderà Azy, any ambony\nMiderà Azy, ry anjeliny rehetra\nMiderà Azy, ry miaramilany rehetra.</h4></pre>"
          },
          {
            "num" : "34",
            "titre": "Ry Jeso masoandronay ô!",
            "hira": "<pre><h4 class='padding'>\n1.  Ry Jeso masoandronay ô!\n  Ny aizin’ny fo lasa tokoa, \n  Fa tonga aty anatinay izao\n  Mazava lehibe.\n  Eny, Jesoô; Zoky be fitia, \n  Soa lehibe (no) nentinao taty, \n  Avy izahay mba hisaotra Anao, \n  Noho ny fitiavanao.\n\n2.  Vangianao ny tokantrano\n  Ka menatra ery, kaody sy lao\n  Ny fomba ahitana angano\n  Izay tsy mba sitrakao.\n  Eny, Jeso ô!sns.\n\n3.  Mpanjaka fiadananay ô!\n  Ekena tokoa ny herinao\n  Ny sabatry ny firenena\n  Hatao fangady izao.\n  Eny, Jeso ô!, sns.\n\n4.  Ry Jeso Tompo tia anay ô!\n  Misaotra Anao izahay izao\n  Fa henika ny hasoavanao\n  Izao tontolo izao.\n  Eny, Jeso ô, sns.</h4></pre>"
          },
          {
            "num" : "35",
            "titre": "Izao tontolo onenanay izao",
            "hira": "<pre><h4 class='padding'>\n1.  Izao tontolo onenanay izao\n  Izao jerena sy tsapaina izao\n  Izay noharian’Andriamanitra\n  Ho tsara indrindra\n  Dia nanjakan’ny ota hatrizao\n  Ka sitrakao nanao tontolo vao\n  ‘Zay heniky ny fahalalana\n  Fitiavana Anao\n  He fantatro, eny fantatro\n  Fa ny tany sy lanitra vaovao\n  Tsara lavitra noho izao\n  Dia haharitra mandrakizay\n\n    Hidera Anao\n    Amin’ny foko rehetra aho\n    Hidera Anao\n    Fa mahagaga ny asanao\n    Mandrakizay\n    Ny hery sy fanapahanao\n    Eny mandrakizay\n\n2.  Izao vahoaka marobe izao\n  Izay niodina nandà Anao\n  Dia tsy nafoinao\n  Fa nomenao ny famonjena\n  Ny Zanakao lahitokana\n  No nahafoy ny ainy ho anay\n  Zary firenena masina\n  ‘Zay manaiky Anao\n  He fantatro, eny fantatro\n  Fa ny firenena navotanao\n  Sy natokana ho Anao\n  Dia haharitra mandrakizay\n\n3.  Izao firaisam-po sy saina izao\n  Raha tanteraka dia noho Ianao\n  Ka angatahanay ny fitahianao\n  ‘zay tsara indrindra\n  Ny fitiavanao no arotsahy\n  Ho fatotra hifehy hampiray\n  Maminay tokoa ny hitoetra\n  Hiaraka Aminao\n  He fantatro, eny fantatro\n  Fa ny fitiavanao ny Zanakao\n  Tsy fitia mora levona\n  Fa kosa haharitra mandrakizay.</h4></pre>"
          },
          {
            "num" : "36",
            "titre": "Njao manakoako",
            "hira": "<pre><h4 class='padding'>\n1.  Njao manakoako ao\n  Feon’anjely marobe\n  Hira soa sy vaovao\n  Mba henoinao ange\n\n    (O! henoy! Voninahitra) 2, 3\n    Voninahitra ho an’ny Avo\n    Ho an’Andriamanitra\n    (Fiadanana)... 2, 3\n    (Fiadanana ho an’ny olona\n    ‘Zay ankasitrahana\n    (Andeha isika)... 2, 3\n    ‘Ndeha mba ho any Betlehema\n    Teraka ao ‘Lay Tompo tia\n    ‘Zay misatro-diadema\n    Miravoa sy mifalia, mifalia\n\n2.  Mba henoy ny feon’anjely\n  Mihira ao an-danitra ao\n  Manambara ilay Noely\n  Ny antemany izao.\n\n    O! henoy...</h4></pre>"
          },
          {
            "num" : "37",
            "titre": "Hihira ho Anao",
            "hira": "<pre><h4 class='padding'>\n1.  Hihira ho Anao\n  Ry Raiko o!\n  Manerana ny tany\n  Ny famindramponao\n  Eo anatrehanao\n  Ireo andronay\n  Toky sy hery tokoa\n  Ho anay mpanomponao.\n\n    Hihira ho Anao aho\n    Jehovah Rainay o!\n    Haleloia!\n    Fa he mandrakizay\n    Ny fitiavanao anay!\n    Haleloia!\n\n2.  Ianao Jehovah o!\n  No itokiako\n  Mpanafaka alahelo, \n  Mampionona ny fo\n  Izao rehetra izao\n  Manaiky ny herinao\n  Fa mahagaga tokoa\n  Ny fitiavanao.\n\n3.  Hihira ho Anao\n  Raha velona koa\n  Tsy misy ety an-tany\n  Iriko tahaka Anao\n  Sambatra izay mandeha\n  Amin’ny lalanao\n  Ho Anao irery anie\n  Ny voninahitra.</h4></pre>"
          },
          {
            "num" : "38",
            "titre": "Raha itodiana",
            "hira": "<pre><h4 class='padding'>\n1.  Raha itodihana\n  Ireo andro lasa\n  Dia hita taratra\n  Ny fitantananao\n  Ny tantanao mahery\n  Miaro lalandava\n  Ka ny voninahitra\n  No mendrika Anao\n\n    Ny dera sy laza\n    Ary fihobiana\n    Ny haja avo indrindra\n    Atolotra Anao\n    Ry Tompo ô, ry Tompo ô\n    Ny mpanomponao\n    Miara-manandra-peo, \n    Hankalaza Anao\n\n2.  Ny famindramponao\n  Tsy tratry ny saina\n  Ary ny fitiavanao\n  Tsy hay tantaraina\n  Manerana ny tany\n  Ny hasoavanao\n  Ka ny voninahitra\n  No mendrika Anao</h4></pre>"
          },
          {
            "num" : "39",
            "titre": "Endrey ny fitiavanao ry Ray",
            "hira": "<pre><h4 class='padding'>\nEndrey ny fitiavanao ry Ray\nDia ny nanoloranao ny Zanakao\nFa ny Zanaka malalanao tokoa\nNo nidina ho solonay (Jesosy ô)\nMba manao ahoana loatra re izany\nFitiavana nasehonao (Jeso)\n\n  Fa Ianao Jeso (Jeso) Fa Ianao Jeso\n  No tena foto-pitiavana (fitiavana)\n  Tonga lafatra tokoa anie izany\n  Ka tsy hay hambara koa re (Jeso)\n  Fa Ianao (Jeso) Fa Ianao Jeso\n  Tena mpampianatra mahay tokoa\n\nMiezaka tokoa izahay\nMba ho tia araka ny teninao\nNefa sarotra tokoa anie izany\nNoho ny tsy fahamendrehanay\n(Jesosy ô)\nMba manao ahoana loatra re izany\nFitiavana nasehonao (Jeso)\n\n  Fa Ianao (Jeso) Fa Ianao Jeso\n  No tena foto-pitiavana (fitiavana)\n  Tonga lafatra tokoa anie izany\n  Ka tsy hay hambara koa re (Jeso)\n  Fa Ianao (Jeso) Fa Ianao Jeso\n  Tena mpampianatra mahay tokoa\n\nVonona tokoa izahay ry Ray\nNy hiorina ao aminao\nKa Jeso Tompo no lohanay\nAmin’ny lalanay ety (Jesosyô)\nIndro Jeso ô mba raiso ho Anao\nIzany fo mba hitoeranao (Jeso)\n\n  Fa Ianao (Jeso) Fa Ianao Jeso\n  No tena foto-pitivana (fitiavana)\n  Ka toroy lala-marina izahay\n  Mba hamaka sy hiorina\n  Fa Ianao (Jeso) Fa Ianao Jeso\n  Ho fototry ny fiainana ety.</h4></pre>"
          },
          {
            "num" : "40",
            "titre": "Andriamanitra mahery",
            "hira": "<pre><h4 class='padding'>\n1.  Andriamanitra mahery\n  Zanaharin’ny tontolo Ianao\n  Nefa koa tia, tsy manery\n  N’inona n’inona natao\n  Koa Salamo sy Antema\n  No asandratry ny feo\n  Ho fisaoran-tsy terana\n  Ny fitiavanao ry Tompo ô! ekeko.\n\n2.  Masoandro Mpanazava\n  No fanilom-piainanay ety\n  Tonga Ianao hisava\n  Sy hitantana ny dia\n  Ry sakaiza tsy mandao\n  Tariho aho hahalala\n  Hivelona ny fiainako ao aminao.\n\n3.  Ny fanahy izay mijaly\n  Voageja sady mitalaho\n  Isehoy miharihary\n  Amin’ny fitiavanao\n  Fitiavan-tsy voafetra\n  No nomenao ho anay\n  Koa tahio mba hitoetra\n  Haharitra ho velona mandrakizay</h4></pre>"
          },
          {
            "num" : "41",
            "titre": "Ny anaranao ry Tompo ô",
            "hira": "<pre><h4 class='padding'>\n1.  Ny Anaranao ry Tompo ô\n    No mahafa-tahotra ahy\n    Ny Anaranao ‘zay ao am-poko\n    No mampahery ahy\n    Ny Anaranao no hany ekeko\n    Ho ahy mandrakizay\n    Kristy Jesosy ô, anarana mahery.\n\n2.  Ny Anaranao ry Tompo ô\n     No mandroaka ny aizina\n     Tahotra ho an’ny fahavalo\n     Mandrava ny fandrika \n     Manangana ‘zay efa maty\n     Mampionona ny ory fo\n     Kristy Jesosy ô, Anarana mahery.\n\n3.  Ny Anaranao ry Tompo ô\n     Ho deraina mandrakizay\n     Ka hirairain’ny anjely\n     Sy ireo olo-masina\n     Mamelon’aina ireo mpino\n     ‘zay efa navotanao\n     Kristy Jesosy ô Anarana mahery.\n\n4.  Ny Anaranao ry Tompo ô\n     Dia voasotra miavaka\n     Eo amin’ireo zava-boahary\n     Nohariana ho anao\n     Ravaka kanto manambara\n     Ny fiandriananao\n     Kristy Jesosy ô, Anarana mahery.</h4></pre>"
          },
          {
            "num" : "42",
            "titre": "He fantatray tokoa",
            "hira": "<pre><h4 class='padding'>\n1.  He fantatray tokoa\n    Ry tompo tsara ô\n    Fa Andriamanitra\n    Mahatanteraka\n    Izay rehetra tokony ho anay\n    Ianao ry Rainay be fitia\n\n      Ka manolotra ho anay\n        Zay rehetra ho anay\n        Araka ny harenao\n        Am-boninahitra\n        Ao amin’i Kristy\n        Jesosy Tomponay\n        Ka dera ho Anao ry Ray.\n\n2.  Ry Jeso Zokinay\n      Mpanavotra Ianao\n      Nisolo heloka anay mpanota\n      Nomenao ho anay\n      Ny rànao marina\n      Noho ny fitiavanao\n\n3.  Indreto izahay\n      Manolotra ho Anao\n      Ny dera, laza, hery\n      Haja ho Anao\n      Ry Telo ‘zay Iray\n      Mpanjakan’ny lanitra\n      Hosana, Haleloia, Amen</h4></pre>"
          },
          {
            "num" : "43",
            "titre": "Kristy ô ! Ianao no Lalana",
            "hira": "<pre><h4 class='padding'>\n1.  Kristy ô! Ianao no Làlana\n    Làlana sy Fahamarinana\n    Kristy ô! Ianao no Fiainana\n    Ho anay mpanomponao.\n    Haleloia, Haleloia (Amen)\n    Ho Anao ry Tompo ô! (Amen)\n    Voninahitra anie ho Anao\n    Mpanjaka Tsitoha mandrakizay.\n\n2.  Kristy ô! Ianao Mpitarika\n     Ianao no Jiro Fanilonay\n     Kristy ô! Ianao Mpampianatra\n     Sy Sakaiza tsy mandao.\n\n3.  Kristy ô! Ianao no Mpamonjy\n     No Mpamonjy izao tontolo izao\n     Kristy ô! Ianao no Zanaka\n     Sy Mpandresy lehibe\n\n4.  Kristy ô! ataoko fanatitra\n     Ho Anao ny foko, fanahiko\n     Kristy ô! mba raiso hanompo\n     Anao, anio, mandrakizay.</h4></pre>"
          },
          {
            "num" : "44",
            "titre": "Nohomboana ny Tompo",
            "hira": "<pre><h4 class='padding'>\nNohomboana ny Tompo\nTeo amin’ny hazofijaliana\nNoho ny setrasetran’\nIzao tontolo izao\nO! O! O! ny ota vitantsika\nNo nahatonga fahoriana\nNy rà izay nalatsaka\nHitondra aim-baovao\nKoa mifalia ry mino\nFa voavoatra izao\nIsaory Ilay voahombo\nNisolo voina anao\nDerao Andriamanitra\nFa tanteraka ny teny\nNampanantenainy hatry ny ela ireny\n\n  O! mba hevero kely\n  Ry olombelona eto an-tany ô!\n  Izao fahoriana nihatra taminy izao\n  O! O! O! Moa tsy hisaina va ianao\n  Ka hanontany hoe\n  Firy no toa Azy hivesatr’entam-be\n  Tsy hisy intsony\n  Izany hoe fahafatesana\n  Fa resy hatreo ‘lay fahavalontsika\n  Dia i satana\n  Ilay mpandrava fahasambarana\n  Ka mangaihay toa tena mangatsiaka</h4></pre>"
          },
          {
            "num" : "45",
            "titre": "Ireo fanomezan-tsoa rehetra",
            "hira": "<pre><h4 class='padding'>\nIreo fanomezantsoa rehetra\nSy ny fanomezana tanteraka\nDia avy amin’Ilay Rain’ny fanazavana\nIreo fahasoavana miandry ireo\nIzay olona nateraka\nDia mbola avy amin’\nIlay Ray fitiavana\nIreo fanomezan-tsoa rehetra\nSy ny fanomezana rehetra\nTsy mba atakalo\nVola aman-karena ihany koa\nDia manome hasambarana\nHo an’izay tsy manamafy fo\nFa nanakaiky ho diovin’ny ràn’i Jeso.</h4></pre>"
          },
          {
            "num" : "46",
            "titre": "Endrey ny halalin'ny",
            "hira": "<pre><h4 class='padding'>\n1.  Endrey ny halalin’ny\n    Haren’ny fahendren’\n    Andriamanitra\n    ‘Zay fototry ny fahalalana\n    Sy ny soa \n    Fa na dia masina sy \n    Mahery ary mahatahotra\n    Dia nidina nanavotra\n    Ny ambany koa\n\n      Ny teninao ry Tompo mahery\n        ‘Zay tonga nofo tety an-tany\n        No loharano niandohana\n        Sy niaviana\n        Ny herinao tsy tratry ny saina\n        No entinay mitondra sy miasa\n        Satria Ianao no mihazona\n        Izao rehetra izao\n        Satria Ianao no anton’\n        Izao rehetra izao.\n\n2.  Ianao no mihevitra sy \n      Mitantana ny androanay ety\n      Ny fikasan’ny fo\n      Ary koa ny safidy\n      Mba tanteraho hanaraka hatrany\n      Ny sitrakao tokoa\n      Fa Ianao no mikendry\n      Izay hahasoa.\n\n3.  Isaoranay koa Tompo Tsitoha ô, \n      Ny fitiavanao\n      ‘Zay tsy mba miovaova\n      Sy tsy mandao anay\n      Ny tenananay, ny fonay rehetra\n      Dia atolotray Anao\n      Mba ho mpanompo\n      Mahatoky mandrakizay.</h4></pre>"
          },
          {
            "num" : "47",
            "titre": "Sambatra izahay, ry Jeso",
            "hira": "<pre><h4 class='padding'>\nSambatra izahay, ry Jeso\nManana Anao\nHo Mpanavotra ny olombelona\nSambatra izahay, ry Jeso\nFa ny fijalianao\nNy rànao latsaka\nFanavotana anay.\n\nNy fisaorana \nNo atolotray;\nIanao no nivesatra\nNy ota vitanay.\n\nSambatra izahay, ry Jeso\nFa ny fijalianao, \nNy rànao latsaka, \nFanavotana ho anay.</h4></pre>"
          },
          {
            "num" : "48",
            "titre": "Zanahary ihany ni mahery e !",
            "hira": "<pre><h4 class='padding'>\nZanahary ihany no mahery e!\nTamin’ny voalohany no nahariany\nNy lanitra sy ny tany\nAry ny tany dia\nTsy nisy endrika sady foana\nFa dia Zanahary ihany no mahery e!\nAizina no tambonin’ny lalina\nAry ny fanahy nanomba ambony rano\nAry ny tany dia tsy nisy endrika\nF’etsy ianao hitantarako azy :\n\n(Tamin’ny andro voalohany)\nAry Izy nanao hoe :\n«  Misia ny mazava  »,\nDia indro fa nisy ny mazava\nAry ny aizina no nataony hoe\n«  Alina  » ary «  Andro  »\nNy anaran’ny mazava\n\n    Zanahary ihany no mahery e!...\n\n(Tamin’ny andro faharoa)\nAry Izy nanao hoe :\n«  Misia habakabaka  »\nEo anelanelan-drano\nAry lanitra no niantsoany azy\nDia nisy hariva\nDimbiasan’ny maraina\n\n    Zanahary ihany no mahery e!...\n\n(Tamin’ny andro fahatelo)\nAry Izy nanao hoe :\n«  Misia fanazavana  »\nEny amin’ny habakabaka eny\nHampisaraka ny alina sy ny andro\nAry koa famantarana\nNy andro sy ny taona\n\n    Zanahary ihany no mahery e!...\n\n(Tamin’ny andro fahadimy)\nAry Izy nanao hoe :\n«  Aoka ho be manan’aina\nNy rano sy an’habakabaka eny  »\nSady nitso-drano azy hoe :\n«  Maroa anaka! mamenoa\nNy rano sy ny tany  »\n\n    Zanahary ihany no mahery e!...\n\n(Tamin’ny andro fahaenina)\nAry Izy nanao hoe :\n«  Aoka ny tany hamoaka biby  »\nIsan-karazany avy\n‘Ndeha isika hamorona olona\nTahaka ny endrintsika\nHanjaka amin’izany\n\n    Zanahary ihany no mahery e!...\n\nTamin’ny voalohany\nNo nahariany ny lanitra sy ny tany\nAry ny tany dia\nTsy nisy endrika sady foana\nFa dia Zanahary ihany no mahery e!\nTamin’ny andro fahafito\nNitsahatra Izy tamin’\nIreo asa efa nataony\nAry notahiany sy hanamasinana Azy,\nDia izay no hamaranako azy.</h4></pre>"
          },
          {
            "num" : "49",
            "titre": "A Toi la gloire",
            "hira": "<pre><h4 class='padding'>\n1.  A Toi la gloire, \n    O ! Ressuscité\n    A Toi la victoire\n    Pour l’éternité\n    Brillant de lumière\n    L’ange est descendu\n    Il roule la pierre\n    Du tombeau vaincu.\n    A Toi la gloire...éternité.\n\n2.  Vois-Le paraître\n     C’est Lui, c’est Jésus\n     Ton Sauveur, ton Maître\n     Oh ! ne doute plus \n     Sois dans l’allégresse\n     Peuple du Seigneur\n     Et redis sans cesse\n     Que Christ est vainqueur.\n     A Toi la gloire...éternité.\n\n3.  Craindrais-je encore\n     Il vit à jamais\n     Celui que j’adore\n     Le Prince de paix\n     Il est ma victoire\n     Mon puissant soutien\n     Ma vie et ma gloire\n     Non, je ne crains rien ?\n     A Toi la gloire...éternité.</h4></pre>"
          },
          {
            "num" : "50",
            "titre": "Dieu tout puissant",
            "hira": "<pre><h4 class='padding'>\n1.  Dieu tout puissant\n    Quand mon coeur considère\n    Tout l’univers\n    Créé par ton pouvoir\n    Le ciel d’azur,\n    Les éclairs, le tonnerre\n    Le clair matin\n    Et les ombres du soir,\n\n        De tout mon être\n          Alors s’élève un chant\n          Dieu tout puissant\n          Que tu es grand.\n\n2.  Quand par le bois\n      Et la forêt profonde\n      J’erre et j’entends\n      Tous les oiseaux chanter\n      Quand sur les monts\n      La source avec son onde\n      Livre au zéphyr\n\n          Son chant doux et léger\n          Mon coeur heureux\n          S’écrie à chaque instant\n          O, Dieu d’amour\n          Que tu es grand.\n\n3.  Mais quand je songe,\n     O sublime mystère\n     Qu’un Dieu si grand\n     Ait pu penser à moi\n     Que son cher fils\n     Soit devenu mon frère\n     Et que je suis l’héritier\n     Du grand Roi,\n\n        Alors mon coeur\n        Redit la nuit le jour\n        Que tu es bon,\n        O Dieu d’amour.\n\n4.  Quand mon sauveur\n     Eclatant de lumière\n     Se lévera\n     De son trône éternel\n     Et que laissant\n     Les douleurs de la terre\n     Je pourrai voir\n     Les splendeurs de son ciel,\n\n        Je redirai\n        Dans son divin séjour,\n        Rien n’est plus grand\n        Que son amour</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "51",
            "titre": "Père, je T'adore",
            "hira": "<pre><h4 class='padding'>\n1.  Père, je T’adore\n   Je Te donne ma vie\n   Je T’aime tant.\n\n2.  Jésus Christ, je T’adore\n   Je Te donne ma vie\n   Je T’aime tant\n\n3.  Saint-Esprit, je T’adore\n   Je Te donne ma vie\n   Je T’aime tant</h4></pre>"
          },
          {
            "num" : "52",
            "titre": "Avec des crie de joie",
            "hira": "<pre><h4 class='padding'>\nAvec des cris de joi\nMa bouche te chantera\nJ’élèverai mes mains\nEt te célèbrerai.\n\n1.  O Dieu, Tu es mon Dieu\n   Mon âme te recherche\n   Et soupire après Toi\n   Sur la terre dessechée.\n\n2.  Lorsque je pense à Toi, \n   Esseulé sur ma couche, \n   Je médite sur Toi\n   Les veilles de la nuit.\n\n3.  Je connais le bonheur\n   A l’ombre de tes ailes\n   Car Tu es mon Secours\n   Ta gloire me soutient.\n\n4.  J’aime Te contempler, \n   Quand dans ton sanctuaire\n   Ta gloire resplendit, \n   Ta puissance se révèle</h4></pre>"
          },
          {
            "num" : "53",
            "titre": "Il m'a sauvé, il m'a sauvé",
            "hira": "<pre><h4 class='padding'>\n1.  Il m’a sauvé, Il m’a sauvé\n   Béni soit son nom \n   Oh ! mon Sauveur, \n   Sois loué à perpétuité. \n\n2.  Dans son amour, dans son amour\n   Il m’a racheté\n   Oh ! mon Sauveur, \n   Sois loué à perpétuité.\n\n3.  Je le suivrai, je le suivrai\n   Toujours avec joie\n   Oh ! mon Sauveur, \n   Sois loué à perpétuité.\n\n4.  Alléluia ! Alleuia ! \n   Béni soit son nom\n   Oh ! mon Sauveur, \n   Sois loué à perpétuité.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL - CHOEURS JOYEUX)"
          },
          {
            "num" : "54",
            "titre": "A Dieu soit la gloire",
            "hira": "<pre><h4 class='padding'>\n1.  A Dieu soit la gloire\n   Par son grand amour\n   Dans mon âme noire\n   S’est levé le jour\n   Jésus à ma place\n   Mourut sur la croix\n   Il m’offre sa grâce\n   Et je la reçois !\n\n    Glore à Dieu ! Gloire à Dieu !\n    Terre écoute sa voix !\n    Gloire à Dieu ! Gloire à Dieu !\n    Monde réjouis-toi !\n    Oh ! venez au Père\n    Jésus est vainqueur, \n    Que toute la terre\n    Chante en son honneur !\n\n2.  De Jésus, la joie\n   Remplit notre coeur\n   Qu’importe qu’on voie\n   Tout notre bonheur ;\n   Selon sa promesse\n   Jésus changera\n   Deuil en allégresse\n   Quand il reviendra.</h4></pre>",
            "mark": "(TIRÉ DES CHANTS DE VICTOIRES)"
          },
          {
            "num" : "55",
            "titre": "Pour cet immense bonheur,",
            "hira": "<pre><h4 class='padding'>\n1.  Pour cet immense bonheur,\n   Alléluia\n   Que Tu as mis dans mon coeur,\n   Alléluia\n   Je veux Te chanter, Seigneur,\n   Allélluia\n   Oui, Jésus est mon Sauveur,\n   Allélluia.\n\n2.  Je le redirai encore,\n   Alléluia\n   Que pour moi Jésus est mort\n   Alléluia\n   Voilà pourquoi je L’ adore,\n   Alléluia\n   Lui seul est tout mon trésor,\n   Alléluia\n\n3.  Que chaque jour, à chaque heure,\n   Alléluia\n   En moi Tu aies ta démeure !\n   Alléluia\n   Que ma vie soit une fleur,\n   Alléluia\n   Un parfum pour Toi, Seigneur\n   Alléluia.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL - CHOEURS JOYEUX)"
          },
          {
            "num" : "56",
            "titre": "Que la gloire du Seigneur",
            "hira": "<pre><h4 class='padding'>\nQue la gloire du Seigneur\nSubsiste à jamais, \nQu’Il se réjouisse de ses oeuvres !\nJe chanterai le Seigneur\nTant que j’existerai, \nJe célèbrerai son nom\nTant que je vivrai.</h4></pre>"
          },
          {
            "num" : "57",
            "titre": "Chante alleluia au Seigneur",
            "hira": "<pre><h4 class='padding'>\nChante alleluia au Seigneur\nChante alleluia au Seigneur\nChante alleluia (bis)\nChante alleluia au Seigneur</h4></pre>"
          },
          {
            "num" : "58",
            "titre": "Je louerai l'Eternel",
            "hira": "<pre><h4 class='padding'>\nJe louerai l’Eternel\nDe tout mon coeur\nJe ranconterai toutes\nTes merveilles\nJe chanterai ton nom\n\nJe louerai l’Eternel\nDe tout mon coeur\nJe ferai de toi \nLe sujet de ma joie\nAlleluia</h4></pre>",
            "mark": "(REPRODUIT AVEC AUTORISATION,ALAIN BERGESE 1989)"
          },
          {
            "num" : "59",
            "titre": "Quelle grâce !",
            "hira": "<pre><h4 class='padding'>\n1.  Quelle grâce ! (2)\n   Dieu a donné son Fils.\n   Quelle grâce, quelle grâce !\n   Dieu a donné son Fils.\n\n2.  Quelle grâce ! (2)\n   Il est mort sur la croix.\n   Quelle grâce, quelle grâce !\n   Il est mort sur la croix.\n\n3.  Quelle grâce ! (2)\n   Il est ressuscité.\n   Quelle grâce, quelle grâce !\n   Il est ressuscité.\n\n4.  Quelle grâce ! (2)\n   Il vit aujourd’hui.\n   Quelle grâce, quelle grâce !\n   Il vit aujourd’hui.\n\n5.  Quelle grâce ! (2)\n   Il revient bientôt.\n   Quelle grâce, quelle grâce !\n   Il revient bientôt.\n\n6.  Quelle grâce ! (2)\n   Alléluia !\n   Quelle grâce, quelle grâce !\n   Alléluia !</h4></pre>"
          },
          {
            "num" : "60",
            "titre": "L'amour de Dieu",
            "hira": "<pre><h4 class='padding'>\n1.  L’amour de Dieu\n   De loin surpasse\n   Ce qu’en peut dire\n   Un coeur humain\n   Il est plus grand\n   Que les espaces,\n   Même en l’abîme\n   Il nous atteint\n   Pour le péché de notre monde,\n   Dieu nous donna Jésus\n   Il nous pardonne,\n   O Paix profonde,\n   Il sauve les perdus.\n\n      L’amour de Dieu,\n      Si fort, si tendre\n      Est un amour sans fin\n      Tel est, le chant\n      Que font entendre\n      Les anges et les saints.\n\n2.  Versez de l’encre\n   Dans les ondes,\n   Changez le ciel\n   En parchemin\n   Tendez la plume\n   A tout le monde\n   Et que chacun\n   Soit écrivain :\n   Vous dire tout\n   L’amour du Père\n   Ferait tarir les eaux\n   Et remplirait la place entière\n   Sur ces divins rouleaux.\n\n3.  Et que le monde\n   Un jour chancelle\n   Avec ses trônes et ses rois,\n   Quand trembleront\n   Tous les rebelles,\n   Soudain saisis d’un grand effroi,\n   De Dieu l’amour\n   Que rien ne lasse\n   Pour nous encore vivra :\n   C’est le miracle de la grâce\n   Amen ! alleluia !</h4></pre>"
          },
          {
            "num" : "61",
            "titre": "Jésus prit mon péché",
            "hira": "<pre><h4 class='padding'>\n1.  Jésus prit mon péché\n    Car Il m’aime\n    Il m’a sauvé dans son amour\n    Je reçus ce Sauveur\n    Pour moi-même\n    Et je fus délivré dès ce jour\n\n        Chante gloire ! chante gloire !\n        Chante à la gloire\n        Du Roi des rois\n        Chante à la gloire du Roi.\n\n2.  Prends Christ dans ta main\n    Toute mon âme\n    Fais-la briller de ton amour\n    Remplis-moi, ô Jésus de ta flamme\n    D’une foi triomphant chaque jour.\n\n3.  Luttez, priez pour rester fidèles\n    Chantez- Lui votre joie sans fin\n    Avec Lui toute la vie est belle\n    Rayonnante aujourd’hui et demain\n\n4.  Jésus Christ le Seigneur\n    Vous appelle\n    Vers les hommes\n    Sans amour, sans foi\n    Acceptez la joyeuse nouvelle :\n    Jésus est votre Sauveur et Roi</h4></pre>"
          },
          {
            "num" : "62",
            "titre": "Louez l'Eternel ! Il est bon",
            "hira": "<pre><h4 class='padding'>\nLouez l’Eternel ! Il est bon\nLouez en chaque maison\nLouez-le en toute saison\nLouez l’Eternel ! Il est bon.\n\n1.  Je sais qu’Il m’aime\n     Et que son nom est grand\n     Il dit souvent\n     Que je suis son enfant\n     Son amour est bien plus haut\n     Que l’azur des cieux\n     Plus profond que l’océan\n     Louez l’Eternel ! Il est bon.\n\n2.  Je sais qu’un jour\n     Il viendra me chercher\n     Et pour toujours\n     Avec Lui je serai\n     J’attends le jour où je verrai\n     Les cieux s’ouvrir enfin sur Lui\n     Louez l’Eternel ! Il est bon</h4></pre>"
          },
          {
            "num" : "63",
            "titre": "Jésus, c'est le plus beau nom",
            "hira": "<pre><h4 class='padding'>\nJésus, c’est le plus beau nom, \nMerveilleux Sauveur, \nSeigneur de gloire !\nEmmanuel\nDieu est avec nous, \nSource de joie, \nParole de vie</h4></pre>"
          },
          {
            "num" : "64",
            "titre": "Quand je vois les fleurs",
            "hira": "<pre><h4 class='padding'>\n1.  Quand je vois les fleurs\n    Des champs\n    Quand j’entends chanter\n    Le vent\n    Quand j’entends grondement\n    Du torrent\n    Je dis : «  Mon Dieu\n    Que tu es grand  »\n    Dans le ciel bleu\n    Le vol d’un oiseau silencieux\n    Le doux murmure de l’eau\n    L’eau d’un petit ruisseau.\n\n2.  Tout ce que Dieu a créé\n     Tout ce qu’il nous a donné\n     Me remplit d’admiration\n     Et de joie\n     Ce sont les oeuvres\n     De mon Roi\n     Vous qui passez\n     Ne négligez pas de louer\n     Celui qui peut vous déliver\n     Du poids de vos péchés.</h4></pre>"
          },
          {
            "num" : "65",
            "titre": "Merveilleux amour",
            "hira": "<pre><h4 class='padding'>\nMerveilleux amour, \nAmour de Dieu pour moi !\nMerveilleux amour, \nDe Jésus sur la croix !\n\nVaste autant que les océans, \nProfond plus que les mers, \nHaut, plus haut\nQue l’azur des cieux\nEst son amour.</h4></pre>"
          },
          {
            "num" : "66",
            "titre": "Qui donc dans le ciel",
            "hira": "<pre><h4 class='padding'>\nQui donc dans le ciel\nEst semblable à toi\nQui est puissant comme toi\nEternel mon Roi\nQui est puissant comme toi\nEternel mon Roi ?\n\n1.  Tu es Adonaï Jireh\n    En tout temps tu pourvoiras\n    Tu es Adonaï Raphé\n    Eternel, tu guériras\n\n2.  Tu es Adonaï Shamma\n    Tu entends, tu répondras\n    Tu es Adonaï Shalom\n    Dieu de paix pour tous les hommes.\n\n3.  E l Shaddaï, Dieu tout puissant, \n    Tu protèges et tu nourris\n    El Olam, Dieu Eternel\n    El Haï, tu es vivant.</h4></pre>"
          },
          {
            "num" : "67",
            "titre": "Blessed be the name",
            "hira": "<pre><h4 class='padding'>\nBlessed be the Name (2)\nBlessed be the Name of the Lord.\nHallelujah (2)\nBlessed be the Name of the Lord.\n\nBéni soit le Nom (2)\nBéni soit le Nom du Seigneur \nAlleluia (2)\nBéni soit le Nom du Seigneur.</h4></pre>"
          },
          {
            "num" : "68",
            "titre": "Father, I adore you",
            "hira": "<pre><h4 class='padding'>\nFather, I adore you, \nLay my life before you, \nHow I love you!\n\nJesus, I adore You, \nLay my life before you, \nHow I love you!\n\nSprit, I adore you, \nLay my life before you, \nHow I love you!</h4></pre>"
          },
          {
            "num" : "69",
            "titre": "What a wonderful Saviour is Jesus",
            "hira": "<pre><h4 class='padding'>\n1.  What a wonderful Saviour is Jesus, \n    What a wonderful Friend is He, \n    For He left all the glory of heaven, \n    Came to earth to die on Calvary :\n\n    Sing Hosanna! Sing Hosanna!\n    Sing Hosanna to the King of kings!\n    Sing Hosanna! Sing Hosanna! \n    Sing Hosanna to the King.\n\n2.  He arose from the grave, Hallelujah, \n    And He lives never more to die, \n    At the Father’s right hand interceding\n    He Will hear and heed our faintest cry :\n\n3.  He is coming some day to receive us, \n    We ‘ll be caught up to heaven above, \n    What joy it will be to behold Him, \n    Sing forever of His grace and love!</h4></pre>"
          },
          {
            "num" : "70",
            "titre": "Sing alleluia to the lord",
            "hira": "<pre><h4 class='padding'>\n1.  Sing alleluia to the Lord, (2)\n    Sing alleluia, sing alleluia\n    Sing alleluia to the Lord.\n\n2.  Jesus is risen from the dead, (2)\n    Jesus is risen, Jesus is risen,\n    Jesus is risen from the dead.\n\n3.  Jesus is Lord of heaven and earth, (2)\n    Jesus is Lord, Jesus is Lord,\n    Jesus is Lord of heaven and earth.\n    4.  Jesus is comming for his own, (2)\n    Jesus is comming, Jesus is coming,\n    Jesus is comming for His own</h4></pre>"
          },
          {
            "num" : "71",
            "titre": "Hallelujah, for the Lord our God",
            "hira": "<pre><h4 class='padding'>\nHallelujah, for the Lord our God\nThe Almighty reigns.\nLet us rejoice and be glad\nAnd give the glory unto Him\nHallelujah, for the Lord our God\nThe Almighty reigns. </h4></pre>"
          },
          {
            "num" : "72",
            "titre": "Alleluia, alleluia",
            "hira": "<pre><h4 class='padding'>\nAlleluia, alleluia, \nGive thanks to the risen Lord.\nAlleluia, alleluia, \nGive praise to his name.\n\n1.  Jesus is Lord of all the earth, \n    He is the King of creation.\n\n2.  Spread the good news o’er all the earth, \n    Jesus has died and has risen.\n\n3.  We have been crucified with Christ, \n    Now we shall live for ever.\n\n4.  God has proclaimed the just reward, \n    Life for all men, alleluia</h4></pre>"
          },
          {
            "num" : "73",
            "titre": "You are the King of Glory",
            "hira": "<pre><h4 class='padding'>\nYou are the King of Glory, \nYou are the Prince of peace, \nYou are the Lord of heav’n and earth, \nYou ‘re the Son of righteousness.\nAngels bow down before You, \nWorship and adore, \nFor You have the words of\nEternal life, \nYou are Jesus Christ the Lord.\nHosanna to the Son of David!\nHosanna to the King of kings!\nGlory in the highest heaven, \nFor Jesus the Messiah reigns.</h4></pre>"
          },
          {
            "num" : "74",
            "titre": "Jesus is Lord!",
            "hira": "<pre><h4 class='padding'>\n1.  Jesus is Lord!\n    Creation’s voice proclaims it, \n    For by his power\n    Each tree and flower\n    Was planned and made.\n    Jesus is Lord!\n    The universe declares it.\n    Sun, moon and stars in heaven cry\n\n      Jesus is Lord!\n       Jesus is Lord (2)\n       Praise Him with ‘Hallelujahs’for\n       Jesus is Lord!\n\n2.  Jesus is Lord!\n    Yet from His throne eternal\n    In flesh He came to die in pain\n    On Calv’ry’s tree.\n    Jesus is Lord!\n    From Him all life proceeding, \n    Yet gave His life a ransom\n    Thus setting us free.\n\n3.  Jesus is Lord!\n    O’ er sin the mighty conqueror, \n    From death He rose and all his foes\n    Shall own His name.\n    Jesus is Lord!\n    God sends His Holy Spirit\n    To show by works of power\n    That Jesus is Lord!</h4></pre>"
          },
          {
            "num" : "75",
            "titre": "He is Lord, He is Lord",
            "hira": "<pre><h4 class='padding'>\nHe is Lord, He is Lord.\nHe is risen from the dead, \nAnd He is Lord.\nEv’ry knee shall bow, \nEv’ry tongue confess\nThat Jesus Christ is Lord.</h4></pre>"
          },
          {
            "num" : "76",
            "titre": "His name is wonderful",
            "hira": "<pre><h4 class='padding'>\nHis name is wonderful (2)\nHis name is wonderful, \nJesus my Lord.\nHe is mighty king, \nMaster of every thing, \nHis name is wonderfull, \nJesus my Lord.\nHe ‘s the great shepherd, \nThe rock of all ages, \nAlmighty God is He;\nBow down before Him, \nLove and adore Him, \nHis name is wonderful, \nJesus my Lord</h4></pre>"
          },
          {
            "num" : "77",
            "titre": "Praise the name of Jesus",
            "hira": "<pre><h4 class='padding'>\nPraise the name of Jesus, \nPraise the name of Jesus, \nHe’s my rock, He’s my fortress, \nHe’s my deliverer, \nIn Him will I trust.\nPraise the name of Jesus</h4></pre>"
          },
          {
            "num" : "78",
            "titre": "I will enter His gates",
            "hira": "<pre><h4 class='padding'>\nI will enter His gates\n  With thanksgiving in my heart, \nI will enter His courts with praise, \nI will say this is the day\n  That the Lord has made, \nI will rejoice for He has made me glad.\nHe has made me glad, (2)\nI will rejoice for He has made me glad\nHe has made me glad, (2)\nI will rejoice for He has made me glad.</h4></pre>"
          },
          {
            "num" : "79",
            "titre": "Majesty, Kingdom, authority",
            "hira": "<pre><h4 class='padding'>\nMajesty, Kingdom, authority\nFlow from His throne\nUnto His own, \nHis anthem raise.\n\nSo exalt, lift up on high\nThe name of Jesus!\nMagnify, come glorify\nChrist Jesus the King!\nMajesty, worship His Majesty;\nJesus who died, now glorified, \nking of all kings.</h4></pre>"
          },
          {
            "num" : "80",
            "titre": "There’s no greater name than Jesus,",
            "hira": "<pre><h4 class='padding'>\nThere’s no greater name than Jesus, \nName of him who came to save us\nIn that saving name of Jesus\nEvery knee should bow.\nLet every thing that is’neath the ground, \nLet every thing in the world around, \nLet every thing that’s high o’ er the sky, \nBow at Jesus’ name.\nIn our minds by faith professing, \nIn our hearts by inward blessing, \nOn our tongues by words confessing\nChrist is Lord</h4></pre>"
          },
          {
            "num" : "81",
            "titre": "Andriamanitra ô! Andriamanitraô!",
            "hira": "<pre><h4 class='padding'>\nAndriamanitra ô! Andriamanitraô!\nMiantso anao aho\nTe-hihaona Aminao\n\n1.  Hatramin’ny maraina\n    No iantsoako Anao\n    Mangetaheta Anao\n    ‘Zany fanahiko\n\n2.  Ny tany karakaina\n    Omeo ny orana\n    Ny foko mitaraina\n    Fa te hahita Anao\n\n3.  Iriko anie ry Tompo\n    Ny ho eo anilanao\n    Hibanjina isan’andro\n    Ny voninahitrao\n\n4.  Ny tara-masoandro\n    Andrasan’ny maraina\n    Manoatra noho izany\n    Ny fiandrasako Anao\n\n5.  Fa Ianao no aina\n    Hamelombelona ahy\n    Fa Ianao ry Ray ô, \n    No hasambarako</h4></pre>"
          },
          {
            "num" : "82",
            "titre": "Na aiza n’aiza iangonan-droa",
            "hira": "<pre><h4 class='padding'>\nNa aiza n’aiza iangonan-droa\nNa telo amin’ny Anarako\nDia indro fa eo anivo Aho\n\n1.  Mitia anareo\n\n2.  Te-hamonjy anareo\n\n3.  Te-hiaro anareo</h4></pre>"
          },
          {
            "num" : "83",
            "titre": "Mivavaha, mivavaha",
            "hira": "<pre><h4 class='padding'>\n1.  Mivavaha, mivavaha\n    Fa mpanota sy mpania\n    Mikiriza mba hamaha\n    Ireo mitana anao ety\n\n      Fa ny Tompo be fitia\n      Tsy mamela anao ho very\n      Fa miantso hoe : «  Avia  »\n      «  Manatòna ry olom-bery  »\n\n2.  Dia itsory sy ifony\n    N’inona n’inona natao\n    Aza miandriandry intsony \n    Sao ho zary neninao</h4></pre>"
          },
          {
            "num" : "84",
            "titre": "Havaozy ny foko ry Tompo malala",
            "hira": "<pre><h4 class='padding'>\n1.  Havaozy ny foko ry Tompo malala\n    Ka aoka ny loto nanjaka hiala\n    Fa mangetaheta hahita madio\n    Ny foko rehetra manomboka anio.\n\n2.  Soloy hazavana ‘lay aizina ela\n    Tsy mahatamana fa mbola tavela\n    Mitsilopilopy ‘lay foko efa lao\n    K’iriko hitopy ilay masonao</h4></pre>"
          },
          {
            "num" : "85",
            "titre": "Havaozy re ry Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  Havaozy re ry Tompo\n    Ny fiainako \n    Ny ota izay mangeja ahy \n    Mba tapahonao\n    Ho afaka tokoa\n    Ny aizina ao am-po\n    Ka ny fahazavana\n    No iainako\n\n        Ry Jeso Tompoko\n        Ianao Mpamonjiko\n        Ka fifaliana tokoa\n        Ny miaraka Aminao\n\n2.  Mba diovy ka sasao\n    Ny foko Jesosy\n    Ka ny loto mba fafao\n    Ho madio tokoa\n    Ka Ianao hanjaka\n    Ao am-po\n    Amin’ny andro \n    Iainako ety</h4></pre>"
          },
          {
            "num" : "86",
            "titre": "Mamela heloka isan’andro",
            "hira": "<pre><h4 class='padding'>\n1.  Mamela heloka isan’andro\n    Ianao Jeso, Zoky be fitia\n    Nefa, nefa re, indrisy\n    Fa lotoiko (2) tamin’ny otako\n    …o, o, o, …\n    Miantsoantso aho hoe :\n    Ray malala ô !\n    …o, o, o, …\n    Atsangano aho\n    Fa efa trotraka\n\n2.  Tsaroako dia tsaroako eny\n    Ny hadisoako, Zoky be fitia\n    Nefa, nefa re indrisy !\n    Fa fiadanana (2) no katsahiko\n\n    Rotsirotsy ry Mpamonjy\n    Diboky ny hafaliana izahay\n    Novesaram-pahoriana\n    Nefa re dia fiadanana\n    No natolotrao</h4></pre>"
          },
          {
            "num" : "87",
            "titre": "Ray ô ! tariho",
            "hira": "<pre><h4 class='padding'>\n1.  Ray ô ! tariho\n    Sy hamasino\n    Mba sakambino \n    ‘Zahay zanakao\n    Ianao ry Rainay\n    No antenainay\n    Hambomba anay\n    Omeo fo mino \n    Tsy hanadino\n    Anao ry Rainay\n    Ho mandrakizay\n\n2.  Jeso ô Mpamonjy\n    Ry Mofon’aina\n    O mba vokio\n    Ny fanahinay\n    Fa manantena\n    Ny famonjena\n    Atolotrao\n    Omeo fo mino\n    Tsy hanadino\n    Anao Mpamonjy\n    Ho mandrakizay\n\n3.  O ry Fanahy\n    Fanahin’ny Ray\n    Bitsibitsiho\n    Ny fanahinay\n    O mba tsilovy\n    Dia mba arovy\n    ‘Zao lalanay\n    Omeo fo mino \n    Tsy hanadino\n    Anao Fanahy\n    Ho mandrakizay</h4></pre>"
          },
          {
            "num" : "88",
            "titre": "Ny foko miandrandra Anao",
            "hira": "<pre><h4 class='padding'>\n1.  Ny foko miandrandra Anao\n    Ry Zanak’ondry masina ;\n    Noho ny ranao latsaka\n    Mba amindrao fo izao\n\n2.  Na dia tsy mendrika Anao\n    Ny foko feno heloka, \n    Diovy ny navotanao\n    Ry Zanak’ondry ô, izao\n\n3.  Ny foko feno tahotra, \n    Izay kivy sady ketraka\n    Maniry fahafahana\n    Ao Aminao, izao\n\n4.  Ry Jeso ô, be indrafo, \n    Nisolo voina tokoa, \n    Hazòny ny fanahiko\n    Mba ho Anao, izao.\n\n5.  Endrey ny fitiavanao\n    Tsy takatra heverina\n    Hazòny aho ho zanakao\n    Mba ho anao tokoa, Jeso.</h4></pre>"
          },
          {
            "num" : "89",
            "titre": "Raha manjombona ny andro",
            "hira": "<pre><h4 class='padding'>\n1.  Raha manjombona ny andro\n    Noho ny ota natao\n    Moa ve hitanondrika foana aho\n    Tsy ho zakako \n    Ny havesaran’ny heloka\n    Iza re no mba hianteherako ?\n\n        Tsy ho kivy anefa aho satria\n        Jesosy koa mbola tia\n        Ka nandatsaka ho ahy\n        Ny rany marina\n        Izay manadio ny foko\n        Feno haratsiana\n        Ekeko ny avotrao ry Jeso\n\n2.  Niezaka ihany aho\n    Mba hanala ny entako\n    Kanefa dia very maina ny heriko\n    Tena tsapako fa\n    Tsy ny asa izay ataoko\n    No afaka hanaisotra ny otako</h4></pre>"
          },
          {
            "num" : "90",
            "titre": "  Omeo hery raha hanambara",
            "hira": "<pre><h4 class='padding'>\n1.  Omeo hery raha hanambara\n    Ny Teninao ‘zahay ry Tompo ô\n    Voafidy hanao ny asa tsara\n    ‘Zahay izay vavolombelonao\n\n        Te hanambara fiainam-baovao\n        Atolotrao ireo izay mandray \n        Anao\n        Fenoy koa ny Fanahinao\n        Ny voninahitra kosa ho Anao\n\n2.  Malemy anefa ka tsy ampy hery\n    Nefa matoky ny fahasoavanao\n    Ka tsy hahatsiaro tena ho irery\n    He sambatra aho fa manana Anao\n\n3.  Raha mila ho kivy indraindray\n    Noho ny olana \n    Tsy maintsy sedrainay\n    Aza avela hatoky tena\n    Ianao irery no Famonjena.</h4></pre>"
          },
          {
            "num" : "91",
            "titre": "Ianao ry Tompo no",
            "hira": "<pre><h4 class='padding'>\n1.  Ianao ry Tompo no \n    Naniraka (anay)\n    Hijoro ka hanorina\n    Sy hamboly koa\n    (Handeha hamoa)\n    Fa te-hamboatra sy hanavao ka\n    Hitombo hatrany\n    Ireo voafidy maro.\n        (Andriamanitra ô !)\n        Izahay moa mpanompo\n        (Ka tsinotsinona)\n        Tao ny namboly, tao ny \n        nandena\n        Fa ny nitahy sy nampitombo ? \n        (Ny herinao Tsitoha)\n        Koa tahio ny Teny, \n        Ho tena tsara voa.\n        (Haharetany, hahazoana loka koa\n\n2.  ‘Reo voa nafafy tamin’ny \n    Anaranao (ry Tompo)\n    Ho lonaka anie ny toerana\n    (Ho tany tsara)\n    Ka ho faty, ho lo, \n    Hitsiry avy eo ;\n    Hiara-mifaly ny vokatry\n    Ny teny.\n\n3.  Ny fo torotoro no tany tsara\n    Ary koa\n    Ny finoana miorina no voa\n    Ka tahio\n    Ho lalim-paka, hitoetra tsara ;\n    Hahay hizara ny tsirom-bokatsoa</h4></pre>"
          },
          {
            "num" : "92",
            "titre": "Izaho anie Jeso ka mba maniry",
            "hira": "<pre><h4 class='padding'>\n1.  Izaho anie Jeso ka mba maniry\n    Tsy haditra intsony na hikiry\n    Fa hiova fo ka tsy hania, \n    Ho sakaizanao mandrakizay doria\n    Izaho anie Jesosy\n    Mba diovinao ho tempolinao\n    Izaho anie Jesosy\n    Ho sakaizanao\n    Mandrakizay doria.\n\n2.  Izaho anie Jeso ka mba mikasa\n    Tsy hamerina irony lasa !\n    Toetra sadasada, maramara\n    Tsy mba sitrakao, \n    Ry Tompo, tsara ô\n\n3.  Izaho anie Jeso tsy te-hiala\n    Eo anilanao mba hahalala, \n    Izany dianao vitsy tia, \n    Nefa paradisa maminay ery\n\n4.  Izaho anie Jeso ka mitaraina\n    Fa maniry anao, ry Mofon’aina\n    Ho tempolinao, ry Tompo soa, \n    Mba honenonao\n    Mandrakizay doria !</h4></pre>"
          },
          {
            "num" : "93",
            "titre": "Ambinonao Jeso",
            "hira": "<pre><h4 class='padding'>\n1.  Ambinonao Jeso\n    Ireo mpanomponao\n    Mamirapiratra ery\n    Ny voninahiny\n    Indro mitsiry ao am-po\n    Ny avonavona\n    Ka manadino Anao \n    Ny mpianatrao.\n\n        Ampio aho Jeso \n        Fa mbola mirehareha\n        Esory avokoa\n        Ny avonavoko\n        Hahay hanetry tena\n        Toa anao Jeso\n        Afaho aho re ry Tompo ô\n\n2.  Mamitaka ahy tokoa\n    Raha ny harena\n    Raha tsy mitandrina \n    Dia avadiny\n    Ka manakalo \n    Amin’ny mora simba \n    Ny famonjena \n    Izay natolotrao\n\n3.  Miaiky aho Jeso\n    Fa mbola osa\n    Misarika ahy\n    Ny rehak’izao tontolo izao\n    Tantanonao Jeso\n    Izany fiainako\n    Fandrao aho Tompo ô\n    Mirehareha</h4></pre>"
          },
          {
            "num" : "94",
            "titre": "Ampianaro ahy Jeso",
            "hira": "<pre><h4 class='padding'>\n1.  Ampianaro ahy Jeso\n    Anio ny lalanao\n    Fa iriko indrindra \n    Ny ho Aminao\n    Nefa e manafotra ahy\n    Ny ota izay natao\n    Ka manakona ahy\n    Tsy hahita Anao\n\n        Raiso aho (ka ekeo)\n        Jeso ho Anao\n        Ka (diovy sy) ombay\n\n        Ny fitiavanao\n        Na tsy mendrika aza\n        Dia mibebaka Aminao\n        Vonona hanaraka ny lalanao\n\n2.  Ampianaro aho Jeso\n    Hivelona Aminao\n    Ny fiainako dia \n    Ho eo an-tananao\n    Na misintona aza re\n    Izao tontolo izao\n    Dia matoky aho\n    Manana Anao\n\n3.  Ampianaro aho Jeso\n    Hiasa ho Anao\n    Ho fiasana eo \n    Am-pelatananao\n    Ka hahay hizara\n    Izany fitiavanao\n    Mba ho mpianatrao \n    Izao tontolo izao.</h4></pre>"
          },
          {
            "num" : "95",
            "titre": "Raha jereko Tompo ô!",
            "hira": "<pre><h4 class='padding'>\n1.  Raha jereko Tompo ô !\n    Ny hazo nijalianao\n    O, tsapako ny fitiavanao\n    Sy ny tsy fahamendrehako.\n\n2.  Mpamonjy ô, tarihonao\n    Tsy hametraka ny tokiko\n    Afa-tsy amin’ny ranao\n    Hananako ny fiainana.\n\n3.  Moa mba efa nisy va\n    Fitiavana lehibe toy izao ?\n    Fa fijaliana sy satro-tsilo\n    No satroboninahitrao\n\n4.  Izao tontolo izao tokoa\n    Tsy hatakaloko Anao\n    Ka indro ny foko sy ny tenako\n    Omeko Anao ry Jeso ô !</h4></pre>"
          },
          {
            "num" : "96",
            "titre": "Jeso apetrako aminao",
            "hira": "<pre><h4 class='padding'>\n1.  Jeso apetrako aminao\n    Ny fanahiako rehetra\n    Ny asa vita hatrizao\n    Anao tokoa tsy misy fetra\n    Jeso apetrako aminao\n\n2.  Jeso apetrako aminao\n    Ny asa fikelezan’aina\n    Tsy misy miafina aminao\n    Ny hetaheta tsy hay lazaina\n    Jeso apetrako aminao.\n\n3.  Jeso apetrako aminao\n    Ny toky sy fanantenana\n    Ny sitrakao no aoka hatao\n    Na aiza lalana hombàna\n    Jeso apetrako aminao</h4></pre>"
          },
          {
            "num" : "97",
            "titre": "Jesosy ô",
            "hira": "<pre><h4 class='padding'>\n1.  Jesosy ô\n    ‘Ty aho manolo-tena ho Anao\n    Hanaraka Anao Mpamonjy tia\n    Ekeo aho Jeso\n    Tariho eo anilanao\n    Ho sambatra mandrakizay\n    Ry Jeso Mpiandry tsara ô\n    Tantano aho\n    Te ho mpanomponao\n    Ekeo aho Jeso\n    Tariho aho ho eo anilanao\n    Ho sambatra \n    Mandrakizay doria\n\n2.  Jesosy ô\n    Ianao Mpiaro mahafatra-po\n    Mitantana, mitahy, manasoa\n    Ho sambatra tokoa\n    Ka tsy hivily, tsy hania\n    Ny miaraka aminao Mpamonjy tia</h4></pre>"
          },
          {
            "num" : "98",
            "titre": "Ianao ry Tompo no tsy mandao",
            "hira": "<pre><h4 class='padding'>\nIanao ry Tompo no tsy mandao\nNy ondry izay tarihinao\nFa sambatra ary ny mpanomponao\nIzay mandresy toa Anao\nIanao Mpitarika tena mahay \nIzay mijery lalana ahy\nIndreto vonon-kanaraka Anao ‘zahay\nAnio, ampitso, rahatrizay.\nRaha misy ondry izay mania\nRatsy fandeha manimba ny dia\nAmpio ry Tompo malala aho \nsatria\nHandrapaka ny bibidia\nO, ô, ô ! mba tantano ka aza \nafoy\nFa efa diso lalana aho\nKa mba toroy</h4></pre>"
          },
          {
            "num" : "99",
            "titre": "Nao Jesosy Longo soa",
            "hira": "<pre><h4 class='padding'>\nNao Jesosy Longo soa\nVazoy iaby keo\nTy ondaty maro toy\nMiandrandra lanitse\nLaha mandongalike\nRanomaso latsake\nIanao Jehovah Ranandriaa\nTahio ty ondaty maro toy\nMitokatoka hoe : avia\nHanafaka ty voy atoy</h4></pre>"
          },
          {
            "num" : "100",
            "titre": "Jeso Tompo ô",
            "hira": "<pre><h4 class='padding'>\n1.  Jeso Tompo ô (bis)\n    Ndreto izahay zanakao\n    Zay maniry ny mba hanome\n    Voa mendrika Anao\n    Jeso Tompo ô (bis)\n    ’Zay no hetahetanay\n\n        Koa mangataka Anao izahay\n        Mba hanafy hery anay\n        Fa izay no fenitray\n        Ka tsy hokapaina izahay\n\n2.  Ry Tompon’ny fahefana ô\n    Mitalaho Aminao zahay\n    Fikasana ato anatinay\n    Ny hamoa voa tsara e\n    Nefa Tompo ô (bis)\n    Tsy tanteraka izahay</h4></pre>"
          },
          {
            "num" : "101",
            "titre": "Hetahetam-pamonjena",
            "hira": "<pre><h4 class='padding'>\nHetahetam-pamonjena\nHo an’izao tontolo izao\nFa mahantra mahonena\nTsy mahita izay hatao\nHetahetam-pamonjena\nEo anivon-tany maina\nHe ! miandry manantena\n‘Reto fonay karakaina\n\nHetahetam-pamonjena\nHo an’izao tontolo izao\nMba omeo ny firenena\nTompo ô ! miandry Anao\nHetahetam-pamonjena\nAo anaty foko ao\nKa tsy azoko tonena\nRaha tsy eo anilanao.</h4></pre>"
          },
          {
            "num" : "102",
            "titre": "Maty raty aho Jesosy Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  Maty raty aho Jesosy Tompo\n    Voreren’ny devoly ka voa\n    Malahelo ny foko fa trobo\n    Ka manahy tomany Anao\n    Longo lombay aho e (2)\n    Ifonako ty raty\n    ‘Ty raty nataoko e\n    Ifonako fa raty mare\n\n2.  Lakolosy mivango alahady\n    Tsy dareako fa ataoko ho vandy\n    Io no raha ilaiko tokoa\n    Hahitako Mpandombako soa.\n\n3.  Vetsovetso izao lah-mipoly\n    Dia hanao ny rapon’i Jesosy\n    Laha mivoady aho izao fa handroso\n    Hahitako ny lagnitse roy</h4></pre>"
          },
          {
            "num" : "103",
            "titre": "Ianareo izay lavitra taloha",
            "hira": "<pre><h4 class='padding'>\nIanareo izay lavitra taloha\nDia manjary akaiky izao\nAo amin’i Kristy\n\n1.  Hiantran’Andriamanitra\n    Anie isika hotsimbininy\n    Ka hataony mamiratra\n    Eo amintsika ny tavany\n    Dia ho fantatry ny olona\n    Eran-tany ny herinao\n    Ka hanerana ireo firenen-drehetra\n    Ny vonjinao\n\n2.  Ny vahoaka rehetra enga anie\n    Hidera Andriamanitra ô,\n    Ny vahoaka rehetra enga anie\n    Hidera ny Anaranao\n    Fa Ianao dia mitsara vahoaka\n    Araka ny hitsiny\n    Sy manjaka amin’ireo\n    Firenen-drehetra\n    Isan-tokony.\n\n3.  Enga anie ka hitsimbina antsika\n    Hatrany Andriamanitra\n    Ka ho masina eran’ny vazan-tany\n    Ny Anarany\n    Voninahitra anie ho an’ny Ray\n    Nandefa ny Zanany\n    ‘Zay nomeny hanasoavany antsika\n    Noho ny Fitiavany</h4></pre>"
          },
          {
            "num" : "104",
            "titre": " Jesosy ô ! Misaotra Anao aho",
            "hira": "<pre><h4 class='padding'>\n1.  Jesosy ô ! Misaotra Anao aho\n    Fa tsy nanaraka ny ditrako\n    Ianao Jeso\n    Atolotro Anao ‘zato tenako\n    Avelao re ny otako izao\n    Avelao re ny otako izao Jeso\n    Avelao fa tsy mendrika\n    Ho Anao Jeso\n    Ovay ny foko ho vaovao \n    Avelao re ny otako izao.\n\n2.  Jesosy ô ! misaotra Anao aho\n    Noho ny famindramponao\n    Amiko izao\n    Na dia nanadino Anao aza aho\n    Mbola antsoinao ho eo Aminao\n    O ! Jesosy ô ! misaotra Anao aho\n    Ny indrafonao\n    Tsy takatry ny saiko izao\n    Atolotro Anao ‘zato tenako\n    Anjakao re ny fiainako izao.\n\n3.  Jesosy ô ! misaotra Anao aho\n    Noho ny fitiavanao ity zandrinao\n    Mifona ho ahy isan’ora Ianao\n    Hoe :Ray ô ! mamelà azy izao\n\n    O ! Jesosy ô ! misaotra Anao aho\n    Ny fitiavanao\n    Tsy mba maty ao am-poko ao\n    Atolotro Anao ‘zato tenako\n    Ampianaro aho mba ho tia Anao\n    O ! ô !ô ! Jesosy ô !\n    Misaotra Anao aho\n    Misaotra e ! fa tia ahy Ianao\n    Atolotro Anao ‘zato tenako\n    Raiso aho ho mpanomponao\n    Ho mpanomponao\n    Hanaiky Anao, tena tia Anao.</h4></pre>"
          },
          {
            "num" : "105",
            "titre": "Tsaroako anio",
            "hira": "<pre><h4 class='padding'>\n1.  Tsaroako anio\n    Jeso ny fanavotanao\n    Fa tao an-davaka\n    Aho no nakarinao\n    Ny sandrinao mahery \n    No natsotranao\n    Hisarika ahy\n    Ho eo anilanao\n\n        Zao no voady \n        Ataoko aminao (Jesosy ô)\n        Voadiko anio\n        Mandrakizay\n        Ts’isy hahasaraka ahy\n        Hitoetra eo anilanao\n        Ho eo an-tongotrao\n        Akaikinao\n\n2.  He sambatra Jeso\n    Satria voasasanao\n    Ny heloko rehetra \n    Dia navelanao\n    Ny fiainako tontolo\n    Dia nohavaozinao\n    Ho mendrika tokoa\n    Ny lapanao\n\n3.  Endrey ny hafaliako\n    Manana Anao\n    Ny lanitra namboarinao\n    Ho tranoko\n    Ireo anjely maro\n    Izay midera Anao\n    No hiaraka amiko\n    Eo anilanao</h4></pre>"
          },
          {
            "num" : "106",
            "titre": "Ry Tompo Andriamanitra",
            "hira": "<pre><h4 class='padding'>\n1.  Ry Tompo Andriamanitra \n    Andriananahary\n    Nasaina nanohy\n    Ary nandavorary\n    Ny zava-boahary\n    Eran-tany izahay\n    Mitory fitiavana\n    Lalina izany\n\n        Nomenao ho ohatra\n        Ilay Zanakao. Misaotra e !\n        Ka niasa nisasatra \n        Teto aminay. Misaotra e !\n        Nanjary asa masina izao\n        Izao ny asanay. Misaotra e !\n        Mitory fitiavana \n        Lalina izany. Misaotra e !\n\n2.  Matoky izahay\n    Fa mitantana Ianao\n    Manoro izay asa\n    Sahaza ho anay\n    Satria sitrakao \n    Ny hahasambatra anay\n    Mitory fitiavana \n    Lalina izany.\n\n    Ry Rainay Mpahary\n    Tahio ny asanay. Tahio e !\n    Tahio mba ho mendrika\n    Marina Anao. Tahio e !\n    Fa miaraka miasa \n    Amin’i Jeso izahay. Tahio e !\n    Manomana tany sy \n    Lanitra vao. Tahio e</h4></pre>"
          },
          {
            "num" : "107",
            "titre": "Enga anie ka homba anao Jeso\n1.  Enga anie ka homba anao Jeso\n    Hanadio sy hanazava,\n    Hampahery lalandava,\n    Enga anie ka homba anao Jeso !\n\n        Homba anao, homba anao\n        Homba anao anie Jeso\n        Homba anao, homba anao\n        Enga anie ka homba anao Jeso\n\n2.  Raha mitambatra ny rahona,\n    Ka mikipy ny masoandro,\n    Raha Jeso momba isan’andro\n    Ho tantely koa ny vahona\n    Homba anao, sns.\n\n3.  Mangamanga indray ny lanitra,\n    Loharanom-pitahiana,\n    Sady foto-pifaliana.\n    Jeso Zanak’Andriamanitra.\n    Homba anao, sns.\n\n4.  Raha mitolona ady sarotra,\n    Matokia fa tsy ho irery,\n    Homba anao Jeso mahery,\n    Homba anao tsy miady varotra.\n    Homba anao, sns.\n\n5.  Raha hilaozanao ny havana,\n    Sady mainty koa Jordana,\n    Ho mazava ny fitàna,\n    Ao Jeso hanangana avana.\n    Homba anao, sns.\n\n6.  Raha Jesosy no mitantana,\n    Paradisa koa ny tany,\n    Hasambarana hatrany,\n    Ao Kanana no hamantana.\n    Homba anao, sns…",
            "hira": "<pre><h4 class='padding'></h4></pre>"
          },
          {
            "num" : "108",
            "titre": " Ampodio izahay Jehovah",
            "hira": "<pre><h4 class='padding'>\n1.  Ampodio izahay Jehovah,\n    Amin’ny fitianao ;\n    Na aiza na aiza no aleha\n    Aoka hovimbininao\n    O ! ambino\n    Izahay mpanomponao.\n\n2.  Fa ny teny re androany\n    Aoka ho tadidy koa\n    Ka mba hiasanay saina\n    Hahazoanay ny soa\n    Isan’andro\n    Izay hiainanay aty.</h4></pre>"
          },
          {
            "num" : "109",
            "titre": "Ry Tanindrazanay malala ô",
            "hira": "<pre><h4 class='padding'>\n1.  Ry tanindrazanay malala ô\n    Ry Madagasikara soa\n    Ny fitiavanay anao tsy miala\n    Fa ho anao, ho anao doria tokoa.\n\n        Tahionao ry Zanahary\n        ‘Ty nosin-drazanay ity\n        Hiadana sy ho finaritra\n        He ! sambatra tokoa izahay\n\n2.  Ry tanindrazanay malala ô\n    Irinay mba hanompoana anao\n    Ny tena sy fo fanahy anananay\n    ‘Zay sarobidy sy mendrika tokoa.\n\n3.  Ry tanindrazanay malala ô\n    Irinay mba hitahiana anao\n    Ka Ilay Nahary ‘zao tontolo izao\n    No fototra ijoroan’ny satanao.</h4></pre>"
          },
          {
            "num" : "110",
            "titre": "Zanahary ô tahio",
            "hira": "<pre><h4 class='padding'>\n1.  Zanahary ô tahio\n    Ny tanindrazanay\n    Handroso lalandava,\n    Handry fahizay\n    Enga anie hanjaka ao\n    Ny saina mahay miray\n    Dia ho tany sambatra,\n    Ilay Madagasikaranay.\n\n2.  Ireo mpitondra anay\n    Arovy lalandava koa\n    Tolory saina hendry,\n    Kinga sy mahay,\n    Ka ny marina anie no\n    Mba hanjaka ao tokoa,\n    Dia ho tany sambatra\n    Ilay Madagasikaranay.\n\n3.  Ny taranakay tahio\n    Ho vanona tokoa ;\n    Ireo no solofo\n    Dimby rahatrizay\n    Mba ho tena mahatoky,\n    Feno fahendrena koa\n    Dia ho tany sambatra,\n    Ilay Madagasikaranay</h4></pre>"
          },
          {
            "num" : "111",
            "titre": "Ry Rainay any an-danitra ô",
            "hira": "<pre><h4 class='padding'>\nRy Rainay any an-danitra ô\nHohamasinina anie ny Anaranao\nHo tonga anie ny fanjakanao\nHatao anie ny sitraponao\nEto an-tany tahaka\nNy an-danitra \nOmeo anay anio\nNy hanina sahaza anay\nAvelao ny helokay\nTahaka ny amelanay\nIzay meloka taminay\nAza avela ho azon’ny \nFakam-panahy izahay\nFa manafaha anay amin’ny ratsy\nAnao ny fanjakana sy ny hery\nAnao ny voninahitra mandrakizay\nAmena</h4></pre>"
          },
          {
            "num" : "112",
            "titre": "Jésus est au mileu de nous",
            "hira": "<pre><h4 class='padding'>\nJésus est au milieu de nous\nSon regard s’abaisse sur nous\nSa douce voix l’entendez-vous\n\n1.  Je veux vous bénir tous\n\n2.  Je veux vous sauver tous\n\n3.  Oh ! je vous aime tous</h4></pre>"
          },
          {
            "num" : "113",
            "titre": "O ces doux moments dans la prière",
            "hira": "<pre><h4 class='padding'>\n1.  O ces doux moments dans la prière\n    En présence de mon cher Sauveur\n    Sont comme une brise printanière\n    Rafraîchissant de son parfum\n    Mon cœur\n\n        Je sais que Jésus m’écoute\n        Il est là pour me soutenir\n        Et quand dans mon cœur\n        Vient le doute\n        Il veut malgré tout me bénir\n\n2.  Une heure en ta présence vaut mieux\n    Que mille dans les plaisirs faciles\n    Je m’approche de Toi, \n    Le cœur soucieux\n    Et tu me rends paisible\n    Et tranquille\n\n3.  Le Seigneur exauce ma prière\n    Au-delà de ce que j’ai espéré\n    Et de mille et une manières\n    Me bénit quand je suis désespéré</h4></pre>"
          },
          {
            "num" : "114",
            "titre": "Viens, Esprit du Dieu vivant",
            "hira": "<pre><h4 class='padding'>\nViens, Esprit du Dieu vivant\nSois maître en moi\n\nSonde-moi, courbe moi\nBrise-moi, façonne-moi\nViens Esprit du Dieu vivant\nViens et règne en moi.</h4></pre>"
          },
          {
            "num" : "115",
            "titre": "Jésus, apprends-moi je t’en prie",
            "hira": "<pre><h4 class='padding'>\nJésus, apprends-moi je t’en prie\nA vivre selon ton Esprit\nJésus, apprends-moi je t’en prie\nA vivre selon ton Esprit\n\n1.  Seigneur, voici tout mon péché \n		D’hier, d’aujourd’hui, de demain\n		Je ne peux pratiquer le bien\n		Merci de m’avoir pardonné\n\n2.  Seigneur, je saisis à deux mains\n		Ce que Tu promis à chacun\n		De ceux qui désirent une vie\n		Débordant de ton Saint-Esprit\n\n3.  Seigneur, je ne désire pas\n		Laisser le péché vivre en moi\n		Tu veux me montrer chaque fois\n		Ce qui dans mon cœur ne va pas\n\n4.  Seigneur, fais ce que Tu \n		voudras\n		Ma vie maintenant est à Toi\n		Je veux être prêt au combat\n		En sachant que Tu vis en moi.</h4></pre>"
          },
          {
            "num" : "116",
            "titre": "Tu veux Seigneur",
            "hira": "<pre><h4 class='padding'>\n1.  Tu veux Seigneur\n    Un cœur purifié\n    Donne-le moi\n    Divin crucifié\n    Et puisque Tu me l’as promis\n    C’est là mon ferme appui\n    Par ton Esprit\n    Rends-moi pur comme Toi\n\n2.  Jésus du ciel\n    Où Ton trône est assis\n    Montre la route\n    A mes pas indécis\n    C’est à Toi que je sacrifie\n    Tout mon cœur et ma vie\n    Par ton Esprit\n    Rends-moi pur comme Toi</h4></pre>"
          },
          {
            "num" : "117",
            "titre": "Jésus Toi",
            "hira": "<pre><h4 class='padding'>\n1.  Jésus Toi\n    tu m’as tant aimé\n    Tu étais mort pour me sauver\n    Je voudrais tant t’offrir\n    Mon cœur, mais tout souillé\n    Toi seul,\n    Tu peux me purifier\n\n    Merci Jésus\n    Je le sais Jésus\n    Tu m’as déjà tout pardonné\n    Merci Jésus\n    Je promets Jésus\n    Jamais plus\n    Je ne te quitterai\n\n2.  Pourtant Seigneur\n    Tu me connais\n    Si faible encore\n    Pour t ‘honorer\n    Mais je crois en Toi\n    En ce que tu m’avais dit :\n    «  Enfant ma grâce te suffit  »\n\n    Merci Jésus\n    Grâce à Toi Jésus\n    Moi, je serai\n    Plus que vainqueur\n    Merci, Jésus\n    Désormais Jésus\n    C’est à Toi\n    Qu’appartiendra mon cœur</h4></pre>"
          },
          {
            "num" : "118",
            "titre": "Oh ! prends mon âme",
            "hira": "<pre><h4 class='padding'>\n1.  Oh ! prends mon âme\n    Prends-la, Seigneur\n    Et que ta flamme\n    Brûle en mon cœur\n    Que tout mon être\n    Vibre pour Toi,\n    Sois seul mon Maître,\n    O ! divin Roi.\n\n        Source de vie\n        De paix d’amour,\n        Vers Toi je crie,\n        La nuit le jour.\n        Entends ma plainte,\n        Sois mon soutien,\n        Calme ma crainte\n        Toi, mon seul bien.\n\n2.  Du mal perfide,\n    O ! garde-moi,\n    Viens, sois mon guide,\n    Chef de ma foi.\n    Quand la nuit voile\n    Tout à mes yeux,\n    Sois mon étoile,\n    Brille des cieux.\n\n3.  Voici l’aurore\n    D’un jour nouveau,\n    Le ciel se dore\n    De feux plus beaux.\n    Jésus s’apprête,\n    Pourquoi gémir ?\n    Levons nos têtes,\n    Il va venir !</h4></pre>"
          },
          {
            "num" : "119",
            "titre": "Esprit de vie et de puissance",
            "hira": "<pre><h4 class='padding'>\n1.  Esprit de vie et de puissance\n    Réveille-moi, remplis mon cœur\n    Pénètre-moi dans ta présence\n    Et que par toi je suis vainqueur\n\n2.  Esprit de feu, ô sainte flamme\n    Détruis tout mal, en moi pécheur\n    Toi seul peux faire de mon âme\n    Un temple digne du Seigneur.\n\n3.  Esprit de gloire et de sagesse\n    Viens faire ta demeure en moi\n    Subviens à toutes mes faiblesses\n    Augmente et fais grandir ma foi\n\n4.  Esprit de grâce et de lumière\n    O, source qui coule à plein bord\n    Révèle-moi le cœur du Père\n    Et dévoile-moi ses trésors.</h4></pre>",
            "mark": "© COPYRIGHT LIGUE POUR LA LECTURE DE LA BIBLE, 1000 LAUSANNE, SUISSE AVEC AUTORISATION."
          },
          {
            "num" : "120",
            "titre": " C’est mon joyeux service",
            "hira": "<pre><h4 class='padding'>\n1.  C’est mon joyeux service\n    D’offrir à Jésus Christ\n    En vivant sacrifice\n    Mon cœur et mon Esprit\n\n        Accepte mon offrande\n        Bien-aimé fils de Dieu\n        Et que sur moi descende\n        La flamme du saint lieu !\n\n2.  J’abandonne ma vie\n    Sans regret, ni frayeur\n    A ta grâce infinie, \n    O ! mon libérateur !\n\n3.  Qu’un feu nouveau s’allume\n    par ton amour en moi\n    Et dans mon cœur consume\n    Ce qui n’est pas à Toi\n\n4.  Viens, Jésus ! sois mon Maître ;\n    Par ton sang racheté\n    A toi seul veux être\n    Et pour l’éternité</h4></pre>"
          },
          {
            "num" : "121",
            "titre": "Enseigne-nous Seigneur",
            "hira": "<pre><h4 class='padding'>\nPam, pam, pam…\n\n1.  Enseigne-nous Seigneur\n    A bien compter nos jours\n    Afin que nous appliquions \n    Notre cœur à la sagesse\n    Aie pitié de tes serviteurs\n\n2.  Rassasie-nous Seigneur\n    Chaque matin de ta bonté\n    Et nous serons toute notre vie\n    Dans la joie et l’allégresse\n    Aie pitié de tes serviteurs.\n\n3.  Oh ! Dieu tu es si bon\n    Car Tu es notre Berger\n    En Toi nous nous confions\n    Nous ne manquerions de rien\n    Aie pitié de tes serviteurs</h4></pre>"
          },
          {
            "num" : "122",
            "titre": "Toi qui disposes de toutes choses",
            "hira": "<pre><h4 class='padding'>\nToi qui disposes de toutes choses\nEt nous les donnes chaque jour,\nReçois, ô Père notre prière\nDe reconnaissance et d’amour\n\nLe don suprême, que ta main sème\nC’est notre pardon, c’est ta paix :\nEt ta clémence, trésor immense,\nEst le plus grand de tes bienfaits.\n\nQue par ta grâce,\nL’instant qui passe\nServe à nous rapprocher de Toi !\nEt qu’à chaque heure,\nVers ta demeure\nNos cœurs s’élèvent par la foi.</h4></pre>"
          },
          {
            "num" : "123",
            "titre": "Quand je contemple cette croix",
            "hira": "<pre><h4 class='padding'>\n1.  Quand je contemple cette croix\n    Où tu mourus, Prince de Gloire\n    Combien mon orgueil d’autrefois\n    M’apparaît vain et dérisoire\n\n2.  O mon Sauveur ne permet pas\n    Qu’en aucun bien je me confie,\n    Sauf dans le sang que tu versas,\n    Pour que ta mort devînt ma vie\n\n3.  Vit-on jamais, amour si grand\n    S’unir à douleur plus extrêmes\n    Et l’épine, au front d’un mourant,\n    Resplendir comme un diadème ?\n\n4.  Que l’univers fut à donner\n    Il ne vaut point un tel Sauveur\n    A lui je veux abandonner\n    Ma vie entière, et tout mon cœur.</h4></pre>"
          },
          {
            "num" : "124",
            "titre": " Jésus par ton sang précieux",
            "hira": "<pre><h4 class='padding'>\n1.  Jésus par ton sang précieux\n    Enlève mon iniquité,\n    Regarde-moi du haut des cieux\n    Dis-moi que Tu m’as pardonné\n    J’ai longtemps erré, cœur rebelle,\n    Mais j’entends Ta voix qui m’appelle,\n    Au pied de Ta croix maintenant\n    Tout confus, brisé, je me rends.\n\n    Blanc, plus blanc que la neige (bis)\n    Lavé dans le sang de l’Agneau,\n    Je serai plus blanc que la neige.\n\n2.  Oh ! le fardeau de mon péché\n    Dieu très Saint,\n    Est trop grand pour moi\n    Je veux en être délivré\n    A cette heure, libère-moi\n    Jésus, viens sois ma délivrance\n    Seul Tu peux calmer ma souffrance\n    Au pied de Ta croix maintenant,\n    Tout confus, brisé, je me rends.\n\n    Blanc, plus blanc que la neige (bis)\n    Lavé dans le sang de l’Agneau,\n    Je serai plus blanc que la neige.\n\n3.  Oh ! Jésus ton sang précieux\n    A lavé mon iniquité,\n    Oui, Tu m’as répondu des cieux\n    Ton amour m’a tout pardonné\n    Je Te contemple et je puis croire\n    Qu’en Toi j’ai complète victoire\n    Au pied de Ta croix maintenant\n    Je me relève triumphant\n\n    Blanc, plus blanc que la neige (bis)\n    Lavé dans le sang de l’Agneau,\n    Mon cœur est plus blanc que la neige</h4></pre>"
          },
          {
            "num" : "125",
            "titre": "Give me oil in my lamp",
            "hira": "<pre><h4 class='padding'>\n1.  Give me oil in my lamp,\n    Keep me burning.\n    Burning, burning.\n    Give me oil in my lamp,\n    I pray.\n    Give me oil in my lamp,\n    Keep me burning,\n    Burning, burning,\n    Keep me burning\n    Till the break of day.\n\n        Sing Hosanna (3)\n        To the King of kings\n\n2.  Keep me down at the cross,\n    Keep me humble,\n    Humble, humble,\n    Keep me down at the cross,\n    I pray\n    Keep me down at the cross,\n    Keep me humble\n    Humble, humble,\n    Keep me humble\n    Till the break of day.\n\n3.  I got oil in my lamp\n    To keep me burning,\n    Burning, burning.\n    I got oil in my lamp\n    Praise God !\n    I got oil in my lamp,\n    To keep me burning,\n    Burning, burning.\n    Keep me burning\n    Till the break of day\n\n4.  Give me joy in my heart,\n    Keep me praising,\n    Praising, praising\n    Give me joy in my heart,\n    I pray\n    Give me joy in my heart,\n    Keep me praising\n    Praising, praising\n    Keep me praising\n    Till the break of day</h4></pre>"
          },
          {
            "num" : "126",
            "titre": "God be with you",
            "hira": "<pre><h4 class='padding'>\n1.  God be with you\n    Till meet again ;\n    By His counsels guide,\n    Up-hold you,\n    With his sheep\n    Securely fold you ;\n    God be with you\n    Till we meet again\n\n2.  God be with you\n    Till we meet again ;\n    ‘Neath His wings\n    Protecting hide you,\n    Daily manna still provide you ;\n    God be with you\n    Till we meet again\n\n3.  God be with you\n    Till we meet again ;\n    When life’perils\n    Thick confound you, \n    Put His arms\n    Unfailing round you ;\n    God be with you\n    Till we meet again\n\n4.  God be with you\n    Till we meet again ;\n    Keep love’s banner\n    Floating o’er you, \n    Smite death’s threatening\n    Wave before you ;\n    God be with you\n    Till we meet again.\n    Till we meet, \n    Till we meet, \n    Till we meet at Jesus’feet ;\n    Till we meet, \n    Till we meet, \n    Till we meet\n    God be with you\n    Till we meet again</h4></pre>"
          },
          {
            "num" : "127",
            "titre": "Ny Baiboly re dia zava-tsoa tokoa",
            "hira": "<pre><h4 class='padding'>\n1.  Ny Baiboly re dia zava-tsoa tokoa\n    Zava-maminay fa nahitanay soa\n    Ka derao ary ataovy an-kira hoe :\n    Ny Baiboly re dia zava-tsoa tokoa\n    Ny Baiboly no mampiray\n    Ny fon’ny maro mba ho tonga iray\n    Ny Baiboly re…\n\n2.  Jereo kely ange itony soa be\n    ‘Zay manerana ity nosy lehibe\n    Ka derao ary ataovy an-kira hoe :\n    Ny Baiboly re dia zava-tsoa tokoa\n    Ny Baiboly no mampiray\n    Ny fon’ny maro mba ho tonga iray\n    Ny Baiboly re…\n\n3.  Hevero kely ange, isika vory izao\n    Fa mpanompo sampy avokoa\n    Teo aloha\n    Nefa niova izao ho Kristiana\n    Ny Baiboly re dia zava-tsoa tokoa.\n    Ny Baiboly no sabatra\n    Ho entinay ho fandresena\n    Ny Baiboly re…\n\n4.  Ny Baiboly re dia zava-tsoa tokoa,\n    fa mampanantena anay\n    Fiainana mandrakizay\n    Fa ilaozany ity tany miova ity\n    Fa misy lanitra tsy mety miova\n    àry\n    Ny tenin’ny Baiboly\n    No iankinan’ny fiainanay\n    Rahatrizay\n    Ny Baiboly re…</h4></pre>"
          },
          {
            "num" : "128",
            "titre": "Ny teninao Jehovah",
            "hira": "<pre><h4 class='padding'>\n1.  Ny teninao Jehovah\n    Teny masina tokoa\n    Teny soa mahafaly\n    Teny ivelomanay\n    Teny feno fahendrena\n    Feno fahasoavana\n    Mampahafantatra tokoa\n    Izay fitiavanao.\n\n2.  Ny Teninao Jehovah\n    Teny loharano soa\n    Ranon’aina mahasoa\n    Mampahery fo tokoa\n    Teny soa maharavo\n    Teny ifalianay\n    Tena vatsy mampahery\n    Eo am-pandehananay\n\n3.  Ny Teninao Jehovah\n    Sabatra maranitra\n    Fiarovana amin’ny loza\n    Izay miseho aminay\n    Fiadiana enti-miady\n    Amin’ny fahavalonay\n    Izay mitady hampiverina\n    Amin'ny fitiavanao.</h4></pre>"
          },
          {
            "num" : "129",
            "titre": "‘Zany Teninao, ry Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  ‘Zany Teninao, ry Tompo, \n    Hazavana\n    ‘Zay manilo ny Vahoaka\n    Mino Anao\n    Ka manafaka azy\n    Hiala anaty haizina\n    Nandrakotra an’izao tontolo izao\n\n    Koa enga anie\n    Mba hino Anao izahay\n    Mba handraisanay ny Teninao\n    F’Ianao no sitrak’ Andriamanitra\n    Ho lalam-pamonjena \n    Izay hizoranay\n\n2.  ’Zany teninao ry Tompo\n    Tena hery\n    Itokian’ireo ‘zay manantena anao\n    Na ho levona aza \n    Izao tontolo izao\n    Ny teninao tsy miova\n    Fa mandresy Ianao\n    Koa enga anie\n    Hatoky Anao izahay\n    Hitazonanay ny Teninao\n    F’Ianao no sitrak’ \n    Andriamanitra\n    Ho fahamarinana \n    ‘Zay hianteheranay\n\n3.  ’Zany teninao ry Tompo\n    Tena aina\n    Ivelomanay vahoaka tia Anao\n    Nositraninao\n    Ny rofiny rehetra\n    ‘Reo ‘zay nodimandry\n    Dia natsanganao\n\n    Koa enga anie\n    Ho tia Anao izahay\n    Ho sakafonay ny Teninao\n    F’Ianao no sitrak’ \n    Andriamanitra\n    Ho aina ivelomanay mandrakizay</h4></pre>"
          },
          {
            "num" : "130",
            "titre": "Fa ny fitiavan’i Kristy",
            "hira": "<pre><h4 class='padding'>\nFa ny fitiavan’i Kristy\nNo manery anay\nSatria izao no hevitray\nMaty ny anankiray hamonjy\nNy olona rehetra\nKa dia maty koa izy rehetra.\nMaty hamonjy ny olona rehetra Izy\nMba tsy ho velona ho an’ny \nTenany intsony izay velona\nFa ho an’izay efa maty\nSy nitsangana hamonjy azy</h4></pre>"
          },
          {
            "num" : "131",
            "titre": "Endrey manako ao am-po",
            "hira": "<pre><h4 class='padding'>\n1.  Endrey manako ao am-po\n    Ny teninao\n    Ka tsy hadinoina\n    N’aiza n’aiza Jeso ô !\n    Mamelona fanahy\n    Mba hifikitra Aminao\n    Ka hodradraiko\n    Hatraty ka hatrary.\n\n        Asandratray ny feonay ry Jeso ô !\n        Hidera Anao, hankalaza ny asanao\n        Hihira hatrany\n        ‘Lay fitiavana tsy maty\n        Hatrizay hatrizao ka ho doria.\n\n2.  Fanilo mahazava ny andronay\n    Ny teninao\n    Mitsinjo izany dia\n    Mba tsy hisaraka Aminao\n    Ka na manjombona aza\n    Izany lalanay ety\n    Dia matoky miandrandra Anao\n    ‘Zahay.\n\n3.  Izao tontolo izao Jeso\n    Mandalo avokoa\n    Ka izay topaza-maso\n    Ety an-tany dia ho lo\n    Kanefa Tompo ô !\n    Ny teninao tsy mba miova\n    Fa maharitra mandrakizay\n    Ka ho doria</h4></pre>"
          },
          {
            "num" : "132",
            "titre": "Notre Bible toute entière",
            "hira": "<pre><h4 class='padding'>\n1.  Notre Bible toute entière\n    Pour le monde tout entier\n    Qu’elle guide et qu’elle éclaire\n    Notre pauvre humanité\n\n2.  Car la Bible est la lumière\n    Sur le plus obscur sentier\n    Jésus la maîtresse pierre\n    Pour bâtir, pour édifier\n\n3.  Les paroles de la terre \n    Nous déçoivent sans pitié, \n    Mais la loi de notre Père, \n    Reste un guide qualifié.\n\n4.  Notre monde de misère \n    Cherche en quel chef se confier\n    Et notre cœur désespère\n    Sans le Sauveur crucifié\n\n5.  Proclamez donc ce mystère, \n    Ne cessez de le publier :\n    Que par Jésus, notre frère, \n    Nous sommes réconciliés</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒUR JOYEUX)"
          },
          {
            "num" : "133",
            "titre": "C’est dans l’Evangile",
            "hira": "<pre><h4 class='padding'>\n1.  C’est dans l’Evangile\n    Qu’on trouve la vie\n    La paix, le pardon, le bonheur\n    Ouvrons notre cœur \n    A la grâce infinie\n    Donnant tant de bien aux pécheurs.\n\n        Auprès du Seigneur, \n        Avec lui sur la route, \n        Marchons de tout cœur\n        En chantant \n        Il sauve, Il guérit, \n        Puis enlève le doute, \n        Il vit, Il est là maintenant.\n\n2.  Il montre un endroit\n    Pour jeter la souillure.\n    Voilà ! C’est ici Golgotha, \n    Un lieu de folie, \n    Un endroit de rupture.\n    Mais crois, le pardon est bien là.\n\n3.  Suivons le chemin\n    Qui plus loin nous entraîne\n    Au centre de la vérité.\n    Pendant que l’amour de Jésus, \n    Nous enchaîne, \n    Au règne de l’éternité</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒUR JOYEUX)"
          },
          {
            "num" : "134",
            "titre": "Fa toy izao anie",
            "hira": "<pre><h4 class='padding'>\nFa toy izao anie\nNo nitiavan’Andriamanitra\nAn’izao tontolo izao e (2)\nNomeny ny Zanany\nZanany lahitokana\nMba tsy ho very re\nIzay rehetra mino Azy\n\nFa hanana fiainana\nFiainana mandrakizay\nFa Andriamanitra\nTsy naniraka \nNaniraka ny Zanany\nHo amin’izao tontolo izao (2)\nHanameloka \nIzao tontolo izao\nFa mba hamonjena (3)\nAn’izao tontolo izao.</h4></pre>",
            "mark": "JN 3 : 16 - 17"
          },
          {
            "num" : "135",
            "titre": "Didy vaovao no",
            "hira": "<pre><h4 class='padding'>\nDidy vaovao no \nOmeko anareo :\nHifankatiavanareo toy\nNy nitiavako anareo. \nIzany no hahafantaran’ \nNy olona anareo fa\nMpianatro raha mifankatia.</h4></pre>"
          },
          {
            "num" : "136",
            "titre": "Misy didy vaovao",
            "hira": "<pre><h4 class='padding'>\nMisy didy vaovao\nHomeko anareo\nDia ny mba hifankatiavanareo\nTahaka ny nitiavako anareo\nNo hifankatiavanareo koa\n(Fa izany) fa izany no\nHamantaran’ny\nOlona rehetra\nFa mpianatro (ianareo)\nRaha mifankatia\nFa izany no\nHamantaran’ny olona rehetra\nFa mpianatro ianareo\n(Raha mifankatia)\nDidy vaovao no homeko anareo\nDia ny mba hifankatiavanareo\nTahaka ny nitiavako anareo\nNo hifankatiavanareo kosa\nToy ny nitiavako anareo, eny e\nNo hifankatiavanareo kosa</h4></pre>"
          },
          {
            "num" : "137",
            "titre": "Aoka tsy hisy olona",
            "hira": "<pre><h4 class='padding'>\nAoka tsy hisy olona \nHanao tsinontsinona anao\nNoho ny hatanoranao\nFa aoka ho tonga fianarana\nHo an’ny mino ianao\nFianarana : amin’ny fiteny\nAmin’ny fitondrantena\n(Fitiavana) Amin’ny fitiavana\nAmin’ny finoana\nAmin’ny fahadiovana.</h4></pre>",
            "mark": "(I.TIM.4 :12)"
          },
          {
            "num" : "138",
            "titre": "Emmanuel, Dieu avec nous",
            "hira": "<pre><h4 class='padding'>\nEmmanuel, Dieu avec nous\nJésus sera pour nous\nToujours le même\nEmmanuel, Dieu avec nous\nHier, aujourd’hui, \nEternellement.\n\n1.  On l’appellera : Admirable\n    Conseiller, \n    Dieu tout puissant\n    Père éternel, \n    Prince de la paix\n    L’homme de douleur\n    Le vaillant guerrier.\n\n2.  On l’appellera Bon berger\n    Le chemin, la vérité\n    Vie éternelle, \n    Témoin fidèle\n    Sauveur et Seigneur\n    Le libérateur.</h4></pre>"
          },
          {
            "num" : "139",
            "titre": "Cherchez d’abord le royaume de Dieu",
            "hira": "<pre><h4 class='padding'>\n1.  Cherchez d’abord le royaume de Dieu\n    Et sa justice ;\n    Et toutes ces choses vous seront\n    Données en plus.\n    Allélu – Allélua !\n    Alléluia (4)\n\n2.  L’homme ne vivra pas\n    De pain seulement, \n    Mais de toute parole\n    Qui sortira de la bouche de Dieu.\n    Alléluia – Alléluia !\n    Alléluia (4)</h4></pre>",
            "mark": "mt 6:33 && mt 4:4"
          },
          {
            "num" : "140",
            "titre": "Je lève les yeux vers les montagnes",
            "hira": "<pre><h4 class='padding'>\n1.  Je lève les yeux vers les montagnes…\n    D’où me viendra le secours ?\n    Le secours me vient de Dieu,\n    Qui a fait la terre et les cieux.\n    Maranatha !\n    Viens, Seigneur, viens !\n    Seigneur Jésus, nous tendons\n    Les mains vers toi.\n    Maranatha !\n    Viens Seigneur, viens !\n    Et là où tu es\n    Oh prends-nous avec toi !\n\n2.  Je suis dans la joie\n    Quand on me dit :\n    Allons à la maison du Seigneur !\n    Car nos peines sont finies\n    Au grand jour de l’Eternel.</h4></pre>"
          },
          {
            "num" : "141",
            "titre": "Jésus prit mon péché",
            "hira": "<pre><h4 class='padding'></h4></pre>"
          },
          {
            "num" : "142",
            "titre": "C’est par la grâce",
            "hira": "<pre><h4 class='padding'>\nC’est par la grâce\nQue vous êtes sauvés\nPar le moyen de la foi (2) \nOui par la foi\n\nEt cela ne vient pas de vous\nC’est le don de Dieu (2)\nCe n’est point par les œuvres\nAfin que personne\nNe se glorifie</h4></pre>"
          },
          {
            "num" : "143",
            "titre": "Rejoice in the Lord always",
            "hira": "<pre><h4 class='padding'>\nRejoice in the Lord always\nAnd again I say rejoice\nRejoice, rejoice\nAnd again I say rejoice.</h4></pre>",
            "mark": "PH 4 : 4"
          },
          {
            "num" : "144",
            "titre": "A new commandment",
            "hira": "<pre><h4 class='padding'>\nA new commandment\nI give unto you\nThat you love one another (2)\nAs I have loved you\nBy this shall all men know \nThat you are my disciples (2)\nIf you have love to one another</h4></pre>"
          },
          {
            "num" : "145",
            "titre": "Jesosy nijaly tao Getsemane",
            "hira": "<pre><h4 class='padding'>\n1.  Jesosy nijaly tao Getsemane\n    Ka moa ho hadinonao ve ?\n    Ny dinitra taminy izay nitete\n    Nirotsaka be toy ny ra.\n\n        Indrisy niaritra irery Ianao\n        Ry Tompo nanavotra anay ô !\n        Hananan’ireo olo-mino Anao\n        Fiainana mandrakizay.\n\n2.  Ry mpianatra vitsy nanatrika teo\n    Toa fantatrareo rahateo\n    Ny loza mangidy ‘zay setrainy teo\n    Kanefa natory ianareo.\n\n3.  Ry saha manginan’i Getsemane\n    Ry fototr’oliva ô, lazao\n    Raha misy mpanota mba efa nandre\n    ‘Zao antso atao ho azy izao.</h4></pre>"
          },
          {
            "num" : "146",
            "titre": "Mafy re ny nahazo Anao ry Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  Mafy re ny nahazo Anao ry Tompo\n    Kapoaka mangidy no sinotro\n    Nandao ‘lay toeram-boninahitra\n    Nanaiky ho anisan’ny mpanota\n    Vahoaka betsaka no nanatrika\n    Eson-teny, kapoka, latsalatsa\n    Nandao Azy koa ‘reo mpianatra\n    Irery ny Tompo, nizaka mavesatra\n\n        Getsemane, Getsemane\n        Raiko ô, raha sitrakao\n        Dia esory amiko, ity kapoaka ity\n        Getsemane, Getsemane\n        Nefa aoka tsy ny sitrapoko\n        Anie no hatao\n        Fa ny Anao, fa ny Anao.\n\n2.  Indro re fa tena fadiranovana\n    Irery nilaozan’Andriamanitra\n    Ka iza re no mba ho resy lahatra\n    Ny amin’ilay fitiavana lalina ô !\n    Ny hazo sy fantsika no nitambatra, \n    Olo-meloka very no tanteraka, \n    Vavahady hidirana any an-danitra\n    Ny antony nitondrany hazofijaliana</h4></pre>"
          },
          {
            "num" : "147",
            "titre": "Handeha an-kafaliana hanatrika",
            "hira": "<pre><h4 class='padding'>\nHandeha an-kafaliana hanatrika\nAn’Andriamanitra aho e\nAny an-tendrombohitra Masina\nNy tebitebin-tsaiko, \nNy ahiahim-poko e\nNy hadisoako e\nTsy mahasakana ahy\nTsy hanatona Anao Tompo ô !\n\n1.  Hitako ny fahorian’\n    Ny vahoaka any Egypta\n    Henoko ny sentosento \n    Sy ny tarainany\n    Ka irahiko ianao\n    Mba handeha hanafaka azy e\n    Fa homba anao\n    Hatrany hatrany anie aho.\n\n2.  Eny ry Tompo, \n    Fa iza moa no Anaranao\n    Ary omeo famantarana aho\n    Fa irakao, \n    Tsotra dia tsotra ny Anarako, \n    Hoy ny Tompo e\n    « Andriamanitra velona  » hoe\n    No naniraka anao.\n\n3.  Efa naniraka ny Zanany\n    Tiany Andriamanitra\n    F’izany no nanambarany\n    Ny tena fitiavany.\n    Nanangana antsika\n    Tao amin’ny Fanahiny Izy ê\n    Nanandratra antsika\n    Hiara-mandova amin’ny Zanany.</h4></pre>"
          },
          {
            "num" : "148",
            "titre": "Tu es la plus belle",
            "hira": "<pre><h4 class='padding'>\nTu es la plus belle\nParmi les plus belles\nLa plus belle des chansons\nD’amour\nQuand je te chante, \nJ’ai le cœur en joie\nCar tu parles de l’amour\nDe Jésus pour moi\n\n1.  Il naquit dans une écurie\n    La nuit de Noël\n    Pour le fils de Dieu, \n    Quel étrange lieu !\n    Il mourut sur une croix\n    Entre deux brigands\n    Pour le Roi des rois\n    Quel étrange endroit !\n\n2.  Quand Marie vint au tombeau\n    Trois matins plus tard\n    On avait roulé la pierre, \n    Le corps n’était plus là\n    Au fond du jardin, \n    Un homme lui dit :\n    «  Ne cherche pas parmi les morts\n    celui qui est vivant !  »</h4></pre>"
          },
          {
            "num" : "149",
            "titre": "Quel Sauveur merveilleux",
            "hira": "<pre><h4 class='padding'>\n1.  Quel Sauveur merveilleux\n    Je possède\n    Il s’est sacrifié pour moi\n    Et sa vie innocente, il cède\n    Pour mourir sur l’infâme bois.\n\n        Attaché à la croix pour moi (bis)\n        Il a pris mon péché\n        Il m’a délivré\n        Attaché à la croix pour moi.\n\n2.  Il renonce à la gloire céleste\n    Pour le plan rédempteur de Dieu\n    L’apparence est la plus modeste \n    O quel prix pour me rendre\n    Heureux.\n\n3.  Maltraité, innocent, pour ma vie\n    Pour mes iniquités, \n    Brisé et chargé de mes maladies\n    Il mourut pour guérir, sauver.\n\n4.  Le salut accompli pour ses frères\n    Mon Sauveur se rendit au ciel\n    Il revient ! O profond mystère\n    Mon bonheur sera éternel !</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "150",
            "titre": "Né de la poussière",
            "hira": "<pre><h4 class='padding'>\n1.  Né de la poussière \n    Et de l’éternité, \n    J’ai vu la lumière\n    Elle m’a racheté.\n    Et, le cœur avide\n    De vraie liberté, \n    J’ai suivi ce guide, \n    Nommé Vérité.\n\n        Il est la Vérité, \n        Le Chemin et la Vie\n        On ne vient au Père \n        Que par Lui. \n\n2.  Ton regard s’étonne, \n    Tu ne comprends pas :\n    Un roi qui pardonne, \n    Ça n’existe pas, \n    Un roi qui s’incline\n    Devant ses sujets, \n    Couronné d’épines…\n    A toi de juger.</h4></pre>"
          },
          {
            "num" : "151",
            "titre": "Dix milliers d’anges",
            "hira": "<pre><h4 class='padding'>\nDix milliers d’anges\nPourraient l’entourer\nDétruisant les hommes\nLibérant le Roi\nDix milliers d’anges\nPourraient l’entourer\nMais Il meurt tout seul\nPour vous et moi\n\n1.  Liant les mains de Jésus\n    Dans le jardin où Il priait\n    Ils le menèrent en malfaiteur\n    Lui si pur, lui sans péché, \n    Il voulaient le crucifier\n    Mais Il devenait mon Sauveur\n\n2.  Ils lui firent une couronne\n    De ronces et d’épines\n    En proclamant : voici le Roi\n    Insultant le sublime\n    Ils se moquaient de sa foi\n    Lui si silencieux mourut pour moi.\n\n3.  Devant Marie sa mère, \n    Ils clouèrent au bois \n    «  J’ai soif, j’ai soif  »\n    Il murmura\n    Puis tout étant accompli, \n    Dans cri, Il expira\n    Ainsi Jésus offrit sa vie.</h4></pre>"
          },
          {
            "num" : "152",
            "titre": "Voici Noël, ô douce nuit !",
            "hira": "<pre><h4 class='padding'>\n1.  Voici Noël, ô douce nuit !\n    L’étoile est là qui nous conduit.\n    Allons donc tous avec les Mages\n    Porter à Jésus nos hommages\n    Car l’Enfant nous est né, \n    Le Fils nous est donné !\n\n2.  Voici Noël, oh ! quel beau jour !\n    Jésus est né ! quel grand amour !\n    C’est pour nous\n    Qu’Il vient sur la terre\n    Qu’Il prend sur Lui notre misère\n    Un Sauveur nous est né, \n    Le Fils nous est donné !\n\n3.  Voici Noël, ah ! d’un seul cœur\n    Joignons nos voix au divin chœur\n    Qui proclame au ciel les louanges\n    De celui qu’annoncent les anges !\n    Oui, l’Enfant nous est né, \n    Le Fils nous est donné !\n\n4.  Voici Noël, ne craignons pas\n    Car Dieu nous dit :\n    «  Paix ici-bas, bienveillance\n    Envers tous les hommes !  »\n    Pour nous aussi, \n    Tels que nous sommes ;\n    Un sauveur nous est né, \n    Le Fils nous est donné</h4></pre>"
          },
          {
            "num" : "153",
            "titre": "Jesosy be fitiavana",
            "hira": "<pre><h4 class='padding'>\n1.  Jesosy be fitiavana\n    Miantso anao «  avia  »\n    Maniry te hihavana\n    Aminao mpania\n    Ny fony malahelo\n    Mangoraka fitia\n    Henoy mamelovelo :\n    Ry oloko modia !\n\n2.  Ny ota mampisaraka\n    Ny heloka efa vita\n    Ahintsany hiraraka\n    Ka hodiany tsy hita, \n    Toky tena lafo\n    Omeny matokia\n    Fa hoy ny safosafo :\n    Ry oloko modia !\n\n3.  Ny fony feno ratra\n    Voalefonao mpiodina, \n    Ory ianao mahantra\n    Misangodingodina ;\n    Tsy tofoka ny fony\n    Tsy tezitra fa tia\n    Henoy ny feony tony\n    Ry oloko modia !</h4></pre>"
          },
          {
            "num" : "154",
            "titre": "Moa mba henonao va ‘lay feo",
            "hira": "<pre><h4 class='padding'>\nMoa mba henonao va ‘lay feo\nMiantso anao\nO ! ry mpanota ô ! ô !\nManatòna Ahy izao, hodioviko\nNy ota vitanao\nMoa mba renao va re ‘lay feo\nMibitsika hoe «  AVIA  » ianao\n‘Zay manatona Ahy\nTsy ho laviko\nFa omeko fiadanana.\n\nJeso Tompo Mpamonjy anao\nTsy sasatra Izy \nMiantso hoe «  AVIA  »\nMitomany mafy Izy izao\nMitady fihavanana aminao\nHe ! jereo ny tomaniny\nManiry ny hiverenanao\nTe hamonjy anao Izy anio\nKa moa ve ho lavinao\nNy antsony.\n\nMoa mba efa noheverinao\n‘lay Tomponao maty ho anao\nHe jereo fa natolony ny ainy\nMba ho famonjena anao\nMoa mba efa noraisinao\n‘Lay Tomponao nijaly ho anao\nHe ny rany no narotsany\nKa moa ve ho lavinao\nNy Tomponao.\n\nJeso Tompo Mpamonjy anao\nTsy sasatra Izy\nMiantso ho «  AVIA  »\nMitaraina mafy izao\nIreo karazan’ota avelao\nDieny mbola misy antso anio\nManatòna ny Mpamonjy anao\nSao diso anjara ianao\nKa ho neninao\nNy ota vitanao.</h4></pre>"
          },
          {
            "num" : "155",
            "titre": "Ny Mpamonjy be fitia",
            "hira": "<pre><h4 class='padding'>\n1.  Ny Mpamonjy be fitia\n    No miatso hoe «  AVIA  »\n    Ry mahantra ô mba raiso izao\n    Ny famonjena atolotra\n    Teny mamy, teny soa tokoa\n    No iantsoanay anao ry ory fo\n    Ka am-pifaliana tokoa indrindra\n    No andraisanay anao.\n\n2.  Aza mba misalasala\n    Ka mihevitra hoe\n    Sao ny Tompo tsy hamela\n    Ny fahotana marobe\n    Tsia, fa Izy tena tia anao\n    Te handray anao ho zanany\n    Ny fahotana marobe indrindra\n    Ho fafany avokoa\n\n3.  Endrey mahagaga loatra\n    Izany fitiaivanaoa\n    Fa ianao izay efa very re\n    No antsoiny hiaraka aminy\n    Ny rany sarobidy loatra\n    No nafoiny mba ho solonao\n    Ka mba raiso hiditra aminao tokoa\n    Fa Izy tena tia anao</h4></pre>"
          },
          {
            "num" : "156",
            "titre": "Moa ve vita fihavanana",
            "hira": "<pre><h4 class='padding'>\n1.  Moa ve vita fihavanana\n    Amin’Andriamanitra ianao\n    Moa ve efa nibebahanao\n    Tamin’ny fonao ve ireo otanao ?\n\n        Ela no niandrasan’i Jeso\n        Tao am-baravaran’ny fonao\n        Sao ity no antso farany\n        Ka valio Izy sao ho very ianao.\n\n2.  Manatòna an’Andriamanitra\n    Dia hanatona anao Izy\n    Ka aoka tsy hisalasala intsony\n    Satria tia anao Jesosy\n\n3.  Ny osa sy ny tsy mino anie\n    Manana ny anjara ratsiny\n    Koa raha menatra ny Tompo ianao\n    Izy kosa ho menatra anao\n\n4.  Tsy ny Tompo anie no haninona\n    Raha mandà ny ho vonjena ianao\n    Fa ianao no hitomany, ianao ihany\n    No hijaly mandrakizay.</h4></pre>"
          },
          {
            "num" : "157",
            "titre": "Lohasahan-dranomaso",
            "hira": "<pre><h4 class='padding'>\n1.  Lohasahan-dranomaso\n    Hatrany hatrany\n    Izao tany iainantsika izao\n    Ka dia sento lalandava sy tomany\n    No hany iainan’ireo mponina ao\n\n        Manatòna ny Mpamonjy \n        K’aza mba misalasala ianao\n        Tianao ve ry sakaiza\n        Ny ho voavonjy izao ?\n        Raiso àry Kristy\n\n2.  Tsy ho tiany intsony\n    Angamba hoy ianao\n    ‘Zao tenanao voasarona ota izao\n    Tsia nefa hoy aho\n    Satria ny toa anao\n    No iriny hovonjena izao</h4></pre>"
          },
          {
            "num" : "158",
            "titre": "Moa mba renao ve ‘zao antso izao",
            "hira": "<pre><h4 class='padding'>\nMoa mba renao ve ‘zao antso izao\nMampanaiky mora ny helokao ?\nFeo malefaka ary koa tsy sasatra \nNy Fanahy no avy hananatra :\nMba ekeo Jeso ‘lay Mpamonjinao\n    Mpanafaka\nLalan-tokana hahatonga anao ho\n    Olona afaka\nMoa mba renao ve ‘zao antso izao ?\n‘Zay miantso anao ho olom-baovao ?</h4></pre>"
          },
          {
            "num" : "159",
            "titre": "Efa anananao ve",
            "hira": "<pre><h4 class='padding'>\n1.  Efa anananao ve\n    Ny fiadanan’ny fo\n    ‘Zay atolotr’i Jeso izao \n    ‘Lay fitiavany be\n    Mahatoky tokoa\n    Moa ve efa noraisinao ?\n\n        Atolory anio\n        Ho fanatitra soa\n        Ny fonao fa iriny izao\n        Eny, ny andronao koa\n        Dia ilainy avokoa \n        Moa tsy homenao\n        Hatrizao ?\n\n2.  Efa anananao ve\n    ‘Zany herin’ny fo\n    ‘Zay atolotr’i Jeso izao\n    Ny fitiavany re\n    Manda mafy tokoa \n    Fiarovana mafy\n    Ho anao.\n\n3.  Moa anananao ve\n    Ho fiainan’ny fo\n    Ny aina atolotr’i Jeso\n    Ny fitiavany anie\n    Fitiavana be\n    Zay hamelona re\n    Ny ainao</h4></pre>"
          },
          {
            "num" : "160",
            "titre": "Ny Mpamonjy no mitady",
            "hira": "<pre><h4 class='padding'>\n1.  Ny Mpamonjy no mitady\n    Fihavanana aminao ;\n    Izy no manambitamby\n    Hanatonanao izao\n    Sao manjary fandatsana\n    Ny fifonana aminao\n    Ka ny mety, mihavana\n    Amin’ny Mpamonjy izao.\n\n2.  Dieny mbola misy hafanana\n    Ka mangoraka ny fo\n    Manatòna ny Mpamonjy\n    Sao dia mangatsiaka indray, \n    Izao no andro famonjena, \n    Ka vonjeo sao neninao ;\n    Ry mpanota miverena\n    Izao ankehitriny izao.\n\n3.  Sao ity no toriteny\n    Fara-fanasana anao ;\n    Sao anio no fotoana\n    Fara-ahavelomanao ;\n    Ka aza mba misalasala, \n    Sao manjary neninao, \n    Raha tsy mety mahalala\n    Izao fotoana mety izao.\n\n4.  Indrisy be ny fahotako, \n    Be ny ratsy vitako ;\n    Sao tsy raisin’ny Mpamonjy\n    Ny Mpanota tahaka izao ?\n    Miverena, fa ny rany\n    Ampy hahadio anao ;\n    Manatòna hosasany\n    Izao ankehitriny izao</h4></pre>"
          },
          {
            "num" : "161",
            "titre": "Voahombo ho ahy Izy",
            "hira": "<pre><h4 class='padding'>\n1.  Voahombo ho ahy Izy\n    Voahombo ho ahy Izy\n    Maty tany Kalvary\n    Jeso Tompo tia\n    Voahombo ho ahy Izy.\n\n2.  He miantso anao Jeso\n    He miantso anao Jeso\n    Ny mpanota toa anao\n    No antsoiny izao\n    He miantso anao Jeso\n\n3.  Mitsangàna ianao izao\n    Mitsangana ianao izao\n    Raiso Jeso Tompo tia\n    Ho Mpamonjinao\n    Mitsangàna ianao izao</h4></pre>"
          },
          {
            "num" : "162",
            "titre": "Injany misy feo miantso anao e",
            "hira": "<pre><h4 class='padding'>\nInjany misy feo miantso anao e ! (2)\nHenoy fa miantso mafy anao e (2)\n\n1.  Mandehana hosasana\n    Ry mpanota very\n    Eny very hovonjena\n    Raha hatoninao ny Tompo\n    Vohay hidirany ho ao\n    Mba hanavotany anao\n\n        Vohay ny fonao ry mpanota\n        Fa mandona Jeso\n        Isan’andro, isan’ora\n        No iantsoany anao mpanota\n        Injany misy feo…\n\n2.  Maneke ny famonjena \n    ‘Zay nataon’i Jeso\n    Fa ny fonao izay maratra\n    Ho tsaboiny izao\n    Minoa ny heriny ianao\n    Mba hampiononany anao</h4></pre>"
          },
          {
            "num" : "163",
            "titre": "Lalana tokana ihany",
            "hira": "<pre><h4 class='padding'>\n1.  Lalana tokana ihany\n    Voasoritra ka mahatoky\n    Hitondra an-danitra any\n    Any no misy ny Ray sy ny Zoky\n\n    Jeso no lalana roy é\n    Ho anao izay nikaroka ela\n    Ny lalan-draty aoka hafoy e !\n    Izory izy izao aza ela\n\n        Anio, raha hihaino ny feony\n        Ianao ry mania\n        Aza mangataka andro\n        Fa raiso ho anao re ny teny\n        Fanehoana fitia\n        Izay mitaona sy miantso\n\n2.  Anarana Iray monja\n    No nomena tambonin’ny tany\n    Tsotra kanefa mafonja\n    Satria mahafaka ny fahotany\n\n    Jeso ! Ilay tonga teto\n    No Mpamonjy, manafaka anao\n    Izy hanala ny sento\n    Ekeo, ka raiso ! Izy izao.\n\n3.  Zavatra iray loha\n    Re no fantatro ka ho lazaiko\n    Nahantra aho teo aloha\n    Ankehitrio safononoka ny aiko\n\n    Jeso ninia ho ory\n    Mba hampanan-karena ny maro\n    Moa tsy ekenao akory\n    Ny fandavanao atsaharo.</h4></pre>"
          },
          {
            "num" : "164",
            "titre": "Ry mpanota mahantra",
            "hira": "<pre><h4 class='padding'>\n1.  Ry mpanota mahantra, \n    Fantaro izao, fa \n    Ho levona ity tany ity ;\n    He ! miantso Jesosy, \n    Ka mitady anao, \n\n        Miverena ianao, ka modia\n        Mitsangàna ianao, ka modia izao\n        Mba ho raisin’ny Tompo tia, \n        Tsy mba henonao ve, \n        Feo mibitsika hoe\n        Miverena ry ondry mania !\n\n2.  Ry mpanota mahantra, \n    Mba saino ange, \n    Fa mandalo ity sitrapo ;\n    He miantso Jeso, \n    Ka mangoraka anao, \n    Miverena anio ka modia !\n\n3.  Ry mpanota mahantra, \n    Hevero ange !\n    Marobe fahavalo ety, \n    He ! miantso Jeso, \n    Te hiaro anao, \n    Sao ho lanin’ireo bibidia.</h4></pre>"
          },
          {
            "num" : "165",
            "titre": "Tanora ô moa mba",
            "hira": "<pre><h4 class='padding'>\n1.  Tanora ô moa mba\n    Fantatrao va re ny fiainanao\n    Fa efa bokam-pahotana\n    Sy efa simba tsotr’izao\n    O mba hevero fa\n    Tsy sitrak’i Jeso ho very ianao\n    Ka natolony\n    Ny ainy ho anao.\n\n2.  Miserana sy manam-petra \n    Ny fiainantsika ety\n    Ka misy farany avokoa\n    Izay rehetra alehanao\n    Lalana tokana ihany\n    No mba azo izorana\n    Jeso Kristy\n    Famonjena ahy sy ianao.\n\n    Fa Izy no‘lay iraka\n    Hanangona ireo izay very\n    Hanafaka, hamonjy\n    Anao izay reraka\n    Koa manatòna an’i Jeso, \n    Ka atolory ny fonao\n    Ho tsapanao, \n    ‘zany fiainam-baovao</h4></pre>"
          },
          {
            "num" : "166",
            "titre": "Moa ve misy eto an-tany",
            "hira": "<pre><h4 class='padding'>\n1.  Moa ve misy eto an-tany\n    Izany fiadanana\n    Toa mandalo avokoa\n    Ary dia ho levona\n    Rah’izany fiainana re\n    No katsahinao tokoa\n    Ho sasatra eny foana ianao\n    Ary tena hamoy fo.\n\n        F’ao amin’i Jesosy\n        Loharano velona \n        Famonjena tokana\n        Ho an’ny olombelona\n        Fiainana be dia be\n        No atolony ho anao\n        Raiso sy ekeo izao\n        Fa ho sambatra ianao (bis)\n\n2.  Moa ny vola aman-karena\n    Tena hahasambatra\n    Maro no mikatsaka \n    Saingy voafitaka\n    Tsy mba mety afa-po \n    Izany olombelona\n    Fiainana manonja re\n    Anjakan’ny tahotra.\n\n3.  Jesosy Tomponay ô !\n    Eny ho aiza moa ‘zahay\n    Tonga nofo teto Ianao\n    Fanavotana ho anay\n    Tompo ô ! atolotro izao\n    Ity foko ho Anao\n    Mbola osa sy malemy, \n    Ianao no hanavao.</h4></pre>"
          },
          {
            "num" : "167",
            "titre": "Efa niomana va ianao ?",
            "hira": "<pre><h4 class='padding'>\nEfa niomana va ianao ?\nEfa niomana va ianao ?\nEfa niomana tokoa va ianao ?\nRy olom-bery ô ?\n\n1.  O! mba raiso re ry Tompo\n    Izany fonay mitalaho\n    Mba ankasitraho ry Tompo\n    Izany e ! vonona tokoa\n    Hanao izay sitrakao.\n\n2.  Izao anio izao ry Ray ô !\n    Dia vonona izahay\n    Handray ny kalesinao\n    Izahay e ! vonona tokoa \n    Hanao izay sitrakao.\n\n3.  Mba raisonao izahay ry Ray ô !\n    Maniry hiankina eo an-tratranao\n    Izahay ho zanakao ry Ray ô !\n    Maniry hanana fiadanam-po.\n\n4.  Fa sarotra re vonona re\n    Ny lalanay vonona re\n    Raha lavitra vonona re\n    Ny sandrinao vonona re\n    Mba raisonao vonona re\n    Ry Tomponay ô vonona re\n    Ankasitraho !\n    Vonona re ry Tompo ô.</h4></pre>"
          },
          {
            "num" : "168",
            "titre": "Aoka izay ny ditra atsaharonao",
            "hira": "<pre><h4 class='padding'>\n1.  Aoka izay ny ditra atsaharonao\n     Zaranao indrindra mbola tratr’izao\n     Avelao ny kiry fa manimba anao\n     Fa tsy misy firy izany ainao.\n\n        Mba heveronao, \n         Heveronao ‘zay lasa izay\n        Sao ho neninao, \n        Ho neninao mandrakizay\n\n2.  Ampy izay ny lasa nanaranam-po\n       Sao dia voalatsa laza aman-jo\n       F’efa simba loatra itony hajanao\n       Ndrao tafahoatra raha mihoatra izao\n\n3.  Ny fotoana sisa takona avokoa\n       Tsy mba fantatr’iza na ho firy moa\n       Ka tapaho anio izany hevitrao\n       Jeso no irio hanadio anao</h4></pre>"
          },
          {
            "num" : "169",
            "titre": "Njao Jesosy fa mandona",
            "hira": "<pre><h4 class='padding'>\n1.  Njao Jesosy fa mandona\n     Eo am-baravaran’ny fonao\n     Efa hatry ny ela no nitsotra\n     Ny tanany handray anao\n\n     Aza atosikao sao nenina \n     Any am-para\n     Famonjena sy fiainana\n     No omeny anao\n     Aoka ho fantatrao \n     Fa Jeso no lalan-tsara\n     Izy no hiasa eo amin’ny fiainanao\n\n         Raiso ao am-ponao Jeso \n         Meteza ianao havaoziny\n         Fiadanana anie ho anao\n         Raha Jeso no ao am-ponao\n\n2.  Njao Jesosy fa mandona\n     Hampahiratra ny masonao\n     Mba hahitanao ny mazava\n     Ka tsy ho voafingana ianao.\n     Maro no nilavolefona \n     Tsy sahy niady\n     Voafatotra tsy mba manana safidy\n     Maro koa ireo rendrika \n     Ka tsy nipoitra\n     Lavon-tsabatra \n     Tsy mba manan-teny intsony\n     Raiso…\n\n3.  Njao Jesosy fa mandona\n     Te hizara ny fiainany ho anao\n     Mipitrapitra manontany\n     Izay havalin’ny fonao\n     I Jeso anie no mifona ho anao\n     Ny ra masina no hanadio anao\n     Izy no hitantana anao\n     Ho any amin-dRay\n     Sy hamafa ny ranomasonao tety\n     Raiso…</h4></pre>"
          },
          {
            "num" : "170",
            "titre": "Ka saingy ve fiainan-tsy hita maso",
            "hira": "<pre><h4 class='padding'>\n1.  Ka saingy ve fiainan-tsy hita maso\n     Izany atao hoe\n     Fiainana any an-koatra\n     Dia ho hita ampiasana ankaso\n     Ny fideranao ny Ray Mpamboatra\n\n         O ! mba henoy \n         ‘Lay feo maneho fitia\n         Miantso anao mba ho zanany\n         Tsy ho an-tery anefa sanatria\n         Satria feno ny fahamarinany.\n\n2.  Any andro iray\n     Mbola hitadiavanao\n     Ny Ray Mpahary izay nitia anao\n     Koa enga anie\n     Tsy handatsana anao\n     Izao antso atao anio izao</h4></pre>"
          },
          {
            "num" : "171",
            "titre": "Aza avela ho mandalo re ny teny",
            "hira": "<pre><h4 class='padding'>\n1.  Aza avela ho mandalo re ny teny, \n     Na hikimpiana koa ny hazavana\n     Aza manamafy ny fonao fa aoka\n     Hovonjena izao hariva izao\n\n        Fa nahoana no \n        Tsy izao hariva izao\n        Te-ho vonjena va ianao\n        Ka tsy izao hariva izao ?\n\n2.  Mety tsy haraina intsony ny ampitso\n     Ho voafitaka ny hevitrao\n     ‘Zao no ora ankasitrahany ka aoka\n     Hovonjena izao hariiva izao\n\n3.  Tsy mandà na iza na iza re ny Tompo, \n     ‘Zay te-hiray fanahy Aminy\n     Maneke ny asa vitany ka aoka\n     Hovonjena izao hariva izao</h4></pre>"
          },
          {
            "num" : "172",
            "titre": "Fony tonga tety fahaizay Jeso",
            "hira": "<pre><h4 class='padding'>\n1.  Fony tonga tety fahaizay Jeso\n     Tsy mba nanana zavatra soa Jeso\n     Tany am-pahitra kely izay Jeso\n     Tany an’efitra koa Jeso.\n\n        Ao am-ponao Jeso\n        No mandona Jeso\n        Ao am-ponao Jeso\n        Ao no tian’i Jeso\n        Ho any an’efitra indray va Jesosy\n        Sa horaisinao ao am-po ?\n\n2.  Indro miantso anao indray Jeso\n     Te hamonjy ny fanahinao Jeso\n     Dia ho lavinao va re izao Jeso\n     Raha hitondra ny otanao.</h4></pre>"
          },
          {
            "num" : "173",
            "titre": "Nahafoy ny aiko Aho",
            "hira": "<pre><h4 class='padding'>\n1.  Nahafoy ny aiko Aho, \n     Hanavotako anao, \n     Ka nalatsako ny rako\n     Nisoloako anao ;\n     He ! ny aiko no nomeko, \n     Ry mpanota very e !\n     Aiza izay afoinao re, \n     Mba ho Ahy Tomponao ?\n\n2.  Lapan-draiko ao ambony, \n     Voninahi-dehibe.\n     No nilaozako hamonjy\n     Sy hanafa-doza anao, \n     ‘Zay voafitak’i Satana\n     Sy nozoin-doza be !\n     Aiza izay afoinao re, \n     Mba ho Ahy Tomponao ?\n\n3.  Soa be sy mahagaga\n     No atolotro ho anao ;\n     Famonjena tsy vidina, \n     Famelana ny otanao, \n     Fitiavan-tsy voafetra, \n     Lova ao an-danitra !\n     Aiza izay afoinao re, \n     Mba ho Ahy Tomponao ?\n\n4.  Indro Tompo fa omeko\n     Ho Anao ny tenako, \n     Ka tsy misy ‘zay tsy foiko\n     ‘Zay rehetra tianao\n     Eso, latsa, tsy ahoako, \n     Fa ny ho mpanomponao\n     No ho zavatra kendreko, \n     Raiso re ny zanakao</h4></pre>"
          },
          {
            "num" : "174",
            "titre": "Tonga teto an-tany",
            "hira": "<pre><h4 class='padding'>\nTonga teto an-tany \nNy zanak’Andriamanitra\nMba hahatanteraka \nNy teny fikasana \nIzay nomena ho antsika, \nOlona tsy mendrika\nHandray ny famonjena, \nNefa indrafo, fitiavana\nNo atolotra.\n\nTamim-pahantrana \nNo nahaterahan’ny Tompo, \nNanetry tena feno fitiavana\nMba ho avotra, \nKa hampiala anao\nAmin’ny ratsy izay natao, \nKa niova fo, ho tonga olom-baovao.\nFifaliana, famonjena\nNo entin’ny Mpamonjy\nHo antsika olony\nAhoana no hevitrao izay tsy\nMbola itoerany hatrizao ?\nO ! tsarovy sy hevero\nFa ny fiainana mandalo, \nDia tsy ho lavorary\nRaha tsy ankinina amin’ny Tompo (bis)</h4></pre>"
          },
          {
            "num" : "175",
            "titre": "Akôry handrareo",
            "hira": "<pre><h4 class='padding'>\n1.  Akôry handrareo\n     Jentilisa havanay\n     Mitsiliky andrareo\n     Ny Zanaharinay\n\n2.  Avia handrareo\n     Mitsoboha ho kristiana\n     Minoa ny Zanahary\n     Sôvelon-kandrareo.\n\n3.  Ariondrareo ny ôly\n     Sy mohara marobe\n     Ario ny sikily\n     Sy ny fôlivelo koa.\n\n4.  Ny ombiasan-kelo\n     Sy ny lahimazava koa\n     Fa samby vandivandy\n     Tsy misy fotony.\n\n5.  Jesosy raik’avao\n     Manome «  fiainana  »\n     Tompoindrareo Izy\n     Araho hatrizao.</h4></pre>"
          },
          {
            "num" : "176",
            "titre": "Injao manako any ho any",
            "hira": "<pre><h4 class='padding'>\n1.  Injao manako any ho any\n     ‘Reo Feon’anjely velon-kira\n     Mankalaza Ilay Tsitoha\n     ‘Zay nidina tety an-tany\n     Ravoravo ny tontolo\n     Velona fanantenana\n     F’efa tonga ny Mpamonjy\n     Izay nandrasana elabe.\n\n          Soa fa tonga Ilay Mpamonjy\n          ‘Zay fototry ny famonjena \n          Izy no mahay mamela \n          Ny ota izay namatotra\n\n2.  He satriko hitaona anao\n     Mba handray ny famonjena\n     Jeso Kristy miandry anao\n     Hanome fiainam-baovao\n     Tia anao Jeso Tompo\n     Miantso anao hanatona Azy\n     Aza manamafy fo\n     Ekeo anio ho Tomponao.\n\n         Tsy mampaninona akory\n         Izay rehetra vitanao\n         Vonona Izy hanadio\n\n         Ny lalana nodiavinao.\n         Koa manatòna ho dioviny\n         Amin’ny rany izany otanao\n         Meteza re fa sao ho neninao\n         Ny fiainanao am-parany any.</h4></pre>"
          },
          {
            "num" : "177",
            "titre": "Vaovao mahafaly",
            "hira": "<pre><h4 class='padding'>\nVaovao mahafaly\nAnio no omena anao\n‘Zay hitondra aina\nHo an’ny tokantrano misy anao\n(Fa) ‘Lay Mpanjakan’ny Mpanjaka\nNo te honina ao\nVonona hampijoro koa\nFiainam-baovao.\n\n        Ny adim-piainana fandre\n        Lalan-tsarotra faleha\n        Tsy hanan-kery amin’ny olony\n        Koa ankino Aminy ary\n        ‘Zato lalanao\n        Matokia fa ataony tanteraka</h4></pre>"
          },
          {
            "num" : "178",
            "titre": "Misy tanana mitsotra",
            "hira": "<pre><h4 class='padding'>\n1.  Misy tanana mitsotra\n     Te hamihina ny tananao\n     Misy maso manantena\n     Fa hahita indray ny endrikao\n     Misy fo mitempo mino\n     Fa hiverina aminy ianao\n     Ka ho tsapanao indray.\n     Ilay fomba namonjeny anao\n     Nandatsahany ny rany\n     Tamin’ny hazofijaliana\n     Tamin’izay ianao \n     Diboka hafaliana.\n\n          Fantatrao fa zava-poana\n          Raha izao tontolo izao\n          Sady hita ho miharatsy\n          Raha izao fiainana izao\n          Fantatrao ny lalana mody\n          Hiverenana amin’ny Rainao\n          Izay ihany no fanafody\n          Afaka hanavao anao\n\n2.  Misy maro no miandry \n     Famonjena izay noraisinao\n     Misy maro ireo mahantra\n     Te hitafy fitafiana vao\n     Misy maro koa ‘reo noana\n     Miandrandra Ilay Mofon’aina\n     Ianao nandray izany\n     Moa ve azony antenaina ?\n     Ivereno, ivereno\n     Ny fitiavana voalohany\n     ‘Ndeha hiara-dia isika\n     Hanaitra ny finoany</h4></pre>"
          },
          {
            "num" : "179",
            "titre": "Ahoana loatra lahy",
            "hira": "<pre><h4 class='padding'>\n1.  Ahoana loatra lahy\n     Ity fiainantsika ity\n     Fahasambarana sa \n     Fahoriana ahiahy\n     Tsy finoana marina\n     Tsy fanantenana \n     Tsy mba fitiavana\n     Tena fahaleovana\n\n     Mba hevero sy lanjalanjao\n     Saintsaino fandrao neninao\n     Fa ny fiainana ange\n     Azo ovàna ho soa\n     Ho finoana marina\n     Ho fanantenana \n     Ary ho fitiavana\n     Dia fahavelomana.\n\n2.  Hevero izao ny dia\n     Fa miandry anao Kristy\n     Nandao fasana ka \n     Tonga velona indray\n     Tafatsangana tokoa\n     Nandresy tahotra\n     Mpitari-dalana\n     Mba ho Mpanavotra anao\n\n     Koa hobio sy derao e, Jeso \n     Fa Mpandresy mahery sy tia\n     Ravoravo ny fo\n     Raha hihaona aminy\n     O ! mazava re izao\n     Mamirapiratra \n     Ilay masoandro vao\n     Miposaka hahasambatra</h4></pre>"
          },
          {
            "num" : "180",
            "titre": "Jeso ‘lay Mpanjaka",
            "hira": "<pre><h4 class='padding'>\n1.  Jeso ‘lay Mpanjaka\n     Tao an-danitra\n     Tonga teto an-tany\n     Mba hamonjy anao\n     Nahafoy ny ainy\n     Sy ny anjely koa\n     Ka nanetry tena\n     Ho sakaizanao\n\n          Indro Izy ! ô jereo !\n          Eo ambonin’ilay hazo\n              O jereo !\n          Mafy re ny adiny\n          Fitiavan-tsy hita lany\n              O jereo !\n\n2.  Moa ve handatsa koa ianao ?\n     Toy ireo fahavalo\n     Lian-dra ireo\n     Moa sahinao ve\n     O ! lazao, lazao\n     Ny handà izao fitiavana izao ?\n\n          Indro Izy ô henoy !\n          Fa mivavaka mangina\n              O henoy !\n          Mamelà ny helony,\n          Fa tsy fantany akory,\n              O henoy !\n\n3.  Mitanondrika Izy\n     Fa mavesatra,\n     Ilay satro-tsilo\n     Mahaloa-dra\n     Ndrisy mafy loatra\n     Ry mpanota ô !\n     Moa fantatrao va re\n     Fa ho anao ?\n\n          Indro Izy ô jereo !\n          Fa mangirifiry mafy\n               O jereo !\n          Indro fa milofika\n          Dia afaka ny ainy,\n               O jereo !\n\n4.  Tomponay malala\n     Menatra aho izao\n     F’efa nanazimba\n     Ny fitiavanao\n     Nefa noho ny ranao\n     Izay nalatsaka\n     Dia mino\n     Fa voavela heloka\n\n        Indro raiso ho Anao re\n        Ny foko manontolo, ho Anao\n        Foiko fa navotanao\n        Ho mandrakizay Jesosy, ho Anao.</h4></pre>"
          },
          {
            "num" : "181",
            "titre": "Ry Jerosalema, ry Jerosalema",
            "hira": "<pre><h4 class='padding'>\n1.  Ry Jerosalema, ry Jerosalema\n     Impiry moa Jesosy Tompo\n     No te-hambomba anao\n     Nefa nolavinao sady natakalonao\n     Rendrarendra, kilalao, \n\n     Ny fitiavany anao\n     Jereo anie izato dininy\n     Nefa tsy hita ‘zay tsininy\n     Fa noho ianao no nikapohana Azy \n     Noho ireo helokao\n     No namantsihana Azy.\n\n2.  Ry Jerosalema, ‘zay eto ankehitriny\n     Mbola eto anie Jesosy\n     Te-hamonjy tahaka ny fahiny\n     Izy anie ka tsy mijery\n     Fahotana tsy voaisa\n     Koa mibebaha ianao, \n     Famonjena efa vita\n\n     ‘Zay tsy manana an’i Jeso\n     Dia mampalahelo\n     Ny tsy mino anie\n     Dia ho any amin’ny helo\n     Tsy aleo ve ifonana\n     ‘Reo heloka hatrizay\n     Toy izay hijalijaly mandrakizay</h4></pre>"
          },
          {
            "num" : "182",
            "titre": "Andro farane bakao",
            "hira": "<pre><h4 class='padding'>\n1.  Andro farane bakao\n     Ndra halake, ndra halao\n     Aia avao ty hisy anao\n     Laha fa ave ‘zay andro ‘zay\n     Ranosira andref’eroy\n     Le hiranga ho etoy\n     Aia avao ty hisy anao\n\n          Tany toy le ho ravà\n          Ty hanana koa hengà\n          Lanitse hikopake\n          Ty afobe hisompatse\n          Ka akory avao ty heve’ao\n          Le tapaho henane zao\n          Jesosy mbo mandinë anao.\n\n2.  Anjomara, antsiva be\n     Ndra ty maty hahare\n     Ndra ty kely ndra ty be\n     Ho amin’Andriamanitse\n     Aia avao ty hisy anao\n     Laha ave ‘zay andro ‘zay\n     Jesosy mbo mandinë anao.</h4></pre>"
          },
          {
            "num" : "183",
            "titre": "Raha te ho sambatra ianao izao",
            "hira": "<pre><h4 class='padding'>\n1.  Raha te ho sambatra ianao izao\n     Raiso Jeso ho tena Tomponao\n     Fa Izy ihany no afaka hanome\n     Ny fiadanana tonga lafatra\n\n          Hosana \n          Haleloia, Haleloia\n          Ho anao ry Tompo tia anay\n          Haleloia, Haleloia\n          Afaka tokoa izahay\n          Sambatra aho e\n          Tretrika aho\n          Fa voavela heloka e\n          Ka midera, mankalaza\n          Ho Anao mandrakizay.\n\n2.  Tonga Jeso Zanaky ny Ray\n       Tonga Jeso ‘Lay mpanavotra\n       Nidina Izy hamonjy ny mpanota\n       Nidina Izy hamonjy ny mania.\n\n3.  Miandry anao ny Ray ao ambony\n     Miandry indrindra ny fiverenanao\n     Miandry kosa ny handraisanao\n     Ny famonjena atolotra ho anao</h4></pre>"
          },
          {
            "num" : "184",
            "titre": "Tsy ny senton’alahelo na tomany",
            "hira": "<pre><h4 class='padding'>\n1.  Tsy ny senton’alahelo na tomany\n     No manafaka ny helokao\n     Na ilaina tokoa aza izany\n     Ho fanenenana amin’ny ota natao\n     Ny fananana an’i Jeso ihany\n     No maha olom-baovao anao\n     Fa nalatsany koa ny rany\n     Mba tena hanamarina anao.\n\n     Raha izay hanana toe-tsara ihany\n     No indro ilofosanao\n     Tsy misy maharatsy an’izany\n     Saingy ity no mba tsarovinao\n     Ny Fanahy nirahin’ny Tompo\n     No afaka hanarona anao\n     Ka hahatonga anao ho mpanompo\n     Hitafy toe-baovao</h4></pre>"
          },
          {
            "num" : "185",
            "titre": "Inona àry moa no soa ho azonao",
            "hira": "<pre><h4 class='padding'>\nInona àry moa no soa ho azonao\nNa ho anao aza izao tontolo izao\nNefa ho very ny ainao \nNa ny fanahinao\nInona àry re lazao raha fantatrao.\n\nTsy tahaka ny fanomen’\nIzao tontolo izao\nNo hanomezany fiadanana ho anao\nRaha manatona\nIlay Ray Mpahary ianao\n‘Zay tsy sasatra\nMitia sy miandry anao.</h4></pre>"
          },
          {
            "num" : "186",
            "titre": "Endrey ny fitiavan-dehibe",
            "hira": "<pre><h4 class='padding'>\n1.  Endrey ny fitiavan-dehibe\n     Nomenao ry Jeso ho ahy re\n     Ny rany latsaka ho fanavotana\n     Endrey ‘ty fitiavanao Jeso.\n\n2.  Jesosy Tompo tia no miantso anao\n     Milaza hoe : «  ny ota avelao  »\n     Ny lalanao hazava, ny aizinao hisava\n     Jesosy Tompo tia no miantso anao.\n\n          O mba hevero izao\n          ‘Lay Tompo tia Mpamonjinao\n          Ny ainy natolony\n          Hamonjy ny olony\n\n3.  Jeso raiso ny fiainako ho Anao\n     Ny foko tsy madio mba sasao\n     Ho lapanao soa, mamiratra tokoa\n     Jeso raiso ny fiainako ho Anao.\n     O mba hevero izao…</h4></pre>"
          },
          {
            "num" : "187",
            "titre": "Izay heverina ho fiainana",
            "hira": "<pre><h4 class='padding'>\n1.  Izay heverina ho fiainana\n     Dia feno tebiteby hatrany\n     Tsy misy izay hoe fiadanana\n     Kanefa misy re izany.\n\n          Ny fiadanan’i Jeso Kristy\n          Iriko mba ho aminao\n          Satria Andriamanitra Izy\n          Ekeo fa tia anao.\n\n2.  Raha manome izao tontolo izao\n     Dia fiadanana mandalo\n     Fa Jeso fiadanana\n     Ekeo fa tsy mba hampimalo\n\n3.  Izay manaiky an’i Jeso tia\n     Dia manam-piadanana ao am-po\n     Satria tena iray aminy\n     Ho miramirana tokoa</h4></pre>"
          },
          {
            "num" : "188",
            "titre": "Raha olona irery",
            "hira": "<pre><h4 class='padding'>\n1.  Raha olona irery\n     No hanjakan’ny ota, \n     Dia tsy ho zaka mihitsy\n     Ny eto an-tany re !\n     (Dia) tsy ho zaka (bis)\n     Ny eto an-tany re !\n\n2.  Fa Jesosy Mpamonjy\n     No efa nijaly ho anao, \n     Dia tsy ho very mihitsy\n     ‘Zay mino Azy izao.\n     (Dia) ty ho very (bis)\n     ‘Zay mino Azy re !\n\n3.  Atolory ny fiainanao\n     Ho an’i Jeso irery\n     Dia tsy ho resy mihitsy\n     Fa Izy homba anao.\n     (Dia) tsy ho resy (bis)\n     Fa Izy homba anao</h4></pre>"
          },
          {
            "num" : "189",
            "titre": "Raha te-ho sambatra ianao",
            "hira": "<pre><h4 class='padding'>\n1.  Raha te-ho sambatra ianao, \n     Sambatra\n     Raiso ao am-po Jeso\n\n          Ny ota alainy\n          Omeny anao ny soa\n          Hanova anao tanteraka\n          Hanjaka ao am-po\n\n2.  Raha te-hiadana ianao\n     Hiadana\n     Raiso ao am-po Jeso\n\n3.  Raha te-ho tia namana ianao\n     Namana \n     Raiso ao am-po Jeso</h4></pre>"
          },
          {
            "num" : "190",
            "titre": "Nolavina ny Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  Nolavina ny Tompo\n     Nolavina satria\n     Noho ny toetran’ny mpanompo\n     Mihatsaravelatsihy\n     Tsy nekeny ho Mpamonjy\n     Ilay Tompo be fitia\n     Fa naleony dia nifidy\n     Ny olon-dratsy mpania\n     Tsy sitrany ny Tompo\n     Fa ny ratsy no nekeny\n     Nioko ireo mpanompo\n     Barabasy hoy ny feony\n     Voahombo re ny Tompo\n     Maty noho ny helokao\n\n2.  Sakaizanay mpanota\n     Jesosy Ianao\n     Izay nisolo anay mpanota\n     Noho ny helokay\n     Tsy misy maharara\n     ‘Zay tianao hatao\n     Fa na ny fasana aza\n     Dia resinao\n     Na ratsy aza izahay \n     Dia izao indray no hiranay\n     Maty ny anankiray\n     Maty mba ho solonay e !\n     Olon’afaka izahay\n     Satria nandresy Jesosinay.\n\n3.  Ry havana malala\n     ‘Nareo namako koa\n     Tiako mihitsy ny hanambara\n     Fa Jeso no foto-tsoa\n     Ny devoly andosiro\n     Ka ny ratsy ialao\n     Fa ny tsara no fikiro\n     Raiso re Jeso ho anao\n     Ny devoly andosiro\n     Ka ny ratsy ialao\n     Ny tsara no fikiro\n     Tano mafy Jeso ho anao e ! \n     Zava-poana anie rahavako\n     Izao tontolo izao.</h4></pre>"
          },
          {
            "num" : "191",
            "titre": " Raha manjombonjombona",
            "hira": "<pre><h4 class='padding'>\n1.  Raha manjombonjombona\n     Ny andronao, \n     Ka tsy hitanao izay tokony hatao, \n     Dia ny varavaranao re no vohay, \n     Mba hidiran’i Jeso.\n\n          Ny masoandronao dia ao\n          Ka ny varavaranao re no vohay\n          Mba hidiran’i Jeso.\n\n2.  Raha misy mafy izay hatao, \n     Ka ny olona rehetra toa mandao, \n     Dia ny varavaranao re no vohay, \n     Mba hidiran’i Jeso\n\n3.  Raha misy fahoriana mahalao, \n     ‘Zay manetoketoka ny fonao, \n     Dia ny varavaranao re no vohay, \n     Mba hidiran’i Jeso.\n\n4.  Raha mihozongozona ny hevitrao\n     Ka tsy misy valiny ny vavakao, \n     Dia ny varavaranao re no vohay, \n     Mba hidiran’i Jeso.\n\n5.  Raha miramirana ny endrikao, \n     Ka tsy fantatrao izao fahoriana izao, \n     Dia ny tranonao no diovy sy fafao\n     Mba hidiran’i Jeso.</h4></pre>"
          },
          {
            "num" : "192",
            "titre": "Efa nolazaina taminao",
            "hira": "<pre><h4 class='padding'>\n1.  Efa nolazaina taminao\n     Ny amin’ny Tompo\n     Efa fantatrao tamin’izany\n     Ny fitiavany\n     Efa henonao taman’olona\n     Ny famonjeny\n     Ho anjaranao no sisa misaina\n     Fa ny Tompo dia be fitiavana\n     Be fandeferana \n     Ka nanolotra ny ainy ho antsika.\n\n          Koa amin’izany, \n          Izay rehetra mino Azy\n          Dia tafafindra\n          Niala tamin’ny maizina\n          Ho amin’ny mazava\n          Mandrakizay.\n\n2.  Ankehitriny anefa amin’izao\n     Dia mbola misy\n     Fotoana vitsy monja hibebahana\n     Koa maneke an’i Jesosy\n     Ho Tomponao\n     Dia hovonjena ny fanahinao\n     Fa Jesosy no fiainana, \n     Fahamarinana, \n     Ary lalana ahatongavana\n     Amin’ny Ray.</h4></pre>"
          },
          {
            "num" : "193",
            "titre": "Ny finoana an’i Jeso Kristy",
            "hira": "<pre><h4 class='padding'>\n1.  Ny finoana an’i Jeso Kristy\n     No nitondra fiadanana ho anay\n     Fiadanana tsy mba tahaka\n     Ny an’izao tontolo izao\n     Koa raiso izany ho ampinganao\n     Handresena ireo adim-piainana\n     Sy ireo fahavalo maro koa\n     Ka raiso izany re.\n\n          Ary aoka hanapaka\n          Am-ponareo\n          Ny fiadanan’i Kristy\n          Fa ho amin’izay \n          No niantsoana anareo\n          Mba ho tena iray\n          Meteza hanjakan’i Jeso\n          Ny fiainanao izao\n          Tohero ireo tsy finoana\n          ‘Zay mahasolafaka.\n\n2.  Izao no andro fahasoavana\n     Handraisana an’i Jesosy Kristy\n     Ilay Zanak’Andriamanitra\n     Nitondra ireo otanao\n     Meteza hanjakan’i Jeso\n     Ny fo sy ireo tokantranonao\n     Mba hanana fiadanana\n     Manomboka hatramin’izao</h4></pre>"
          },
          {
            "num" : "194",
            "titre": " Qu’il fait bon vivre",
            "hira": "<pre><h4 class='padding'>\n1.  Qu’il fait bon vivre\n     Quand on aime Jésus \n     Et qu’au pied de sa croix\n     On laisse le fardeau\n     Qu’il fait bon vivre\n\n          Il donne le repos\n          Voilà l’amour de Jésus\n          Il s’est donné lui-même\n          Lui l’Agneau de Dieu\n          Subit le châtiment\n          Voilà pourquoi\n          Mon cœur l’aime\n          Et je veux maintenant\n          Le servir pour jamais.\n\n2.  Si tu veux vivre, \n     Reçois-Le dans ta vie.\n     Il a tout accompli\n     Pour que tu sois sauvé.\n     Sauvé pour toujours, \n     Oui, c’est là son amour\n     Sans tarder viens à Lui.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "195",
            "titre": "Aux cailloux du torrent",
            "hira": "<pre><h4 class='padding'>\n1.  Aux cailloux du torrent, \n     Jette tous tes biens\n     Et le Dieu tout puissant \n     T’offrifa les siens.\n     Sa présence vaut mieux\n     Que tous les trésors, \n     Et le Roi des cieux\n     Te sera plus que beaucoup d’or.\n\n2.  Sais-tu que le Seigneur\n     Est mort sur la croix ?\n     Et qu’Il sauve ton cœur\n     Frère, viens et vois !\n     En Lui, c’est le bonheur, \n     C’est la paix, la joie\n     Oh, viens à cette heure\n     Pour le chanter te joindre à nous\n\n3.  Jésus t’aime beaucoup, \n     Oh ne tarde pas!\n     Viens te joindre à nous\n     Pour suivre ses pas.\n     Ainsi tu marcheras\n     Avec Lui toujours, \n     Ainsi pas à pas, \n     Dans son amour tu marcheras</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "196",
            "titre": "Evenou Shalom alerem",
            "hira": "<pre><h4 class='padding'>\nEvenou Shalom alerem (3)\nEvenou Shalom, Shalom, \nShalom alerem.\n1.  Nous vous annonçons la paix (4)\n     La paix de Jésus\n\n2.  Nous vous annonçons la joie (4)\n     La joie de Jésus.\n\n3.  Nous vous annonçons l’amour (4)\n     L’amour de Jésus.\n4.  Nous vous annonçons la paix\n     Nous vous annonçons la joie\n     Nous vous annonçons l’amour\n     Nous vous annonçons la paix\n     La joie, l’amour de Jésus</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "197",
            "titre": "Ela izay no nialako",
            "hira": "<pre><h4 class='padding'>\n1.  Ela izay no nialako, \n     Nandosirako Anao\n     Ankehitriny anefa Raiko, \n     Te hiverina aho izao. \n\n          Jesosy ô mba raisonao\n          ‘Ty tenako tsy mendrika\n          He fantatro fa tianao aho\n          Na dia tsy tia Anao.\n\n2.  Ts’isy azo nitokiana\n     ‘Zay noheverina ho soa\n     Tsy nitondra hafaliana\n     Fa ny fo indray no voa\n\n3.  Efa trotraky ny ady, \n     Teny am-pandehanana\n     Efa vizana nitady\n     ‘Zany fiadanana.\n\n4.  O Jesosy atolory\n     Ahy izany tananao\n     Ka ny tahotro esory\n     Hanarahako Anao.</h4></pre>"
          },
          {
            "num" : "198",
            "titre": "Atolotro Anao e, ny foko",
            "hira": "<pre><h4 class='padding'>\n1.  Atolotro Anao e, ny foko\n     Satria tia ahy Ianao\n     Toy ‘lay tranon’omby maloto\n     Hidiro ka mba hazavao\n     Tsy omby no ao e, fa ota\n     Tsy vilona fa aizim-po\n     Ny heloka amam-pahotana\n     Levòny ho lasa avokoa\n     Atolotra Anao e… hazavao\n\n2.  Atolotra Anao e, ny feoko\n     Satria tia ahy Ianao\n     Toy ireo feon’Anjely manako\n     Ekeo fa fiderana Anao.\n     Tsy feo manga loatra e, fa gara\n     Tsy hira mety hahafa-po\n     Nefa azo ovàna ho tsara\n     Raha tena vokatry ny fo.\n     Atolotro Anao e… Anao.</h4></pre>"
          },
          {
            "num" : "199",
            "titre": "Izaho ry Jesosy dia vonona izao",
            "hira": "<pre><h4 class='padding'>\n1.  Izaho ry Jesosy dia vonona izao\n     Vonon-kitsangana hanaraka Anao\n     Kanefa Jesosy malemy tokoa\n     K’avia fa tantano dia ho tafita soa.\n\n          Jeso malala ô ! Mpamonjy tia\n          Raiso re fa ondry mania\n          Jeso tantano, tantano izahay\n          Tantano Jesosy ao lavo eto indray.\n\n2.  Fa ny fahotako dia maro tokoa\n     Ka tsy mba mendrika Anao Tompo soa\n     Nefa ny avotra tao Kalvary\n     Tokiko mandra-pialako ety.\n\n3.  Ny foko Jesosy atolotro Anao\n     Mbola maloto kanefa sasao\n     Eny Jesosy, sasao ho madio\n     Ao re mitoetra manomboka anio.\n\n4.  Ny tenako rehetra dia vonona izao\n     Vonon-kanefa izay sitrakao\n     Aina no fetra hanarahako Anao\n     Raiso aho Jesosy\n     Mba ho mendrika Anao\n\n5.  Fanahy Masina ô ! tsinjovy izahay\n     Tsinjovy hahita ny lapan’ny Ray\n     Midìna Jesosy ety aminay\n     Midìna Jesosy ka raiso izahay.</h4></pre>"
          },
          {
            "num" : "200",
            "titre": "Ry Dada ô",
            "hira": "<pre><h4 class='padding'>\nRy Dada ô\nNanota tamin’ny lanitra aho\nEfa nania teo anatrehanao\nNihevitra aho\nFa ny filàna no hampifaly fo\nKinanjo izao no niafarana re\nFadiranovana tokoa.\n\nRy Dada ô, \nAza dia manenji-dresy re\nEkeko fa nanary ahy\nNy lalana naleha\nMifona re\nFa na tsy mendrika ny ho zanakao\nAtaovy ho isan’ny mpanomponao\nFa te ho eo anilanao\n\nRy zanako\nIzao no tsy tsapanao :\nIzaho anie\nKa tsy mba nankahala anao\nFa efa ela no niandrasako anao\nEndrey ny hafalian’ny Rainao\nFa nody indray ny sainao\nIndro raiso ireto fitafiana vao\nIndro kapa kiraroy ny tongotrao\nKa iza re no \nHiombon-kafaliana amiko\nFa efa very ity zanako\nKanefa dia niverina amiko\n\nHe ny hafalianay, \nFa ahoana ny aminao\nTsy hody va, tsy hody va ?\nRay Tsitoha no miandry anao\nAza be fangataka andro, \nMiandry anao ny fitahiany\nModia re, modia re, \nSao zary neninao.</h4></pre>"
          },
          {
            "num" : "201",
            "titre": "Ry Jeso ô mba raiso ny fiainako",
            "hira": "<pre><h4 class='padding'>\n1. Ry Jeso ô mba raiso ny fiainako\n     Ho Anao, Anao manokana\n     Ka ny foko rehetra atolotro \n     Ho Anao, Anao mandrakizay\n\n2.  Ry Jeso ô mba raiso izany tenako\n     Mba ho tena tempolinao\n     Ka ny andro rehetra izay iainako\n     Indro Tompo hanompoako Anao.\n\n3.  Na tsy mendrika aza izany tenako\n     Dia raiso ho tonga zanakao\n     Ka ny foko maloto no atolotro\n     Ho sasaba ho tonga vaovao.\n\n          Raiso (Jeso), raiso (Jeso)\n          Raiso ho anao izany fiainako\n          Raiso (Tompo), raiso (Tompo)\n          Raiso ho anao ny hoaviko\n          Ka ianao irery no ho tokiko izao\n          Jeso, Jeso ô raiso ho anao\n          (Ho anao mandrakizay doria) Jeso.</h4></pre>"
          },
          {
            "num" : "202",
            "titre": "Tanora maro lasa tokoa",
            "hira": "<pre><h4 class='padding'>\n1.  Tanora maro lasa tokoa\n     Nanao zay nahafaly fo\n     Ka tsy mba nijery mihitsy\n     Izay tena mahasoa\n\n          Ankehitriny anefa Jeso\n          Vonona tokoa re\n          Hiainga aho\n          Hanaraka Anao Jeso\n          Ka ho tantananao\n\n2.  Izay rehetra natao teo aloha\n     Dia nanaranam-po tokoa\n     Ka tsy mba nitsinjo ny hoavy\n     Fa variana nifaly tokoa.\n\n3.  I Jeso Mpamonjy miantso\n     Miantso hiaraka Aminy\n     Vonona Izy hamonjy\n     Izy diso lalana.</h4></pre>"
          },
          {
            "num" : "203",
            "titre": "Raiso Tompo anjakao",
            "hira": "<pre><h4 class='padding'>\n1.  Raiso Tompo anjakao\n     ‘Zany foko babonao\n     Fantatrao fa mety Ianao Jeso ô\n     Hanavao ‘zany fiainako.\n\n     Hatrizay anie Jeso ô\n     Nihevitra aho fa tsy nania, \n     Kanjo hay ve zava-poana Tompo\n     ‘Zany fiainako hatrizay.\n\n          Inty aho Jeso, iraho aho Jeso\n          Vonon-kanao ‘zay sitrakao \n          Ka ny fiainako hatokako \n          Ho Anao\n          O raiso Tompo\n          Mba ho voninahitrao\n\n2.  Mino aho Tompo ô\n     Ho avy Ianao ka handray\n     ‘Reo zay mino manantena Anao\n     Hiara-tsambatra Aminao</h4></pre>"
          },
          {
            "num" : "204",
            "titre": "Ry Tompo ô, Mpamonjiko malala",
            "hira": "<pre><h4 class='padding'>\n1.  Ry Tompo ô, Mpamonjiko malala\n     Endrey ny fitiavanao\n     Iriko mafy koa ny hahalala\n     Hanompo sy hiasa ho Anao\n\n          Moa inona no zavatra nataoko\n          Hamonjy ireo mpanota namako\n          Angamba* mbola hisy ny fotoana\n          Mba hanompoako Anao Jeso.\n\n2.  Ny andro sy fotoana efa lasa\n     Dia be no very foana re\n     Fa vitsy no mba azoko nomena\n     Sy lany nanompoana Anao Jeso.\n\n3.  Ny tenako rehetra, fo, fanahy\n     Ry Tompo ô, omeko Anao\n     Hijoro, eny koa ho tena sahy\n     Ny hanambara ny fitiavanao\n\n          * na Antenaiko</h4></pre>"
          },
          {
            "num" : "205",
            "titre": "Ry Jesosy ô Mpamonjy",
            "hira": "<pre><h4 class='padding'>\n1.  Ry Jesosy ô Mpamonjy\n     Inty aho manolotra\n     Ny tenako ho Anao\n     Koa mba raiso ry Jesosy ô\n     Ho Anao\n     Ho fonenanao mandrakizay\n     Mandrakizay doria.\n\n          Fa tsy misy fiadanana\n          Raha tsy eo akaikinao\n          Raiso re na dia \n          Tsy mendrika ho Anao\n          Raiso ho fanananao\n          Mandrakizay.\n\n2.  Ry Jeso, ny ho eo\n     An-tananao, ho sakambininao\n     Io no mba iriko izao\n     He ! manolo-tena aho ho Anao\n     Ary ny heloko rehetra mba sasao\n     Ho voadio mandrakizay</h4></pre>"
          },
          {
            "num" : "206",
            "titre": "Ry Jeso ô, indreto izahay",
            "hira": "<pre><h4 class='padding'>\nRy Jeso ô, indreto izahay\nFa vonona hanaraka anao\nTsy manan’olon-kafa re\nArahina izahay\nFa Ianao irery no\nHo fiainanay\nHanara-dia anao izahay\nRy Tompo Masina ô\nHiaraka aminao, hifikitra aminao\nKa n’aiza n’aiza itondranao anay\nHanaraka anao izahay Jeso ô\n\nRy Jeso ô Ianao no herinay\nMpitarika ny dianay ety\nHibanjina ny tavanao\nHanaraka ny baikonao\nNa sarotra tokoa re \nNy lalana aleha\nDia vonona tokoa\nHanao ny asanao ety\nHizara ny teny soa amin’ny havanay\nKa vonona tokoa re\nHanara-dia anao\nTantano, tantano izahay</h4></pre>"
          },
          {
            "num" : "207",
            "titre": "Miséricorde insondable",
            "hira": "<pre><h4 class='padding'>\n1.  Miséricorde insondable !\n     Dieu peut-il tout pardonner ?\n     Absourde un si grand coupable, \n     Et mes péchés oublier ?\n\n          Jésus, je viens !\n          Je viens à Toi !\n          Tel que je suis\n          Je viens à Toi\n          Jésus je viens\n          Je viens à Toi !\n          Tel que je suis !\n          Prends-moi.\n\n2.  Longtemps j’ai, loin de sa face, \n     Provoque son saint courroux, \n     Fermé mon cœur à sa grâce, \n     Blessé le sien devant tous.\n\n3.  O Jésus ! à Toi je cède, \n     Je veux être libéré, \n     De tout péché qui m’obsède\n     Etre à jamais délivré.\n\n4.  Alléluia ! plus de doute\n     Mon fardeau m’est enlevé\n     Pour le ciel je suis en route, \n     Heureux pour l’éternité</h4></pre>"
          },
          {
            "num" : "208",
            "titre": "Tel que je suis, sans rien à moi",
            "hira": "<pre><h4 class='padding'>\n1.  Tel que je suis, sans rien à moi !\n     Sinon ton sang versé pour moi\n     Et ta voix qui m’appelle à Toi, \n     Agneau de Dieu, je viens, je viens !\n\n2.  Tel que je suis, bien vacillant\n     En proie au doutee à chaque instant\n     Lutte au dehors, crainte au dedans, \n     Agneau de Dieu, je viens, je viens !\n\n3.  Tel que je suis, ton cœur est prêt\n     A prendre le mien tel qu’il est\n     Pour tout changer, Sauveur parfait !\n     Agneau de Dieu, je viens, je viens !\n\n4.  Tel que je suis ton grand amour\n     A tout pardonné sans retour, \n     Je veux être à Toi dès ce jour ;\n     Agneau de Dieu, je viens, je viens !</h4></pre>"
          },
          {
            "num" : "209",
            "titre": "Entre tes mains j’abandonne",
            "hira": "<pre><h4 class='padding'>\n1.  Entre tes mains j’abandonne\n     Tout ce que j’appelle mien\n     Oh ! ne permets à personne, \n     Seigneur d’en reprendre rien !\n     Oui, prends tout, Seigneur ! (bis)\n     Entre tes mains j’abandonne\n     Tout avec bonheur.\n\n2.  Je n’ai pas peur de te suivre\n     Sur le chemin de la croix\n     C’est pour Toi que je veux vivre\n     Je connais, j’aime ta voix\n     Oui, prends tout Seigneur (bis)\n     Sans rien garder, je te livre\n     Tout avec bonheur.\n\n3.  Tu connais mieux que moi-même\n     Tous les besoins de mon cœur ;\n     Et, pour mon bonheur suprême, \n     Tu, veux me rendre vainqueur\n     Oui, prends tout Seigneur (bis)\n     Je ne vis plus pour moi-même, \n     Mais pour mon Sauveur.\n\n4.  Prends mon corps et\n     Prends mon âme, \n     Que tout en moi soit à Toi\n     Que par ta divine flamme\n     Tout mal soit détruit en moi !\n     Oui, prends tout Seigneur (bis)\n     Prends mon corps et\n     Prends mon âme ;\n     Règne sur mon cœur</h4></pre>",
            "mark": "(TIRÉ DES CHANTS DE VICTOIRES)"
          },
          {
            "num" : "210",
            "titre": "Prends ma vie dans tes bras",
            "hira": "<pre><h4 class='padding'>\n1.  Prends ma vie dans tes bras\n     Oh ! Jésus tendre ami\n     Car de Toi jaillira\n     La seule source de vie\n     Porte-moi dans ma foi\n     En ton amour serein\n     Oh, Seigneur \n     Guide–moi par ta main.\n\n          Oh Jésus tendre ami\n          Mon fidèle soutien\n          Eternel infini roi divin\n          Porte-moi dans ma foi\n          En ton amour serein\n          Oh ! Seigneur \n          Guide-moi par ta main\n\n2.  Si parfois je t’oublie\n     Egaré et confus\n     Tu demeures avec moi\n     Car tu m’aimes Jésus\n     Des tourments, des malheurs\n     Qui assaillent mon cœur\n     Grâce à Toi, \n     Je triomphe sans peur !\n\n3.  Dans la vie d’aujourd’hui\n     Rien ne vit, tout est vain\n     C’est la mort en esprit\n     De l’humain, inhumain\n     Mais jeT’ai rencontré\n     Et ma vie a changé\n     Tu m’a ressuscité, libéré.\n\n          Oh Jésus tendre ami\n          Mon fidèle soutien\n          Eternel infini roi divin\n          Quand je t’ai rencontré\n          Toute ma vie a changé\n          Tu m’as ressuscité, libéré</h4></pre>"
          },
          {
            "num" : "211",
            "titre": "I have decided",
            "hira": "<pre><h4 class='padding'>\n1.  I have decided\n     To follow Jésus\n     No turning back (2)\n\n2.  The world behind me\n     The cross before me\n     No turning back (2)\n\n3.  Though no one joins me\n     I still will follow\n     No turning back (2)\n\n4.  Will you decide now\n     To follow Jésus\n     No turning back (2)</h4></pre>"
          },
          {
            "num" : "212",
            "titre": "Fitiavana tsy hay ambara re",
            "hira": "<pre><h4 class='padding'>\n1.  Fitiavana tsy hay ambara re\n     No nasehonao ’lay tao Getsemane\n     Niaretanao ny fahoriana\n     Teo amin’ny hazofijaliana\n\n          Ry Jeso Tompo be fitia\n          Mpamonjy ny mania\n          Atolotro ny foko ho Anao\n          Ka raiso mba ho fonenanao\n          O ! anjakao.\n\n2.  Fitiavana tsy manam-paharoa\n     ‘Zay manintona ny fo ho mpankato\n     Famonjena tsy mba novidiana\n     Teo amin’ny hazo fijaliana\n\n3.  Fitiavana tsy miova sanatria\n     No natolotrao ry Jeso Kristy\n     Ka ny tenanao no nofantsihana\n     Teo amin’ny hazofijaliana</h4></pre>"
          },
          {
            "num" : "213",
            "titre": "Moa mba fantatrao va re",
            "hira": "<pre><h4 class='padding'>\n1.  Moa mba fantatrao va re ?\n     ‘Lay lehilahy iray\n     Namonjy marobe, \n     ‘Zay iraky ny Ray\n\n     Io no Jesosy nomena ho anao\n     ‘Zay mino no hiaina\n     Fiainan-danitra rahatrizay\n\n2.  Mpanota ô ! mihevera, \n     Ny andronao ety\n     Hirodana hianjera, \n     Tsy haharitra doria\n\n     Jesosy no banjino, \n     Voahombo ho anao, \n     Ny feonay mamelovelo\n     Miantso hoe «  avia izao  ».\n\n3.  Mandalo ny eto an-tany, \n     Ho foana sy ho lao\n     Koa sainonao hatrany\n     Ny hoavinao\n\n     Ny fasana nandavo, \n     Nandringana tokoa\n     Raha maty tsy mibebaka\n     Dia ho neninao tokoa</h4></pre>"
          },
          {
            "num" : "214",
            "titre": "Fanomezan-tsarobidy",
            "hira": "<pre><h4 class='padding'>\n1.  Fanomezan-tsarobidy\n     Efa natolotr’Andriamanitra\n     (Mba ho ahy)\n     Ho ahy, ho anao, \n     Ho an’izao tontolo izao, \n     ‘Zay tafasaraka\n     Noho ny ota natao taminy, \n     Tsy nohazonina tao an-dapa\n     Be voninahitra, \n     Jeso Tompo ‘lay teny\n     Tonga nofo\n     Miara-monina amiko\n     (Aminao)\n     Sy amin’izay manaiky\n     Hiaina ny fiainany.\n\n          (Jeso Tompo)\n          Tompon’ny finoana, \n          Fanantenana, fitiavana. \n          Ny firaisana Aminy\n          Tena hery, tena fiainana.\n\n2.  Efa noraisinao ve\n     Ilay zanak’Andriamanitra\n     (‘Zay nomena)\n     Nomena ho antsika\n     Mba ho fanavotana, \n     Ho fampihavanana\n     Amin’ny Tompo\n     Sy amintsika koa ;\n     Tsy fampihavanana\n     ‘Zay mandalo fa maharitra :\n     Jeso Tompo ‘lay teny\n     Tonga nofo\n     Feno fahasoavana\n     (Fifaliana)\n     Ka manavao izay manaiky\n     ‘Lay fiainantsoa.\n\n     (Jeso Tompo)…</h4></pre>"
          },
          {
            "num" : "215",
            "titre": "Zao ny hafatsy",
            "hira": "<pre><h4 class='padding'>\n1.  Zao ny hafatsy \n     Ambara andrareo\n     Mpivory maro\n     Intoa izahay\n     Minday ny feo\n     Mifalia (Mifalia re)\n\n          Mamoaza voa fibebahana\n          Izay mibebaky\n          Mahazo soa\n          Amen !\n\n2.  No hazo ratsy\n     Avô n’ambole\n     Dra voa mafy\n     Fa ndre ny voany\n     Ho vatobe\n     Ratsy (Dra mbô ratsy)\n\n3.  Ny hazo ratsy \n     Tsy mamoa oa\n     Fa vandy zay\n     Manahak’an-tena\n     Tsy mety toroa\n     Mahafiray !</h4></pre>"
          },
          {
            "num" : "216",
            "titre": "Ranon’aina izay tena mateza",
            "hira": "<pre><h4 class='padding'>\n1.  Ranon’aina izay tena mateza\n     Ao an-tampon’i Kalvary\n     Saro-dalana sady mideza\n     Nefa kosa tsy lavitra anao\n\n          Ranon’aina, tsara loatra\n          Mora azon’ny maniry azy re\n          Tsy mba eto fa any an-koatra\n          ‘Zay tafiditra ao \n          Dia tretrika tokoa.\n\n2.  Loharano tsy mety ho ritra\n     Fa maharitra mandrakizay\n     Manadio ny loto rehetra\n     Ikambanana amin’ny Ray\n\n3.  Ny fitiavan’i Jesosy Tompo\n     No manolotra io rano io\n     Ka manafaka ny mampisento\n     Hatak’andro, tapaho ny hevitrao.\n\n4.  Tonga Jeso hamonjy ny maro\n     Izay mibebaka dia matokia\n     Ny Fanahy masin’ny Tompo\n     Manadio ny loto ao am-po\n\n5.  Ireo Jiosy manao ranolava\n     Mba hanototra io rano io\n     Nefa kosa tsy maintsy misava\n     Ny fiboikany tsara tokoa</h4></pre>"
          },
          {
            "num" : "217",
            "titre": "Paio ’ty misy Ananahary",
            "hira": "<pre><h4 class='padding'>\nPaio ’ty misy Ananahary\nAho rô tsy te hijaly, Ale paio\nPaio ‘’ty misy Ananahary\n\nLongoe, longoe, longoe\nTsy mifily volon’olo, ndrate rate\nNdrate rate lo lo lo, hety hete\nTie tie, Nanahare\nLongoe, longoe, longoe.</h4></pre>"
          },
          {
            "num" : "218",
            "titre": "Ary fantatsika fa",
            "hira": "<pre><h4 class='padding'>\n1.  Ary fantatsika fa\n     Ny zavatra rehetra\n     Miara-miasa hahasoa\n     Izay tia an’Andriamanitra\n     Koa heveronao\n     Fa ireo fahasoavan’i Jesosy\n     Dia ampy hahasambatra ô\n     Anao mandrakizay.\n\n2.  Izaho hoy Jeso\n     Mahalala ny hevitra \n     Hiheverako anao\n     Hanananao fiadanana\n     Koa heveronao\n     Satria sitraky ny Tompo\n     ‘Zato fahorianao\n     manatòna Azy izao\n\n3.  Ny fifaliana \n     Avy tamin’i Jehovah\n     Raisiko ho fiarovana\n     Raha sendra ady mila handreraka\n     Koa heveronao\n     Ry foko ô, Jesosy tsy mandao\n     Andriamanitra Fitiavana ô\n     Matokia Azy izao.\n\n4.  Ny tenako Jeso \n     Maloto ka sasao\n     Mba ho mendrika handray\n     Ny fitiavana atolotrao\n     ‘Zaho izao Jeso\n     Dia vonona hanaraka Anao\n     Ka ny fiainako rehetraEntiko hiderana \n     Anao</h4></pre>"
          },
          {
            "num" : "219",
            "titre": "Fa ia e ! ia ro no nanavao anao e ",
            "hira": "<pre><h4 class='padding'>\nFa ia e ! ia ro no nanavao anao e !\nRo vona tsa miraika hatramin’izao e !\nFa leky nogodagodanina anao e !e !\nVona tsa miraika mba ho vao e !\n\nAtsia toy !\nJeso roa ro fanavaozana !\nAry tena fanorenana !\nFa leky fo mainty sy rovitsa e !\nVona ! ro ianteherana, a ! a ! a !\nVona ro iorenana\nE ! e ! e ! e !\n\nFa ia e ! ia ro no nanorina anao e !\nRo vona tsa miantomboka hatrizao e !\nFa leky notolorana Azy anao e ! e !\nNahifikao koa raha kilaolao e !\n\nAtsia toy !…</h4></pre>"
          },
          {
            "num" : "220",
            "titre": "Tu peux naître de nouveau",
            "hira": "<pre><h4 class='padding'>\n1.  Tu peux naître de nouveau, \n     Tu peux tout recommencer\n     Balayer ta vie passée\n     Et repartir à zéro (bis)\n     Avec Jésus pour berger\n     Et repartir à zéro (bis)\n     Avec Jésus pour berger\n\n2.  Tu peux boire cette eau\n     Source de la pureté, \n     Source de la verité.\n     Tu peux boire de cette eau (bis)\n     Source de l’éternité.\n     Tu peux boire de cette eau (bis)\n     Source de l’éternité.\n\n3.  Tu peux être pardonné\n     Pour tous tes péchés passés\n     Car Jésus a tout payé\n     Tu peux recevoir la paix (bis)\n     Source de la liberté, \n     Et repartir à zéro (bis)\n     Avec Jésus pour berger.</h4></pre>",
            "mark": "(REPRODUIT AVEC AUTORISATION,ALAIN BERGESE 1989)"
          },
          {
            "num" : "221",
            "titre": "Comme l’argile",
            "hira": "<pre><h4 class='padding'>\n1.  Comme l’argile, \n     L’insecte fragile\n     L’esclave docile, \n     Je t’appartiens\n     De tout mon être, \n     Tu es seul le maître\n     Je veux me soumettre\n     Je t’appartiens.\n\n     Si tu condamnes\n     Je tends mon âme\n     Au cœur des flammes\n     Je n’y peux rien\n\n     Avec les peines \n     L’amour et la haine\n     Coulant dans mes veines\n     Je t’appartiens\n\n2.  Que puis-je faire\n     Pour te satisfaire\n     Seigneur de la terre\n     Sur mon chemin\n     Comme les anges\n     Chanter tes louanges\n     Mais je ne suis pas un ange\n     Tu le sais bien\n\n     Je ne suis qu’un homme\n     Rien qu’un pauvre homme\n     Qui t’aime comme\n     Comme un copain\n\n     Souvent je pense\n     Que dans ton immense\n     Palais de clémence\n     Tu dois être bien, \n     Je t’appartiens.</h4></pre>"
          },
          {
            "num" : "222",
            "titre": "Le sage sur le roc",
            "hira": "<pre><h4 class='padding'>\n1.  Le sage sur le roc, \n     A bâti sa maison, \n     Et la tempête arriva\n     La pluie tomba, \n     Et le vent souffla, \n     Et la maison résista.\n\n2.  Le fou, sur le sable\n     A bâti sa maison \n     Et la tempête arriva.\n     La pluie tomba\n     Et le vent souffla \n     Et la maison s’écroula.\n\n3.  Bâtissez votre vie\n     Sur Jésus, le Sauveur \n     Et vous serez tous bénis.\n     Vous serez tous bénis\n     Pendant toute votre vie \n     Batissez donc sur Jésus</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒUR JOYEUX)"
          },
          {
            "num" : "223",
            "titre": "Je suis jeune et délivré",
            "hira": "<pre><h4 class='padding'>\n1.  Je suis jeune et délivré\n     Du fardeau de mes péchés\n     Maintenant je suis fort et heureux, \n     Marchant avec l’Eternel\n     Parmi ceux qui vont au Ciel\n     Vers la sainte demeure de Dieu.\n     Oui, d’être jeune, \n     C’est merveilleux\n     C’est mieux encore d’être sauvé\n     Pourtant voici le mieux de tout :\n     Jeune et sauvé de tous péchés.\n\n2.  Je suis jeune et bien content\n     De servir par le talent\n     Que la grâce de Dieu m’a donné\n     Tous sont appelés de Dieu\n     A mener les malheureux\n     Vers Jésus le Sauveur des perdus.\n\n3.  Je suis jeune et toi aussi\n     Ecoute mon chant ici ;\n     Ne désires-tu pas le bonheur ?\n     Dieu t’appelle à son salut, \n     Viens ! Reçois-Le par Jésus, \n     Sois heureux comme moi \n     Dans ton cœur.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "224",
            "titre": "Sur le chemin va sans peur",
            "hira": "<pre><h4 class='padding'>\n1.  Sur le chemin va sans peur\n     Car Jésus est devant toi, \n     Il veut être ton Sauveur\n     Oh ! suis-Le, oh ! suis-Le par la foi\n\n          Et maintenant saisis\n          La main de ton Sauveur, \n          Car Lui seul te donne\n          L’Eternel bonheur\n          Il a donné sa vie sur la croix\n          Oh ! suis-Le, oh ! suis-Le\n          Par la foi\n\n2.  Et si tombes en chemin, \n     Regarde à Jésus ton Roi, \n     Il est dans le lieu très saint\n     Et Il prie, et Il prie pour toi\n\n3.  Un jour Jésus reviendra\n     oh ! quel immense bonheur\n     Dans son ciel Il te prendra\n     Bénis-Le, bénis-Le dans ton cœur</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "225",
            "titre": "Tamin’ny fo no tena ninoanay",
            "hira": "<pre><h4 class='padding'>\n1.  Tamin’ny fo no tena ninoanay\n     Fa Jesosy no tonga hamonjy anay\n     Tamin’ny vava no tena nanekenay\n     Fa ny rany no nanadio anay.\n\n          Vavaky ny Tompo mba ho iray\n          Fanahy izay nomeny mampiray\n          Fanahy fitiavana koa ny Ray\n          Nahoana lahy raha mifankatia\n          Mifankatiava hoy ny Tompo\n          F’izany no hamantaran’\n          Ny olona rehetra \n          Fa mpianatro ianareo\n\n2.  Tsy iray finoana f’iray ao aminao\n     Tsy iray fiaviana f’iray an-dapanao\n     Tsy iray fiteny fa samy henoinao\n     Tsy iray fihodirana fa samy zanakao</h4></pre>"
          },
          {
            "num" : "226",
            "titre": "Manana latabatra",
            "hira": "<pre><h4 class='padding'>\n1.  Manana latabatra\n     Voaomana Jeso\n     Hamahanany ireo olo-masina\n     Ny voafidy no antsoiny \n     Hiaraka mihinana\n     Ny fanahy izay reraka dia afa-po\n\n          O ! avia ka mihinàna\n          Fa miandry anao Jeso\n          Ny latabatry ny Tompo\n          Azonao ihinanana\n          ‘Lay namoky marobe\n          Nanova rano ho divay\n          Miantso ny noana \n          Hiara-komana Aminy\n\n2.  Ho avy faingana handray\n     Ny fofombadiny Jeso\n     Ho eo anilany mandrakizay doria\n     Ireo maro any an-danitra \n     Ho avy hanatrika\n     Ny fampakarambadin’i \n     Kristy Jeso.\n\n3.  Fivorian-dehibe\n     Sy feno voninahitra\n     Ho fotsy manjopiaka ireo masina\n     Hiara-paly sy hihoby\n     Sy hiaraka manjaka\n     Amin’i Kristy Tompo \n     Mandrakizay</h4></pre>"
          },
          {
            "num" : "227",
            "titre": "Jeso Mpamonjiko",
            "hira": "<pre><h4 class='padding'>\n1.  Jeso Mpamonjiko\n     Avy Aminao ry Ray.\n\n2.  Baiboly teny soa\n     Avy Aminao ry Ray.\n\n3.  Fifankatiavana\n     Avy Aminao ry Ray.\n\n4.  Fifaliana \n     Avy Aminao ry Ray.\n\n5.  Fahasambarana\n     Avy Aminao ry Ray.</h4></pre>"
          },
          {
            "num" : "228",
            "titre": "Nous sommes frères et sœurs",
            "hira": "<pre><h4 class='padding'>\nNous sommes frères et sœurs\nNous sommes frères et sœurs\nEt nous aimons servir le Seigneur\n(Oui le Seigneur)\nEt nous demeurons ensemble\nDans la famille du Seigneur.</h4></pre>"
          },
          {
            "num" : "229",
            "titre": "Tous unis dans l’Eprit",
            "hira": "<pre><h4 class='padding'>\n1.  Tous unis dans l’Eprit\n     Tous unis en Jésus\n     Nous prions que bientôt\n     Ce qui divise ne soit plus.\n\n          Et le monde saura\n          Que nous sommes chrétiens\n          Par l’amour dont\n          Nos actes sont empreints\n\n2.  Nous marchons côte à côte\n     Et la main dans la main \n     A la table du Roi\n     Nous partageons le même pain.\n\n3.  D’un seul cœur nous voulons\n     Travailler pour Jésus \n     Proclamer à tout homme\n     Qu’il nous offre le salut\n\n4.  Gloire au Dieu Créateur\n     De la terre et des cieux\n     Gloire au Fils éternel\n     Rédempteur glorieux\n     Gloire, gloire à l’Esprit\n     Qui verse en nous\n     L’amour de Dieu</h4></pre>",
            "mark": "© COPYRIGHT 1966, F.E.L PUBLICATIONS, LTD LOS ANGELES USA,AVEC AUTORISATION.PAROLES FRANÇAISES : © COPYRIGHTLIGUE POUR LA LECTURE DE LA BIBLE,1010 LAUSANNE, SUISSE, AVEC AUTORISATION)."
          },
          {
            "num" : "230",
            "titre": "Seigneur, nous arrivons",
            "hira": "<pre><h4 class='padding'>\nSeigneur, nous arrivons \nDes quatres coins de l’horizon\nNous voilà chez Toi (chez Toi)\nSeigneur, nous arrivon \nDes quatres coins de l’horizon\nDans ta maison\n\n1.  Nous avons marché \n     Sur les routes humaines, \n     Nous avons porté \n     Le fardeau des jours ;\n     Nous avons souffer\n     La fatigue et la peine, \n     Nous avons offert\n     Simplement notre amour\n\n2.  Nous avons marché\n     Au milieu de nos frères\n     Nous avons porté\n     Le poids de nos jours ;\n     Nous avons souffert\n     En voyant leur colère, \n     Nous avons offert\n     Simplement ton amour.\n\n3.  Nous voici enfi\n     Tous autour de la table, \n     Rassemblés ici\n     Pour parler de Toi\n     Tu nous a nourris, \n     D’un amour formidable ;\n     Et nous Te chantons\n     Simplement notre joie.\n\n          Seigneur, nous arrivons\n          Des quatres coins de l’horizon, \n          Nous voilà chez Toi\n          Seigneur, nous Te chantons\n          Nous Te louons, \n          Comme il fait bon\n          Dans Ta maison</h4></pre>"
          },
          {
            "num" : "231",
            "titre": "Mais oui, le Seigneur est bon",
            "hira": "<pre><h4 class='padding'>\nMais oui, le Seigneur est bon (2)\nIl a fait pour nous des merveilles\nAvy Aminao ry Ray.\nJe veux Lui chanter mon amour.\n\n1.  Nous marchons ensemble (2)\n     Vers ce beau pays, là-haut !\n     Nous marchons ensemble (2)\n     Vers ce paradis, là-haut.\n\n2.  Oui, Jésus nous aime (2)\n     Dans ce beau pays, là-haut !\n     Oui, Jésus nous aime (2)\n     Dans ce paradis, là-haut.\n\n3.  Quelqu’un nous attend (2)\n     Dans ce beau pays, là-haut !\n     Quelqu’un nous attend (2)\n     Dans ce paradis, là-haut.</h4></pre>"
          },
          {
            "num" : "232",
            "titre": "Enfants de la même cité",
            "hira": "<pre><h4 class='padding'>\n1.  Enfants de la même cité\n     Eglise du Seigneur\n     Enfants de la même cité\n     Nous n’avons qu’un seul cœur.\n\n          Restons toujours unis \n          Mes frères\n          Jesus est parmi nous\n          Comme il nous a promis\n          Mes frères\n          Si nous nous aimons tous.\n\n2.  C’est l’ordre de notre Sauveur\n     Qui nous a tant aimés\n     C’est l’ordre de notre Sauveur\n     Rester dans l’unité.\n\n3.  Si nos chemins sont différents\n     Ils n’ont tous qu’un seul but\n     Si nos chemins sont différents\n     Ils vont tous à Jésus\n\n4.  Que Dieu qui veut notre bonheur \n     Nous garde en son amour\n     Que Dieu qui veut notre bonheur\n     Nous réunisse un jour.</h4></pre>"
          },
          {
            "num" : "233",
            "titre": "We are one in the Spirit",
            "hira": "<pre><h4 class='padding'>\n1.  We are one in the Spirit\n     We are one in the Lord \n     And we pray that all unity\n     May one day be restored.\n\n          And they’ll know\n          We are christians\n          By our love, by our love\n\n          Yes, they ‘ll know…\n\n2.  We will walk with each other\n     We will walk hand in hand\n     And together we’ll spread the news\n     That God is our Lord\n\n3.  We will work with each other\n     We will work side by side\n     Ans we’ll guard each man’s\n     Dignity\n     And save each man’s pride.\n\n4.  All praise to the Father\n     From whom all things come, \n     And all praise to Christ Jesus\n     His only Son, \n     And all praise to the Spirit\n     Who makes us one.</h4></pre>"
          },
          {
            "num" : "234",
            "titre": "Tompo tokana no ahy ety",
            "hira": "<pre><h4 class='padding'>\nTompo tokana no ahy ety \nHatrety ka ho doria \nTsy mba misy roa na telo na hafa\nFa tokana natao ho ahy\nJesosy no ahy, Izy no ahy \nToky sy aro ho ahy</h4></pre>"
          },
          {
            "num" : "235",
            "titre": "‘Zaho niara-voahombo",
            "hira": "<pre><h4 class='padding'>\n1.  ‘Zaho niara-voahombo\n     Taminao ry Kristy ô\n     Aina vao no he mitombo\n     Ao anatiko izao \n     Efa levona sy maty\n     ‘Zany otako taloha\n     Indro velona ao anaty \n     Ianao Mpamonjy soa. \n\n2.  ‘Zaho mino sy matoky\n     Fa ny dianao tety \n     Misy vonjy mahatoky\n     ‘Zay mitondra ahy ho ary\n     ‘Zaho lohan’ny mpanota \n     He mba voavonjy koa\n     Voasasa tamin’ny ota \n     Voadionao tokoa.\n\n3.  ‘Zaho re miombona aina\n     Aminao ry foto-tsoa\n     ‘Reo adidy ho efaina\n     Tontosaiko ka mamoa\n     Fa ho sampana malazo\n     Raha misaraka Aminao\n     Tsy mifoka ranon-kazo \n     Ka ho maina sy ho lao. \n\n4.  Zaho Jeso manatena\n     Fa ho avy Ianao\n     Haka ahy mba ho tena\n     Sambatra ao an-tranonao\n     ‘Zay hitoerako hoy Ianao\n     Ho ao koa ianareo\n     ‘Zaho Jeso miandry Anao\n     F’efa vonon-drahateo.</h4></pre>"
          },
          {
            "num" : "236",
            "titre": "Tsy haiko mihitsy ny hanambara",
            "hira": "<pre><h4 class='padding'>\n1.  Tsy haiko mihitsy ny hanambara\n     Nahoana moa Ianao Jeso \n     No dia nandao ny lapa tsara\n     Ka niara-monina amiko ?\n\n          Nefa zavatra iray loha\n          No hany haiko ka ho dradraiko\n          Nomenao ho ahy ry tompo soa\n          Ny fiainam-baovao.\n\n2.  Tsy haiko mihitsy ny hitanisa\n     Ny heloka efa vitako\n     Lavitra ahy ny paradisa\n     Nandetika ny ditrako.\n\n3.  Tsy haiko mihitsy ny hisaina\n     Ny halalin’ny fitiavanao\n     Ry Tompo mendrika ho deraina\n     Hatraiza re ny herinao ?</h4></pre>"
          },
          {
            "num" : "237",
            "titre": "Jeso tia ny fanahiko",
            "hira": "<pre><h4 class='padding'>\n1.  Jeso tia ny fanahiko\n     Tompo soa mpamela heloka\n     Sy mpanolokolo fo tokoa\n     Zavatra rehetra amiko.\n\n          Tretrika aho manana Anao\n          Soa mahafa-po Ianao\n          Toky, hery sy sakaiza koa\n          Zavatra rehetra amiko.\n\n2.  Fifalian’ny nofo foana moa\n     Na izay filan’ny maso koa\n     Na ny rehak’izao tany izao\n     Tsy hamoizako anao Jeso.\n\n3.  Eo an-tongotrao voahombo koa\n     No andohalehako tokoa\n     Mba hanaja sy handre ilay feo\n     Bitsibitsi-pitiavana.</h4></pre>"
          },
          {
            "num" : "238",
            "titre": "‘Lay hafaliana anatiko ao",
            "hira": "<pre><h4 class='padding'>\n‘Lay hafaliana anatiko ao\nTsy mba ho tsapanao\nRaha tsy efa noraisinao\n‘Lay namonjy anao\nF’izay nandray ny vonjiny\nDia velon-karavoana ery\nNy hafaliany, hafaliana\nHaharitra ho doria.\n\n1.  Na dia homena ahy aza\n     Izao tontolo izao\n     ‘Reo rendrarendra izay mora\n     Izay mora mahababo anao\n     Tsy hatakaloko ny ahy\n     Izay tsy mba ivelany\n     Ny hafaliako, hafaliana\n     Haharitra ho doria.\n\n2.  Mbola ho tsapanao ny hoe :\n     « Voavela heloka  » \n     Mbola hiainanao izany hoe :\n     «  Fiainam-baovao  » \n     Ny hany hafarako anao\n     Ekeo ‘lay avotra ho anao\n     Ny hafalianao. hafaliana\n     Haharitra ho doria</h4></pre>"
          },
          {
            "num" : "239",
            "titre": "‘Lay hafaliana ao anaty",
            "hira": "<pre><h4 class='padding'>\n1.  ‘Lay hafaliana ao anaty\n     Iainanay izao\n     Dia vokatry ny famonjena\n     Efa vitanao\n     Nitafy nofo Ianao, \n     Dia nolalovanao\n     ‘Lay hazofijaliana iray\n     Mba hisandratanay.\n\n2.  Tsy tonga hamonjy \n     Ireo olo-marina Ianao\n     Fa ny mpanota izay\n     Maniry ny hanjakanao\n     Nitsangana Ianao, \n     Nandresy fasana \n     Mba hanamarina izay\n     Nandray ny vonjinao.\n\n3.  Tanteraka ny famonjena\n     Izay natolotrao\n     Ka zovy moa izay nandray \n     No tsy hisaotra Anao\n     Ny hafaliany tsy mba ivelany\n     Satria iainany ao anaty\n     Haharitra ho doria.</h4></pre>"
          },
          {
            "num" : "240",
            "titre": "Tsy misy soa ho ahy afa-tsy Jeso",
            "hira": "<pre><h4 class='padding'>\n1.  Tsy misy soa ho ahy afa-tsy Jeso\n     Nafoiko ny haren’ny tany\n     Manan-karena aho nahita Azy\n     Faly ao Aminy re aho.\n\n          Faly aho miaraka amin’ i\n          Jesosy tokana ihany\n          Na dia mahantra aza \n          Mbola manao hoe :\n          Faly ao Aminy re aho.\n\n2.  Fony tsy nisy avotra fisoloana\n     Sy ho fampanekena ny Ray\n     Dia nanolon-tena hanavotra ahy\n     Tamin’ny rany Jesosy.\n\n3.  Raha meloka \n     Ao amin’ny famoizam-po \n     Tsy misy ny fahazavana\n     Jesosy kosa nanao ahy\n     Ho mpandova\n     Ny lapan’ ny voninahitra.</h4></pre>"
          },
          {
            "num" : "241",
            "titre": "He, tiako hambara",
            "hira": "<pre><h4 class='padding'>\n1.  He, tiako hambara\n     Izao teny mamiko\n     Ny amin’i Jesosy\n     Ilay Mpamonjiko, \n     He mamiko indridra\n     Ny fitiavany, \n     Ka tiako hambara\n     Ny voninahiny.\n\n          He, tiako hambara\n          Jesosy tompo tsara\n          He, tiako hambara\n          Ny fitiavany.\n\n2.  He, mamiko indrindra\n     Jesosy be fitia\n     Ka tiako hambara \n     Ny soa vitany ;\n     Tsy takatry ny saina\n     Ny fitiavany\n     Nomeny mba handresy\n     Ny fahafatesana.\n\n3.  He, tiako hambara\n     Ny fitiavany \n     Ho an’izay mahantra\n     Sy ao ivelany\n     He, tiako hambara\n     Ho an’ izay mania\n     Ny lalam-pamonjena :\n     Jesosy be fitia.\n\n4.  He, mamiko ny teny\n     Ka tiako ery\n     Ny hanambara azy\n     Ho ren’ny olony, \n     He, tiako hambara \n     Ny Tompo be fitia\n     Ho ren’izay maniry \n     Ny fahamarinany.</h4></pre>"
          },
          {
            "num" : "242",
            "titre": "Raha tsinjonao ny tao anatiko tao",
            "hira": "<pre><h4 class='padding'>\nRaha tsinjonao ny tao anatiko tao\n‘Lay tena fahambanian’ny toetrako\nAngamba hanotany tena ianao hoe :\nNahoana no tia ahy Jeso ? \n\nKanefa dia zavatra iray loha\nNo hany haiko ka indro ambarako\nNomen’ny Tompo ahy hatramin’izao \n‘Lay tena fiainam-baovao.</h4></pre>"
          },
          {
            "num" : "243",
            "titre": "Fony tsy nanam-pinoana taloha",
            "hira": "<pre><h4 class='padding'>\n1.  Fony tsy nanam-pinoana taloha\n     Tsy nanan-kantenaina koa\n     Nahilan-drivotra tetsy sy teroa\n     Tsy nisy ny nahafa-po\n     Soa ihany fa teo ny Mpamonjy\n     Nomeny ny tenany\n     Ny fiainako tojo ny vonjy \n     Sy fiorenany.\n\n          Iray no natao fanorenana\n          Dia Jeso Kristy vato velona\n          Ka tsy misy izay tahaka Azy\n          N’inona kanto ety.\n\n2.  Ankehitriny raha misy manjo\n     Jeso tsy mba mandao ahy \n     Ny sitrapony no tari-dalako\n     Anio sy ho mandrakizay\n     Finaritra ery ny tena \n     Mitoetra eo an-tanany \n     Na ny asa atao na ny harena\n     Dia ho fanany</h4></pre>"
          },
          {
            "num" : "244",
            "titre": "Tsy hangina ny foko",
            "hira": "<pre><h4 class='padding'>\nTsy hangina ny foko\nHe azoko toka \nNy famonjena ahy\nRavoravo ery ny fanahy\nHe olona afaka aho e !\nTsy hangina ny foko \nHe azoko tokoa\nNy famonjena ahy\nRavoravo ery ny fanahy\nAfaka aho.\n\nTsy hohadinoiko re\nRaha mbola miaina koa\n‘Lay fitiavan-dehibe\n‘Zay nanavotana ahy tokoa\nTanatin’ny haizin-kitroky\nNy famoizam-po\nHe afaka, afaka aho\nHe azoko tokoa \nNy famonjena ahy\nNy Tompo nanavotra ahy\nHe afaka aho !\n\nTsy ho hadinoiko re \nRaha mbola miaina koa\n‘Lay fitiavan-dehibe\nNanavotana ahy tokoa !\nAvotra no azoko\nVoavaha ny fatotro\nHo tanako tokoa\nIlay famonjena ahy \nEfa maty aho\nVoagejan’ny otako\nKanefa tsapako\nFa voavonjy aho\nNoho ‘lay Mpamonjy\nKa afaka aho !</h4></pre>"
          },
          {
            "num" : "245",
            "titre": "Jesosy ro Hazomanga soa",
            "hira": "<pre><h4 class='padding'>\n1.  Jesosy ro Hazomanga soa\n     Fitahia ndrake \n     Firengeam-be tokoa\n     Ny mino Azy olo afaka havoa\n     Ny devoly lavitsa aze moa.\n\n2.  Ndra inoino ny soa etoy\n     Jeso tsy atakalo \n     Ndrake tsy azo afoy.\n     Tsy ampirafese amin-drate fiatao \n     Ny finoan’Azy anate ao.\n\n3.  Baiboly ro haveloma tokoa\n     Tano ka vakio \n     La ka mihemotse koa ;\n     Taomy ny longo \n     mba ho afa-kavoa\n     Fa Jeso ro hazomanga soa.\n\n          Ahiko Jeso bak’etoy \n          Ahiko Jeso trak’eroy\n          La vareake n’aiko izao \n          Manana an’i Jeso anateko ao.</h4></pre>"
          },
          {
            "num" : "246",
            "titre": "Velognay vareake tratr’etoy",
            "hira": "<pre><h4 class='padding'>\nVelognay vareake tratr’etoy \nAndron’i Jesosy Tompo soa\nLa misinisiny n’aiko ‘zao \nNdr’olo maro ro nandrara anay\nTsy engako Jeso Tompo soa.\n\n          Ndra ho mate\n          Ndra hovelo\n\nJeso Hazomangako \n‘Reo pasitora tsy miroroMampadroso \nantsika Masikoro\nOlo iaby toy le fa mandroso\nMimenara antsika longoko</h4></pre>"
          },
          {
            "num" : "247",
            "titre": "’Reo fitiavana mamy indrindra",
            "hira": "<pre><h4 class='padding'>\n1.  ’Reo fitiavana mamy indrindra\n     Dia ny fitiavanao Jeso \n     Tsy misy atakaloko Anao \n     ‘Reo harena ‘zay mety lo.\n\n          Fitiavana feno\n          Natolotrao ho ahy Jeso \n          Sarobidy be no\n          Tena tsara tokoa.\n\n2.  Tena maro ‘reo zavatra soa\n     Manintona ny masonao\n     Toy ny volamena vatosoa\n     Tsy mitondra famonjena\n\n3.  Torio ny fitiavan’i Jeso\n     Ho amin’izao tontolo izao\n     Ho famonjena ny fanahin’\n     Ireo izay tsy mino koa</h4></pre>"
          },
          {
            "num" : "248",
            "titre": "Sambatra raha samy sambatra",
            "hira": "<pre><h4 class='padding'>\nSambatra raha samy sambatra\nNy olona manam-piadanana\nFiadanana avy amin’i Jeso\nDia Jeso Tompon’ny maro\nSambatra raha samy sambatra\nNy olona manam-piadanana\nFiadanana avy amin’i Jeso\nFiainana mandrakizay.\n\n1.  Heverin’ny olona maro\n     Fa ny vola no tena fiainana\n     Ny harena no tena anankinany\n     Ny hoaviny iray manontolo\n     Kanefa mandalo ihany\n     Fa tsy mba maharitra akory\n     Tsy tahaka ny fanomezan’i Jeso.\n\n2.  Nivezivezy foana\n     Nikaroka ny fifaliana\n     Nandany taona maro \n     Nikatsaka ny fiadanana\n     Kanefa dia tsy mba nahita\n     ‘Zay tena mahafapo\n     Mahakivy tokoa \n     Fa tsy toy ny an’Jeso.</h4></pre>"
          },
          {
            "num" : "249",
            "titre": "Fanavaozana izay mahagaga tokoa",
            "hira": "<pre><h4 class='padding'>\n1.  Fanavaozana izay mahagaga tokoa\n     Nomen’i Jesosy ahy re !\n     Fahazavan’ny fanahy\n     Izay mahafapo\n     Nomen’i Jeso ahy re !\n\n          Hatramin’izao dia endrey, endrey.\n          Ny fitempon’ny foko \n          Izay ravo tokoa\n          Onenan’ny Tompo Jeso.\n\n2.  Ny fiainako be siasia taloha\n     Voaova mihitsy izao\n     Eny ny fahotako izay nahavoa\n     Voasasany koa izao.\n     Hatramin’izao, sns.\n\n3.  Ny finoako\n     Ny fanantenako dia be\n     Ny tokiko fatratra koa\n     Ny fisalasalana dia levona re\n     Ny saiko mandroso ho soa.\n     Hatramin’izao, sns.\n\n4.  Tonga mamirapiratra fatratra ery\n     Ny aloky ny faty re !\n     Ka dia tsinjoko ilay vavahady ary\n     Mankao antanan-dehibe.\n     Hatramin’izao, sns.\n\n5.  Tsy miato mizotra mankany tokoa\n    Ny diako hatramin’izao\n    Hovantaniko any ilay Tompo soa\n    Jesosy malala no ao.\n    Hatramin’izao, sns.</h4></pre>"
          },
          {
            "num" : "250",
            "titre": "Rehefa napetrako teo",
            "hira": "<pre><h4 class='padding'>\n1.  Rehefa napetrako teo\n     Am-pelatanan’i Jeso\n     Ny fiainako rehetra\n     Indro fa tsapako\n     Hay tsisy fotony\n     Ny fiainako taloha\n     Ankehitriny aho sambatra tokoa.\n\n          Lazaiko anao anio ry namako\n          Ny fifalian’ny tany\n          Tsy mba mahasoa\n          Fa fifaliana tsy mba maharitra\n          Ao amin’i Jeso tena mahasambatra.\n\n2.  Maro mpitady ny fahasambarana\n     Nefa tsy mba mijery\n     Ilay hany lalana\n     Fa ny nizorany, lala-malalaka\n     Mamirapiratra nefa sandoka.\n\n3.  O ! ry mpitady ny fahasambarana\n     Jeso miantso anao, Izy no lalana\n     Fahamarinana tena azo antoka\n     Izy no hanome ny fahasambarana.</h4></pre>"
          },
          {
            "num" : "251",
            "titre": "Mahagaga loatra lahy",
            "hira": "<pre><h4 class='padding'>\n1.  Mahagaga loatra lahy\n     Ny fitiavan’i Jeso\n     Fa izaho efa very\n     Nefa notadiaviny ;\n     Eny tsapako tokoa\n     Fa ny rany sarobidy\n     No nalatsany mba\n     Hanavaozany ahy indray\n\n     Faly aho ankehitriny\n     Fa navotan’i Jeso\n     Ka ny fiainako taloha, \n     Nohavaoziny indray ;\n     Ary ireo sorisory\n     Dia novainy ho fifaliana\n     Tsy ananan’izay\n     Tsy mba manana Anao.\n\n     He sambatra aho, \n     Sambatra aho Jeso\n     Fa manana Anao Mpanome \n     Fiadanam-po ao anatiko\n     Misaotra Anao Jeso o\n     ‘Ty voavonjinao\n     Fa nahazo ilay fiainam-baovao.\n\n2.  Vonona aho ankehitriny\n     Hanambara ny asanao\n     Ka ny heriko rehetra\n     No hatokako ho Anao, \n     Koa na mafy aza re\n     Ny ady izay atrehiko eto\n     Miandrandra Anao \n     ‘Zay tsy mahasaraka.\n\n     Jeso tantanonao, \n     O mba mitahia\n     Ny mpanomponao kely hery\n     Sy mania, mila ny herinao\n     Atolotro Anao ny fiainako\n     Tompo ô ! ho Anao \n     Ka anjakao</h4></pre>"
          },
          {
            "num" : "252",
            "titre": "Izao tontolo izao",
            "hira": "<pre><h4 class='padding'>\n1.  Izao tontolo izao\n     Mifamahofaho ato an-tsaina\n     Mitamberimberina ao\n     Ireo natao sy nolalaina\n     Nisy fifaliana ihany\n     Saingy vetivety foana\n     Nisy fahendrena ihany\n     Saingy ireo dia zava-poana\n\n          Ts’isy nenina \n          Ny nandraisana an’i Jeso\n          Ts’isy nenina\n          F’izay miala ihany \n          No hanenina\n\n2.  Ny mpanota notadiaviny\n     Ny tsy tia notiaviny\n     Dia Jesosy be fitia\n     ‘Zay nivesatra ny ota\n     Tao Gologota\n     Tantara diso fantatra loatra\n     O ! tsy tana anefa nitroatra\n     Ilay fo nahatsapa\n     Fa voafatotra\n     Ka nandray ny Mpamonjy\n     ‘Zay Tompo mahafinaritra\n\n3.  Na dia mafy aza re\n     Ny manjo raha sendra ady\n     Ny famonjena lehibe\n     Moa ilaozanao sahady \n     Koa aoka ho feno fiderana\n     F’efa afaka, \n     Voavotra\n     Tao anaty fahotana\n     Mba hiadana finaritra</h4></pre>"
          },
          {
            "num" : "253",
            "titre": "Ity hita maso ity dia mihelina",
            "hira": "<pre><h4 class='padding'>\nIty hita maso ity dia mihelina \nIhany sy mandalo\nToerana fivahiniana ny eto\nLavitra ny hasambarana lava ny eto\nAny an-danitra ihany\nNo misy toerana\nLavitr’izay mampisento\nFeno hafaliana sy feno haravoana\nNy mponina any\nAny an-danitra ihany\nNo misy toerana\nLavitr’izay mampisento.</h4></pre>"
          },
          {
            "num" : "254",
            "titre": "Oh ! Jésus m’aime",
            "hira": "<pre><h4 class='padding'>\nOh ! Jésus m’aime\nOui Jésus t’aime\nEcoute bien cette chanson\nElle est pour toi et sans façon\nElle te dit qu’il t’aime\nOui Jésus t’aime\nOh Jésus m’aime\nOui Jésus t’aime.\n1.  Un jour fatigué du chemin\n     Mourant de froid, \n     Mourant de faim\n     Je m’en serais bien retourné\n     Mais il me fallait avancer\n     Même si je ne savais pas\n     Pourquoi je me trouvais là\n\n     Et puis j’ai senti dans ma main\n     Une chaleur d’une autre main\n     Un homme que je ne connais pas\n     Mais dans ses yeux \n     Et dans sa voix\n     Il m’a souri, il m’a parlé\n     Je me suis senti rechauffé.\n\n2.  Je ne savais ce qui m’arrivait\n     Tout sur mon chemin s’éclairait\n     J’ai vu mon nouveau compagnon\n     Prendre d’une main mon baluchon\n     L’autre main c’était pour m’aider\n     Car je ne pouvais plus marcher\n     Jamais je ne pourrais oublier\n     Le jour où je l’ai rencontré\n     Alors que je n’espérais plus\n     Il m’a dit tout n’est pas perdu\n     Regarde, le ciel a changé\n     Le soleil commence à briller.</h4></pre>"
          },
          {
            "num" : "255",
            "titre": "Le Seigneur m’aime",
            "hira": "<pre><h4 class='padding'>\n1.  Le Seigneur m’aime, \n     Bonheur suprême !\n     Le Seigneur m’aime, \n     Il est amour.\n\n          Je redirai toujours :\n          Le Seigneur m’aime (bis)\n          Il est amour.\n\n2.  Dans la souffrance\n     Sans espérance\n     Dans la souffrance\n     Je gémissais.\n\n3.  Portant ma peine, \n     Ma lourde chaîne, \n     Portant ma peine, \n     J’étais perdu.\n\n4.  Dieu dans sa grâce\n     Prit à ma place\n     Dieu dans grâce\n     Prit son cher fils.\n\n5.  En sacrifice\n     A la justice, \n     En sacrifice, \n     Il vint s’offrir.\n\n6.  Le poids immense\n     De mon offense\n     Le poids immense\n     Tomba sur lui.\n\n7.  Sur le Calvaire\n     Loin de son Père\n     Sur le Calvaire\n     Il vint mourir.\n\n8.  Il purifie\n     Toute ma vie, \n     Il purifie, \n     Avec son sang.\n\n9.  A toi la gloire\n     Et la victoire, \n     A toi la gloire, \n     Agneau de Dieu.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "256",
            "titre": "Je chante pour Jésus",
            "hira": "<pre><h4 class='padding'>\n1.  Je chante pour Jésus\n     Il est mon Sauveur\n     Célébrant son grand amour\n     Car Il est l’auteur\n     Du salut que j’ai trouvé\n     Sauvé pour l’éternité\n     Je chante pour Jésus\n     Il est mon Sauveur.\n\n2.  Je chante mais je sais\n     Que dans ce monde perdu\n     L’ennemi lutte contre moi\n     Mais il est vaincu\n     Je vais chanter en luttant\n     Car mon cœur est plein de chants\n     Je chante pour Jésus\n     Il est mon Sauveur.\n\n3.  Et nous voulons chanter pour Lui\n     Pour notre Sauveur\n     Lui qui nous a rachetés\n     De notre malheur\n     O ! vous qui cherchez partout\n     La paix, la joie et l’amour\n     Venez à Lui sans plus tarder, \n     A Lui pour toujours</h4></pre>"
          },
          {
            "num" : "257",
            "titre": "Je vivais dans les ténèbres",
            "hira": "<pre><h4 class='padding'>\nJe vivais dans les ténèbres, \nMa vie était sans but\nJe cherchais la vérité\nDans ce monde où tout ment. (2)\n\n1.  Je ne savais pas\n     Que Jésus Christ\n     Etait mort pour moi\n     Je ne savais pas\n     Que le Fils de Dieu\n     A porté mon péché\n\n2.  Quand j’ai decouvert\n     Que sur la croix\n     Il souffrit pour moi, \n     Je lui a dit :\n     «  Viens, oui sois mon roi\n     Et pardonne-moi  »\n\n3.  Je ne vis plus\n     Dans les ténèbres, \n     Jésus est ma lumière.\n     Il éclaire mon chemin\n     En lui j’ai trouvé la vérité.\n\n4.  O ! mon ami, toi\n     Qui cherches ta voie\n     Et ne la trouves pas\n     Arrête-toi un instant ici\n     Et écoute sa voix.\n\n5.  Il nous dit : «  Venez à moi  »\n     Vous qui êtes fatigués, \n     Et je vous soulagerai\n     Si vous m’ouvrez la porte\n     De votre cœur.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL- CHŒURS JOYEUX)"
          },
          {
            "num" : "258",
            "titre": "Je chanterai mon Bien-aimé",
            "hira": "<pre><h4 class='padding'>\n1.  Je chanterai mon Bien-aimé\n     Sur sa venue\n     Je chanterai mon Bien-aimé\n     Qui est Jésus\n     Pour l’amour et la vie intense\n     Qu’Il m’a donnés\n     Je chanterai Jésus mon Dieu, \n     Mon Bien-aimé.\n\n2.  Je chanterai mon Bien-aimé\n     Sur ses bienfaits\n     Oui, je louerai la source de joie\n     Et de paix\n     Qui a créé le ciel, la terre\n     Et le soleil\n     Merci mon Dieu, infiniment\n     Pour ces merveilles.\n\n3.  Je clamerai ta vérité\n     Dans le monde entier\n     J’engagerai ma foi, ta croix\n     Est mon épée\n     Oui, prends ma vie, mon cœur, \n     Mon esprit et ma voix\n     Car Toi, Jésus, Ta vie Tu l’as \n     Donnée pour moi.\n\n4.  Tu viens à nous Seigneur Jésus\n     Tu viens enfin\n     Tu viens à nous Seigneur Jésus\n     En souverain\n     Toute la terre s’inclinera\n     A tes pieds\n     Car Tu es la Vie, le Chemin\n     La Verité\n\n     La Vie, le Chemin, la Vérité.</h4></pre>"
          },
          {
            "num" : "259",
            "titre": "Nous avons découvert",
            "hira": "<pre><h4 class='padding'>\nNous avons découvert\nLa joie de vivre et de chanter.\nNous avons trouvé le bonheur, \nLe secret merveilleux\nQui permet de tout espérer ;\nNous avons rencontré le Seigneur !\n\n1.  Tout au long du chemin, \n     Chaque jour, Il nous tend la main, \n     Préparant tous nos lendemains.\n\n2.  Il y a bien nos défauts, \n     Et nos rechutes et nos faux pas\n     Mais tout cela n’empêche pas que :\n\n3.  Et puis si nous avons\n     Quelques soucis, quelques ennuis\n     Tous ces tracas\n     N’empêchent pas que :\n\n4.  C’est pourquoi nous allons\n     Proclamer ce que nous croyons\n     En espérant que vous aussi.\n\n     Vous avez découvert\n     La joie de vivre et de chanter, \n     Vous avez trouvé le bonheur, \n     Le secret merveilleux\n     Qui permet de tout espérer :\n     Vous avez rencontré le Seigneur</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "260",
            "titre": "Oui, c’est vrai, j’ai trouvé",
            "hira": "<pre><h4 class='padding'>\n1.  Oui, c’est vrai, j’ai trouvé\n     ce que je n’espérais plus\n     J’ai trouvé le bonheur\n     La joie, la plus absolue.\n\n          Quand j’ai rencontré Jésus-christ\n          Tout a changé\n          Le jour a remplacé la nuit\n          Et l’obscurité\n\n2.  Oui c’et Lui qui a pris\n     Mes problèmes et mes soucis\n     Maintenant et pour toujours\n     J’ai confiance en son amour\n\n3.  Nous voulons partager\n     Avec vous cette expériencee\n     Alors vous deviendrez\n     Joyeux et pleins d’assurance.\n     Quand vous aurez trouvé Jésus\n     Tout sera transformé\n     Vous verrez, vous serez sûrs\n     Qu’Il est la Vérité.\n          La, la, la, la, …</h4></pre>"
          },
          {
            "num" : "261",
            "titre": "Quel jour de gloire ",
            "hira": "<pre><h4 class='padding'>\nQuel jour de gloire \nQuand Jésus m’a sauvé \n\n1.  Des chaînes du péché\n     Jésus m’a libéré \n     Quel jour de gloire\n     Quand Jésus m’a sauvé.\n\n2.  Aux choses du passé\n     Je ne veux plus toucher\n     Quel jour de gloire\n     Quand Jésus m’a sauvé\n\n3.  Ce n’est plus moi qui vis\n     C’est Christ qui vit en moi\n     Quel jour de gloire\n     Quand Jésus reviendra. \n\nQuel jour de gloire\nQuand Jésus reviendra.</h4></pre>"
          },
          {
            "num" : "262",
            "titre": "C’est vrai tel que suis",
            "hira": "<pre><h4 class='padding'>\nC’est vrai tel que suis\nDieu m’aime\nC’est vrai Il est venu lui-même\nFrapper à ma porte\nIl est rentré chez moi</h4></pre>"
          },
          {
            "num" : "263",
            "titre": "J’étais pauvre",
            "hira": "<pre><h4 class='padding'>\nJ’étais pauvre\nMais Il m’a enrichi\nEtant riche \nIl s’est fait\nPauvre pour moi\nMon Sauveur bien-aimé\nExpia mes péchés\nJ’étais pauvre\nMais Il m’a enrichi.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
          },
          {
            "num" : "264",
            "titre": "Je suis heureux",
            "hira": "<pre><h4 class='padding'>\nJe suis heureux, \nCar Jésus m’a sauvé\nDans son amour, \nIl m’a tout pardonné\nVoilà pourquoi \nJe me mets à chanter\nJe suis heureux \nCar Jésus m’a sauvé.</h4></pre>"
          },
          {
            "num" : "265",
            "titre": "Je ne sais pourquoi",
            "hira": "<pre><h4 class='padding'>\n1.  Je ne sais pourquoi\n     Dans sa grâce\n     Jésus m’a tant aimé, \n     Pourquoi par son sang\n     Il efface ma dette, mon péché.\n\n          Mais je sais qu’en\n          Lui j’ai la vie, \n          Il m’a sauvé, dans son amour ;\n          Et gardé par sa main meurtrue, \n          J’attends l’heure de son retour.\n\n2.  Je ne sais comment la lumière\n     Eclaire tout mon cœur, \n     Comment je compris ma misère\n     Et reçus mon Sauveur !\n\n3.  Je ne sais quelle est la mesuree\n     De joie et de douleur\n     Que pour moi faible créature\n     Réserve mon Sauveur.\n\n4.  Je ne sais quand de la victoire\n     L’heure enfin sonnera\n     Quand l’Agneau, l’Epoux, \n     Dans sa gloire\n     Avec Lui me prendra.</h4></pre>",
            "mark": "(TIRÉ DES CHANTS DE VICTOIRES)"
          },
          {
            "num" : "266",
            "titre": "De Bethléhem à la croix",
            "hira": "<pre><h4 class='padding'>\nDe Bethléhem à la croix\nDe la crèche à Golgotha\nDe ma misère à ma joie\nIl n’y a que Jésus.\n\nO ! Jésus ton amour \nOui, ton amour pour moi\nEst si grand qu’il\nRemplit tout mon cœur\nO ! Jésus ton amour\nOui ton amour pour moi\nEst si grand qu’il\nMe remplit de bonheur\n\nCet amour qu’Il m’a donné\nO ! je voudrais le partager\nNe veux-tu pas l’accepter\nEt avec moi chanter.\n\nO ! Jésus ton amour…</h4></pre>"
          },
           {
           "num" : "267",
           "titre": "Un vêtement blanc",
           "hira": "<pre><h4 class='padding'>\n1.  Un vêtement blanc, \n     Une harpe d’or, \n     Un beau palais, une couronne, \n     La sainte joie, le vrai trésor, \n     Là-haut, le Sauveur donne.\n     Car Jésus est mon Sauveur, \n     Il m’a tant aimé, \n     Payé ma dette sur le Calvaire, \n     Il m’a, dans son grand amour, \n     Sauvé du péché\n     Je vis dans sa sainte lumière.\n\n          Oui, nous marchons, \n          Nous marchons tout joyeux (3)\n          Oui, nous marchons, \n          Nous marchons tout joyeux (2)\n          Vers les cieux\n\n2.  Dimanche je suis heureux, \n     Le Lundi plein de joie, \n     Mardi j’ai une paix\n     Que le monde ne connaît pas, \n     Mercredi et Jeudi, \n     Je vis dans la lumière, \n     Vendredi et Samedi, \n     C’est le ciel sur la terre</h4></pre>"
           },
           {
             "num" : "268",
             "titre": "Dans l’étoile",
             "hira": "<pre><h4 class='padding'>\nDans l’étoile\nS’Il rayonne en clarté, \nDans le vent\nS’Il rend\nLes éléments déchaînés\nQu’est-ce donc pour moi ?\n\nQue d’une étable \nEt de Galilée\nPour tous Il est mort sacrifié\nEn proclamant notre liberté, \nQu’est-Il donc pour moi ?\n\nJusqu’au jour où\nVoulant face à face, \nRencontrer Celui qui me créa\nOui, j’ai compris\nQu’Il est mieux\nQu’un simple nom, \nQu’un simple éclat, \nQue tout montre sa grâce, \nQu’Il vient vers moi\nPour prendre ma main\nEn m’accompagnant\nSoir et matin, \nMe menant dans le droit chemin, \nIl est tout pour moi !</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
           },
           {
           "num" : "269",
           "titre": "Il est un beau soleil joyeux",
           "hira": "<pre><h4 class='padding'>\n1.  Il est un beau soleil joyeux\n     Qui scintille dans mon cœur\n     Et c’est le doux regard de Dieu\n     Que m’apporte mon Sauveur.\n\n          Le soleil qui brille\n          En mon âme\n          Et reflète\n          Le splendeur des cieux\n          C’est Dieu\n          Qui met en moi sa flamme\n          Et dès lors, \n          Je suis heureux.\n\n2.  En moi régnait la sombre nuit\n     Quand parut un jour nouveau\n     Au ciel une aube claire luit\n     Et voici tout est si beau.\n\n3.  Le doute s’est enfui bien loin\n     Les murmures se sont tus\n     Tout est lumière en moi soudain\n     Les ténèbres ne sont plus.\n\n4.  Louange à Dieu qui nous fait don\n     D’un rayon de son amour\n     Aux voix du ciel joyeux mêlons\n     Nos cantiques nuit et jour.</h4></pre>",
             "mark": "© COPYRIGHT LIGUE POUR LA LECTURE DE LA BIBLE, 1010 LAUSANNE, SUISSE.AVEC AUTORISATION)."
           },
           {
           "num" : "270",
           "titre": "Comment pourrais-je taire",
           "hira": "<pre><h4 class='padding'>\n1.  Comment pourrais-je taire\n     Ce grand Amour\n     Que Jésus m’a offert ce jour\n     Où on l’a crucifié,\n     Battu et maltraité\n     Comment pourrais-je taire\n     Un si grand Amour\n\n     Il nous a témoigné\n     Le vrai amour\n     C’est de donner sa vie\n     Pour ses amis\n     Il nous appelle tous\n     A nous aimer en Lui\n     Comment pouvons-nous taire\n     Un si grand Amour\n     Non ! je ne peux pas cacher\n     Tout ce trésor que Tu m’as donné\n     Je veux toujours le chanter\n     Le partager tout entier.\n\n2.  Seigneur, Tu m’as aimé\n     Tel que je suis\n     Tu as illuminé ma pauvre vie\n     Ma route est éclairée,\n     Mon âme libérée\n     Seigneur, oui Tu m’as pris\n     Tel que je suis.</h4></pre>"
           },
           {
           "num" : "271",
           "titre": "Tout dit qu’Il est merveilleux",
           "hira": "<pre><h4 class='padding'>\n1.  Tout dit qu’Il est merveilleux (bis)\n     La terre et la mer, \n     Le splendeur des cieux, \n     Oui, tout dit qu’Il est merveilleux.\n\n2.  Je sais qu’Il est merveilleux (bis)\n     Il sauve, il me garde\n     Et me rend heureux, \n     Oui, je sais qu’Il est merveilleux \n\n3.  Oui, Jésus est merveilleux (bis)\n     Un jour je dirai\n     Là-haut dans les cieux\n     Oui, mon Sauveur est merveilleux.</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL – CHOEUX JOYEUX)"
           },
           {
           "num" : "272",
           "titre": "Si tu savais combien",
           "hira": "<pre><h4 class='padding'>\nSi tu savais combien\nLes plaisirs du monde\nOnt déchiré et brisé\nBien des cœurs\nTu viendrais à Jésus\nDont la grâce abonde\nDe son amour\nTu verrais la douceur.</h4></pre>"
           },
           {
           "num" : "273",
           "titre": "Vers Jésus lève les yeux",
           "hira": "<pre><h4 class='padding'>\nVers Jésus lève les yeux, \nContemple son visage merveilleux, \nEt les choses de la terre, \nPâliront peu à peu\nSi tu lèves vers Jésus les yeux.\nChrist est pour moi\nUn Sauveur admirable, \nUn conseiller, \nUn ami merveilleux\nSon nom béni\nN’a rien de comparable\nSur cette terre\nNi là-haut dans les cieux.</h4></pre>"
           },
           {
           "num" : "274",
           "titre": "O merveilleuse histoire",
           "hira": "<pre><h4 class='padding'>\n1.  O merveilleuse histoire\n     De Christ mon Rédempteur\n     Qui, du haut de sa gloire, \n     Descend pour moi, pécheur !\n     Jésus, mon cœur désiree\n     Proclamer ton amour, \n     Sans cesse le redire\n     Jusqu’à mon dernier jour.\n\n          O merveilleuse histoire\n          De Christ mon Rédempteur\n          Qui du haut de sa gloire\n          Descend pour moi pécheur !\n\n2.  O précieuse histoire !\n     A tous Il tend la main ;\n     Sa mort expiatoire, \n     Nous ouvre le chemin\n     Il t’appelle, mon frère\n     Répondant à sa voix, \n     Apporte ta misère\n     A l’ombre de sa croix.\n\n3.  O chère et sainte histoire\n     Pauvre enfant racheté, \n     Par ta grande victoire \n     Dans le ciel transporté !\n     Là-haut, devant ta face, \n     Comblé de ta faveur, \n     Je redirai ta grâce\n     A jamais, mon Sauveur !</h4></pre>"
           },
           {
           "num" : "275",
           "titre": "Do Lord, oh do Lord",
           "hira": "<pre><h4 class='padding'>\nDo Lord, oh do Lord\nOh do remember me\nWay beyond the blue\n\n1.  Seigneur, oh Seigneur\n     Oh souviens-toi de moi\n     Tout là-haut dans le ciel\n\n2.  J’ai une maison là-haut\n     Là-haut dans le ciel\n     Au-delà du soleil.\n\n3.  Seigneur, oh Seigneur\n     Tu me prépares un lieu\n     Au-delà du ciel bleu\n\n4.  Depuis que mon cœur est à Dieu\n     Il y a du soleil\n     Mon cœur est dans la joie.\n\n5.  Jésus est mon Sauveur\n     Le voulez-vous pour vous\n     Son regard est si doux\n\n6.  Si vous voulez vous aussi\n     Un jour aller au ciel\n     Chantez tous avec moi.</h4></pre>"
           },
           {
           "num" : "276",
           "titre": "Amazing grace!",
           "hira": "<pre><h4 class='padding'>\n1.  Amazing grace!\n     How sweet the sound\n     That saved a wretch\n     Like me!\n     I once was lost, \n     But now am found\n     Was blind, but now I see.\n\n2.  Taws’ grace that taught\n     My heart to fear, \n     And grace my fears relieved;\n     How precious did\n     That grace appear\n     The hour I first believed!\n\n3.  Through many dangers, \n     Toils and snares, \n     I have already come;\n     ‘Tis grace hath brought me\n     Safe thus far, \n     And grace will lead me home.\n\n4.  When we’ve been there\n     Ten thousand years, \n     Bright shining as the sun.\n     We’ve no less days to sing\n     God’s praise\n     That when we first begun</h4></pre>"
           },
           {
           "num" : "277",
           "titre": "Tiako ny hiaraka Aminao Jesoa",
           "hira": "<pre><h4 class='padding'>\nTiako ny hiaraka Aminao Jesoa\nNa aiza na aiza hitondranao ahy\nTiako ny hiaraka Aminao Jesoa\nFa Ianao no miantso ahy.\n\n1.  Hiaraka Aminao Aho, \n     O ry Jesoa Tompoko\n     Tsy manana olon-kafa aho\n     Fa Ianao no fiainako\n     Hanara-dia Anao, \n     Izay no faniriako\n     Hifikitra Aminao aho, Jesoa.\n\n2.  Hiaraka Aminao aho, \n     O ry Jesoa Tompoko\n     Hitory teny soa\n     Amin’ireo havako\n     Hanara-dia Anao, \n     Izay no faniriako\n     Hanohy ny asanao aho, Jesoa.\n\n3.  Hiaraka Aminao aho, \n     O ry Jeso Tompoko\n     Ho zary famonjena\n     Anie ny fahoriako\n     Hanara-dia Anao, \n     Izay no faniriako, \n     Hifantsika Aminao aho, Jesoa\n\n4.  Hiaraka Aminao aho, \n     O ry Jesoa Tompoko\n     Hibanjina ny Ray, \n     Tompo Andriamanitro\n     Hanara-dia Anao, \n     Izay no faniriako\n     Izay misy Anao, \n     No hisy ahy, Jesoa.</h4></pre>"
           },
           {
           "num" : "278",
           "titre": "Sambatra ny olona izay tsy mandeha",
           "hira": "<pre><h4 class='padding'>\nSambatra ny olona izay tsy mandeha\nEo amin’ny fisainan’ny ratsy fanahy\nSambatra ny olona izay tsy mijanona\nEo amin’ny falehan’ny mpanota\nSambatra ny olona\nIzay tsy mipetraka\nEo amin’ny fitoeran’ny mpaniratsira\nFa ny lalan’i Jehovah no sitrany\n\n1.  Fa ny lalan’i Jehovah ihany\n     No saininy andro aman’alina\n     Tahaka ny hazo iray ambolena\n     Eo amoron’ny rano izay velona\n     Izay mamoa amin’ny tena fotoany\n     Ny raviny koa tsy malazo\n     Ary ny asany koa lavorary.\n\n2.  Tsy toy izany ny ratsy fanahy\n     ‘Zay akofa aelin’ny rivotra\n     Ny fitsarana sy ny fiangonan’\n     Ny marina, tsy hainy hijanonana\n     Jehovah mahalala\n     Ny lalan’ny marina\n     F’izy no ratsy fonenana\n     Ho any amin’ny fahaverezana</h4></pre>"
           },
           {
           "num" : "279",
           "titre": "Raha misy milaza azy",
           "hira": "<pre><h4 class='padding'>\nRaha misy milaza azy\nHo manam-panahy ry zareo\nMihevi-tena ho mitombo\nAmin’ny fitiavana\nIzaho kosa hilaza fa foana ny asany\nFa tsy maintsy hateraka\nVao afaka hitombo\nMiandalandalana ny fitomboany\nRehefa noraisiny\n\nIlay zanaka lahy\nMiandalandalana ny fitomboany\nRehefa voatandriny\nNy sakafom-panahy\nMiandalandalana ny fitomboany\nFitomboana amin’ny saina,\nVatana ary fanahy\nMiandalandalana ny fitomboany\nRaha avelany hanjaka\nNy asan’Ilay Fanahy</h4></pre>"
           },
           {
           "num" : "280",
           "titre": "Fitia Agape",
           "hira": "<pre><h4 class='padding'>\n1.  Fitia Agape :\n     Tsy omena mpandalo\n     Fitia Agape :\n     Tsy miandry takalo\n     Fitia Agape :\n     No ambony indrindra Jeso\n     Fitia Agape !\n     Manolotra foana\n     Fitia Agape :\n     No mendrika indrindra\n     Fitia Agape :\n     Ny fitiavanao Jeso.\n\n          Fa na dia miteny\n          Amin’ny fitenin’ny olona\n          Sy ny anjely aza aho\n          Nefa tsy manana an’izany hoe :\n          Fitia Agape\n          Fitia Agape\n          Dia tonga varahina\n          Sy kipantsona\n          Izay mikarantsana anie aho\n          Fitia Agape !\n          No tsara indrindra Jeso.\n\n2.  Fitia Agape :\n     Tsy mitady ny azy\n     Fitia Agape :\n     Fa mora fanahy\n     Fitia Agape :\n     Tsy manao ‘zay tsy mahamendrika\n     Fitia Agape !\n     Fitia Agape :\n     Tsy mirehareha\n     Fitia Agape :\n     Mandefitra foana\n     Fitia Agape :\n     Mifaly amin’ny marina.</h4></pre>"
           },
           {
           "num" : "281",
           "titre": "Sarobidy loatra",
           "hira": "<pre><h4 class='padding'>\n1.  Sarobidy loatra\n     Ny asanao ry Jeso\n     Fony Ianao nitondra\n     Famonjena ho anay\n     Nandroaka aizim-pito\n     Nanafaka ny gadra\n     Nanome fiadanam-po\n\n          Faly ao aminao ny foko\n          Ry Jeso Tompo ô\n          Anjakao fa Tompo Ianao\n          Manafaka ahy\n          Inty aho, tia anao.\n\n2.  Mahavelon’aina\n     Mahazava saina\n     Mampifankatia\n     ‘Reo teny nentinao\n     Miaro ny malemy\n     Tokin’ny kanosa\n     Sabatra sy ampinga koa\n\n3.  Kapoka sy latsa\n     Nihatra taminao\n     Noleferinao satria\n     Tia ahy Ianao\n     Hazofijaliana\n     Tsy nihemoranao\n     Satria ‘zay no sitrakao\n\n4.  Nafoin’ny Mpahary\n     Maty ts’isy Mpiaro\n     Fasana no hany\n     Sisa nampandroso Anao\n     Ny andro fahatelo\n     Ts’isy nahalala\n     Haleloia nitsangana Ianao</h4></pre>"
           },
           {
           "num" : "282",
           "titre": "La misimisiny ¨n’ainay",
           "hira": "<pre><h4 class='padding'>\nLa misimisiny ¨n’ainay\n‘Zao Jeso\nNoho ny Aminao\nFahasoava le bevata bibike\nNitahianao anay\n\nVelon’ainay Jeso \nManana Anao\nKila raha iaby\nAfoinao ho anay\nHaveloma bevata lahy ê\nMahavelo Ndrananahary e.\n\nLa vareake n’ainay \n‘Zao fa vototse\nHasosoram-be\nFotone tsy ino fa hasoanao\nIha Mpandomba be.</h4></pre>"
           },
           {
           "num" : "283",
           "titre": "He, sambatra aho Jeso,",
           "hira": "<pre><h4 class='padding'>\n1.  He, sambatra aho Jeso, \n     Raha miaraka Aminao, \n     Fa ny lalanao\n     Dia lavi-pahoriana ;\n     Ny ali-mampahory, \n     Ny raho-mitatao\n     Eo anilanao \n     Dia mody fitahiana.\n     Tano aho Jeso, \n     Hiaraka Aminao, \n     Izay lalana ombako, e !\n     Mba hazavao !\n\n2.  Izao no faniriako\n     Manetsika ny fo\n     Ho sakazainao\n     Mandrakizay doria\n     Na inona mihatra, \n     Na inona manjo\n     Ianao no antenaiko\n     Hitantana ny dia\n     O ! avia Jeso, \n     Tano aho e !\n     Tantanonao ny diako, \n     Tompo mamonje !\n\n3.  Izay sakaizanao Jeso\n     No ampoky ny soa\n     Feno haravoana\n     Sy lavitra manjo\n     ‘Zay rehetra ilaina\n     Anananao tokoa.\n     Raha miaraka Aminao, \n     Mionona ny fo.\n     Sambatra aho Jeso, \n     Tretrika tokoa, \n     Ravo ny fanahiko, \n     Toloranao ny soa.\n\n4.  Inona no mamiko\n     Mihoatra noho Ianao, \n     Tompo manan-kery\n     Sy loharanon-tsoa ?\n     Izay zavatra ilaiko\n     Azoko Aminao\n     Koa onenonao ny foko, \n     Ho lapanao tokoa\n     Manjakà Jeso, \n     Ato am-poko Ianao\n     Izany fahotako e !\n     Ry Tompo avelao.</h4></pre>"
           },
           {
           "num" : "284",
           "titre": "O ! Izany diako mahitsy hatrany re",
           "hira": "<pre><h4 class='padding'>\nO ! Izany diako mahitsy hatrany re\nHo any Aminao (Aminao ry Tompo)\nFa ny hany tiako\nKa hotompoiko anie dia Ianao.\n\n1.  Na hisompatra ahy izay tsy tia\n     Mankahala, manadala\n     Dia tsy mampanahy Tompo ô !\n     Izay voakasako tsy mety miala.\n\n2.  Raha mandalo aho, toa iriny\n     Toa tondroiny, toa esoiny\n     Raha mba mitalaho, Tompo ô !\n     Ny fivavahako no hamavoiny.\n\n3.  Izany lohataona voninkazo\n     Fampitaha eny an-tsaha\n     Fa tsy mahataona Tompo ô !\n     Ny tavanao anie maha-te-hizaha.\n\n4.  Na manangasanga toa miantso\n     ‘Lay tanàna midolàna\n     Tsy mihambahamba Tompo ô !\n     Ny faniriako tokam-pilàna</h4></pre>"
           },
           {
           "num" : "285",
           "titre": "Jeso Tompo no Mpamonjiko",
           "hira": "<pre><h4 class='padding'>\n1.  Jeso Tompo no Mpamonjiko\n     Jeso Tompo no Mpiaroko\n     Jeso Tompo be fitia\n     Jeso tia ny mpania\n     Jeso Tompo no Mpamonjiko\n\n2.  Faly aho miaraka Aminy\n     Faly aho miaraka Aminy\n     Izy no mitantana ahy\n     Sy manoro lalana ahy\n     Faly aho miaraka Aminy</h4></pre>"
           },
           {
           "num" : "286",
           "titre": "Alleluia je marche",
           "hira": "<pre><h4 class='padding'>\nAlleluia je marche\nJe marche avec Jésus (2)\nAlleluia je marche\nChaque jour, \nJe marche avec Jésus.\n\n1.  Mes amis sont contre moi\n     Parce que\n     Je marche avec Jésus\n     Je marche avec Jésus\n     Mes amis sont contre moi\n     Parce que\n     Je marche avec Jésus\n     Chaque jour, \n     Je marche avec Jésus.\n\n2.  Et le monde est contre moi\n     Parce que\n     Je marche avec Jésus…\n\n3.  Et le diable est contre moi\n     Parce que\n     Je marche avec Jésus</h4></pre>"
           },
           {
           "num" : "287",
           "titre": "Chrétien, réjouis-toi",
           "hira": "<pre><h4 class='padding'>\n1.  Chrétien, réjouis-toi\n     Tresaille d’allégresse,\n     Car ton Sauveur est Roi :\n     Regarde à Lui sans cesse.\n\n          En son amour\n          Chrétien, réjouis-toi\n          Rejouis-toi toujours.\n\n2.  Exalte le Seigneur\n     Il a sauvé ton âme !\n     Dieu l’a comblé d’honneur\n     Après la croix infâme.\n\n3.  Eclate en saints transports !\n     Voici ton Dieu confie\n     Les portes de la mort\n     Au prince de la vie.\n\n4.  Espère, adore et crois !\n     Jésus seul est le Maître,\n     Au loin déjà je vois\n     La gloire enfin paraître.\n\n5.  Christ règne dans le ciel\n     Au sein de la lumière,\n     Et son règne éternel\n     Bientôt viendra sur terre.</h4></pre>"
           },
           {
           "num" : "288",
           "titre": "Je veux monter sur la montagne,",
           "hira": "<pre><h4 class='padding'>\nJe veux monter sur la montagne, \nC’est là que l’on rencontre Dieu, \nC’est là que la joie nous inonde\nEt que pour nous s’ouvrent les cieux.\nJe veux laisser les joies du monde\nEt me tenir tout près de Dieu, \nJe veux monter sur la montagne\nC’est là que l’on est heureux.\n\n1.  Si le chemin est rocailleux, \n     Si les cailloux blessent un peu, \n     Le Saint-Esprit me guidera\n     Et Jésus me consolera.\n\n2.  Sur le chemin, Jésus monta\n     Et mon Sauveur me précéda ;\n     Avec Lui je veux m’élever\n     Jusque sur les plus hauts sommets.\n\n3.  Le monde a perdu tout attrait\n     J’ai quitté ses brouillards épais ;\n     Mon soleil est si clair, si chaud, \n     C’est Jésus le divin agneau</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL –CHŒURS JOYEUX)"
           },
           {
           "num" : "289",
           "titre": "Du Maître qui m’appelle",
           "hira": "<pre><h4 class='padding'>\n1.  Du Maître qui m’appelle, \n     A le suivre ici bas\n     J’entends la voix fidèle\n     Qui me dit : «  Ne crains pas! »\n     L’ennemi te menace\n     Je suis le Tout Puissant\n     Je verse en toi ma grâce, \n     Moi, le vivant !\n\n        Il vit ! Il vit !\n        Jésus vit aujourd’hui \n        Je sais qu’il est \n        Tout près de moi\n        Sur le chemin étroit.\n        Il vit ! Il vit !\n        Toujours Il me conduit, \n        Et je puis dire par la foi :\n        Je sais qu’Il vit en moi !\n\n2.  Il vit et rien au monde\n     Ne saurait me ravir\n     Le bonheur qui m’inonde\n     Et m’aide à le servir\n     En Lui j’ai force et joie\n     Tout le long du chemin\n     Où son amour m’envoie\n     Moi, faible humain.\n\n3.  Tressaille d’allégresse\n     Racheté de Jésus\n     Fais retentir sans cesse\n     L’hymne saint des élus !\n     Oh ! sublime espérance, \n     Que rien ne peut ternir, \n     Merveilleuse assurance\n     Il va venir.</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL – CHŒURS JOYEUX)"
           },
           {
           "num" : "290",
           "titre": "The joy of my Lord",
           "hira": "<pre><h4 class='padding'>\n1.  The joy of my Lord\n     Is my strength\n     My strength is\n     The joy of my Lord.\n\n2.  He puts me on his shoulder\n     And I fear no more\n     He puts me on his shoulder\n     I fear no more.\n\n3.  He fills my mouth\n     With laughter\n     Ha ! ha ! ha ! ha ! ha !\n     He fills my mouth\n     With laughter\n     Ha ! ha ! ha !\n\n   -   Ny fifalian’ny Tompoko \n       No heriko\n       Ny fifaliany no heriko.\n\n   -  La joie du Seigneur\n       Est ma force \n       Ma force est dans la joie \n       Du Seigneur !</h4></pre>"
           },
           {
           "num" : "291",
           "titre": "Rendrarendra ve",
           "hira": "<pre><h4 class='padding'>\n1.  Rendrarendra ve\n     Sa filalian’ny maso koa\n     Sa endrika ho levona\n     Na felana halazo koa\n     No hanorenako\n     Izany tena fiainako\n     Ianao Jesosy irery no\n     Tena vato fehizoro.\n\n          Ka na orana hifafy\n          Na ny rivotra koa hifofo\n          Tsy mba hanan-tahotra aho\n          Tsy hangovitra (satria)\n          Vato mafy no\n          Tena mandam-piainako\n          Ianao Jesosy irery no \n          Tena vato fehizoro.\n\n2.  Eo aminao no tena irafetako\n     Hitombo tsara ho tempoly\n     Masina ao Aminao\n     Mba ho fonenanao\n     Sy Ilay Fanahy Masina\n     Ianao Jesosy irery no\n     Tena vato fehizoro.</h4></pre>"
           },
           {
           "num" : "292",
           "titre": "Andriamanitra Fitiavana Ianao",
           "hira": "<pre><h4 class='padding'>\n1.  Andriamanitra Fitiavana Ianao\n     Ka mihevitra ny momba anay ety\n     Raha mifoha maraina izahay dia\n     Tsy afaka am-bavanay ny hoe :\n     « Ampy anay ny fahasoavanao »\n\n          Raha maraina mibaliaka\n          Ny andronay ety\n          Ianao no masoandro niaviany\n          Raha ny alin’ny ririnina\n          No handalo ety\n          Ianao no kintana hitantana ny dia\n          Fa ny vavaka atao\n          ‘Zay mipololotra\n          Am-ponay ao hoe :\n          Izahay anie hatoky Anao\n\n2.  Andriamanitra Fitiavana Ianao\n     Ka mitantana ny dianay ety\n     Raha mandimby ny andro ny alina\n     Mbola tokana ny deranay hoe :\n     « Ampy anay ny fahasoavanao »</h4></pre>"
           },
           {
           "num" : "293",
           "titre": "Hoy Jesosy Tompo",
           "hira": "<pre><h4 class='padding'>\n1.  Hoy Jesosy Tompo\n     ‘Zaho no fananganana\n     Fananganana ny maty\n     Sy fiainana\n     Izay rehetra mino Ahy\n     Na dia maty aza\n     Dia ho velona indray (3)\n\n          Satria velona Aho\n          Ho velona ianareo\n          Aza matahotra\n          Fa ho velona indray (3)\n\n2.  Maharavo fo ny teniny\n     Henoy indray koa\n     Izay rehetra velona\n     Ka mino Ahy tokoa\n     Dia tsy ho faty\n     Mandrakizay hatsangako\n     Ka dia velona indray (3)\n\n3.  O ! Jesosy Tompoko, \n     Indro re ampitomboy\n     Ny finoako Anao, \n     Ny herinao asehoy\n     Tompo iantrao ny foko, \n     Tsy finoako vonoy\n     Mba ho velona indray (3)\n\n          Mino Anao tokoa\n          Ny foko Jesosiko\n          Feno toky aho\n          Fa ho velona indray (3)</h4></pre>"
           },
           {
           "num" : "294",
           "titre": "Misy raha soa",
           "hira": "<pre><h4 class='padding'>\n1.  Misy raha soa\n     Nomen’i Jesosy anay\n     Ao an-danitse ao e\n     Ny fiainana mandrakizay\n     Io raha soa io e.\n\n          Zahay Jeso\n          Tako olo rate\n          Ka mba orihinao izahay.\n          Mate n’ainay\n          Laha halavirinao\n          Lombao zahay ry Jesosy.\n\n2.  Ka miviombio ny fanahinao\n     Fa Jesosy ro Ihe\n     Ndra matonaly\n     Ndra atoandro e\n     Mivavaha \n     F’izay avao ro tiany e</h4></pre>"
           },
           {
           "num" : "295",
           "titre": "Kristy Tompo irery ihany",
           "hira": "<pre><h4 class='padding'>\n1.  Kristy Tompo irery ihany\n     Lova ho antsika\n     Mahagaga ny fitiavany\n     Tsy mandao ny olony.\n\n2.  Mba tantano izahay ry Tompo\n     Haharitra ao Aminao\n     Ho mpitory ny fitiavanao\n     ‘Zay no fanevanay.\n\n3.  O ! atolotro Anao ny foko\n     Na dia tsy mendrika\n     Ampianaro izahay hifankatia\n     Mba ho tena mpianatrao.\n     Kristy lovantsika\n     Azo antoka\n     Na dia anio ampito\n     Rahatrizay\n     Ampy ho anay tokoa\n     Ny fahasoavanao\n     Satrinay ny ho mpandova\n     Miaraka Aminao</h4></pre>"
           },
           {
           "num" : "296",
           "titre": "Tsy asiako fanenenana",
           "hira": "<pre><h4 class='padding'>\n1.  Tsy asiako fanenenana\n     Andriamanitra ô\n     Raha natolotro ny tenako\n     Mba hanompo Anao\n     Tsapako fa lehibe\n     Ny fitiavanao\n     Nitantananao ny fiainako\n     Hatramin’izao.\n\n          Fa izaho dia ny ho eo \n          Akaikin’Andriamanitra\n          No mahatsara ahy, \n          No mahatsara ahy, \n          Ianao Jehovah Tompo ô\n          No fiarovako\n\n2.  Raha jereko ny fiainana\n     Mahatahotra, \n     Tsy azo ianteherana\n     Satria tena fitaka\n     Ny eo akaikinao, \n     Ry Tompo no irin’ny fo, \n     Lavi-pahoriana re\n     Ka sambatra tokoa.\n\n3.  Moa ny rendrarendra ve\n     No hialako Aminao\n     Tsy hatakaloko Anao\n     Izao tontolo izao\n     Ny eo akaikinao no tena\n     Mahatsara ahy\n     Ts’isy fahavalo afaka\n     Hamely ahy.</h4></pre>"
           },
           {
           "num" : "297",
           "titre": "Resy lahatra aho",
           "hira": "<pre><h4 class='padding'>\n1.  Resy lahatra aho\n     Jeso Tompo tia\n     Ondry izay nania\n     Ka miverina Aminao\n     Tao izay nokasaiko\n     Hitantana ahy\n     Tena nolalaiko nefa\n     Mainka nampanahy\n\n          Jeso Kristy\n          Ianao no Tompoko\n          Jeso Kristy\n          Ianao no Mpanjakako\n          Ianao irery\n          No mpitantana ahy\n          Ka na lalan-tery aza,\n          Izaho tsy hanahy.\n\n2.  Ankehitriny Tompo\n     Fantatro tokoa\n     F’izaho mpanompo\n     Tianao ho heni-tsoa\n     Ao ireo ady maro,\n     Eso, fahotana\n     Ianao no Ampinga\n     Aro, Hery mahatana.</h4></pre>"
           },
           {
           "num" : "298",
           "titre": "Matetika manonja re",
           "hira": "<pre><h4 class='padding'>\n1.  Matetika manonja re\n     ‘Ty ranomasin-dozabe\n     Manafotra ahy, mandentika ahy\n     Manary ahy tsy ho Anao.\n\n          Handresy aho (2)\n          Handresy tokoa aho Jeso\n          Satria Ianao (2)\n          Satria Ianao no tokiko.\n\n2.  Naripakao, resy avokoa\n     ‘Reo fahavalo teo aloha\n     Nanenjika ahy, nandreraka ahy\n     Fa hay namonjy ahy Ianao.\n\n3.  Ny ahiahy ariako\n     Ny tahotra tsy ampingako\n     Tsy mba ho ahy intsony re\n     Izany tsy finoana.\n\n4.  Mijoro eo anilako\n     Andro aman’alina Ianao\n     Ka raha tojo ady be\n     Dia mbola hiantso sy hihira hoe :</h4></pre>"
           },
           {
           "num" : "299",
           "titre": "Ry Jeso Tomponay ô",
           "hira": "<pre><h4 class='padding'>\nRy Jeso Tomponay ô\nVonona izahay\nHanolotra ny tenanay\nHanaraka Anao\nKa n’aiza n’aiza aleha\nIanao no tokinay é\nKa tsy misy hatahorana\nFa Ianao no tokinay.\n\nSarotra ny lalana\nSady mampanahy é\nMaro koa ny fahavalo\nTa-hamely re\nNefa Ianao ry Tompo\nMpitarika mahay\nKa tsy misy hatahoranay\nFa Ianao no aronay\nRy Jeso Zokinay é\nVonona izahay\nHanaraka ny lalana\nIzay itarihanao \nVonona tokoa re\nHiasa ho Anao\nKa ny tanimbolinao\nNo tena tanjonay.\n\nOrana mifafy\nNo hamely anay é\nRivotra mifofo\nTsy hatahoranay\nIanao no ampinga\nVatolampy mafy\nFiarovana tokoa\nTena ijoroanay.</h4></pre>"
           },
           {
           "num" : "300",
           "titre": "Efa nomena ho anay",
           "hira": "<pre><h4 class='padding'>\n1.  Efa nomena ho anay\n     Tokoa ry Jeso ô!\n     Sy navelanao tety\n     Ny fiadananao\n     Izany foko te-hidera Anao\n     Afa-tahotra sy\n     Afaka ahiahy.\n\n     Koa na miafina amiko aza\n     Ny ampitso ety\n     Antenaiko fa hazava\n     Sy hamiratra ery\n     Satria Jeso no eo\n     Anilako hitantana\n     Izany sandriny\n     Azoko hianteherana.\n\n2.  Izay manorina\n     Ny fiainany eo Aminao\n     Manana ny fanorenana\n     Azo antoka\n     Ka izy kosa no atao hoe\n     Olon-tsambatra\n     Ny fiadananao\n     Hanafaka azy ireo.\n\n     Koa na miafina aminy aza\n     Ny ampitso ety\n     Antenainy fa hazava\n     Sy hamiratra ery\n     Satria Jeso no eo\n     Anilany hitantana\n     Izany sandriny\n     Azony hianteherana</h4></pre>"
           },
           {
           "num" : "301",
           "titre": "Na dia mamaky ala-be mikirindro",
           "hira": "<pre><h4 class='padding'>\nNa dia mamaky ala-be mikirindro\nAlo-pahafatesana aza aho\nTsy hanan-tahotra aho\nIanao no aroko\nNa aizim-pito mikitroka\nAli-mahatora-kovitra\nTsy hanan-tahotra aho satria\nTsara Mpiantoka.\n\n    ‘Zaho mino (2)\n    Fa miantoka ahy ianao \n    Ny anioko eo anatrehanao Jeso\n    Ny ampitsoko eo an-tananao Jeso\n    Ny rahatrizaiko aza\n    Efa voaomanao</h4></pre>"
           },
           {
           "num" : "302",
           "titre": "He fantatro fa indray andro any",
           "hira": "<pre><h4 class='padding'>\n1.  He fantatro fa indray andro any\n     Ho levona ity tenako ity\n     Fa fiainan-danitra\n     Antenaiko hatrety\n     Ny masoko hahita an’i Jeso.\n\n2.  He fantatro fa indray andro any \n     Ho rava sy ho potika ny ety\n     Fa ny mino ihany re\n     No haharitra doria\n     Ny masoko hahita an’i Jeso.\n\n3.  He fantatro fa indray andro any\n     Hiverina ny Tompo Jesosy\n     Faly aho ho raisiny\n     Honina eo anilany\n     Ny masoko hahita an’i Jeso</h4></pre>"
           },
           {
           "num" : "303",
           "titre": "He, ny andon’ny maraina",
           "hira": "<pre><h4 class='padding'>\n1.  He, ny andon’ny maraina\n     Latsaka ao an-tsaina re\n     Ka mamelona ny maina\n     Izay maniry rano be!\n     Ravoravo e, ny tany\n     Fa he, ny andro maina efa lany, \n     Ka mitsahatra ny fahantrany\n     Manaroka ny hazo be!\n\n2.  Ny fanahy karakaina\n     Misy rano velona, \n     Fa Jesosy andon’aina\n     Manome fiainana\n     Velona ny jentilisa, \n     Ny tany hay dia tonga paradisa\n     Marobe no efa voaisa\n     Handray lova masina!\n\n3.  Misy lalana mizotra, \n     Izay mankao Ziona re;\n     Any no mitanjozotra\n     Ny vahiny marobe;\n     Ka Ziona dia mivoha\n     Hidiran’ny navotan’ny tsitoha;\n     Ao no ivorian’ny mifoha, \n     Fa an’ny Tompo lehibe;\n\n4.  He, mikambana ny mino\n     Amim-pifaliam-be, \n     Ka ny hobiny maneno\n     Tahaka ny rano be!\n     Ao mitovy avokoa, \n     Tsy misy tompo sy\n     Mpanompo koa, \n     Eny, razana iray tokoa\n     Ny mponina ao Ziona re!</h4></pre>"
           },
           {
           "num" : "304",
           "titre": "Ry Jeso Tompo Zokinay",
           "hira": "<pre><h4 class='padding'>\nRy Jeso Tompo Zokinay \nIndreto izahay\nManolotra ny tenanay\nHiasa ho anao\nKa na aiza n’aiza aleha\nIanao no tokinay\nKa tsy misy atahoranay\nF’Izy no momba anay.\n\nSarotra ny lalana\nIzahay anefa tsy manahy\nMaro koa ny fahavalo\nJeso irery ihany anie\nMpitarika anay\nKa tsy misy atahoranay\nF’Izy no momba anay.\n\nRy Jeso Tompo Zokinay\nVonona izahay\nHanaraka ny lalanao\nIzay hitarihanao\nVonona tokoa re hiasa ho Anao\nKa ny tena tanjonay\nNy tanimbolinao.\n\nOrana mifafy anie\nTsy mampiraika anay\nRivotra mifofo koa \nTsy atahoranay\nJeso irery ihany anie\nNo ampinganay\nVatolampy mafy koa fiarovana.</h4></pre>"
           },
           {
           "num" : "305",
           "titre": "Sambatra ny olona",
           "hira": "<pre><h4 class='padding'>\nSambatra ny olona\nIzay tsy mba isainao heloka\nSambatra ny olona\nIzay madio eo anatrehanao\nSambatra ny olona\nIzay mandova ny fiainana\nFiainana mandrakizay\nNo itokiany fa azony.\n\n1.  Tsy isainao heloka\n     Satria novonjen’ny Zanakao\n     Tena voadio am-po\n     Noho ny rany ’zay nalatsany\n     Mandova ny fiainana\n     Satria tena tonga zanakao\n     Fiainana mandrakizay\n     No itokiany fa azony.\n\n2.  Vatolampy mafy koa\n     No nanorenany ny fiainany\n     N’inon’inona hanjo\n     Ianao no andry ianteherany\n     Na hohenjehina moa\n     Izao hatrany re no hirany :\n     Fiainana mandrakizay\n     No itokiany fa azony.</h4></pre>"
           },
           {
           "num" : "306",
           "titre": "Jeso no tsy miova",
           "hira": "<pre><h4 class='padding'>\n1.  Jeso no tsy miova\n     Na omaly na anio\n     Eny ho mandrakizay (‘lay)\n     Vatolampy tsy mikoro\n     Vato fanorena-mafy\n     Azo itokiana tokoa\n     Raha hanorenana\n     Ny fiainana (mahasambatra)\n     Mandrakizay.\n\n2.  ‘Zaho izay novonjeny\n     Mety hangovitra ihany\n     Eny ambony vatolampy (fa)\n     Izy tsy miova akory\n     Jeso ô ampianaro\n     Aho ho tahaka Anao izao\n     Ka ny fiainako\n     Jeso Tompo ô! (mba ho entiko)\n     Hiderana Anao.</h4></pre>"
           },
           {
           "num" : "307",
           "titre": "J’ai l’ssurance de mon salut",
           "hira": "<pre><h4 class='padding'>\n1.  J’ai l’ssurance de mon salut\n     Par la présence du Seigneur Jésus, \n     Son sang m’a lavé, m’a racheté\n     Par le Saint-Esprit, oui, je suis né.\n\n          C’est mon histoire, \n          C’est là mon chant\n          Louant mon Sauveur\n          A chaque instant.\n\n2.  Je veux obéir\n     A mon Seigneur\n     Dans mon cœur sentir\n     La paix de son cœur\n     Veiller et prier, \n     L’attendre un jour\n     Me laisser lier par son Amour</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "308",
           "titre": "Dans le nom de Jésus",
           "hira": "<pre><h4 class='padding'>\nDans le nom de Jésus (bis)\nNous avons la victoire\nDans le nom de Jésus (bis)\nNous serons des vainqueurs\nIl a vaincu sur la croix, \nNous vaincrons aussi par la foi\nDans le beau nom du Seigneur\nNous serons tous des vainquers</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "309",
           "titre": "Voir mon Sauveur face à face",
           "hira": "<pre><h4 class='padding'>\n1.  Voir mon Sauveur face à face\n     Voir Jésus dans sa beauté\n     O joie ! ô suprême grâce !\n     O bonheur, félicité !\n\n          Oui, dans ta magnificence\n          Je te verrai, divin Roi !\n          Pour toujours en ta présence\n          Je serai semblable à Toi.\n\n2.  Ta gloire est encore voilée\n     Ah ! d’un voile ensanglanté\n     Bientôt sera révélée\n     Ton ineffable beauté !\n\n3.  Oh ! quels transports d’allégresse\n     Quand tes yeux baissées sur moi\n     Me diront avec tendresse :\n     «  Je mourus aussi pour toi !  »</h4></pre>"
           },
           {
           "num" : "310",
           "titre": "Sur le mont du Calvaire",
           "hira": "<pre><h4 class='padding'>\n1.  Sur le mont du Calvaire\n     Il était une croix\n     Où Jésus souffrit\n     Tant de douleurs\n     Oui, c’est là qu’il mourut\n     Sur cet infâme bois\n     Pour sauver\n     Le plus vil des pécheurs.\n\n          Cette croix\n          Me sera toujours chère\n          Elle est gloire\n          Et victoire pour moi\n          Et par elle, \n          En la maison du père\n          La couronne\n          Est offerte à ma foi.\n\n2.  Cette croix où Jésus, \n     Du monde est rejeté\n     A pour moi\n     Le plus grand des attraits\n     C’est là que Saints Agneau\n     Mon Sauveur a porté\n     Mes fardeaux, mes douleurs, \n     Mes forfaits.\n\n3.  Sur la croix où Jésus\n     A versé tout son sang\n     Je contemple, \n     Ebloui, sa beauté\n     Sur la mort et l’enfer, \n     Son combat triomphant\n     Fait de moi\n     Son heureux racheté.\n\n4.  M’appuyant avec foi\n     Sur la croix de Jésus\n     Son opprobre, \n     Je veux le porter\n     Jusqu’au jour bienheureux, \n     Où parmi les élus\n     Dans le ciel\n     Je pourrai l’exalter</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "311",
           "titre": "Bientôt très bientôt",
           "hira": "<pre><h4 class='padding'>\n1.  Bientôt très bientôt\n     Nous allons voir, le Seigneur \n     Alleluia, Alleluia\n     Nous verrons le Seigneur.\n\n2. Là-haut plus de pleurs\n     Nous allons voir le Seigneur\n     Alleluia, Alleluia\n     Nous verrons le Seigneur.\n\n3.  Là-haut plus de morts\n     Nous allons voir le Seigneur \n     Alleluia, Alleluia\n     Nous verrons le Seigneur.</h4></pre>"
           },
           {
           "num" : "312",
           "titre": "Il tient l’univers entier",
           "hira": "<pre><h4 class='padding'>\n1.  Il tient l’univers entier\n     Dans sa main \n     Il tient l’univers \n     Dans sa main.\n\n2.  Il tient nos petits enfants\n     Dans sa main \n     Il tient l’univers\n     Dans sa main\n\n3.  Il nous tient toi et moi\n     Dans sa main \n     Il tient l’univers\n     Dans sa main\n\n4.  Il tient notre destin\n     Dans sa main \n     Il tient l’univers\n     Dans sa main\n\n5.  Il tient nos lendemains\n     Dans sa main \n     Il tient l’univers\n     Dans sa main\n\n6.  Nous n’avons peur de rien\n     Dans sa main \n     Il tient l’univers\n     Dans sa main</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "313",
           "titre": "Quand les montagnes s’éloigneraient",
           "hira": "<pre><h4 class='padding'>\nQuand les montagnes s’éloigneraient\nQuand les collines chancelleraient\nQuand les montagnes s’éloigneraient\nDieu fera tout comme Il promet.\nMon amour, oui mon amour \nNe s’éloignera point de toi.\nQuand les montagnes… promet</h4></pre>",
             "mark":"(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "314",
           "titre": "Cà et la j’erre",
           "hira": "<pre><h4 class='padding'>\n1.  Cà et la j’erre\n     Etranger sur cette terre\n     Mais je sais que là-haut\n     Une place pour moi\n     Plein d’assurance\n     Oui désormais je m’avance\n     Suivant le Berger\n     Qui trace ma voie.\n\n          Et dans mon âme\n          Un chant s’élève et proclame\n          L’amour du Seigneur\n          Qui remplit mon cœur\n          Mon être est libre\n          Et désormais je veux vivre\n          Pour ce seul maître\n          Dont j’ai fait le choix.\n\n2.  Les lieux arides\n     Je les suis avec mon guide\n     Je n’aurai jamais soif\n     Il est la source d’eau\n     Dans les champs fleuris\n     Comme dans les vertes prairies\n     Je chante en marchant\n     Les yeux vers en haut.\n\n3.  La route est dure\n     Sa présence me rassure\n     Je sais que le soleil\n     Ne me frappera pas\n     Les pierres roulent\n     Les épines je les foule\n     Mais le Bon Berger\n     Protège mes pas</h4></pre>"
           },
           {
           "num" : "315",
           "titre": "Le Seigneur est mon Berger",
           "hira": "<pre><h4 class='padding'>\n1.  Le Seigneur est mon Berger\n     Réjouis-toi mon âme\n     Car il me fait reposer\n     Au bord des eaux calmes\n     Je ne manquerai de rien\n     Restaure-toi mon âme\n     Sa justice est mon seul bien\n     Et je le proclame.\n\n          Alleluia ! Alleluia !\n          Oui partout je chanterai\n          Alleluia ! Alleluia !\n          Le Seigneur est mon Berger.\n\n2.  Que survienne le danger\n     Ne t’en fais pas mon âme\n     Il vient toujours protéger\n     Ceux qui le réclament\n     Oh non je ne craindrai rien\n     Réjouis-toi mon âme gardien\n     Et je le proclame.\n\n3.  Et lorsque j’arriverai\n     Réjouis-toi mon âme\n     Dans l’éternité bleutée\n     De son ciel si calme\n     Oh ! oui que je serai bien\n     Restaure-toi mon âme\n     Car nous le verrons enfin\n     Chante-le mon âme.</h4></pre>"
           },
           {
           "num" : "316",
           "titre": "Je ne sais pas comme il le faut",
           "hira": "<pre><h4 class='padding'>\n1.  Je ne sais pas comme il le faut\n     Chanter la joie qui est en moi\n     Je ne sais pas comme il le faut\n     Exprimer la joie qui vient de Toi.\n\n2.  Il m’a donné plus que la vie\n     C’est pourquoi\n     Je chante aujourd’hui\n     Il m’a donné plus que la vie\n     C’est pourquoi\n     Je veux être pour Lui.\n\n3.  On L’a cloué, Il n’a rien dit\n     On L’a percé, Il n’a rien dit\n     On L’a joué, Il n’a rien dit\n     Sans un mot sa tête Il l’a penché\n     Et alors au ciel, Il est monté.\n\n4.  Pourquoi pleurer, vous la menter\n     Il reviendra, et ce jour-là\n     Il étendra ses deux grands bras\n     Et au ciel, Il vous emportera.</h4></pre>",
             "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
           },
           {
           "num" : "317",
           "titre": "Tendrement Jésus",
           "hira": "<pre><h4 class='padding'>\nTendrement Jésus\nVeille sur toi\nIl te suit pas à pas\nDans la vie\nChaque jour\nIl veut t’accorder à la fois\nSon pardon, \nSa bienveillance infinie.\n\n     Es-tu faible\n     Es-tu fort\n     Dans ton droit\n     Dans ton tort\n     Ton travail est-il vain\n     Que tu perdes\n     Ou fasses un gain.\n\nTendrement Jésus\nVeille sur toi\nIl te suit pas à pas\nDans la vie\nChaque jour\nIl veut t’accorder à la fois\nSon pardon\nSa bienveillance infinie</h4></pre>"
           },
           {
           "num" : "318",
           "titre": "Ne Dieu règne encore",
           "hira": "<pre><h4 class='padding'>\nNe Dieu règne encore !\nJamais son amour ne s’endort.\nLe vent se déchaîne, \nNos cœurs sont en peine, \nMais Dieu nous conduit\nJusqu’au port\nNotre Dieu règne encor !\nJamais son amour ne s’endort.\nCe qu’il nous nous promet\nReste vrai pour jamais :\nNotre Dieu règne encore!</h4></pre>"
           },
           {
           "num" : "319",
           "titre": "He’s got the whole world",
           "hira": "<pre><h4 class='padding'>\n1.  He’s got the whole world (4)\n     In his hands. \n\n2.  He’s got the wind and the rain. (4)\n     In his hands. \n\n3.  He’s got the tiny little baby (4)\n     In his hands. \n\n4.  He’s got you and me brother (4)\n     In his hands</h4></pre>"
           },
           {
           "num" : "320",
           "titre": "In the name of Jesus",
           "hira": "<pre><h4 class='padding'>\nIn the name of Jesus, (2)\nWe have the victory.\nIn the name of Jesus, (2)\nDemons will have to flee.\nWho can tell what God can do?\nWho can tell of his love for you?\nIn the name of Jésus, Jésus, \nWe have the victory.</h4></pre>"
           },
           {
           "num" : "321",
           "titre": "Tsy misy afa-milaza fa",
           "hira": "<pre><h4 class='padding'>\nTsy misy afa-milaza fa\nTompon’ny fandresena\nRaha tsy efa nandalo ady iray\nNandreraka koa.\n\n1.  Aza mihevitra ianao\n     Fa hisosa ny fiainanao.\n\n2.  Lalan-tsarotra ho anao\n     No tsy maintsy hizoranao.\n\n3.  Nefa aoka ho tsarovana\n     Fa ny Tompo no momba anao</h4></pre>"
           },
           {
           "num" : "322",
           "titre": "O! mideza ity lalako",
           "hira": "<pre><h4 class='padding'>\n1.  O! mideza ity lalako\n     Mankany aminao Raiko ô!\n     Toa tsy tanty ny hatsiaka\n     Sy hafanana izay mandreraka ahy\n     Fa ny tananao Raiko ô!\n     Tanana mahery\n     Izay matoky Anao fantatro\n     Fa tsy mba ho very. \n\n          Tsy ho kivy ny fo\n          Tsy ho kivy tokoa\n          N’inona n’inona hanjo\n          Ho zakaiko avokoa.\n\n2.  Izay ela izay aho Raiko ô!\n     Tsy nahatsiaro Anao\n     Voafitaky ny ankosoBolamenan’ity tany\n\n          Dera laza no atolotro\n          Ho Anao Raiko ô!\n          Hitako izao ny lalanao\n          Lalam-baovao.</h4></pre>"
           },
           {
           "num" : "323",
           "titre": "He fitiavana mahery",
           "hira": "<pre><h4 class='padding'>\n1.  He fitiavana mahery\n     Ts’isy afaka hilaza \n     No nasehonao ry Ray\n     Miantso anay ho zanaka \n     Tsy mba lalam-pahoriana\n     No ivimbinanao anay\n     Na dia tojo alon-drano\n     Ity sambokelinay.\n\n          Fa tamin’ny fahafenoan’I Krisy\n          No nandraisantsika\n          Fitahiana be dia be\n          Fahasoavana natolotra\n          Fiainan-tsambatra tokoa\n          No iainana hatrany.\n\n2.  Raho-mainty mivangongo\n     Eny ambony izay jerena\n     Tao ‘reo ady nosedraina\n     Nampitondra faisana\n     Nefa tsy mba mety rendrika\n     Vao mainka nitraka\n     F’ao ‘lay hery mahagaga, \n     Miaro sy mitantana.\n\n3.  Ts’isy afaka hitanisa\n     Ny hamaroan’ny asanao\n     Toy ny asam-pamonjena\n     Ho an’izao tontolo izao\n     Jeso Kristy nidina tety\n     Mba hamonjy ny mpanota\n     Ts’isy famonjena hafa\n     Ho an’ny olombelona.</h4></pre>"
           },
           {
           "num" : "324",
           "titre": "Raha nafahan’i Jehovah",
           "hira": "<pre><h4 class='padding'>\n1.  Raha nafahan’i Jehovah\n     Tany Egypta ny Zanak’Israely\n     Dia nanenjika tokoa Farao\n     Sy ny miaramilany\n     Kanefa Mosesy nilaza hoe :\n     Aza matahotra\n     Fa ho hitanareo\n     Ny famonjen’i Jehovah.\n\n          Jehovah hiady ho anareo\n          Fa ianareo kosa hangina\n          Koa mahereza sy matanjaha\n          Aza matahotra.\n\n2.  Raha mandalo ady mafy\n     Mahakivy koa isika ankehitriny\n     Tsy mahita izay hatao\n     Fa indro mitanondrika\n     Tsarovy anefa\n     Fa ilay teny hoe :\n     Aza matahotra\n     Dia toky tokoa\n     Fa tsy mba mamitaka.</h4></pre>"
           },
           {
           "num" : "325",
           "titre": "Feno fitaka ny tany",
           "hira": "<pre><h4 class='padding'>\nFeno fitaka ny tany, \nSafotr’onja izany fo\nMampitombo fahoriana\nIreo babon’ny manjo\nNampaniry hasambarana\nSy fiadanam-po\nToa satry aza ny\nNanana elatra soa.\n\nIreo babon’ny ankaso, \nSafotry ny fahoriana, \nToa vonton-dranomaso, \nRanomasom-pijaliana\nMahatsapa fa tsy misy\nAnarana ahazoana famonjena, \nAfa-tsy ny\nAnaran’i Jeso Kristy.\n\nSoa ihany fa ao\nIlay Ray Tsitoha\nMitsinjo ireo\nReraka am-po\nIzay vonton-dranomaso\nSy azom-pahoriana\nMaro dia maro tokoa.\n\n-  Ampaherezonao ’zahay\n     Ry Ray be indrafo\n     Fa toy ny voninkazo\n     Hihintsana eny koa ho lo\n     Mba hanam-paharetana\n     Sy hatsarana hatrany\n     Raha mbola tany koa ny tany.\n\nMisy namanao angamba, \nAny lavitra any ho any\nIzaranao ny alahelo\nRehefa tojo ny tomany\nVoafetra ihany anefa\nNy vahaolana azonao\nToa miampy trotraka aza\nNy fahavoazanao.\n\nFa ny zavatra iriko\nHikambanako aminao\nDia ilay Jeso Tompo\nAry ny mba handraisanao\nFiadanana dradraina\nMino aho fa ho azonao\nRaha mino\nSy matoky ianao.\nAlahelo ho ahy\nNy mety hanjo anao\nRaha tamana\nAmin’izao tany izao\nKa ho voina mitatao\nNo ho avy miandry anao\nAo aoriana ao.</h4></pre>"
           },
           {
           "num" : "326",
           "titre": "Ny fiainana eto an-tany",
           "hira": "<pre><h4 class='padding'>\n1.  Ny fiainana eto an-tany\n     Dia mivadibadika\n     Fa ny lalana aleha\n     Dia miaka-midina\n     Kanefa tsy ho kivy\n     Amin’izany izahay Jeso\n     Fa Ianao ry Jeso Tompo (2)\n     No tena tokinay.\n\n2.  Fitsapana, ady mafy\n     No miseho eny an-dàlana\n     Fa fahavalo maro\n     No mitady hampiverina\n     Ka mandefa ny tsipika\n     Mba hamotraka anay\n     Fa Ianao ry Jeso Tompo (2)\n     No tena ampinganay.\n\n3.  Rivo-doza tena mafy\n     Mila hampihemotra\n     Ka ny onjan-drano koa\n     No mitady hampilentika\n     Orana no mifafy\n     Mila hampirodana\n     Fa Ianao ry Jeso Tompo (2)\n     No vatolampinay.</h4></pre>"
           },
           {
           "num" : "327",
           "titre": "Miambena izao",
           "hira": "<pre><h4 class='padding'>\n1.  Miambena izao, \n     Ry fanahiko!\n     Misy rafinao misaina\n     Hanangoly ny malaina\n     Be ny fandrika\n     Voavelatra.\n\n2.  Miambena izao, \n     Ry fanahiko!\n     Mba tsy ho andevon’ota, \n     Na hotaomin’ny mpanota\n     Mivavaha izao, \n     Ry fanahiko.\n\n3.  Miambena izao, \n     Ry fanahiko, \n     Ka tohero ny devoly\n     Raha avy manangoly;\n     Kristy raisonao, \n     Mba ho aronao!\n\n4.  Miambena izao, \n     Ry fanahiko!\n     Tsy ho ela tsy akory, \n     Dia ho lasa ny mahory, \n     Ka ho afaka\n     Ny mpiambina.\n\n5.  Miambena izao, \n     Ry fanahiko!\n     Fa ho avy indray ny Tompo\n     Mba hampody ny mpanompo\n     Ho finaritra\n     Ao an-danitra.</h4></pre>"
           },
           {
           "num" : "328",
           "titre": "Rehefa tonga ny fotoana",
           "hira": "<pre><h4 class='padding'>\n1.  Rehefa tonga ny fotoana\n     Hiavianao ry Tompo masina ô!\n     Ny rehetra hiandrandra Anao\n     Hidera sy hankalaza Anao.\n\n          Mivonòna Ianao\n          Hitsena ny Mpanavotra\n          Ka miambena ianao\n          Ho eo an-tanan’i Jeso.\n\n2.  Indreto izahay ry Tompo ô!\n     Tsy mendrika eo anatrehanao\n     Tolory ny fahasoavanao\n     Ho voavonjy ny fanahinay.</h4></pre>"
           },
           {
           "num" : "329",
           "titre": "Ne crains point",
           "hira": "<pre><h4 class='padding'>\n1.  Ne crains point!\n     Le ciel se couvre\n     Mais plus haut, \n     Vois, il est bleu\n     Dans la nuit, \n     Toujours il s’ouvre\n     Pour montrer\n     L’amour de Dieu\n     (Non) Ne crains point (bis)\n     Car pour toi\n     L’amour de Dieu\n     Resplendit\n     Sous le ciel bleu\n     Ne crains point !\n     Nom, ne crains point.\n\n2.  Ne crains point\n     Quand le tonnerre\n     Fait trembler\n     Notre maison\n     Que ton cœur\n     Sache se taire\n     Eloignant\n     Même un frisson\n     (Non) Ne crains point (bis)\n     Dieu dissipe\n     Tout frisson\n     Et réchauffe ta maison !\n     Ne crains point !\n     Non ne crains point.\n\n3.  Ne crains point, \n     C’est la parole\n     Qui nous vient\n     Du Dieu Sauveur\n     Devant Lui\n     La peur s’envole\n     Car de tout\n     Il est vainquer\n     (Non) Ne crains point (bis)\n     Car de tout\n     Le grand vainquer\n     C’est ton Dieu\n     C’est ton Sauveur\n     Ne crains point !\n     Non, ne crains point !</h4></pre>"
           },
           {
           "num" : "330",
           "titre": "Ne crains pas la tempête",
           "hira": "<pre><h4 class='padding'>\nNe crains pas la tempête, \nReste tranquille, \nLa Paix viendra.\nRelève donc la tête, \nRegarde à Jésus, \nSois plein de foi.\nQu’importe l’adversaire, \nChasse la crainte, \nIl est vaincu.\nAu nom puissant de Jésus, \nL’ennemi s’enfuit, \nTu es vainquer !</h4></pre>"
           },
           {
           "num" : "331",
           "titre": "Quand le vol de la tempête",
           "hira": "<pre><h4 class='padding'>\n1.  Quand le vol de la tempête\n     Vient assombrit ton ciel bleu, \n     Au lieu de baisser la tête, \n     Compter les bienfaits de Dieu.\n\n2.  Quand sur la route glissante\n     Tu chancelles sous ta croix, \n     Pense à cette main puissante\n     Qui t’a béni tant de fois.\n\n3.  Si tu perds dans le voyage\n     Plus d’un cher et doux trésor, \n     Pense au divin héritage\n     Qui là-haut te reste encore.\n\n4.  Bénis donc, bénis sans cesse\n     Ce Père qui chaque jour\n     Répand sur toi la richesse\n     De son merveilleux amour.\n\n          Compte les bienfaits de Dieu, \n          Mets-les tous devant tes yeux, \n          Tu verras, en adorant, \n          Combien le nombre en est grand.</h4></pre>"
           },
           {
           "num" : "332",
           "titre": "Jésus revient, alléluia",
           "hira": "<pre><h4 class='padding'>\n1.  Jésus revient, alléluia (bis)\n     Seras-tu prêt quand Il viendra, \n\n          Alléluia, alléluia.\n\n2.  Seras-tu prêt quand Il viendra (bis)\n     Si tu es prêt, Il te prendra.\n\n3.  Si tu es prêt, Il te prendra (bis)\n     Et avec Lui tu règneras.\n\n4 – Et avec Lui tu règneras (bis)\n     En Lui tu te réjouiras.\n\n5.  En Lui tu te réjouiras(bis)\n     Et à ses pieds tu te tiendras, \n\n6.  Et à ses pieds tu te tuendras (bis)\n     En entonnant : Alléluia.</h4></pre>"
           },
           {
           "num" : "333",
           "titre": "Seigneur, je ne sais",
           "hira": "<pre><h4 class='padding'>\n1.  Seigneur, je ne sais\n     Où Tu me diriges\n     Non, je ne vois pas le chemin\n     Tracée devant moi, \n     La route est cachée\n     Mais en Toi j’ai ma confience\n     Oui jusqu’à la fin.\n\n2.  Si la voie passe\n     A travers la tristesse\n     Et si je n’en vois pas la fin\n     Ou si la route est bordée\n     De tentations\n     En Toi j’ai mis ma confiance\n     Oui jusqu’à la fin.\n\n          Je ne vois pas le chemin\n          Je ne vois pas en avant\n          Je ne sais pas où mes pieds\n          Seront emmenés.</h4></pre>"
           },
           {
           "num" : "334",
           "titre": "Lorsqu’on est jeune",
           "hira": "<pre><h4 class='padding'>\n1.  Lorsqu’on est jeune\n     On danse et l’on rit\n     On rêve de grands exploits\n     On aime, on chante\n     Tout nous sourit\n     Mais il nous faut faire un choix.\n\n          Chante ô, jeunesse\n          Ton Dieu, ton Roi\n          C’est Lui qui nous mène\n          Au but à coup sûr\n          A Lui la flamme de notre foi\n          Notre cœur qu’il veut rendre pur.\n\n2.  Vous les amis\n     Quel sens a pour vous\n     La vie et son dur combat\n     En Christ, on trouve\n     La clef de tout\n     Sa grâce affermit nos pas.\n\n3.  Vous les amis, \n     Pourquoi cette peur\n     Quand passe soudain la mort\n     Christ est vivant\n     C’est le grand vainqueur\n     Il peut rendre libre et fort.\n\n4.  Vous les amis\n     Comment donc bâtir\n     Un monde qui soit meilleur\n     Il est un chef\n     Qu’il nous faut servir\n     C’est Christ, \n     Le seul vrai Sauveur.</h4></pre>",
             "mark": "© COPYRIGHT LIGUE POUR LA LECTURE DE LA BIBLE, 1010 LAUSANNE, SUISSE, AVEC AUTORISATION)"
           },
           {
           "num" : "335",
           "titre": "Quel ami fidèle et tendre",
           "hira": "<pre><h4 class='padding'>\n1.  Quel ami fidèle et tendre\n     Nous avons en Jésus Christ, \n     Toujours prêt à nous entendre, \n     A répondre à notre cri !\n     Il connaît nos défaillances, \n     Nos chutes de chaque jour, \n     Sévère en ses exigences, \n     Il est riche en son amour.\n\n2.  Quel fidèle et tendre\n     Nous avons en Jésus Christ\n     Toujours prêt à nous comprendre\n     Quand nous sommes en souci !\n     Disons- lui toutes nos craintes, \n     Ouvrons- Lui tout notre cœur.\n     Bientôt ses paroles saintes\n     Nous rendront le vrai bonheur.\n\n3.  Quel ami fidèle et tendre\n     Nous avons en Jésus christ\n     Toujours prêt à nous défendre\n     Quand nous presse l’ennemi !\n     Il nous suit dans la mêlée, \n     Nous entoure de ses bras, \n     Et c’est Lui qui tient l’épée\n     Qui décide des combats.\n\n4.  Quel ami fidèle et tendre\n     Nous avons en Jésus Christ\n     Toujours prêt à nous apprendre\n     A vaincre en comptant sur Lui !\n     S’il nous voit vrais et sincères\n     A chercher la sainteté, \n     Il écoute nos prières\n     Et nous met en liberté.\n\n5.  Quel ami fidéle et tendre\n     Nous avons en Jésus Christ\n     Bientôt Il viendra nous prendre\n     Pour être au ciel avec Lui.\n     Suivons donc l’étroite voie\n     En comptant sur son sécours.\n     Bientôt nous aurons la joie\n     De vivre avec Lui toujours !</h4></pre>"
           },
           {
             "num" : "336",
             "titre": "Veux –tu briser",
             "hira": "<pre><h4 class='padding'>\n1.  Veux –tu briser\n     Du péché le pouvoir, \n     La force est en Christ (bis)\n     Si dans ton cœur\n     Tu veux Le recevoir :\n     La force est dans le sang de Christ.\n\n          Je suis fort, fort !\n          Oui, plus que vainqueur\n          Par le sang de Jésus !\n          Je suis fort, fort !\n          Oui, plus que vainqueur\n          Par le sang de Jésus mon Sauveur.\n\n2.  Veux-tu braver\n     Et la mort et l’enfer, \n     La force est en Christ (bis)\n     Jésus d’un mot\n     Fait tomber tous les fers\n     La force est dans le sang de Christ.\n\n3.  Veux-tu marcher\n     Toujours pur, triomphant ?\n     La force est en Christ (bis)\n     Pour te garder, \n     Jésus est tout puissant :\n     La force est dans le sang de Christ.\n\n4.  Veux-tu du ciel\n     T’approcher chaque jour ?\n     La force est en Christ (bis)\n     Avec Jésus\n     Demeurer pour toujours ?\n     La force est deans le sang de Christ.</h4></pre>",
             "mark": "(TIRÉ DES CHANTS DE VICTOIRES)"
           },
          {
            "num" : "337",
            "titre": "Si tu confesses tes péchés",
            "hira": "<pre><h4 class='padding'>\n1.  Si tu confesses tes péchés (3)\n     Je te pardonnerai.\n\n2.  Le sang de Christ peut rendre pur (3)\n     Le cœur le plus mauvais.\n\n3.  Je garderai ton coeur en paix (3)\n     En moi confie-toi\n\n4.  Dans ta faiblesse mon enfant (3)\n     Ma grâce te suffit.\n\n5.  Et si tu passes par le feu (3) (3)\n     Avec toi je serai.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL - CHŒURS JOYEUX)"
          },
          {
            "num" : "338",
            "titre": "What a Friend",
            "hira": "<pre><h4 class='padding'>\n1.  What a Friend\n     We have in Jesus\n     All our sins\n     And griefs to bear\n     What a privilege\n     To carry\n     Everything to\n     God in prayer!\n     Oh what peace\n     We often forfeit, \n     O what needless\n     Pain we bear, \n     All because we\n     Do not carry\n     Everything to\n     God in prayer!\n\n2.  Have we trials\n     And temptations?\n     Is there trouble\n     Anywhere?\n     We should never\n     Be discouraged, \n     Take it to the\n     Lord in prayer, \n     Can we find\n     A friend so faithful\n     Who will all\n     Our sorrows share?\n     Jesus knows\n     Our every weakness, \n     Take it to the\n     Lord in prayer.\n\n3.  Are we weak\n     And heavy laden, \n     Cumbered whith\n     A load of care?\n     Precious Saviour\n     Still our refuge\n     Take it to the\n     Lord in prayer\n     Do thy friends\n     Despise, frsake thee?\n     Take it to the\n     Lord in prayer;\n     In his arms He’ll take\n     And shield thee, \n     Thou wilt find\n     A solace there.</h4></pre>"
          },
          {
            "num" : "339",
            "titre": "Iza no hanompo",
            "hira": "<pre><h4 class='padding'>\n1.  Iza no hanompo\n     An’i Jeso soa ?\n     Iza no hanaiky\n     Mba ho Azy moa?\n     He, ny hatsrany, \n     He ny antra be!\n     Fa Izy ta-hamonjy, \n     Ka meteza re !\n\n          Jeso Tomponay ô !\n          Indreto izahay\n          Avy mba hanaiky, \n          Ka mandraisa anay.\n\n2.  Iza re no mety, \n     Iza re lazao, \n     Hanome ny fony\n     Mba ho Azy izao?\n     He miantso mafy\n     Jeso Tompo tia\n     Izay rehetra mety, \n     O! avia, avia!\n\n3.  Iza no mba sahy, \n     Sahy ao am-po\n     Ho miaramila\n     Fehin’i Jeso?\n     Iza no hiady\n     Ady tsara re, \n     Fa ny fahavalo dia marobe?\n\n4.  Iza re no homba\n     Azy ankehitrio\n     Mba hamonjy ireny \n     Azon’ny manjo?\n     Iza no hihafy\n     Sady hanome, \n     Andro, hery, saina?\n     Mamalia e!\n\n5.  Iza no hazoto\n     Mba hiasa moa?\n     Iza no handroso\n     Mba ho hendry koa?\n     Iza no hanaiky, \n     Iza re? Lazao\n     Mba ho an’I Jeso\n     Izao anio izao?</h4></pre>"
          },
          {
            "num" : "340",
            "titre": "‘Njao misy feo",
            "hira": "<pre><h4 class='padding'>\n‘Njao misy feo\nAny an’efitra manao hoe :\nAmboary ny lalan’I jehovah\nAtaovy mahitsy \nNy lalan-kalehany\nInjany misy miteny\nManao hoe :\nMiantsof’aza hatsahatra\nAkory izany antsonao\nAhoana anefa no antso ataoko\nFa ahitra ihany\nNy nofo rehetra\nTahaka ny vonin-javatra\nNy hatsarany \nMaina ny ahitra\nMalazo ny Voniny\nFa ny Teninao\nNo haharitra mandrakizay.\n\n1.  Ry Ziona ‘zay mitondra\n     Ny teny soa \n     Miakara any\n     An-tendrombohitra avo\n     Ka aoka hasandratra\n     Ny feonao\n     Aza matahotra\n     Fa miantsoa mafy ianao.\n\n2.  Ianao no iraka\n     Solon’ny Tompo\n     Hitondra\n     ‘Lay fampihavanana so\n     Hampihavana\n     Ny olona amin’ny Ray\n     Nandraisanao\n     ‘Lay fiainana mandrakizay.</h4></pre>"
          },
          {
            "num" : "341",
            "titre": "Ary nandre feo aho niantso hoe",
            "hira": "<pre><h4 class='padding'>\n1.  Ary nandre feo aho niantso hoe :\n     «  O! iza no hirahiko, \n     Ary iza no handeha ho irakay\n     Mba hamonjy ny oloko  ».\n\n          Inty aho (2) Jesosy ô!\n          Iraho aho (2)\n          Inty aho (2) Jesosy ô!\n          Fa vonona hanompo Anao\n          Ny baikonao sisa\n          Andrasako Tompo ô!\n          Fa vonona aho izao\n          Ho vonona hanao izay sitrakao\n          Ka inty iraho aho Jeso.\n\n2.  Ho vavolombelonao Tompoô!\n     No tiako (2)\n     Ho vonona hanao ‘zay sitrakao\n     Ka inty iraho aho Jeso</h4></pre>"
          },
          {
            "num" : "342",
            "titre": "Reko izao ry Tompo",
            "hira": "<pre><h4 class='padding'>\n1.  Reko izao ry Tompo, \n     Izany antsonao, \n     Miantso izany mpanompo\n     Mba ho irakao!\n\n          Inty! Inty!\n          Inty aho Jeso!\n          Inty! Inty!\n          Iraho aho Jeso!\n          Ekeko re, \n          Ny ho miaramilanao\n          Ho vonona hanao \n          Ny sitrakao ka iraho! \n\n2.  O! diovy Tompo\n     Izany molotro\n     Ka ny fo madio hanompo\n     No atolotro!\n     Inty aho, sns.\n\n3.  Tsy handeha irery;\n     Fa hiaraka aminao!\n     Ka dia mba omeo ny hery\n     Sy ny Fanahinao!\n     Inty aho, sns.\n\n4.  Reko izao ny toky hoe :\n     «  Momba ahy Ianao  »\n     Ry Jesosy Tompo sy Zoky\n     Vonona aho izao.\n     Inty aho, sns</h4></pre>"
          },
          {
            "num" : "343",
            "titre": "Mahagaga tokoa",
            "hira": "<pre><h4 class='padding'>\n1.  Mahagaga tokoa\n     Raha tsarovana izao\n     Ny fitantanan’I Kristy Jeso\n     Moa va tsy ny lalana\n     Itondrany anao\n     No mitondra ny fiadanam-po?\n\n          Araka izay noraisinao\n          Meteza izao\n          Ho fitaovan-kizara hasoavana\n          Tahaka ny nitiavan’ i\n          Kristy anao\n          Mandehana amin’ny fitiavana.\n\n2.  Mba hevero anie\n     Ny nanavotanao anao\n     Tao anatin’ny ali-maizina\n     Na ny ainy aza mantsy\n     Dia nafoiny ho anao\n     Mba hahavelona anao\n     Mandrakizay.\n\n3.  Itodiho indray\n     Ny manodidina anao\n     Maro ‘reo mila fitiavana\n     Moa va tsy\n     Ny hazavana aposakao\n     Hitarafany Ilay Mpanavotrao?</h4></pre>"
          },
          {
            "num" : "344",
            "titre": "Maro ireo tanora",
            "hira": "<pre><h4 class='padding'>\n1.  Maro ireo tanora \n     Izay miraparapa \n     Ao anatin’ny aizina ao\n     Mitambesatra ny ota\n     Ka tsy zaka\n     Fahoriana re no ao.\n\n          Iza kosa no hilanja\n          Ny fanilo ho azy ireo\n          Izay hampahiratra\n          Tokoa ny jamba\n          Ka ho vonjy ho azy ireo\n\n2.  Fahafatesana\n     No toerana hitobiany\n     Lavitra ny fiainana\n     Tsy mba misy\n     Fanavotana itokiany\n     Manome fiadanana.\n\n3.  Fa Jesosy no efa\n     Maty ho azy ireo\n     Ka mitondra fiainana\n     ‘Zay mandray dia sahy\n     Manandratra ny feo\n     Fa manam-piadanana.</h4></pre>"
          },
          {
            "num" : "345",
            "titre": "Mitoria an’i Jeso Kristy",
            "hira": "<pre><h4 class='padding'>\nMitoria an’i Jeso Kristy\nMitoria mandra-piaviny\nAntso ho an’ny fiangonana\nTsy an-kanavaka\nHitondra ny Filazantsara\nFilazantsara manontolo\nHo an’ny olona eran-tany, \nNy olona rehetra.</h4></pre>"
          },
          {
            "num" : "346",
            "titre": "Mitoria ny teny soa",
            "hira": "<pre><h4 class='padding'>\n1.  Mitoria ny teny soa\n     Lazao ny hatsaran’i Jeso\n     Io no vonjy mahasoa\n     Ny rehetra tiany avokoa\n\n2.  Aza mba matahotra\n     Mandrosoa mazotoa ianao\n     Tompon-dakan-danitra\n     Momba anao, miahy ny ainao.</h4></pre>"
          },
          {
            "num" : "347",
            "titre": "Iza no ho iraka",
            "hira": "<pre><h4 class='padding'>\nIza no ho iraka\nHilaza teny soa\nTeny fiainana\nMitondra ny hasambarana\nIza no ho iraka\nHitondra vaovao mahafaly koa\nHo an’ireo izay mitady\nNy fiadanam-po.\n\nInty iraho aho\nRy Tompo tia ô !\nRaiso ho fiasananao\nHitory ny asanao\nHo sambatra tokoa\nIty taninay ity\nRaha toa ny olonao\nManaiky ho irakao.</h4></pre>"
          },
          {
            "num" : "348",
            "titre": "Endrika sariaka no",
            "hira": "<pre><h4 class='padding'>\n1.  Endrika sariaka no\n     Anompoako Anao\n     Jehovah Ray\n     Fa tapaka ny hevitro\n     Izaho dia olonao \n     Mandrakizay\n     He, ny foko afa-jaly, \n     Tena ravo sady falifaly, \n\n          Ka : endrika sariaka no\n          Anompoako Anao, \n          Jehovah Ray.\n\n2.  Fa tsaroan’izany saiko\n     Mandra-maty ho tadidiko, \n     Ny nanavotanao ny aiko, \n     Ilay fanahy sarobidiko.\n     Fa nomena fahendrena\n     Izay ekena fa ny famonjena, \n     Ka :endrika, sns\n\n3.  Be ny zavatra mihatra\n     Mampahory sy mandrera-po ;\n     Kanefa ireny tsy handratra, \n     Ny arovanao ry Ilay Tsitoha.\n     Fa ny fony, tena tony\n     Tsy mba kivy, \n     Tsy mba taitra intsony, \n     Ka : endrika sariaka, sns.\n\n4.  Misy ve ny mampanahy\n     Sy ny zava-manahirana ?\n     He, tsy kivy ny Fanahy\n     Fa hijoro, ka ho mirana.\n     Fa Jehovah, Ray mahery, \n     Miandany sady koa mijery\n     Ka : endrika sariaka, sns.</h4></pre>"
          },
          {
            "num" : "349",
            "titre": "Fitiavana Ianao",
            "hira": "<pre><h4 class='padding'>\n1.  Fitiavana Ianao\n     Ry Tompo Andriamanitra ô\n     Manaiky hiara-monina aminay\n     Fatra-pandà ny teninao\n     Hatramin’izay \n     Tsy mba reraka Ianao\n     Raha mibitsika aminay hoe :\n     «  Mba modia  »\n     Nanaiky ho faty Ianao\n     Hisolo ny helokay\n     Mba ho isan’ny \n     Ankohonanao ‘zahay.\n\n2.  Fiarova-mahatoky\n     Sy Mpamonjy akaiky Ianao Jeso\n     Tsy mba mandà\n     Izay rehetra miantso\n     Ny anaranao sy mino Anao\n     Indrisy anefa Tompo\n     Manadino anao ‘zahay\n     Rehefa faly\n     Kanefa tsy miova Ianao\n     Maneho ny fitiavanao.\n     Satria tsy sitrakao\n     Ny hahavery anay.\n\n3.  Satriko ry Jeso Tompo\n     Ny hitoetra eo anilanao\n     Ny androko sisa\n     Mbola omenao ahy\n     Hiasako ho anao, \n     Hanompoako Anao\n     Ireo mivelona amin’ny ota\n     Tsy mba manam-piadanana fa ory\n     Ilazako fa miandry Ianao\n     Te hamonjy azy koa\n     Te hanome fiainam-baovao.</h4></pre>"
          },
          {
            "num" : "350",
            "titre": "Izaho ity ry Jeso",
            "hira": "<pre><h4 class='padding'>\n1.  Izaho ity ry Jeso, \n     Raha nanolo-tena\n     Tena ho Anao an-tsitrapo\n     Tsy noterena\n     Nanaiky aho hanara-dia\n     Anao Tompo tia\n     Mivoady hiasa ho Anao\n     Mandrakizay doria.\n\n          Handeha hamoa voa tsara\n          Mba ho voninahitrao\n          Hitory teny mahafaly\n          Hilaza ny hatsaranao\n          Ny fiainana rehetra\n          Izay natolotra Anao\n          No haneho sy hanambara\n          Fa fitiavana Ianao.\n\n2.  ‘Zahay ireto Jeso\n     Lasa mpisakaiza\n     Mpirahalahy, mifankatia\n     Mifampitaiza\n     Ny teninao ianaranay\n     No mampiorina\n     Ny sampana ‘zay tsy mamoa\n     Dia esorina.\n\n3.  Navelanao ‘zahay ry Tompo\n     Ho sedraina\n     Mifampahery hatrany hatrany\n     Velon’aina \n     Ny tanjona tratrarinay\n     Fankatoavana \n     An-tananao ny fiainanay\n     Ka hasambarana.</h4></pre>"
          },
          {
            "num" : "351",
            "titre": "Ny fanoloran-tenanao sakaiza",
            "hira": "<pre><h4 class='padding'>\n1.  Ny fanoloran-tenanao sakaiza\n     Mila fanavaozana\n     Fomba fitorinao ry sakaiza\n     Mila fanavaozana koa\n     Vavaka ataonao ry sakaiza\n     Mila fanavaozana.\n\n          Koa dia eritrereto ihany\n          Ary koa\n          Dinidiniho tsara\n          Ry sakaiza\n\n2.  Izato fiainanao ry sakaiza\n     Mba aoreno tsara\n     Faingafaingano ihany ry sakaiza\n     Sao ianao tara\n     Mba araraoty ihany ny fotoana\n     Sao nenina any am-para\n\n3.  Io fanavaozana io ranabavy\n     Tsoriko aminao\n     Io fanorenana io rahalahy\n     Ambarako aminao\n     Tsy vitan’ny herin-tena\n     na ny saina\n     Fa Jeso no tena aina.</h4></pre>"
          },
          {
            "num" : "352",
            "titre": "Fitiavana mandrakizay",
            "hira": "<pre><h4 class='padding'>\n1.  Fitiavana mandrakizay\n     Ny fitiavanao ry Mpamonjy\n     Fa niaretanao izay nataoko\n     Eny na dia mafy aza izany ;\n     Naharitra hatrany Ianao\n     Nandatsaka ny ranao soa\n     Hanavotr’ity efa very\n     Hamerina ny efa nania.\n\n          Tiako ny eo akaikinao Jeso (2)\n          Ka hiara-mamindra Aminao tokoa\n          Hery ho ahy ny fitiavanao\n          Fifaliako rahatrizay.\n\n2.  He satriko hibanjina hatrany\n     ‘Lay hazo nijalianao\n     He tiako ho tsaroana hatrany\n     ‘Reo kapoka niaretanao\n     F’ireny rehetra ireny\n     Nentinao hamonjena ahy\n     Hahazo fiainam-baovao\n     Ilay efa nomaninao.\n\n3.  Anio aho mamerin’indray\n     Hanaraka Anao ho doria\n     Ho Anao aho ry Tompo malala\n     Ho Anao e ! ny fiainako ety, \n     Koa raiso ny fiainako anio\n     Ho mendrika ny lapanao\n     Amboary aho ka ahitsio\n     Hanao izay sitrakao.</h4></pre>"
          },
          {
            "num" : "353",
            "titre": "Faingàna ajoroy ny faneva",
            "hira": "<pre><h4 class='padding'>\n1.  Faingàna ajoroy ny faneva\n     Ry tanoran’i Jerosalema\n     Faingàna areheto ny jiro\n     Hanazava ny lala-mankao.\n     Faingàna, faingàna e, \n\n          Faingàna ry namako ô !\n          Andao e, andao e\n          Hanatona ny Tompo izao.\n\n2.  Ny dimy dia adala satria re\n     Tsy mba niomana solika soa\n     Nony tonga ilay fampakarana\n     Dia voahidy ny lala-mankao.\n\n3.  Ny dimy dia hendry satria\n     Efa niomana solika soa\n     Tanteraka sy lavorary\n     Ny lalan-kizora-mankao.\n\n4.  Ry tanora ‘zay mbola sondrina \n     Mandalo izao fiainana izao\n     Faingàna fa aza variana\n     Hatòny Ilay Tomponao.</h4></pre>",
            "mark": "MT 25 : 1 - 13"
          },
          {
            "num" : "354",
            "titre": "Iza no hahasaraka ahy",
            "hira": "<pre><h4 class='padding'>\n1.  Iza no hahasaraka ahy, \n     Aminao, ry Jeso ô?\n     Tompo tia nanavotra ahy, \n     Ianao ry Kristy ô!\n\n          Ka loza ve sa mosary\n          Sa fanenjehana mafy ?\n          «  Ny fahafatesana aza, eny, \n          Eny, tsy hamoizako Anao  ».\n\n2.  Iza no hahasaraka ahy\n     Amin’ny fitiavanao?\n     He! Ny foko tsy manahy, \n     Tafatoetra ao aminao!\n\n3.  Ny finoana no ampinga\n     Ny Baiboly sabatra\n     Ka manoatra ny mpandresy\n     Amin’ny alalanao.\n\n4.  Ry Jesosy feno hery\n     Tano aho ho Anao, \n     Ry Mpamonjy olom-bery, \n     Vonona aho hanoa Anao!</h4></pre>"
          },
          {
            "num" : "355",
            "titre": "Miorina sy mampianatra",
            "hira": "<pre><h4 class='padding'>\n1.  Miorina sy mampianatra\n     ‘zay no tena filamatra\n     Hhay hifahatra\n     Amin’Ilay Mpanavotra\n     Hizara koa ‘Zay marina.\n\n          Fa izay re no baiko, \n          (Fa izay tokoa re no bailkonao)\n          Ka mba tanteraho\n          (Ka mba ataovy ho tanteraka)\n          Raha manao izany ianao, \n          (Raha manao am-po tokoa ianao)\n          Dia ho mpianatr’i Kristy.\n\n2.  Efa nomena ianao\n     Ka andao mba hizara koa\n     Ka araraoty re izao andronao\n     Ka torio ‘lay teny soa.\n\n3.  Koa tandremo ny tenanao\n     Sy ny fampianaranao\n     Mba hiorina sy hifahatra\n     Amin’Andriamanitra.</h4></pre>"
          },
          {
            "num" : "356",
            "titre": "He dera sy laza, (atolotra Anao)",
            "hira": "<pre><h4 class='padding'>\nHe dera sy laza, (atolotra Anao)\nRy Tompo Mpanjaka\nFa he taona maro, nitahianao anay\n(Ka faly sy ravo ankehitriny)\n‘Zahay velon’aina\nMahare ilay feo hoe :\nNdeha, hoy Ianao, itodiho ny lasa\nIbanjinanareo ny hoavy.\n\n1.  Moa tsy olom-bitsy ihany, \n     Ry Tompo \n     No notendrenao hiasa.\n     Nomenao baiko hitory, \n     Hanambara ny Filazantsara.\n     Nataon’ireo mpianatra namany\n     Ho adala fa hoe tsy manan-katao.\n     Nitory hatrany tsy kivy ireo\n     Noho ny Teninao.\n\n2.  Vokatra maro no azon’ireo, \n     Fa be no nanolotena.\n     Tsy vitan’izany nomenao saina\n     Hanamasina tena.\n     Nohavaozinao ny fo sy ny saina\n     Ary koa ireo toe-panahy\n     I Jeso Mpamonjy\n     Nanjary Mpanjaka\n     Sy Tompon’ny fiainanay.\n\n3.  Ankehitriny indreto izahay\n     Manatrika Anao eto indray\n     Tsy vitsy intsony fa maro\n     Ry Tompo no vonon-kandray.\n     Ireto toro-hevitra avy Aminao\n     Ny amin’ny asa sy ny fiainanay\n     Jeso ô! Teeno fa vonon-kanoa\n     Sy hanompo Anao izahay.</h4></pre>"
          },
          {
            "num" : "357",
            "titre": "Misikìna ary aoka",
            "hira": "<pre><h4 class='padding'>\nMisikìna ary aoka\nHirehitra ny jironareo\nDia Jeso Ilay hazavana soa\nHanapaka ao am-po.\n\n1.  Ny famonjena avy Aminy :\n     Manafaka ny ota, \n     Mampianatra hitia\n     An’Ilay Ray, Zanaka ary fanahy\n     Ary ny Teniny : miaro, mitahy.\n\n2.  Ireo talenta tsara anananao\n     Ampitomboy\n     Ho entina mitory hoe :\n     Jeso Mpamonjy sy Mpisoronabe\n     Vohay varavarana fa tia Anao.</h4></pre>"
          },
          {
            "num" : "358",
            "titre": "Publiez bien haut",
            "hira": "<pre><h4 class='padding'>\n1.  Publiez bien haut\n     La grande nouvelle\n     Le ciel s’est ouvert\n     A tout être humain.\n     La route est tracée, \n     Un guide fidèle\n     Vous conduira par la main.\n\n          Le salut pour tous, \n          Le salut par grâce, \n          A tous est offert, \n          A tous est donné, \n          Oh ! vevez pécheurs ;\n          Venez, le temps passe.\n          Et vous serez pardonnés.\n\n2.  Publiez bien haut\n     La grande novelle :\n     Le sang de Jésus\n     A tout effacé.\n     Où que vous soyez, \n     C’est vous qu’il avez offensé.\n\n3.  Publiez bien haut\n     La grande nouvelle :\n     Au loin comme au près\n     Faites-la courir, \n     Partout où se trouve\n     Une âme rebelle\n     Un pécheur à secourir.</h4></pre>"
          },
          {
            "num" : "359",
            "titre": "C’est vers Toi",
            "hira": "<pre><h4 class='padding'>\n1.  C’est vers Toi\n     Que je me tourne\n     Je veux marcher\n     Dans tes voies\n     J’élève mes mains\n     Pour te rencontrer\n     Mon cœur désire te chanter, \n     Pour bénir et célèbrer\n     Ton saint nom\n     Car tu est fidèle et bon.\n     Seigneur, ô Seigneur\n     Je veux te donner\n     Seigneur, ô Seigneur\n     Ma vie à jamais.\n\n2.  Mes yeux contemplent\n     Ta gloire\n     Ta vie ranime ma foi, \n     Ta paix est ta joie\n     Inondent mon cœur, \n     Toi seul fais\n     Tout mon bonheur\n     Je veux proclamer\n     Que tu est celui\n     Qui chaque jour nous bénit.\n     Seigneur, ô Seigneur, \n     Je veux partager\n     Seigneur, ô Seigneur, \n     Ton éternité.</h4></pre>",
            "mark": "(REPRODUIT AVEC AUTORISATION, ALAIN BERGESE 1989)"
          },
          {
            "num" : "360",
            "titre": "Jusqu’à la mort",
            "hira": "<pre><h4 class='padding'>\n1.  Jusqu’à la mort\n     Nous te serons fidèles\n     Jusqu’à la mort \n     Tu seras notre Roi ;\n     Sous ton drapeau\n     Jésus tu nous appelles\n     Nous y mourons\n     En luttant avec foi !\n\n          Jusqu’à la mort\n          C’est notre cri de guerre\n          Le libre cri\n          D’un peuple racheté ;\n          Jusqu’à la mort, \n          Nous aurons pour bannière\n          Ta croix sanglante, \n          O ! Christ ressuscité.\n\n2.  Pour Toi, Jésus, \n     On est heureux de vivre\n     Tous les chemins\n     Avec Toi semblent doux.\n     Agneau de Dieu\n     Qui ne voudrait te suivre\n     Jusqu’à la mort, \n     Toi qui mourus pour nous ?\n\n3.  Jusqu’à la mort, \n     Soumis à ta puissance, \n     Nous voulons vivre\n     Et mourir sous tes lois\n     Toi qui pour nous\n     Poussas l’obéissance\n     Jusqu’à la mort\n     Et la mort de la croix.\n\n4.  Mais, au Sauveur\n     Tu sais notre faiblesse\n     Nous tomberons\n     Sûrement en chemin\n     Si tu ne viens\n     Accomplir ta promesse\n     Jusqu’à la mort\n     Nous tenant par la main.\n\n5.  Que ton Esprit\n     Nous guide et nous anime !\n     Et que ta flamme\n     Embrassant tous nos cœurs\n     Nous devenions\n     Par Toi, Sainte Victime, \n     Sur la mort même, \n     Un peuple de vainqueurs.</h4></pre>",
            "mark": "(REPRODUIT AVEC L’AUTORISATION DES EDITIONS DE L’INSTITUT BIBLIQUE DE NOGENT"
          },
          {
            "num" : "361",
            "titre": "Atreho ny sakafonay",
            "hira": "<pre><h4 class='padding'>\nAtreho ny sakafonay\nJehovah Mpanome ny soa\nVelominao ny tenanay\nNy sainay hatanjaho koa\n\n        Amena!</h4></pre>"
          },
          {
            "num" : "362",
            "titre": "Ry Tompo ô",
            "hira": "<pre><h4 class='padding'>\nRy Tompo ô!\nMba tsofy rano\nNy sakafonay\n\n\n    Amena!</h4></pre>"
          },
          {
            "num" : "363",
            "titre": "Pour ce repas",
            "hira": "<pre><h4 class='padding'>\nPour ce repas, \nPour toute joie\nNous te louons Seigneur\nPar tes bienfaits, \nO Dieu de paix\nTu nous rendras meilleurs.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHOEURS JOYEUX)"
          },
          {
            "num" : "364",
            "titre": "Pour la beuaté de nos chemins",
            "hira": "<pre><h4 class='padding'>\nPour la beuaté de nos chemins\nPour aujourd’hui et pour demain\nEt pour ce pain que nous mangeons\nPour nos amis, nous te louons.</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHOEURS JOYEUX)"
          },
          {
            "num" : "365",
            "titre": "Ndao mba hiaraka aminay",
            "hira": "<pre><h4 class='padding'>\n‘Ndao mba hiaraka aminay (2)\nHiaraka hitady an’i Jeso. \nFifaliany, fifaliany (2) \nFifalian’i Jeso.</h4></pre>"
          },
          {
            "num" : "366",
            "titre": "Abrahama ray",
            "hira": "<pre><h4 class='padding'>\nAbrahama ray\nManan-janaka maro\nZanaka maro \nAn’i Abrahama ray\n‘Zaho anisan’ireny\nIanao koa\n‘Ndeha isika hidera ny Tompo.</h4></pre>"
          },
          {
            "num" : "367",
            "titre": "Fete be ‘ty anjomba Nanahare",
            "hira": "<pre><h4 class='padding'>\nFete be ‘ty anjomba Nanahare\nMivoria iaby ‘tsika ko ahe\nLehibe fahasoava Nanahare\nLe romboy e ho masake.\n\nKosiho (2) am-pandehanane\nBabeo (2) am-pasambarane.</h4></pre>"
          },
          {
            "num" : "368",
            "titre": "Miboika, miboika",
            "hira": "<pre><h4 class='padding'>\nMiboika, miboika\nMiboika ato am-poko\nKa faly aho sy ravo aho\nJesosy no tompoiko\nGaga agamba ianao\nRaha toa ka tsy mangina\nMaraina na hariva\nDia feno fifaliana.\n\nHo lazaiko anao\nSy izao tontolo izao\nNy fifaliana ato am-poko\nSatria velona ny Tompo\nKa ho lazaiko anao\nSy izao tontolo izao\nNy fifaliana omen’i Jeso.</h4></pre>"
          },
          {
            "num" : "369",
            "titre": "Tsy mety miala amin-Janahary",
            "hira": "<pre><h4 class='padding'>\nTsy mety (2) rahavako\nTsy mety miala amin-Janahary\nBaiboly(2), Baiboly masina ê\nBaiboly ê milaza ny marina.\n\n1.  Razambentsika\n     Adama sy Eva\n     Niadam-pinaritra\n     Tanivon’i Edena\n     Kanjo ny niafarany, \n     Haintsika jiaby ê\n     Nanohitra Zanahary, \n     Nandrora nitsilany !\n\n2.  Ngahy Samisony\n     Lava faneva\n     Fadiny sizono\n     Hoy Jehovah\n     Tsy dininy safosafo, \n     Nataon’i Delila\n     Nambarany secret :\n     Nalemy nifotriaka !\n\n3.  Ngahy Davida\n     Mpanjaka malaza\n     Tompon’ny fahefana\n     Tao Jerosalema\n     Nivadika jerin’azy\n     Nahita Batseba\n     Nalefany Oria\n     Maty lagera !\n\n4.  Ngahy Ananiasy\n     Ndraiky Safira\n     Vadin’i Lota koa\n     Nanjary sira\n     Ny antony niaviany, \n     Haintsika jiaby\n     Nanohitra Zanahary ê, \n     Maty bônera a!</h4></pre>"
          },
          {
            "num" : "370",
            "titre": "Jeso Tompo raiso ny foko",
            "hira": "<pre><h4 class='padding'>\nJeso Tompo raiso ny foko\nRaiso Jeso mba ho Anao\nRaiso Jeso raiso ny foko\nRaiso Tompo mba ho Anao.</h4></pre>"
          },
          {
            "num" : "371",
            "titre": "Falifaly e!",
            "hira": "<pre><h4 class='padding'>\nFalifaly e! (falifaly)\nOmady e! (fa velona tika)\nFalifaly e! (falifaly)\nHanafaky e! (ny fahotana)\n\nNatiany é! (afaho)\nHiadane! (mandrakizay)\nMangina é!(Koa tsy atao)\nFaly é (fa velon-tika é).\n\nNy devoly lava ohy raty é!\nNamely antika lahy!\n‘Ty ondaty malay fivavaha\nLe ho may an’afobe.</h4></pre>"
          },
          {
            "num" : "372",
            "titre": "Haleloia",
            "hira": "<pre><h4 class='padding'>\nHaleloia (4)\nHaleloia (4)\n\nNy laza\n  Dia i Kristy\nNy hery\n  Dia i Kristy\nNy marina\n  Dia i Kristy\nNy mazava\n  Dia i Kristy\nNy fitiavana\n  Dia i Kristy\nNy fiainana\n  Dia i Kristy\n        lee! Haleloia (4)\nLa gloire\n  Oui c’est Jésus Christ\nLa puissance\n  Oui c’est Jésus Christ\nLa vérité\n  Oui c’est Jésus Christ\nLa lumière\n  Oui c’est Jésus Christ\nLa paix\n  Oui c’est Jésus Christ\nL’amour\n  Oui c’est Jésus Christ\nLa joie \n  Oui c’est Jesus Christ\nLa vie \n  Oui c’est Jesus Christ\n\n        Oh ! Haleloia (4)\n\nNos joies\n  Tout pour Jésus Christ\nNos soucis \n  Tout pour Jésus Christ\nNos coeur\n  Tout pour Jésus Christ\nNos vies \n  Tout pour Jésus Christ\nNos économies\n  Tout pour Jesus Christ\nLe travail \n  Tout pour Jésus Christ\nNos enfants\n  Tout pour Jésus Christ\nNos mamans \n  Tout pour Jésus christ\nNos papas \n  Tout pour Jésus Christ\nNos grand-pères\n  Tout pour Jesus Christ\nNos grand-mères\n  Tout pour Jésus Christ\nNous tous\n  Tout pour Jesus Christ\n\n        Oh ! Haleloia (4)\n\nHaleloia ! (4)\nNy Mpamonjy\n  Dia i Kristy\nNy Mpandresy\n  Dia i Kristy\nNy Mpanavotra\n  Dia i Kristy\nNy Mpiaro\n  Dia i Kristy\nNy làlana\n  Dia i Kristy\nNy fahamarinana\n  Dia i Kristy \nNy fiainana\n  Dia i Kristy\n\n        Haleloia! Haleloia!\n\nIzaho\n  Ho an’i Kristy\nIanao\n  Ho an’i Kristy\nIsika\n  Ho an’i Kristy\nI Dada\n  Ho an’i Kristy\nI Neny\n  Ho an’i Kristy\nI Zoky\n  Ho an’i Kristy\nI Zandry \n  Ho an’i Kristy\n\n        Haleloia! Haleloia!</h4></pre>"
          },
          {
            "num" : "373",
            "titre": "Misaotra Anao ry Jeso",
            "hira": "<pre><h4 class='padding'>\nMisaotra Anao ry Jeso\nMisaotra Anao ry Jeso\nMisaotra Anao ry Jeso\nEram-po\nMisaotra Anao ry Jeso\nMisaotra Anao ry Jeso\nMisaotra Anao ry Jeso\nEram-po\n\nMerci, merci Jésus\nMerci, merci Jésus\nMerci, merci Jésus\nDe tout coeur\nMerci, merci Jésus\nMerci, merci Jésus\nMerci, merci Jésus\nDe tout coeur\n\nThank you, thank you Jesus\nThank you, thank you Jesus\nThank you, thank you Jesus\nIn my heart\nThank you, thank you Jesus\nThank you, thank you Jesus \nThank you, thank you Jesus\nIn my heart.</h4></pre>"
          },
          {
            "num" : "374",
            "titre": "Chanter au Seigneur",
            "hira": "<pre><h4 class='padding'>\nChanter au Seigneur\nUn chant nouveau \nDansez en son honneur. \n\nJésus est le roi de gloire\nIl est le Seigneur des seigneurs\nJésus est le roi de gloire\nNotre libérateur.</h4></pre>"
          },
          {
            "num" : "375",
            "titre": "Mon Dieu est si grand ",
            "hira": "<pre><h4 class='padding'>\nMon Dieu est si grand !\nSi fort et si puissant\nRien n’est impossible\nA mon Dieu. (2) \n\nLes lacs sont à Lui\nLes monts sont à Lui\nLes cieux sont sa création.</h4></pre>"
          },
          {
            "num" : "376",
            "titre": "Je n’ai ni argent ni or",
            "hira": "<pre><h4 class='padding'>\nJe n’ai ni argent ni or\nMais ce que j’ai\nJe te le donne\n«  Au nom puissant\nDe Jésus Christ de Nazareth\nLève-toi et marche  »\nMarchant et sautant\nEt louant Dieu\n«  Au nom puissant\nDe Jésus Christ de Nazareth\nLève-toi et marche  »</h4></pre>"
          },
          {
            "num" : "377",
            "titre": "Jésus est moi",
            "hira": "<pre><h4 class='padding'>\n1.  Jésus est moi, \n     Je suis à Lui ; \n     Sa bannière c’est l’amour.\n     Sa bannière, sur moi\n     C’est l’amour\n\n2.  Il me conduit\n     Sur les eaux tranquilles \n     Sa bannière c’est l’amour.\n     Sa bannière...\n\n3.  Il me remplit du Saint-Esprit\n     Sa bannière c’est l’amour \n     Sa bannière...\n\n4.  Je vous aime et vous m’aimez\n     Sa bannière c’est l’amour \n     Sa bannière...</h4></pre>"
          },
          {
            "num" : "378",
            "titre": "Quand l’Esprit de Dieu",
            "hira": "<pre><h4 class='padding'>\n1.  Quand l’Esprit de Dieu\n     Agit en moi \n     Je chante comme David \n     Je chante, je chante\n     Je chante comme David. \n\n2.  Je prie comme David\n\n3.  Je loue comme David\n\n4.  Je danse comme David.</h4></pre>"
          },
          {
            "num" : "379",
            "titre": "L’Amour de mon Sauveur",
            "hira": "<pre><h4 class='padding'>\nL’Amour de mon Sauveur\nRemplit tout, \nOui tout mon coeur.\nL’Amour de mon Sauveur\nRemplit tout mon coeur.\nL’Amour de mon Sauveur\nRemplit tout, \nOui tout mon coeur.\nL’Amour de mon Sauveur\nRemplit tout mon coeur...</h4></pre>",
            "mark": "(TIRÉ DU RECUEIL – CHOEURS JOYEUX)"
          },
          {
            "num" : "380",
            "titre": "Il était un homme",
            "hira": "<pre><h4 class='padding'>\n1.  Il était un homme\n     Nommé Nicodème\n     Il aimait Jésus\n     Mais il ne comprenait pas.\n\n          Nicodème ô ! (3)\n          Il faut naître de nouveau.\n\n2.  Eh bien mon ami\n     Viens recevoir Jésus\n     Si tu le reçois\n     Tu naîtras de nouveau.\n\n3.  Veux-tu le royaume\n     Jésus te le donne\n     A cela Il suffit\n     Que tu sois converti.</h4></pre>"
          },
          {
            "num" : "381",
            "titre": "Mon coeur est dans la joie",
            "hira": "<pre><h4 class='padding'>\nJoie ! Joie !\nMon coeur est dans la joie\nJoie ! joie !\nMon coeur est dans la joie\nJésus mon Roi\nEst près de moi \nEt voilà pourquoi\nMon coeur est dans la joie.</h4></pre>"
          },
          {
            "num" : "382",
            "titre": "C’est une belle chose",
            "hira": "<pre><h4 class='padding'>\nC’est une belle chose\nDe servir Jésus (3)\n\n- Marchons dans la lumière de Jésus\n\n- Chantons dans la lumière\n\n- Dansons dans la lumière de Jesus.</h4></pre>"
          },
          {
            "num" : "383",
            "titre": "Nous sommes les soldat",
            "hira": "<pre><h4 class='padding'>\nNous sommes les soldats \nLes soldas de Jésus. (3)\nEt nos pas de soldats\nMarquent les Alleluia. (2)</h4></pre>"
          },
          {
            "num" : "384",
            "titre": "Father Abraham",
            "hira": "<pre><h4 class='padding'>\nFather Abraham\nHas many sons\nHas Father Abraham\nI am one of them\nSo are you\nSo let’s just\nPraise the Lord!\n\n     - Right foot, \n     - Right foot, left foot, \n       Right hand\n       Right foot, left hand, \n       Head on, \n       Right foot, left foot, \n       Right hand, left hand, \n       Head on, turn around, \n       Sit down.</h4></pre>"
          },
          {
            "num" : "385",
            "titre": "Nampenda Yesu",
            "hira": "<pre><h4 class='padding'>\nNampenda Yesu\nTwampenda Yesu\nWampenda Yesu\nSifomungu Amen\nSifomungu Alleluia\nSifomungu Amen. \n\nMoi, j’aime Jésus\nEst-ce que tu aimes Jésus\nNous aimons Jésus\nC’est pourquoi nous le louons\nAcclamons Alleluia \nAcclamons Amen. \n\nI love Jesus\nDo you love Jesus\nWe love Jesus, \nSo we praise our Lord\nPraise the Lord Alleluia\nPraise the Lord Amen.</h4></pre>"
          },
          {
            "num" : "386",
            "titre": "Soki tokolingana ya solo",
            "hira": "<pre><h4 class='padding'>\nSoki tokolingana ya solo (alleluia)\nTokomona Nkembo na Yawe\n\n        O, Nkembo, Nkembo\n        A, a, a, a, a, Nkembo\n        A, a, a, a, a Nkembo\n        (Nkembo)\n        Tokomona Nkembo na Yawe.</h4></pre>"
          },
          {
            "num" : "387",
            "titre": "Nalingi kokende na likolo",
            "hira": "<pre><h4 class='padding'>\nNalingi kokende na likolo (3)\nLikolo na Nzambe \n\nLikolo na Nzambe (2)\nLikolo na Nzambe Alleluia\nLikolo na Nzambe\n\nNalingi komona Messie na ngai (3)\nLikolo na Nzambe.</h4></pre>"
          },
          {
            "num" : "388",
            "titre": "Nzambe aponi yo, osalela ye",
            "hira": "<pre><h4 class='padding'>\nNzambe aponi yo, osalela ye\nNa nzoto mpe na motema\nNa ye mobimba\nNzambe aponia yo.\n\n1.  Tanga na kati ya Bible\n     Denge Yesu aponika Bapostolo\n     Nzambe aponi yo\n     Osalela ye.\n\n2.  Tala elanga ya Nzambe\n     Basali bakimi epai irapi\n     Nzambe aponi yo\n     Osalela ye.\n\n3.  Pesa motema na Nzambe\n     Landa Yesu, mpe mena Ekulusu\n     Nzambe aponi yo\n     Osalela ye.\n\n4.  Yoka lolaka lua Nzambe\n     Epai ya nzomba ya sione\n     Nzambe aponi yo\n     Osalela ye.</h4></pre>"
          },
          {
            "num" : "389",
            "titre": "Ianao izay miasa fatratra",
            "hira": "<pre><h4 class='padding'>\n1.	Ianao izay miasa fatratra, ianao izay mavesatr'etana\n     Torovana sy tena sasatra, ary maina sy mangetana\n     Ianao izay tsisy antenaina, amin'ny ho avy eto an-tany,\n     Ianao izay miady saina, ka tena kivy aok'izany\n\n     Ianao no tiany ka antsoiny, mampangetaheta koa ny fony\n     Tiany homena fitsaharana, tiany homena hasambarana\n     Jesoa Tompo no miantso anao, hanavao ilay fiainanao\n     O! mankanesa any Aminy, handraisanao ny fitiavany\n\n2.	Ianao izay mahantra ka resy tsy mba mahita ny andro tsara\n     Noho ny ady nifanesy, mihevitra fa very anjara\n     Ianao izay lavom-pahotana, ka voahilika ny hafa\n     Ianao izay resin'ny hadalana sy ireo ota tsy voafafa</h4></pre>"
          },
          {
            "num" : "390",
            "titre": "Ny feonay asandratray hiderana Anao",
            "hira": "<pre><h4 class='padding'>\n	Ny feonay asandratray hiderana Anao\n	Ny hira izay ventesinay hisaotra Anao\n\nFa lehibe Ianao, tsy misy toa Anao\nMpanjaka Tsitoha Fitiavana ihany koa\nTsy manam-paharoa, Tompo Mpamindrafo\nIlay Ray mpiahy mpiaro ny fanahy</h4></pre>"
          },
          {
            "num" : "391",
            "titre": "Ny hira izay ho Anao ry Ray",
            "hira": "<pre><h4 class='padding'>\n1.	Ny hira izay ho Anao ry Ray\n     Ny fihobiana asandratray\n     O! Mba henoy, O ! mba henoy\n     Ny haja izay aterinay\n     atolotray ho Anao ry Ray\n     Mba raiso re, mba raiso re\n\n          Fa mendrika ho Anao tokoa,\n          Ianao ilay Ray mpamindrafo\n          Ny saotra sy ny haja\n\n          Mpanjakan'ny mpanjaka Ianao\n          Sy Tompo mpampahery Ianao\n          Deraina Ianao, deraina Ianao\n\n2.	He sambatra tokoa izahay\n     Fa manana Anao ry Ray\n     He sambatra tokoa\n     Ny tombonandro iainanay\n     Dia fitiavanao anay\n     Isaoranay Ianao ry Ray\n     Fa tsy mba manam-paharoa\n     Manome tsara ho any tokoa\n\nIsaoranay Ianao ry Ray\nMpanjakan'ny mpanjaka Ianao\nSy Tompo mpampahery Ianao\nDeraina Ianao, deraina Ianao</h4></pre>"
          },
          {
            "num" : "392",
            "titre": "Izy anie no homem-boninahitra",
            "hira": "<pre><h4 class='padding'>\nIzy anie no homem-boninahitra\nIzy anie no homem-boninahitra\nAtolory ho Azy fa mendrika ho Azy\nNy haja eram-po tsy manam-paharoa\n\nFa Izy no nihavian'izao zavatra rehetr'izao\nAry Izy no mihazona sady Izy koa no antony\n\nIzy anie no homem-boninahitra\nIzy anie no homem-boninahitra\nAtolory Azy fa mendrika ho Azy\nNy haja eram-po tsy manam-paharoa\n\nIlay tena fahazavana, sy feno fahatsarana\nIlay Tompo avo indrindra toky tsy mifindra\nNanome famonjena, Ilay feno fahendrena\nTsy miova hatrizao, mbola tia anao\n\nIzy anie no homem-boninahitra\nIzy anie no homem-boninahitra\nAtolory ho Azy fa mendrika ho Azy\nNy haja eram-po tsy manam-paharoa</h4></pre>"
          },
          {
            "num" : "393",
            "titre": "Namako ô tia anao Jeso",
            "hira": "<pre><h4 class='padding'>\n1.	Namako ô tia anao Jeso, eny tena tia anao izy\n     Namako ô tia anao Jeso, eny tena tia anao izy\n     Namako ô aza lavinao, ny fitiavana natolony\n     Namako ô aza lavinao, ny fitiavana natolony\n\nREF: O ry namako ô, ô ry namako ô\n     Tia anao Jeso !O ry namako ô !\n     O ry namako ô, ô ry namako ô\n     Tia anao Jeso !O ry namako ô !\n\n2.	Namako ô tsy handatsa anao fa hamonjy anao no sitrany\n     Namako ô tsy handatsa anao fa hamonjy anao no sitrany\n     Fianana sy fiadanana no homeny anao raha mino ianao\n     Fianana sy fiadanana no homeny anao raha mino ianao\n\n3.	Namako ô Izy tena tia, tsy miova ny fitiavany\n     Namako ô Izy tena tia, tsy miova ny fitiavany\n     Namako ô sao ho nenina ny fandavanao ny antsoiny\n     Namako ô sao ho nenina ny fandavanao ny antsoiny</h4></pre>"
          },
          {
            "num" : "394",
            "titre": "Tena tsara tokoa Ianao Ianao ry Rainay Tsitoha",
            "hira": "<pre><h4 class='padding'>\n1.	Tena tsara tokoa Ianao Ianao ry Rainay Tsitoha\n     Tena mendrika Ianao nahary izao tontolo izao\n     Feno fahendrena nanome famonjena\n\n          Tena tsara Ianao Tsara Ianao\n          Tsara, mahagaga ny asanao\n          Tsara, tsy misy ny toa Anao\n          Tsara, tsy toha ny herinao\n          Tsara, tsy miova hatramin'izao\n          Tsara, mahagaga ny asanao\n          Tsara, tsy misy ny toa Anao\n          Tsara, tsy toha ny herinao\n          Tsara Ianao\n\n2.	Hira fiderana ho mari-panajana\n     No atolotr'izao, atolotray ho Anao\n     Na tsy mendrika aza, izahay izay mankalaza\n     O henoy ry Tsitoha ka mba raiso</h4></pre>"
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
