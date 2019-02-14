$(function(){
    // 切换左边导航
    $('.contenleft p').click(function(){
        $(this).addClass('report').siblings().removeClass('report');
        var a=$(this).attr('id');
        console.log(a+'-id','000')
        $('#'+a+'-'+'id').show().siblings().hide();
    });
    // 充值弹出框
    $('.wapspan').click(function(){
        $('.popup-recharge').show();
    });
    //选择哪种支付方式
    $(".method-img").click(function(){
        $(this).css({boxShadow:"0 0 1px blue"}).siblings().css({boxShadow:"0 0 0"});    
    });

    //取消支付
    $(".canel").click(function(){
        $(".popup-recharge").css({display:"none"});
    });

    //充值
    $(".recharge-button").click(function(){
        $(".popup-recharge").css({display:"block"});  
    });

    // 分页
      // 最新监控告警的分页
      $('#paging').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>",n,"页");
        }
    });
    //我的账单分页
      // 最新监控告警的分页
      $('#paging-id').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>",n,"页");
        }
    });
     //选择任务类型
     $(".mes-typecli").on('click','a',function(){        
        $(".select-type").text($(this).find("label").text())  
    });
   
    // 收支明细导出弹出框
    $('.paymentdtails').click(function(){
        $('.popup-recharge').show();
    });
    $(".delet-x").click(function(){
        $(".popup-recharge").css({display:"none"});
    });
    $('.pay-button').click(function(){
        $('.mes-typecli-d').show();
    });

    
    //选择交易类型
    $(".mes-typecli-d").on('click','a',function(){        
        $(".select-type-d").text($(this).find("label").text());
        $('.mes-typecli-d').hide(); 
    });

    // 发票退票原因选择
    $(".refund-reason").on('click','a',function(){        
        $(".reason-result").text($(this).find("label").text())  
    });
    //发票管理选择区县
    $(".select-type-ul").on('click','a',function(){        
        $(".invoice-type-li").text($(this).find("label").text());
        $(".select-type-ul").hide()
    });

    // 到处个人明细
    $('.up-export').click(function(){
        $('.person-detail').show();
    })
    //点击返回
    $(".detail-return").click(function(){
        $(".person-detail").hide();
    });

    // 发票列表详情
    $('.details').click(function(){
        $('.lists-detail').show();
    });

    //发票列表详情分页
      // 最新监控告警的分页
      $('#lists-paing').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>",n,"页");
        }
    });

    // 点击返回
    $('.lists-return').click(function(){
        $('.lists-detail').hide();
    })


    // 选择省区县隐藏
    $('.invoic-province').click(function(){
        $(".select-li-d").show().siblings('.select-type-ul').hide();
    });
    $('.invoice-county').click(function(){
        $(".select-type-ul").show().siblings('.select-li-d').hide();
    })


    // 新增收货地址
    $('.new-adrees').click(function(){
        $('.new-adr-box').show();
    });


    //新增收货地址选择省
    $(".new-adr-province").on('click','a',function(){        
        $(".new-province-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });
    //新增收货地址选择市
    $(".new-adr-city").on('click','a',function(){        
        $(".new-city-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });

     //新增收货地址选择区县
     $(".new-adr-area").on('click','a',function(){        
        $(".new-area-value").text($(this).find("label").text());
        $(".new-adr-city,.new-adr-area,.new-adr-province").hide()
    });
    // 选择省区县隐藏
    $('.province-bton').click(function(){
        $(".new-adr-province").show().siblings('.new-adr-city,.new-adr-area').hide();
    });
    $('.city-bton').click(function(){
        $(".new-adr-city").show().siblings('.new-adr-province,.new-adr-area').hide();
    });
    $('.area-bton').click(function(){
        $(".new-adr-area").show().siblings('.new-adr-city,.new-adr-province').hide();
    });

    // 发票管理头部导航切换
    $('.invoice-b li').click(function(){
        $(this).addClass('adrclass').siblings().removeClass('adrclass');
        var a=$(this).attr('id');
        $('#'+a+'-'+'id').show().siblings().hide();
    });

    // 发票列表分页
    //我的账单分页
      // 最新监控告警的分页
      $('#paging-invoice').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>",n,"页");
        }
    });
    $('.refund').click(function(){
        $('.invoice-box-tan').show();
    });
    //类型选择
    $(".prot-type").click(function(){
        $(this).addClass("typeclass").siblings().removeClass("typeclass");
    })
    
    //提交
    $(".prot-submit").click(function(){
        $(".in-type-choice").show();
        $('.in-type-messge').hide();
    });
    $('.invoice-b li').click(function(){
        $(".in-type-choice").hide();
        $('.in-type-messge').show();
    });

    // 分页
      // 最新监控告警的分页
      $('#apply-fenye').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 5,
        //当前页
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页<\/a><\/li>',
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i>上一页<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页<i class="arrow arrow3"><\/i><\/a><\/li>',
        last: '<li class="last"><a href="javascript:void(0);">末页<\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>",n,"页");
        }
    });
})