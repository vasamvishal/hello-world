var app = angular.module("myApp")

app.controller('logincontroller', function ($scope,userService) {
    $scope.onsubmit = function () {
        var data = {
            email: $scope.username,
            password: $scope.password
        }
        
        
    userService.login(data)
        .then(function (response) {
            console.log(response);
        }).catch(function (response) {
            console.log(response);
        })
    }
});