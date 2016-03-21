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
      
      model.barData = model.pieData = {
        data: []
      };

      InstagramAPI.fetchPhotos(tagName).success(function(response) {
        model.data = response.data;

        for(var i=0; i<response.data.length; i++) {
          model.barData.data.push({
            x: i + 1,
            y: [response.data[i].likes.count],
            tooltip: response.data[i].user.username
          });
        }

        response.data.forEach(function(item) {
          model.pieData.data.push({
            y: [item.comments.count],
            tooltip: item.user.username
          });
        });

      });
    };

    model.searchTag = loadInstagram;

    model.barconfig = {
      title: 'Likes per pic - Bar representation',
      tooltips: true,
      labels: true
    };

    model.pieconfig = {
      title: 'Comments per pic - Pie representation',
      tooltips: true,
      labels: false
    };

    init();

    function init() {
        // A definitive place to put everything that needs to run when the controller starts. Avoid
        //  writing any code outside of this function that executes immediately.
    }

  });

}(angular.module("eventifier.instagram")));