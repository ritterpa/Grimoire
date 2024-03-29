'use strict';

describe('Controller: GameListCtrl', function () {

    // load the controller's module
    beforeEach(module('app'));

    var GameListCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        GameListCtrl = $controller('GameListCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
