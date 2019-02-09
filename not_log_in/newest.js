$(function(){    
    //选择语言的
    $(".dropdown-menu").on('click','a',function(){
        var dom=$(this).find("label");
        $(".imgok").attr("src",dom.find("img").attr("src"));
        $(".nameok").text(dom.find("span").text())  
    })
     //input框聚焦
    $(".new-seek-rigth input").focus(function(){
        $(".new-seek-rigth img").css({display:"none"});
    })
    $(".new-seek-rigth input").blur(function(){
        var value=$(this).val();
        if(value==""){
            $(".new-seek-rigth img").css({display:"block"});
        }else{
            $(".new-seek-rigth img").css({display:"none"});
        }
    })
    //单选框点击
    $("input[name=dan]").click(function(){        
        $(".new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
    // 分页的
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
    //点击反馈类型的
    $(".button").click(function(){
        $(".buttonBlue").removeClass("buttonBlue");
        $(this).addClass("buttonBlue");
        console.log($(this).text());
    })
    //点击左边导航的
    $(".middle-select").click(function(){
        document.title=$(this).find("p").text();
        var clas=$(this).attr("id");
        $(".select-ok").removeClass("select-ok");
        $(this).addClass("select-ok")
        $(".block").removeClass("block");
        $("."+clas).addClass("block");
        console.log(clas);
    })
})