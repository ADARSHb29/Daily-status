Clazz.createPackage("com.test.widget");

Clazz.com.test.widget.Header = Clazz.extend(Clazz.WidgetWithTemplate, {

	templateUrl : "../template/header.tmp",
	defaultContainer : "widget\\:header",

	preRender : function(whereToRender, renderFunction){
		renderFunction(this.data, whereToRender);
	},

	bindUI : function(){

	},

	postRender : function(){
		
	}


});
