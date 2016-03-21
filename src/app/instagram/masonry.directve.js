(function() {
    "use strict";

    angular.module('masonry.directives', ['ng']).directive('ngGate8Masonry', function($timeout) {
        return function(scope, element, attrs) {

            if (scope.$last){
                $timeout(function () {
                    var masonry;
                    var parent = element.parent();
                    imagesLoaded(parent, function() {
                        masonry = new Masonry(parent[0], {
                            itemSelector: '.grid-item',
                            isAnimated: true,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false
                            },
                            transitionDuration : "0.4s",
                            isResizable: false
                        });
                    });
                });
            }
        };
    });
})();