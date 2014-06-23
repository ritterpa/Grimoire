'use strict';

/**
 * @ngDoc directive
 * @name sgAccess
 * @param {expression} sgAccess
 */
app.directive('sgAccess', function (AuthService) {
        return {
            restrict: 'AE',
            controller : function ($scope) {
                this.isOn = function () {
                    return AuthService.isLoggedIn;
                };
            }
        };
    });

    app.directive('on', function () {
        return {
            restrict: 'AE',
            require: '^sgAccess',
            template: '<div ng-show="isOn()" ng-transclude />',
            replace: true,
            scope: true,
            transclude: true,
            link : function ($scope, element, attributes, sgAccessController) {
                $scope.isOn = sgAccessController.isOn;
            },
        };
    });

app.directive('off', function () {
        return {
            restrict: 'AE',
            require: '^sgAccess',
            template: '<div ng-hide="isOn()" ng-transclude />',
            replace: true,
            scope: true,
            transclude: true,
            link : function ($scope, element, attributes, sgAccessController) {
                $scope.isOn = sgAccessController.isOn;
            },
        };
    });