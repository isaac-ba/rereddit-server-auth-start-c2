app.controller('AuthCtrl', ['$scope','auth','$state', function($scope,auth,$state){
  $scope.user = {};

  $scope.register = function () {
    console.log($scope.user);
    auth.register($scope.user);
    console.log("go home");
    $state.go('home');
  };
}])