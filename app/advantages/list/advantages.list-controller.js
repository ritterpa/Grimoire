'use strict';

app.controller('AdvantagesListCtrl', function ($scope, Advantages) {
    $scope.advantages = Advantages.list;

    $scope.add = function() {
        Advantages.create();
    };

});
