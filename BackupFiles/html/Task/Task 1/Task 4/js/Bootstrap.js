$(document).ready(function(){
	var hello = new Clazz.com.test.widget.Hello();
		var divisionlistener = new Clazz.com.test.divisionlistener({
		"header": hello
	});
	hello.onClickHeader.add(divisionlistener.changeColor, divisionlistener);
	hello.render();
	
});






