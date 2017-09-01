angular.module('shop').service('shopService', function($http){


this.getProds = function(){
  return $http.get('https://practiceapi.devmountain.com/products')
  console.log(result.data)
}

this.getProdDeets = function(id){
  return $http.get('https://practiceapi.devmountain.com/products/' + id)
}





})
