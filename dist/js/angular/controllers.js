angular.module('ngConf', [])
  .controller('ngConfController',['$scope', function($scope) {
    var locations = [
      {
        name : "São Paulo",
        cover : "src/images/location/sp.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        live : true,
        name : "San Francisco",
        cover : "src/images/location/sf.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Belo Horizonte",
        cover : "src/images/location/bh.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Brasília",
        cover : "src/images/location/br.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Curitiba",
        cover : "src/images/location/cwb.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Florianópolis",
        cover : "src/images/location/flo.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Porto Alegre",
        cover : "src/images/location/poa.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Recife",
        cover : "src/images/location/rec.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Rio de Janeiro",
        cover : "src/images/location/rj.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Salvador",
        cover : "src/images/location/sal.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "Vitória",
        cover : "src/images/location/vit.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "São Paulo",
        cover : "src/images/location/sp.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "São Paulo",
        cover : "src/images/location/sp.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "São Paulo",
        cover : "src/images/location/sp.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      },
      {
        name : "São Paulo",
        cover : "src/images/location/sp.jpg",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt animi libero voluptatibus eius temporibus, asperiores vitae."
      }
    ];

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
        avatar: 'http://www.ng-conf.org/submissions/angular-behind-the-scenes/profile.jpg',
        url: '#'
      },
      {
        name: 'Rodric Haddad',
        avatar: 'http://www.ng-conf.org/submissions/angular-behind-the-scenes/profile.jpg',
        url: 'http://twitter.com/rodyhaddad'
      },
      {
        name: 'Dave Smith',
        avatar:'shttp://www.ng-conf.org/ubmissions/angular-plus-react-equals-speed/profile.jpg',
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
        avatar: 'submissions/digest-cycle-in-web-worker/profile.jpg',
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
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      },
      {
        name: 'Thomas Burleson',
        avatar: 'http://www.ng-conf.org/submissions/material-tech/profile.jpg',
        url: 'http://twitter.com/ThomasBurleson'
      }
    ]
    $scope.locations = locations;
    $scope.speakers = speakers;
  }]);
          
          <a class="speaker" href="http://twitter.com/" target="_blank"><img class="speaker-image" src="submissions/"><p></p></a>
          
          <a class="speaker" href="http://twitter.com/morewry" target="_blank"><img class="speaker-image" src="submissions/multi-transclude-shadow-dom/profile2.jpg"><p>Rachael L Moore</p></a>
          
          <a class="speaker" href="http://twitter.com/m_gol" target="_blank"><img class="speaker-image" src="submissions/ng-1.3-meets-ng-2.0/profile.jpg"><p>Michał Gołębiowski</p></a>
          
          <a class="speaker" href="http://twitter.com/kentcdodds" target="_blank"><img class="speaker-image" src="submissions/ng-model-options-in-5-minutes/profile.jpg"><p>Kent C. Dodds</p></a>
          
          <a class="speaker" href="http://twitter.com/zizzamia" target="_blank"><img class="speaker-image" src="submissions/ng-tasty/profile.jpg"><p>Leonardo Zizzamia</p></a>
          
          <a class="speaker" href="http://twitter.com/shai_reznik" target="_blank"><img class="speaker-image" src="submissions/ng-wat/profile.jpg"><p>Shai Reznik</p></a>
          
          <a class="speaker" href="http://twitter.com/" target="_blank"><img class="speaker-image" src="submissions/prototyping-yes/profile.jpg"><p>Kelly Knight</p></a>
          
          <a class="speaker" href="http://twitter.com/ginader" target="_blank"><img class="speaker-image" src="submissions/prototyping-yes/profile2.jpg"><p>Dirk Ginader</p></a>
          
          <a class="speaker" href="http://twitter.com/benlesh" target="_blank"><img class="speaker-image" src="submissions/reactive-all-the-things/profile.jpg"><p>Ben Lesh</p></a>
          
          <a class="speaker" href="http://twitter.com/mgonto" target="_blank"><img class="speaker-image" src="submissions/reactive-all-the-things/profile2.jpg"><p>Martin Gontovnikas</p></a>
          
          <a class="speaker" href="http://twitter.com/john_papa" target="_blank"><img class="speaker-image" src="submissions/styleguides/profile.jpg"><p>John Papa</p></a>
          
          <a class="speaker" href="http://twitter.com/IgorMinar" target="_blank"><img class="speaker-image" src="submissions/super-power-management/profile.jpg"><p>Igor Minar</p></a>
          
          <a class="speaker" href="http://twitter.com/DanWahlin" target="_blank"><img class="speaker-image" src="submissions/supercharge-angularjs-apps-with-typeScript-and-es6/profile.jpg"><p>Dan Wahlin</p></a>
          
          <a class="speaker" href="http://twitter.com/AndrewConnell" target="_blank"><img class="speaker-image" src="submissions/supercharge-angularjs-apps-with-typeScript-and-es6/profile2.jpg"><p>Andrew Connell</p></a>
          
          <a class="speaker" href="http://twitter.com/jhusain" target="_blank"><img class="speaker-image" src="submissions/template-binding-to-the-cloud/profile.jpg"><p>Jafar Husain</p></a>
          
          <a class="speaker" href="http://twitter.com/briantford" target="_blank"><img class="speaker-image" src="submissions/the-new-router/profile.jpg"><p>Brian Ford</p></a>
          
          <a class="speaker" href="http://twitter.com/jntrnr" target="_blank"><img class="speaker-image" src="submissions/typescript-and-ng-2.0/profile.jpg"><p>Jonathan Turner</p></a>
          
          <a class="speaker" href="http://twitter.com/yearofmoo" target="_blank"><img class="speaker-image" src="submissions/whats-new-with-nganimate-in-1.4/profile.jpg"><p>Matias Niemela</p></a>
          
        </div>