(function(app) {

    app.controller('InstagramController', function ($scope) {
      // var tag = $scope.search;
      var model = this;
      model.searchTag = loadInstagram;

      init();

      function init() {
          // A definitive place to put everything that needs to run when the controller starts. Avoid
          //  writing any code outside of this function that executes immediately.
      }

      function loadInstagram(tagName){
        var feed = new Instafeed({
            get: 'tagged',
            tagName: tagName,
            accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
            target: 'instafeed',
            sortBy: 'most-recent',
            limit: 33,
            resolution: 'low_resolution',
            template: '<div class="item"><img src="{{image}}"/></div>',
          
          after: function() {
            var elem = document.querySelector('#instafeed');

            var msnry; 

            imagesLoaded(elem, function() {
              msnry = new Masonry(elem, {
                itemSelector: '.item',
                columnWidth: 320,
              });
            });
          }
        }).run();
      }



    });

}(angular.module("eventifier.instagram")));