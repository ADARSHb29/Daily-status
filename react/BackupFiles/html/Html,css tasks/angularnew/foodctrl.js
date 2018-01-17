var foodApp = angular.module('foodApp',[]);
foodApp.controller('foodCtrl',function($scope){
    $scope.foodItems = [{
        name:'Noodles',
        price:'10',
        quantity:'1'
    },
    {
        name:'Pasta',
        price:'20',
        quantity:'2'
    },
    {
        name:'Pizza',
        price:'30',
        quantity:'1'
    },
    {
        name:'Chicken tikka',
        price:'100',
        quantity:'1'
    }];
    $scope.selectedRow = null;  // initialize our variable to null
  $scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
     $scope.selectedRow = index;
  }
});