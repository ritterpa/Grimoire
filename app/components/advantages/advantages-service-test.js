'use strict';

describe('Service: AdvantagesService', function () {

    // load the service's module
    beforeEach(module('app'));

    // instantiate service
    var Advantages;
    beforeEach(inject(function (_AdvantagesService_) {
        Advantages = _AdvantagesService_;
    }));

    it('should do something', function () {
        expect(!!AdvantagesService).toBe(true);
    });

});
