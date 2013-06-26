/*globals angular*/

angular.module('ng').provider("mediaFilter", function () {
    "use strict";
    
    /**
     * register our filter with specific media settings.
     *
     * these setting scan be changed by injecting mediaFilterProvider into the config function of your module and 
     * chaning the mediaFilterProvider.rules with your own rule key value pairs E.G.
     
     *  angular.module('app').config(['mediaFilterProvider', function (mediaFilterProvider) {
     *      mediaFilterProvider.rules.phone = "(max-width: 500px)";
     *      mediaFilterProvider.rules.huge: = "(max-width: 1500px)";
     *  }]);
     *
     * default values taken from twitter bootstrap : https://github.com/twitter/bootstrap/blob/master/less/responsive-utilities.less
     */
    var filter = {
        rules: {
            desktop : "(min-width: 979px)",
            tablet : "(min-width: 768px) and (max-width: 979px)",
            phone : "(max-width: 767px)"
        }
    };
    
    /**
     * eaxmple for calling filter in HTML
     *
     * ="37 | media:'phone':5 | media:'tablet':10"
     */
    filter.$get = ["$window", function ($window) {
                   
        return function (unchanged, rule, newValue) {
            var mediaQueryString = filter.rules[rule];
            if ($window.matchMedia(mediaQueryString).matches) {
                return newValue;
            } else {
                return unchanged;
            }
        };
    }];
    return filter;
});