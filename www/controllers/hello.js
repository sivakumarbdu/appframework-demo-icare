$.mvc.controller.create("hello", {
    views:{"index_tpl":"views/index.tpl"},
    world:function(){
        var content=$.template("index_tpl",{name:'MVC'});
        console.log("init success 33 ")         
        $("#main").html($.template("index_tpl",{name:'MVC'}));
    },
    init:function(){
        $("#backButton").show()
          
    },
    default:function(){         
         $("#main").html($.template("index_tpl",{name:'MVC'}));
    },
});
