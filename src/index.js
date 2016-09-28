var english = {
  MENU: {
    HOLA: 'Hello',
    PORTFOLI: 'Portfolio',
    CONTACTA: 'Contact'
  },
  DEVELOPED_FOOTER: 'Developed by'
};

var spanish = {
  MENU: {
    HOLA: 'Hola',
    PORTFOLI: 'Portfolio',
    CONTACTA: 'Contacta'
  },
  DEVELOPED_FOOTER: 'Dessarollado por'
};

var catalan = {
  MENU: {
    HOLA: 'Hola',
    PORTFOLI: 'Portfoli',
    CONTACTA: 'Contacte'
  },
  DEVELOPED_FOOTER: 'Desenvolupat per'
};

angular
  .module('app', ['ui.router', 'ngAnimate', 'ngMaterial', 'pascalprecht.translate', 'ngSanitize', 'angular-carousel'])
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
      .translations('en', english)
      .translations('es', spanish)
      .translations('ca', catalan)
      .useSanitizeValueStrategy('escape');
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
