'use strict';

app.controller('GameListCtrl', function ($scope, Games) {
    $scope.games = Games.list;

    $scope.add = function() {
        Games.create();
    };

});
