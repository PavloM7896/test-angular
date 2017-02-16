(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http,$scope) {
    var vm = this;
    function getTodos(){
      return $http.get('https://test-node-js-ua.herokuapp.com/todos')
    }
    getTodos().then(function (res) {
      $scope.todos = res.data;
      console.log($scope.todos)
    })

  }
})();
