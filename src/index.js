angular
  .module('app', ['ui.router', 'ngAnimate', 'ngMaterial', 'pascalprecht.translate', 'ngSanitize', 'ksSwiper', 'ngMap'])
  .config(function ($mdThemingProvider, $translateProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey', {
        'default': '400',
        'hue-1': '50'
      })
      .accentPalette('light-blue');
    $translateProvider
      .registerAvailableLanguageKeys(['en', 'es', 'ca'], {
        'en_*': 'en',
        'es_*': 'es',
        'ca_*': 'ca'
      })
      .determinePreferredLanguage()
      .fallbackLanguage('en')
      .useStaticFilesLoader({
        prefix: 'i18n/locale-',
        suffix: '.json'
      })
      .useSanitizeValueStrategy('sanitize');
  })
  .controller('menuCtrl', function ($scope, $rootScope, $translate, $timeout, $window, $mdSidenav) {
    $scope.langs = [
      'CA',
      'ES',
      'EN'
    ];
    $scope.isCurrentLang = function (id) {
      if (id === $translate.use()) {
        return true;
      }
      return false;
    };
    $scope.selOpt = $translate.use();
    $scope.setLang = function () {
      $translate.use($scope.userLang.toLowerCase());
      $rootScope.$broadcast('langChange', $scope.userLang.toLowerCase());
    };
    $timeout(function () {
      angular.element(document.querySelector('pvs-menu')).addClass('actiu');
    }, 1500);
    $scope.port = function () {
      $window.location.href = 'http://pvsmedia.info/portfolio/' + $translate.use() + '/category/portfoli/';
    };
    $scope.blog = function () {
      $window.location.href = 'http://pvsmedia.info/portfolio/' + $translate.use() + '/category/blog/';
    };
    $scope.toggleRight = function () {
      $mdSidenav('right').toggle();
    };
    $scope.close = function () {
      $mdSidenav('right').close();
    };
    // function rightMenu() {
    //   if ($mdSidenav('right').isOpen()) {
    //     $mdSidenav('right').close();
    //   }
    // }
  })
  .controller('footerCtrl', function ($scope) {
    $scope.any = new Date();
  });
