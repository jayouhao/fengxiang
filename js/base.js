$(function(){

    //页面进入加载内容
    //图片
    var img=[
        "./img/QQ截图20181211105901.png",
        "./img/qinqiu11120201.png",
        "./img/趣头条11120728.png",
        "./img/惠头条1754.png"
    ];
    //内容
    var title=[
        "今日头条极速版",
        "星球联盟",
        "趣头条",
        "惠头条"
    ];
    //邀请码
    var yao=[
        "DESA95VH",
        "A6460435313",
        "无",
        "23140941"
    ]
    var uls=$("ul");
    for(var i=0; i<img.length; i++){
        uls.append(`
        <li>
            <img src="${img[i]}" alt="" ondragstart="return false;">
            <p class="title">${title[i]}</p>
            <p>邀请码：<span class="yao">${yao[i]}</span></p>
        </li> 
        `)
    };

    $(".yao,p").click(function(){        
        var onj=$("input"),vla=$(this).text();      
        vla.includes("：")?
        vla=vla.split("：")[1]:"";        
        onj.val();        
        onj[0].select(vla);
        document.execCommand('copy', false, onj);
        var dom=$(".tan");
        dom.find("span").text(vla);
        dom.css({display:"block"});
        dom.animate({opacity:1});        
        setTimeout(function(){            
            dom.animate({opacity:0});
            setTimeout(function(){
                dom.css({display:"none"});
            },300)
        },800);        
    })
})