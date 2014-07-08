'use strict';

app.controller('AdvantagesItemEditCtrl', function ($scope, Advantage, id) {
    $scope.advantage = Advantage;
    $scope.id = id;
});
