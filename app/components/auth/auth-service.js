'use strict';

app.service('AuthService', function ($firebaseSimpleLogin, firebaseRef, Restangular) {

    var auth = new $firebaseSimpleLogin(firebaseRef);

    var service = {
        isLoggedIn: false,
        currentUser: null,
        createAccount: function (email, pass, callback) {
            auth.$createUser(email, pass).then(function (user) {
                service.currentUser = user;
                if (callback) {
                    callback(null, user);
                }
            }, callback);
        },
        login: function(email, pass, callback) {
            auth.$login('password', {
                email: email,
                password: pass,
                rememberMe: true
            }).then(function(user) {
                service.isLoggedIn = true;
                service.currentUser = user;
                if( callback ) {
                    callback(null, user);
                }
            }, callback);
        },
        loginGoogle: function(callback) {
            auth.$login('google').then(function(user) {
                service.isLoggedIn = true;
                service.currentUser = user;
                service.createProfile(user.uid, user.email, user.thirdPartyUserData.name, null);
                Restangular.setDefaultHeaders({"Authorization": user.firebaseAuthToken});

                if( callback ) {
                    callback(null, user);
                }
            }, callback);
        },
        logout: function() {
            service.isLoggedIn = false;
            service.currentUser = null;
            auth.$logout();
        },
        createProfile: function( id, email, name, callback) {
            firebaseRef.child('users/'+id).set({email: email, name: name}, function(err) {
                if( callback ) {
                    $timeout(function() {
                        callback(err);
                    })
                }
            });
        }
    }
    return service;
});