Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Criteria = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/criteria.tmp",
	defaultContainer : "widget\\:criteria",
	projectName : null,
	projectId : null,

	preRender : function(whereToRender, renderFunction){
		var self = this;
		var api = new Clazz.com.test.widget.API();
		api.request(function(response){
			self.projectName = response.projectName;
			self.projectId = response.projectId;
			renderFunction(this.data, whereToRender);

			console.log("testing");
		});
		
	},

	bindUI : function(){
		$('#project-name-value').text(this.projectName);
	    $('#project-code-value').text(this.projectId);
	},

	postRender : function(){
		
	}


});