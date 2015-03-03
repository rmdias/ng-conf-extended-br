angular.module('ngConf', [])
<<<<<<< HEAD
  .controller('ngConfController',['$scope', '$http', function($scope, $http) {
    var initLocations = function(){
      var doneCallbacks = function(res) {
        $scope.locations = {};
        $scope.locations.options = [];
        $scope.locations.info = res.data;
        for (var i = 0; i < $scope.locations.info.length; i++) {
          if ($scope.locations.info[i].name !== 'Salt Lake City')
            $scope.locations.options.push($scope.locations.info[i].name);
        };
      };
      var failCallbacks = function(res) {
        console.log(res);
      };

      $http.get('/src/page-content/locations.json').then(doneCallbacks, failCallbacks)
    }();

    var initLocationsInfo = function(){
      var doneCallbacks = function(res) {
        $scope.locations.extended = res.data;

        console.log($scope.locations.extended);
      };
      var failCallbacks = function(res) {
        console.log(res);
      };

      $http.get('/src/page-content/locations-info.json').then(doneCallbacks, failCallbacks)
    }();
=======
  .controller('ngConfController',['$scope', function($scope) {
    var locations = [
      // {
      //   name : "São Paulo",
      //   cover : "src/images/location/sp.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // },
      {
        name : "Recife",
        cover : "src/images/location/rec.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        live : true,
        name : "Salt Lake City",
        cover : "src/images/location/slc.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Maceió",
        cover : "src/images/location/maceio.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Aracajú",
        cover : "src/images/location/aracaju.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Belo Horizonte",
        cover : "src/images/location/bh.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      }
      // {
      //   name : "Florianópolis",
      //   cover : "src/images/location/flo.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // },
      // {
      //   name : "Porto Alegre",
      //   cover : "src/images/location/poa.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // },
      // {
      //   name : "Rio de Janeiro",
      //   cover : "src/images/location/rj.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // },
      // {
      //   name : "Salvador",
      //   cover : "src/images/location/sal.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // },
      // {
      //   name : "Vitória",
      //   cover : "src/images/location/vit.jpg",
      //   description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      // }
    ];
>>>>>>> ab375a811c7890b4aec1488f1e4aa9516cd44a9c

    var speakers = [
      {
        name: 'William Scott Moss',
        avatar: 'http://www.ng-conf.org/submissions/$asqwatch-is-real/profile.jpg',
        url: 'http://twitter.com/scotups'
      },
      {
        name: 'James Tamplin',
        avatar: 'http://www.ng-conf.org/submissions/Why-Realtime-Data-Matters/profile.jpg',
        url: '#'
      },
      {
        name: 'Julie Ralph',
        avatar: 'http://www.ng-conf.org/submissions/a11y-easy/profile.jpg',
        url: '#'
      },
      {
        name: 'Rodric Haddad',
        avatar: 'http://www.ng-conf.org/submissions/angular-behind-the-scenes/profile.jpg',
        url: 'http://twitter.com/rodyhaddad'
      },
      {
        name: 'Dave Smith',
        avatar:'http://www.ng-conf.org/submissions/angular-plus-react-equals-speed/profile.jpg',
        url: 'http://twitter.com/djsmith42'
      },
      {
        name: 'Lukas Ruebbelke',
        avatar: 'http://www.ng-conf.org/submissions/badges/profile.jpg',
        url: 'http://twitter.com/simpulton'
      },
      {
        name: 'Geoff Goodman',
        avatar: 'http://www.ng-conf.org/submissions/badges/profile2.jpg',
        url: 'http://twitter.com/filearts'
      },
      {
        name: 'Chirayu Krishnappa',
        avatar: 'http://www.ng-conf.org/submissions/better-i18n-for-your-angular-apps/profile.jpg',
        url: '#'
      },
      {
        name: 'Pascal Precht',
        avatar: 'http://www.ng-conf.org/submissions/better-i18n-for-your-angular-apps/profile2.jpg',
        url: 'http://twitter.com/PascalPrecht'
      },
      {
        name: 'Jen Bourey',
        avatar: 'http://www.ng-conf.org/submissions/building-platforms/profile.jpg',
        url: 'http://twitter.com/jbourey'
      },
      {
        name: 'Victor Savkin',
        avatar: 'http://www.ng-conf.org/submissions/change-detection/profile.jpg',
        url: 'http://twitter.com/victorsavkin'
      },
      {
        name: 'Judy Tuan',
        avatar: 'http://www.ng-conf.org/submissions/community-building/profile.jpg',
        url: 'http://twitter.com/judytuna'
      },
      {
        name: 'Dr. Gleb Bahmutov PhD.',
        avatar: 'http://www.ng-conf.org/submissions/digest-cycle-in-web-worker/profile.jpg',
        url: 'http://twitter.com/bahmutov'
      },
      {
        name: 'Jeff Cross',
        avatar: 'http://www.ng-conf.org/submissions/fast-from-the-start/profile.jpg',
        url: 'http://twitter.com/jeffbcross'
      },
      {
        name: 'Tobias Bosch',
        avatar: 'http://www.ng-conf.org/submissions/fast-from-the-start/profile2.jpg',
        url: 'http://twitter.com/tbosch1009'
      },
      {
        name: 'Katya Eames',
        avatar: 'http://www.ng-conf.org/submissions/how-to-teach-your-kids-angular/profile.jpg',
        url: 'http://twitter.com/KoshkaEames'
      },
      {
        name: 'Adam Bradley',
        avatar: 'http://www.ng-conf.org/submissions/ionic-angular-superpowers/profile.jpg',
        url: 'http://twitter.com/adamdbradley'
      },
      {
        name: 'Brad Green',
        avatar: 'http://www.ng-conf.org/submissions/keynote-day-1/profile.jpg',
        url: 'http://twitter.com/BradlyGreen'
      },
      {
        name: 'Igor Minar',
        avatar: 'http://www.ng-conf.org/submissions/keynote-day-1/profile2.jpg',
        url: 'http://twitter.com/IgorMinar'
      },
      {
        name: 'Miško Hevery',
        avatar: 'http://www.ng-conf.org/submissions/keynote-day-2/profile.jpg',
        url: 'http://twitter.com/mhevery'
      },
      {
        name: 'Rado Kirov',
        avatar: 'http://www.ng-conf.org/submissions/keynote-day-2/profile2.jpg',
        url: 'http://twitter.com/RadoKirov'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Kara Erickson',
        avatar: 'http://www.ng-conf.org/submissions/multi-transclude-shadow-dom/profile.jpg',
        url: 'http://twitter.com/karaforthewin'
      },
      {
        name: 'Rachael L Moore',
        avatar: 'http://www.ng-conf.org/submissions/multi-transclude-shadow-dom/profile2.jpg',
        url: 'http://twitter.com/morewry'
      },
      {
        name: 'Michał Gołębiowski',
        avatar: 'http://www.ng-conf.org/submissions/ng-1.3-meets-ng-2.0/profile.jpg',
        url: 'http://twitter.com/m_gol'
      },
      {
        name: 'Kent C. Dodds',
        avatar: 'http://www.ng-conf.org/submissions/ng-model-options-in-5-minutes/profile.jpg',
        url: 'http://twitter.com/kentcdodds'
      },
      {
        name: 'Leonardo Zizzamia',
        avatar: 'http://www.ng-conf.org/submissions/ng-tasty/profile.jpg',
        url: 'http://twitter.com/zizzamia'
      },
      {
        name: 'Shai Reznik',
        avatar: 'http://www.ng-conf.org/submissions/ng-wat/profile.jpg',
        url: 'http://twitter.com/shai_reznik'
      },
      {
        name: 'Kelly Knight',
        avatar: 'http://www.ng-conf.org/submissions/prototyping-yes/profile.jpg',
        url: '#'
      },
      {
        name: 'Dirk Ginader',
        avatar: 'http://www.ng-conf.org/submissions/prototyping-yes/profile2.jpg',
        url: 'http://twitter.com/ginader'
      },
      {
        name: 'Ben Lesh',
        avatar: 'http://www.ng-conf.org/submissions/reactive-all-the-things/profile.jpg',
        url: 'http://twitter.com/benlesh'
      },
      {
        name: 'Martin Gontovnikas',
        avatar: 'http://www.ng-conf.org/submissions/reactive-all-the-things/profile2.jpg',
        url: 'http://twitter.com/mgonto'
      },
      {
        name: 'John Papa',
        avatar: 'http://www.ng-conf.org/submissions/styleguides/profile.jpg',
        url: 'http://twitter.com/john_papa'
      },
      {
        name: 'Dan Wahlin',
        avatar: 'http://www.ng-conf.org/submissions/supercharge-angularjs-apps-with-typeScript-and-es6/profile.jpg',
        url: 'http://twitter.com/DanWahlin'
      },
      {
        name: 'Andrew Connell',
        avatar: 'http://www.ng-conf.org/submissions/supercharge-angularjs-apps-with-typeScript-and-es6/profile2.jpg',
        url: 'http://twitter.com/AndrewConnell'
      },
      {
        name: 'Jafar Husain',
        avatar: 'http://www.ng-conf.org/submissions/template-binding-to-the-cloud/profile.jpg',
        url: 'http://twitter.com/jhusain'
      },
      {
        name: 'Brian Ford',
        avatar: 'http://www.ng-conf.org/submissions/the-new-router/profile.jpg',
        url: 'http://twitter.com/briantford'
      },
      {
        name: 'Jonathan Turner',
        avatar: 'http://www.ng-conf.org/submissions/typescript-and-ng-2.0/profile.jpg',
        url: 'http://twitter.com/jntrnr'
      },
      {
        name: 'Matias Niemela',
        avatar: 'http://www.ng-conf.org/submissions/whats-new-with-nganimate-in-1.4/profile.jpg',
        url: 'http://twitter.com/yearofmoo'
      }
    ]
    $scope.speakers = speakers;
  }]);