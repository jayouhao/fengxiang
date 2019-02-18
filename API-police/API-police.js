$(function(){
    //左边导航的
    $(".report").click(function () {
        $(".reporte8").removeClass("reporte8");
        $(this).addClass("reporte8");
        $("."+$(this).attr("id")).show().siblings().hide();
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
    //选择监控类型
    $(".replaver-api").on('click', 'a', function () {
        $(".select-type1").text($(this).find("label").text())
    })
    //选择监控类型，查询的
    $(".record-type").on('click', 'a', function () {
        $(".select-type2").text($(this).find("label").text())
    })
    
    //分页
    $('#paging').jqPaginator({
        //总页数
        totalPages: 100,
        //显示多少个页码
        visiblePages: 1,
        //当前页
        currentPage: 1,
        prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
        next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
        page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
        onPageChange: function (n) {
            $("#demo2-text").html("当前第" + n + "页");
            console.log("你选择的=>", n, "页");
        }
    });

    //输入分页的
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { // enter 键            
            var num = $(".get-page").val();
            if (num) {
                $('#paging').jqPaginator({
                    //总页数
                    totalPages: 100,
                    //显示多少个页码
                    visiblePages: 1,
                    //当前页
                    currentPage: Number(num),
                    prev: '<li class="prev"><a href="javascript:void(0);"><i class="arrow arrow2"><\/i><<\/a><\/li>',
                    next: '<li class="next"><a href="javascript:void(0);">><i class="arrow arrow3"><\/i><\/a><\/li>',
                    page: '<li class="page"><a href="javascript:void(0);">{{page}}<\/a><\/li>',
                    onPageChange: function (n) {
                        $("#demo2-text").html("当前第" + n + "页");
                        console.log("你选择的=>", n, "页");
                    }
                });
                $(".get-page").val("");
            }
        }
    }


    //////////
    $(".start-time1").focus(function () {
        $(this).siblings("#schedule-box1").show();
        $(this).siblings(".xkes1").show();
    })
    $(".start-time2").focus(function () {
        $(this).siblings("#schedule-box2").show();
        $(this).siblings(".xkes2").show();
    })
    $(".start-time3").focus(function () {
        $(this).siblings("#schedule-box3").show();
        $(this).siblings(".xkes3").show();
    })
    $(".start-time4").focus(function () {
        $(this).siblings("#schedule-box4").show();
        $(this).siblings(".xkes4").show();
    })

    ///////////
    $(".xkes1").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box1").hide();
    })
    $(".xkes2").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box2").hide();
    })
    $(".xkes3").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box3").hide();
    })
    $(".xkes4").click(function () {
        $(this).hide();
        $(this).siblings("#schedule-box4").hide();
    })
/////////
    var mySchedule = new Schedule({
        el: '#schedule-box1',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time1").val(y + '-' + m + '-' + d);
        }
    });
    var mySchedule = new Schedule({
        el: '#schedule-box2',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time2").val(y + '-' + m + '-' + d);
        }
    });
    var mySchedule = new Schedule({
        el: '#schedule-box3',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time3").val(y + '-' + m + '-' + d);
        }
    });
    var mySchedule = new Schedule({
        el: '#schedule-box4',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            console.log('clickCb', '日期：' + y + '-' + m + '-' + d);
            // document.querySelector('#h3Ele').innerHTML = '日期：'+y+'-'+m+'-'+d	
            $(".start-time4").val(y + '-' + m + '-' + d);
        }
    });

    $('#datetimepicker1').datetimepicker({
        datepicker:false,
        format:'H:i',
        step:1
    });
    $('#datetimepicker2').datetimepicker({
        datepicker:false,
        format:'H:i',
        step:1
    });
})