'use strict';

app.controller('LoginCtrl', function ($scope, AuthService) {
    $scope.auth = AuthService;
});
