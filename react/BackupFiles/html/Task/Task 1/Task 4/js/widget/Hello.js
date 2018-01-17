Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Hello = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/hello.tmp",
	defaultContainer : "widget\\:hello",
	projectName : null,
	projectId : null,
	onClickHeader:null,

	initialize : function(){
		this.onClickHeader = new signals.Signal();
	},


	preRender : function(whereToRender, renderFunction){
		var self = this;
		var api = new Clazz.com.test.widget.API();
		api.request(function(response){
			self.projectName = response.projectName;
			self.projectId = response.projectId;
			self.data = {"surplusMembers":response.surplusMembers, "projectName":self.projectName, "projectId":self.projectId}
			renderFunction(self.data, whereToRender);

			console.log("testing");
		});
		
	},
	changeColor : function(color){
		$('#action').css("background-color",color);
	},


	bindUI : function(){
		//$('#project-name-value').text(this.projectName);
	    //$('#project-code-value').text(this.projectId);
	    	var self = this;
		$('#action').hover(function(){
			self.onClickHeader.dispatch("yellow");
		});
		
	},

	postRender : function(){
		
	}


});