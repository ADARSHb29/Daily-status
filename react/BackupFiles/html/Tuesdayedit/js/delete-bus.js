

$(document).ready(function(){
	var date_input=$('input[name="date"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	var options={
	format: 'mm/dd/yyyy',
	container: container,
	todayHighlight: true,
	autoclose: true,
	};
	date_input.datepicker(options);
})

app.controller('myCtrl', function($scope)
{
	$scope.busdetails = [];
	$scope.showBusDetails = function(){
		$scope.busdetails = [
			{FROM:'Jani',TO:'Norway'},
			{FROM:'Hege',TO:'Sweden'},
			{FROM:'Kai',TO:'Denmark'}
		];
		
	};
	

});



