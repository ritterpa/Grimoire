'use strict';

describe('Service: Advantages', function () {

    // load the service's module
    beforeEach(module('app'));

    // instantiate service
    var Advantages;
    beforeEach(inject(function (_Advantages_) {
        Advantages = _Advantages_;
    }));

    it('should do something', function () {
        expect(!!Advantages).toBe(true);
    });

});
