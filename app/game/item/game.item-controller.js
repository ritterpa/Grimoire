'use strict';

app.controller('GameItemCtrl', function ($scope, Id, Game, $state) {
    $scope.id = Id;
    $scope.game = Game;

    $scope.delete = function()
    {
        $scope.game.$remove();
        $state.go('home');
    };
});
