angular
  .module('app', ['ui.router', 'ngAnimate', 'ngMaterial', 'pascalprecht.translate', 'ngCookies', 'ngSanitize', 'angular-carousel'])
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
      .useLocalStorage()
      .useStaticFilesLoader({
        prefix: 'i18n/locale-',
        suffix: '.json'
      });
      // .useSanitizeValueStrategy(null);
  })
  .controller('menuCtrl', function ($scope, $translate, $timeout) {
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
    };
    $timeout(function () {
      angular.element(document.querySelector('pvs-menu')).addClass('actiu');
    }, 3000);
  })
  .controller('footerCtrl', function ($scope) {
    $scope.any = new Date();
  });
