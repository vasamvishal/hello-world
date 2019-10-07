var app = angular.module("myApp", ['ui.router'])
app.config(function ($stateProvider) {
    $stateProvider
        .state("login", {
            url: '/login',
            templateUrl: './templates/login.html',
            controller: 'loginController'
        })
        .state("registration", {
            url: '/registration',
            templateUrl: './templates/registration.html',
            controller: 'registrationController'
        })
        .state("forgot", {
            url: '/forgot',
            templateUrl: './templates/forgotpassword.html',
            controller: 'forgotController'
        })
        .state('reset',
            {
                url: "/reset/:token",
                templateUrl: './templates/resetpasword.html',
                controller: "resetController"
            })

})