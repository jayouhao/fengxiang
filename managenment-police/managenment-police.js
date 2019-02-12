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
    })
    //选择任务类型
    $(".mes-typecli-d").on('click','a',function(){        
        $(".select-type-d").text($(this).find("label").text());
        $('.mes-typecli-d').hide(); 
    });

    // 新增收货地址
    $('.new-adrees').click(function(){
        $('.new-adr-box').show();
    });

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
    })
})