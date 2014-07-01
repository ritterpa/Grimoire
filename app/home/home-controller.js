'use strict';

app.controller('HomeCtrl', function ($scope, firebaseRef, Games) {

    $scope.games = Games.list;

    $scope.createGame = function () {
        Games.create();
    };


});
