'use strict';

app.service('Games', function ($firebase, firebaseUrl, AuthService, $state) {

    var games =  $firebase(new Firebase(firebaseUrl + 'games'));
    var service  = {
        create: function() {
            games.$add({gm: AuthService.currentUser.id, users: []}).then( function(ref) {
                $state.go('game', {gameId: ref.name()});
            });
        },
        list: games
    };
    return service;
});
