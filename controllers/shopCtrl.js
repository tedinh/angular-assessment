angular.module('shop').controller('shopCtrl', function($scope, shopService, $state){


shopService.getProds().then(function(response){
  $scope.prods = response.data;
  return response.data
  console.log(response)
})



})
