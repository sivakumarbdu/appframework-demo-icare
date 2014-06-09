$.mvc.controller.create("hospitals", {
    views:{"hospital_tpl":"views/hospitals/list.tpl","header_tpl" :"views/shared/header.tpl"},
    list:function(){         
        console.log("hospitals")
        $("#backButton").show()        
        $("#main").html($.template("hospital_tpl",{name:'Hospitals list'}));
         $("#header").html($.template("header_tpl",{name:'Doctors list'}));
    },
    init:function(){
        console.log("init success 1")         
    },
    default:function(){
    },
});
