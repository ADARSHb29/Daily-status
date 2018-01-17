$( function() {
    var myVariable = {name: 'pramono', lastName: 'tri suharso', score:6};
    //checkScore(myVariable.score, showAlert);
    request(showDetail);

    function showDetail(response){
    	if(response){
    		var projectName = response.projectName;
	    	var projectCode = response.projectId
	    	$('#project-name-value').text(projectName);
	    	$('#project-code-value').text(projectCode);
    	}
    	
    }
    
    
   

    function request(successCallBack){
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

    function showAlert(msg){
		alert("Result for the score = " + msg);
    }

  });