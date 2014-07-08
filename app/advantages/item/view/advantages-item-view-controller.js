'use strict';

app.controller('AdvantagesItemViewCtrl', function ($scope, Advantage, id) {
    $scope.advantage = Advantage;
    $scope.id = id;
});
