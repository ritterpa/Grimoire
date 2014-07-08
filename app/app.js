'use strict';

var app = angular.module('app', [ 'ngAnimate', 'ui.router', 'ui.bootstrap', 'restangular', 'textAngular', 'firebase', 'angularMoment']);

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

        .state('advantages', {
            url: '/advantages',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('advantages.list', {
            url: '',
            templateUrl: 'advantages/list/list.html',
            controller: 'AdvantagesListCtrl',
            resolve: {
                Advantages: function($firebase, firebaseUrl, $stateParams )
                {
                    return  $firebase(new Firebase(firebaseUrl + 'advantages') );
                }
            }

        })
        .state('advantages.item', {
            url: '/{id:[^/]*}',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('advantages.item.view', {

            url: '',
            templateUrl: 'advantages/item/view/view.html',
            controller: 'AdvantagesItemViewCtrl',
            resolve: {
                id: function($stateParams )
                {
                    return  $stateParams.id;
                },
                Advantage: function($firebase, firebaseUrl, $stateParams )
                {
                    return  $firebase(new Firebase(firebaseUrl + 'advantages/' + $stateParams.id) );
                }
            }
        })
        .state('advantages.item.edit', {

            url: '/edit',
            templateUrl: 'advantages/item/edit/edit.html',
            controller: 'AdvantagesItemEditCtrl',
            resolve: {
                id: function($stateParams )
                {
                    return  $stateParams.id;
                },
                Advantage: function($firebase, firebaseUrl, $stateParams )
                {
                    return  $firebase(new Firebase(firebaseUrl + 'advantages/' + $stateParams.id) );
                }
            }
        })
        .state('games', {
            url: '/games',
            template: '<div ui-view></div>',
            abstract: true

        })
        .state('games.list', {
            url: '',
            templateUrl: 'game/list/game.list.html',
            controller: 'GameListCtrl'
        })
        .state('games.item', {
            url: '/:Id',
            templateUrl: 'game/item/game.item.html',
            controller: 'GameItemCtrl',
            resolve: {
                Id: function ($stateParams) {
                    return $stateParams.Id;
                },
                Game: function($firebase, firebaseUrl, $stateParams )
                {
                    return $firebase(new Firebase(firebaseUrl + 'games/' + $stateParams.Id) );
                }
            }
        })
        .state('home', {
            url: '/',
            templateUrl: '/home/home.html',
            controller: 'HomeCtrl'
        });

});

app.service('firebaseRef', function(firebaseUrl, $firebase) {
    return new Firebase(firebaseUrl);
});

app.run(function ($rootScope, AuthService) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        if (toState.autherization === true && Auth.isLogged === false) {
            // If logged out and transitioning to a logged in page:
            e.preventDefault();
            $state.go('login' );
        }
    });

    AuthService.loginGoogle(function(){});
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