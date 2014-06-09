$.mvc.controller.create("services", {
    views:{"services_tpl":"views/services/list.tpl","header_tpl" :"views/shared/header.tpl"},
    list:function(){
       v
        console.log("init success 33 ")
        $("#backButton").show()         
        $("#main").html($.template("services_tpl",{name:'Services list'}));
         $("#header").html($.template("header_tpl",{name:'Doctors list'}));
    },
    init:function(){
            
    },
    default:function(){        
    },
});
