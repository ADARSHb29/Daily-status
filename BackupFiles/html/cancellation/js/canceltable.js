var app = angular.module('myApp', []);
app.controller('ticketsCtrl', function($scope) {
    $scope.names = [
      { "Busno" : "11", "From" : "DLf", "To" : "Guindy","Date":"06/11/2017" },
      { "Busno" : "13", "From" : "Dlf", "To" : "Tambaram","Date":"08/11/2017" },
    ];
});