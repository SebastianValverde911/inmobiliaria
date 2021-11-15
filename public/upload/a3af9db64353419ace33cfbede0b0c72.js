var ngApp = angular.module('myApp',[]);

ngApp.controller('myController',function($scope,$http){
    $scope.msg = '¡Hola, angular como estan!';

    $scope.getData = function(){
        return 'quevernet';
    }
    $scope.createTodo = function () {
        $http.post("http://localhost:9000/", $scope.formData).then(function successCallback(response){
            $scope.todos = response.data;
            console.log("No se si trae algo");
            console.log(response);
        })
    };
});