$(function () {
    //左边导航的
    $(".report").click(function () {
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        if($(this).text()=="报警信息"){
            $(".centen-police-set").hide();
            $(".centen-police-message").show();
        }else{
            $(".centen-police-message").hide();
            $(".centen-police-set").show();
        }
    })
    //选择报警类型
    $(".mes-typecli").on('click', 'a', function () {
        $(".select-type").text($(this).find("label").text())
    })
    //选择状态 (Status)
    $(".mes-state1").on('click', 'a', function () {
        $(".select-type1").text($(this).find("label").text())
    })
    //分页信息的
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
            console.log("你选择的=>", n, "页");
        }
    });
    //分页报警设置的
    $('#paging1').jqPaginator({
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
    //头部选择的
    $(".esta-but").click(function () {
        $(this).css({ color: "#fff", background: "#2BA7E0" }).siblings()
            .css({ color: "#2BA7E0", background: "#fff" });
        if ($(this).text() == "新增报警设置") {
            $(".police-box").hide();
            $(".add-update").show();
        } else {
            $(".add-update").hide();
            $(".police-box").show();
        }
    })
    //查看返回按钮
    $(".check-button").click(function(){
        $(".check").hide();
    })

    //查看详情显示
    $(".data-operationg").on("click",".seek1-img",function(){
        $(".check").show();
    })
    //修改返回的
    $(".base").click(function(){
        $(".update").hide();
    })
    //点击修改
    $(".data-operationg").on("click",".amend-img",function(){
        $(".update").show();
    })

    //单选框点击 不可报警
    $("input[name=police]").click(function(){        
        $(".radio-police .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 文件大小不一致报警
     $("input[name=file]").click(function(){        
        $(".radio-file .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 故障恢复发送邮件
     $("input[name=malfunction]").click(function(){        
        $(".radio-malfunction .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 速度报警
     $("input[name=speed]").click(function(){        
        $(".radio-speed .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 返回码不一致报警
     $("input[name=return]").click(function(){        
        $(".radio-return .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 md5不一致
     $("input[name=md5]").click(function(){        
        $(".radio-md5 .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
     //单选框点击 302劫持
     $("input[name=hijack]").click(function(){        
        $(".radion-hijack .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })
    //单选框点击 短信报警
    $("input[name=note]").click(function(){        
        $(".radio-note .new-seek-sele-span").removeClass("new-seek-sele-span")
        $(this).siblings(".new-seek-sele").find("span").addClass("new-seek-sele-span");
        console.log("你选择了=>",$(this).attr("value"))
    })    
    //更新页面关闭
    $(".remove-x").click(function(){
        $(".update").hide();
    })
    //点击删除返回的
    $(".remove-base,.remove-x").click(function(){
        $(".remove").hide();
    })
    //点击删除显示
    $(".data-operationg").on("click",".delete-img",function(){
        $(".remove").show();
    })
})