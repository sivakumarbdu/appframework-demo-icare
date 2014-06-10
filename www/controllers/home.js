$.mvc.controller.create("home", {
    views:{"index_tpl":"views/index.tpl"},
    index:function(){
         $("#backButton").hide()
        var content=$.template("index_tpl",{name:'MVC'});
        console.log("home index ")         
        $("#main").html($.template("index_tpl",{name:'MVC'}));
    },
    init:function(){       
        console.log("home init")   
    },
    default:function(){   
    console.log("home default")      
       
    },
});
