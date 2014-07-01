'use strict';

app.controller('AdvantagesItemCtrl', function ($scope, Id, Advantage, $state) {
    $scope.advantage = Advantage;
    console.log("here");
    $scope.delete = function()
    {
        $scope.advantage.$remove();
        $state.go('advantages.list');
    };
});
