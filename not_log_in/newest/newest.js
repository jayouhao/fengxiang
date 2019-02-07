$(function(){    
    //选择语言的
    $(".dropdown-menu").on('click','a',function(){
        var dom=$(this).find("label");
        $(".imgok").attr("src",dom.find("img").attr("src"));
        $(".nameok").text(dom.find("span").text())  
    })
})