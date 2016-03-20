(function(app) {

  app.factory("InstagramAPI", ['$http', function($http) {
    var base = "https://api.instagram.com/v1";
    var accessToken = '1669500472.1677ed0.9d23a61665d246d5b049c0b01f93ae6e';
    
    return {
      fetchPhotos: function(hashtag){
        var request = '/tags/' + hashtag + '/media/recent';
        var url = base + request;
        var config = {
          'params': {
            'access_token': accessToken,
            'callback': 'JSON_CALLBACK'
          }
        };

        return $http.jsonp(url, config);
      }
    };
  }]);

  app.controller('InstagramController', function ($scope, InstagramAPI) {
    var model = this;
    var msnry;

    var loadInstagram = function(tagName) {
      
      model.chartdata = {
        data: []
      };

      InstagramAPI.fetchPhotos(tagName).success(function(response) {
        model.data = response.data;

        for(var i=0; i<response.data.length; i++) {
          model.chartdata.data.push({
            x: i,
            y: [response.data[i].likes.count],
            tooltip: response.data[i].user.username
          });
        }

        // for(i=0; i<document.querySelector('.grid').children.length; i++) {
        //   document.querySelector('.grid').children[i].children[0].style.width = (Math.floor(Math.random() * 3 + 1)) * 100; 
        // }

        imagesLoaded(document.querySelector('.grid'), function() {
          msnry = new Masonry(document.querySelector('.grid'), {
            itemSelector: '.grid-item'
          });
        });
      });
    };

    model.searchTag = loadInstagram;

    model.barconfig = {
      title: 'Likes per user Bar Representation',
      tooltips: true,
      labels: true
    };

    model.pieconfig = {
      title: 'Likes per user Pie Representation',
      tooltips: true,
      labels: false
    };

    init();

    function init() {
        // A definitive place to put everything that needs to run when the controller starts. Avoid
        //  writing any code outside of this function that executes immediately.
    }
    

    // move this function to common directory for DRY (component)
    // function loadInstagram(tagName){
    //   var feed = new Instafeed({
    //       get: 'tagged',
    //       tagName: tagName,
    //       accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
    //       target: 'instafeed',
    //       sortBy: 'most-recent',
    //       limit: 50,
    //       resolution: 'low_resolution',
    //       template: '<div class="item"><img src="{{image}}"/></div>',
        
    //     after: function() {
    //       var elem = document.querySelector('#instafeed');

    //       var msnry;

    //       for(var i=0; i<elem.children.length; i++) {
    //         elem.children[i].children[0].width = Math.floor(Math.random() * 3 + 1) * 100; 
    //       }

    //       imagesLoaded(elem, function() {
    //         msnry = new Masonry(elem, {
    //           itemSelector: '.item'
    //         });
    //       });
    //     }
    //   }).run();
    // }



  });

}(angular.module("eventifier.instagram")));