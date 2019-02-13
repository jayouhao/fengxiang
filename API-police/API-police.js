$(function(){
    //左边导航的
    $(".report").click(function () {
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        // if($(this).text()=="报警信息"){
        //     $(".centen-police-set").hide();
        //     $(".centen-police-message").show();
        // }else{
        //     $(".centen-police-message").hide();
        //     $(".centen-police-set").show();
        // }
    })
    //类型选择
    $(".prot-type").click(function(){
        $(".prot-type1").removeClass("prot-type1");
        $(this).addClass("prot-type1");
    })
    //个人认证资料
    $(".remove-x").click(function(){
        $(".popup-recharge").hide();
    })
    //提交
    $(".prot-submit").click(function(){
        $(".popup-recharge").show();
    })
})