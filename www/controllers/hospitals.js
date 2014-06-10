$.mvc.controller.create("hospitals", {
    views:{"hospital_tpl":"views/hospitals/list.tpl","header_tpl" :"views/shared/header.tpl"},
    list:function(){                 
            console.log("home list")
        $("#main").html($.template("hospital_tpl",{name:'Hospitals list'}));
         $("#header").html($.template("header_tpl",{name:'Doctors list'}));
    },
    init:function(){
        console.log("hospitals init")         
    },
    default:function(){
        console.log("hospitals default")
    },
});
