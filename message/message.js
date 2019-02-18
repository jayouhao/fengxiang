$(function(){
    // 切换左边导航
    $('.report').click(function(){
        $(this).addClass('reporte8').siblings().removeClass('reporte8');
        var a=$(this).attr('id');
        $('#'+a+'-'+'id').show().siblings().hide();
    });
    // 点击消息列表栏增加类
    $('.meg-list-title button').click(function(){
        $(this).addClass('bton-class').siblings().removeClass('bton-class');
    });
 //分页
 $('#paging-message').jqPaginator({
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
        console.log("你选择的=>", n, "页");
    }
    });
    
    // 点击消息中心切换
    $('.meg-click').click(function(){
        $('.meg-pop-up').toggle();
    });

    $('.meg-state').click(function(){
        $('.meg-tan-box').show();
    })

    // 点击消息弹出框返回
    $('.meg-return,.masge-delet').click(function(){
        $('.meg-tan-box').hide();
    })

})