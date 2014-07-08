'use strict';

describe('Controller: AdvantagesListCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var AdvantagesListCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AdvantagesListCtrl = $controller('AdvantagesListCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
