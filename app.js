angular.module('shop', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home.html',
    controller:
  })
})
