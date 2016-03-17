(function(app) {

    app.controller('InstagramController', function ($scope) {
        // var tag = $scope.search;
        var model = this;
        // model.searchTag = loadInstagram;

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        }

        var feed = new Instafeed({
            get: 'tagged',
            tagName: 'awesome',
            clientId: 'YOUR_CLIENT_ID'
        });
        feed.run();

        // function loadInstagram(tagName){
        //   var feed = new Instafeed({
        //               get: 'tagged',
        //               tagName: tagName,
        //               accessToken: '6678174.467ede5.205a03ebc4b74d4082823781c3149575',
        //               target: 'instafeed',
        //               sortBy: 'most-recent',
        //               limit: 33,
        //               resolution: 'standard_resolution',
        //     template: '<a title="{{caption}}" class="fancybox" rel="group" href="{{image}}"><img src="{{image}}" title="{{caption}}" /><div id="filter">{{model.filter}}</div><div class="info"><p class="location" ng-model="location"><i class="icon-location"></i>{{location}}</p><p class="user"><i class="icon-user"></i>@{{model.user.username}}</p><p><i class="icon-comment"></i>{{caption}}</p><br><ul><li class="icon-heart">{{likes}} likes<li class="icon-chat">{{comments}} comments</ul></div></a>',
        //     after: function() {
        //       if (!this.hasNext()) {
        //         loadButton.setAttribute('disabled', 'disabled');
        //       }
        //     }
        //   }).run();
        // }



    });

}(angular.module("eventifier.instagram")));