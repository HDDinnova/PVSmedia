angular
  .module('app')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: 'app/main.html',
      controller: 'MainCtrl'
    })
    .state('contacta', {
      url: '/contacta',
      templateUrl: 'app/contact.html'
    });
}
