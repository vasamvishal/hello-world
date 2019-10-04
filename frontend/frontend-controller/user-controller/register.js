
app.controller('registrationcontroller',function($scope,userService)
{
    $scope.onregister = function() {
        var data={firstName:$scope.firstname,
            lastName:$scope.lastname,
            email:$scope.username,
            password:$scope.password,
           
        }
        
        userService.register(data)
        .then(function (response) {
            console.log(response);
        }).catch(function(response) {
            console.log(response);
        })

    }
});

