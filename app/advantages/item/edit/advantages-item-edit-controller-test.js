'use strict';

describe('Controller: AdvantagesItemEditCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var AdvantagesItemEditCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdvantagesItemEditCtrl = $controller('AdvantagesItemEditCtrl', {
            $scope: scope
        });
    }));
});
