angular
  .module('app')
  .controller('MainCtrl', function ($scope, $translate) {
    $scope.$watch(
      function (scope) {
        return $translate.use();
      },
      function () {
        $scope.magnificent.slides[1].src = 'img/slide_2'+$translate.use()+'.jpg';
        $scope.magnificent.slides[2].src = 'img/slide_3'+$translate.use()+'.jpg';
      }
    );
    $scope.magnificent = {
      current: 0,
      slides: [
        {
          src: 'img/slide_1.jpg',
          description: 'Marca corporativa'
        },
        {
          src: 'img/slide_2'+$translate.use()+'.jpg',
          description: 'Frase_1'
        },
        {
          src: 'img/slide_3'+$translate.use()+'.jpg',
          description: 'Frase_2'
        }
      ],
      settings: {
        enabled: true,
        interval: 5
      }
    };
  });
