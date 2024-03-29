'use strict';

describe('Controller: GameItemCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var GameItemCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        GameItemCtrl = $controller('GameItemCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
