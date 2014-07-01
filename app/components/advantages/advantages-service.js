'use strict';

app.service('Advantages', function Advantages($firebase, firebaseUrl,  AuthService, $state) {
    var advs =   $firebase(new Firebase(firebaseUrl + 'advantages'));

    var service  = {
        create: function() {
            advs.$add({
                gm: AuthService.currentUser.uid,
                name: 'New Advantage',
                text: 'description text',
                flavor: false,
                flavorText: 'Some quote',
                flavorSource: "some guy",
                cost: 100,
                createdBy: AuthService.currentUser.uid
            }).then( function(ref) {
                ref.id = ref.name();
                $state.go('advantages', {gameId: ref.name()});
            });
        },
        list: advs
    };
    return service;
});
