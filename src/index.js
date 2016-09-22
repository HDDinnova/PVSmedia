var english = {
  MENU: {
    HOLA: 'Hello',
    PORTFOLI: 'Protfolio',
    CONTACTA: 'Contact'
  },
  DEVELOPED_FOOTER: 'Developed by'
};

var spanish = {
  MENU: {
    HOLA: 'Hola',
    PORTFOLI: 'Protfolio',
    CONTACTA: 'Contacta'
  },
  DEVELOPED_FOOTER: 'Dessarollador por'
};

var catalan = {
  MENU: {
    HOLA: 'Hola',
    PORTFOLI: 'Protfoli',
    CONTACTA: 'Contacte'
  },
  DEVELOPED_FOOTER: 'Desenvolupat per'
};

angular
  .module('app', ['ui.router', 'ngAnimate', 'ngMaterial', 'angular-magnificent', 'pascalprecht.translate', 'ngSanitize'])
  .config(function ($mdThemingProvider, $translateProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {
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
