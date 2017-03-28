angular
  .module('app')
  .controller('MainCtrl', function ($scope, $http, $translate) {
    $http.get("slide.json")
    .then(function (res) {
      $scope.slides = res.data;
      angular.forEach($scope.slides.slides, function (value) {
        var valor1 = 'text1_' + $translate.use();
        var valor2 = 'text2_' + $translate.use();
        value.text1 = value[valor1];
        value.text2 = value[valor2];
      });
    });
    $http.get("slidemobile.json")
    .then(function (res) {
      $scope.slidesmobile = res.data;
      angular.forEach($scope.slidesmobile.slides, function (value) {
        var valor1 = 'text1_' + $translate.use();
        var valor2 = 'text2_' + $translate.use();
        value.text1 = value[valor1];
        value.text2 = value[valor2];
      });
    });
    $scope.$on('langChange', function (event, lang) {
      angular.forEach($scope.slides.slides, function (value) {
        var valor1 = 'text1_' + lang;
        var valor2 = 'text2_' + lang;
        value.text1 = value[valor1];
        value.text2 = value[valor2];
      });
      angular.forEach($scope.slidesmobile.slides, function (value) {
        var valor1 = 'text1_' + lang;
        var valor2 = 'text2_' + lang;
        value.text1 = value[valor1];
        value.text2 = value[valor2];
      });
    });
  });
