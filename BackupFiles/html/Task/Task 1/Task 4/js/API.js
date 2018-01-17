Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.API = Clazz.extend(Clazz.Base, {

	request : function(successCallBack){
		$.ajax({
			type : 'GET',
			url : ' http://172.16.7.62:8090/company-dashboard/staffing?searchKey=10372&&searchType=projectId',
			contentType : "application/json",
			data : '',
			timeout : 500000,
			header : {
				'Access-Control-Allow-Headers' : 'x-requested-with',
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'PUT, DELETE, POST, GET'
			},
			error : function(jqXHR) {
				console.log("Error Cannot get repsonse = ", jqXHR)
			},
			success : function(data, status, jqXHR) {
				successCallBack(data);
			}
		});
	}

});