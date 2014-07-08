'use strict';

describe('Controller: AdvantagesItemViewCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var AdvantagesItemCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdvantagesItemCtrl = $controller('AdvantagesItemViewCtrl', {
            $scope: scope
        });
    }));
});
