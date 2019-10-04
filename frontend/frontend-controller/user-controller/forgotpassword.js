app.controller("forgotpassword", function ($scope) {
    $scope.onpassword = function () {
        var data = {
            password:$scope.password,
            new_password:$scope.new_password
        }
    
    console.log(data);
    }
})