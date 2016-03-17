(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("eventifier", [
    'eventifier.home',
    'eventifier.about',
    'eventifier.instagram',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
