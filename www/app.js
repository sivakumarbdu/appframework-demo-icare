var app = new $.mvc.app();
app.loadControllers(["hospitals","home"]); //You can pass in array or a string.  You do not need to reference the .js extension.
 
 app.ready(function(){  
   	$.mvc.route("home/index");
});