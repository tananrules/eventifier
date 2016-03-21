(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('instagram', {
            url: '/instagram',
            views: {
                "main": {
                    controller: 'InstagramController as model',
                    templateUrl: 'instagram/instagram.tpl.html'
                }
            },
            data:{ pageTitle: 'Instagram' }
        });
    });

}(angular.module("eventifier.instagram", [
    'ui.router',
    'gridshore.c3js.chart',
    'angularCharts',
    'masonry.directives'
    // 'ng-gate8-masonry'
])));
