'use strict';

describe('Controller: AdvantagesItemCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var AdvantagesItemCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdvantagesItemCtrl = $controller('AdvantagesItemCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});