$(function(){
    //返回    
    $(".setting-submit").click(function(){
        window.history.back(-1);
    })
    //个人认证资料
    $(".remove-x").click(function(){
        $(".popup-recharge").hide();
    })
    //个人信息
    $(".message-remove-x").click(function(){
        $(".popup-message").hide();
    })
    //企业信息
    $(".firm-message-remove").click(function(){
        $(".firm-message").hide();
    })        
    //提示的    
    $(".hint-amend").click(function(){
        $(".popup-hint").hide();
    })
    //企业提示的    
    $(".firm-amend").click(function(){
        $(".firm-hint").hide();
    })    
    //企业认证的
    $(".firm-remove-x").click(function(){
        $(".firm-recharge").hide();
    })
    //提交
    // $(".prot-submit").click(function(){
    //     $(".popup-recharge").show();
    // })
})