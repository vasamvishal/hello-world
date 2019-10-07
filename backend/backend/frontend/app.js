var app=angular.module("myApp",['ui.router'])
app.config(function($stateProvider)
    {
        $stateProvider
        .state("login",{
            url:'/login',
            templateUrl:'./templates/login.html',
            controller:'logincontroller'
        })
        .state("registration",{
            url:'/registration',
            templateUrl:'./templates/registration.html',
            controller:'registrationcontroller'
        })
        .state("forgotpassword",{
            url:'/forgotpassword',
            templateUrl:'./templates/forgotpassword.html',
            controller:'forgotpassword'
        });

    })