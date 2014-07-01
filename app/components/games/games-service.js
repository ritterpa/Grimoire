'use strict';

app.service('Games', function ($firebase, firebaseUrl,  AuthService, $state) {


    var games =   $firebase(new Firebase(firebaseUrl + 'games'));

    var service  = {
        create: function() {
            games.$add({
                gm: AuthService.currentUser.uid,
                title: 'New Game',
                users: [{user: AuthService.currentUser.uid}],
                created: new Date()
            }).then( function(ref) {
                ref.id = ref.name();
                $state.go('games.item', {Id: ref.name()});

            });
        },
        list: games
    };
    return service;
});
