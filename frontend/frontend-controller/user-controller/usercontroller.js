app.controller("loginController", function($scope,$window,userService)
{
   $scope.onsubmit= () =>
   {
      var data = {
         email : $scope.username,
         password : $scope.password
      }
      userService.login(data).
      then(function(response)
      {
         
         console.log(response.data)
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});

app.controller("registrationController", function($scope,userService)
{
   $scope.onregister = () =>
   {
      var data = {
         firstName:$scope.firstName,
         lastName:$scope.lastName,
         email : $scope.username,
         password : $scope.password
      }
      userService.register(data).
      then(function(response)
      {
         
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});

app.controller("forgotController", function($scope,userService)
{
   $scope.submit = () =>
   {
      var data = {
         email : $scope.email,
      }
      userService.forgot(data).
      then(function(response)
      {
         
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});

app.controller("resetController", function($scope,userService)
{
   $scope.onsubmit = () =>
   {
      var data = {
         password:$scope.old,
         password_new:$scope.new
      }
      userService.resetPassword(data).
      then(function(response)
      {
        
         console.log(response.data);
      }).catch(function(response)
      {
         console.log(response.data);
      })
   }

});