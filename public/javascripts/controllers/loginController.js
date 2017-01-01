app.controller('LoginCtrl', ['$scope','auth','$state', function($scope,auth,$state){


  $scope.login = function(){
    console.log($scope.user);
    auth.login($scope.user).then(function(){
      $state.go('home');
    });
  };

}]);