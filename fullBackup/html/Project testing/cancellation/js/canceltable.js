var radioState = false;
    function test(element){
        if(radioState == false) {
            check();
            radioState = true;
        }else{
            uncheck();
            radioState = false;
        }
    }
    function check() {
        document.getElementById("radioBtn").checked = true;
    }
    function uncheck() {
        document.getElementById("radioBtn").checked = false;
    }
var app = angular.module('myApp', []);
app.controller('ticketsCtrl', function($scope) {
    $scope.names = [
      { "Busno" : "11", "From" : "DLf", "To" : "Guindy","Date":"06/11/2017" },
    ];
});