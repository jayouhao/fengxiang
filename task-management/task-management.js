$(function(){
     //选择任务类型
     $(".mes-typecli").on('click','a',function(){        
        $(".select-type").text($(this).find("label").text())  
    })
    //选择状态 (Status)
    $(".mes-state1").on('click','a',function(){        
        $(".select-state").text($(this).find("label").text())  
    })

    //分页
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

    //查看返回按钮
    $(".check-button").click(function(){
        $(".check").hide();
    })

    //查看详情显示
    $(".data-list").on("click",".seek1-img",function(){
        $(".check").show();
    })

     //单选框点击 time
     $("input[name=time]").click(function(){        
        $(".update-times .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
    //单选框点击 status
    $("input[name=status]").click(function(){        
        $(".status-radio .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //复选框 lsp
     $("input[name=lsp]").click(function(){                
         var dom=$("input[name=lsp]:checked"),arr=[];         
         for(var i=0; i<dom.length; i++){
            arr.push(dom.eq(i).attr("value"));             
         }   
        console.log("你复选了=>", arr);
    })
    //修改返回的
    $(".base").click(function(){
        $(".update").hide();
    })
    //点击修改
    $(".data-list").on("click",".amend-img",function(){
        $(".update").show();
    })
    //点击删除返回的
    $(".remove-base,.remove-x").click(function(){
        $(".remove").hide();
    })
    //点击删除显示
    $(".data-list").on("click",".delete-img",function(){
        $(".remove").show();
    })
    //http点击高级和返回的
    $(".establish-advanced").click(function(){
        if($(this).text()=="高级"){
            $(this).text("返回");
            $(".establish-hides").show();
            $(".establish-police").hide();
        }else{
            $(this).text("高级");
            $(".establish-hides").hide();
            $(".establish-police").show();
        }        
    })
    //ping的高级和返回
    $(".establish-advanced1").click(function(){
        if($(this).text()=="高级"){
            $(this).text("返回");
            $(".establish-hides1").show();            
        }else{
            $(this).text("高级");
            $(".establish-hides1").hide();            
        }        
    })
    //头部选择的
    $(".esta-but").click(function(){
        $(this).css({color: "#fff", background: "#2BA7E0"}).siblings()
        .css({color: "#2BA7E0", background: "#fff"});
        if($(this).text()=="创建HTTP任务"){
            $(".establish-PING").hide();
            $(".establish-http").show();            
        }else{
            $(".establish-http").hide();
            $(".establish-PING").show();            
        }
    })
    //左边导航的
    $(".report").click(function(){
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        if($(this).text()=="任务信息"){
            $(".centent-establish").hide();
            $(".centent-message").show();
        }else{
            $(".centent-message").hide();
            $(".centent-establish").show();
        }
    })
})