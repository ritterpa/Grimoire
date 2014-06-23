'use strict';

var app = angular.module('app', [ 'ngAnimate', 'ui.router', 'ui.bootstrap', 'restangular', 'textAngular', 'firebase' ]);

app.constant('firebaseUrl', 'https://grimoire.firebaseio.com/' );

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    $locationProvider.html5Mode(false);

    // For any unmatched url, redirect to home state
    $urlRouterProvider.otherwise("/");

    // setup the states
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        })
        .state('game', {
            url: '/game/:gameId',
            templateUrl: 'game/game.html',
            controller: 'GameCtrl',
            resolve: {
                gameId: function ($stateParams) {
                    return $stateParams.gameId;
                }
            }
        })
        .state('home', {
            url: '/',
            templateUrl: '/home/home.html',
            controller: 'HomeCtrl',
            autherization: false
        });

});

app.service('firebaseRef', function(firebaseUrl, $firebase) {
    return new Firebase(firebaseUrl);
});

app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        if (toState.autherization === true && Auth.isLogged === false) {
            // If logged out and transitioning to a logged in page:
            e.preventDefault();
            $state.go('login' );
        }
    });
});

app.filter('unsafe', function($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    }
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind('keydown keypress', function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('customAutofocus', function() {
    return{
        restrict: 'A',

        link: function(scope, element, attrs){
            scope.$watch(function(){
                return scope.$eval(attrs.customAutofocus);
            },function (newValue){
                if (newValue === true){
                    element[0].focus();//use focus function instead of autofocus attribute to avoid cross browser problem. And autofocus should only be used to mark an element to be focused when page loads.
                }
            });
        }
    };
});