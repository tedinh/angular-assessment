angular.module('shop').controller('productDetailsCtrl', function($scope, $stateParams, shopService){

$scope.Id = $stateParams.id;

  $scope.getProdDeets = function(){
    shopService.getProdDeets($scope.Id).then(response => {
      $scope.prods = response.data;
    });
  }

  $scope.getProdDeets();
  })
