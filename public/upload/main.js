var ngApp = angular.module('myApp',[]);

ngApp.controller('myController',function($scope,$http){
    $scope.msg = '¡Hola, angular como estan!';

    $scope.getData = function(){
        return 'quebernet';
    }
    $scope.createTodo = function () {
        $http.post("http://localhost:9000/upload", $scope.formData).then(function successCallback(response){
            $scope.todos = response.data;
            console.log(response);
        })
    };
});