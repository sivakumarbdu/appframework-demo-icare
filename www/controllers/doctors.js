$.mvc.controller.create("doctors", {
    views:{"doctors_tpl":"views/doctors/list.tpl", "header_tpl" :"views/shared/header.tpl"},
    list:function(){
        console.log("init success 33 ")        
        $("#main").html($.template("doctors_tpl",{name:'Doctors list'}));
         $("#header").html($.template("header_tpl",{name:'Doctors list'}));
    },
    init:function(){
        
    },
    default:function(){

       
    },
});
