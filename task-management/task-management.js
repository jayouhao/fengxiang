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
    //
    $(".start-time1").focus(function(){
        $(this).siblings("#schedule-box").show();
        $(this).siblings(".xkes").show();
    })
    $(".start-time2").focus(function(){
        $(this).siblings("#schedule-box1").show();
        $(this).siblings(".xkes1").show();
    })
    $(".start-time3").focus(function(){
        $(this).siblings("#schedule-box3").show();
        $(this).siblings(".xkes3").show();
    })
    $(".start-time4").focus(function(){
        $(this).siblings("#schedule-box4").show();
        $(this).siblings(".xkes4").show();
    })
    $(".start-time5").focus(function(){        
        $(this).siblings("#schedule-box5").show();
        $(this).siblings(".xkes5").show();
    })
    $(".start-time6").focus(function(){
        $(this).siblings("#schedule-box6").show();
        $(this).siblings(".xkes6").show();
    })
    //
    $(".xkes").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box").hide();        
    })
    $(".xkes1").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box1").hide();        
    })
    $(".xkes3").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box3").hide();        
    })
    $(".xkes4").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box4").hide();        
    })
    $(".xkes5").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box5").hide();        
    })
    $(".xkes6").click(function(){
        $(this).hide();
        $(this).siblings("#schedule-box6").hide();        
    })
    //点击设置
    $(".data-set").click(function(){
        location.href="../call-the-police/call-the-police.html?1";
    })
})

var mySchedule = new Schedule({
    el: '#schedule-box',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time1").val(y+'-'+m+'-'+d);
    }    
});
var mySchedule = new Schedule({
    el: '#schedule-box1',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time2").val(y+'-'+m+'-'+d);
    }    
});
var mySchedule = new Schedule({
    el: '#schedule-box3',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time3").val(y+'-'+m+'-'+d);
    }    
});
var mySchedule = new Schedule({
    el: '#schedule-box4',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time4").val(y+'-'+m+'-'+d);
    }    
});
var mySchedule = new Schedule({
    el: '#schedule-box5',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time5").val(y+'-'+m+'-'+d);
    }    
});
var mySchedule = new Schedule({
    el: '#schedule-box6',
    //date: '2018-9-20',
    clickCb: function (y,m,d) {        
        console.log('clickCb','日期：'+y+'-'+m+'-'+d);
        // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
        $(".start-time6").val(y+'-'+m+'-'+d);
    }    
});