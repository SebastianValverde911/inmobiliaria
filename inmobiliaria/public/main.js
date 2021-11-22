var ngApp = angular.module('AppClase17', []);

ngApp.controller('controlado', function ($scope, $http) {

  $scope.insertarUsuario = function () {
    $http
      .post("http://localhost:9000/insertarUsuario", $scope.formData)
      .then(function successCallback(response) {
        $scope.mensaje = response.data;
        console.log(response);
      })
  }

  $scope.registrarInmueble = function () {
    $http
      .post("http://localhost:9000/insertarInmuebles", $scope.formDataInmueble)
      .then(function successCallback(response) {
        $scope.mensaje = response.data;
        console.log(response);
      })
  }

  $scope.registrarUbicacion = function () {
    $http
      .post("http://localhost:9000/insertarUbicacion", $scope.formDataUbicacion)
      .then(function successCallback(response) {
        $scope.mensaje = response.data;
        console.log(response);
      })
  }
})