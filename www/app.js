var app = new $.mvc.app();
app.loadControllers(["hello","hosptals","doctors","services"]); //You can pass in array or a string.  You do not need to reference the .js extension.
  
app.ready(function(){
    // $.mvc.route("hello/");
});