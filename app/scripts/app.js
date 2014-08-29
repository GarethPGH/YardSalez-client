'use strict';

angular.module('yardSalezApp', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router'
]);

angular.module('yardSalezApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'scripts/items/add-item.html'
        });
    });
