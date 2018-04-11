
(()=>{
    /*猜您喜欢，今日推荐，预售切换*/
    var tabs=document.querySelectorAll("[data-toggle=tab]");
    for(var t of tabs){
        t.onclick=e=>{
            e.preventDefault();
        }
        t.onmouseenter=e=>{
            //标签切换
            for(var tmp of tabs){
                tmp.className="";
            }
            e.preventDefault();
            var a=e.target;
            a.className="itm1";
            var achange=document.querySelector("#aChange");  //换一换
            var id=a.dataset.target;
            /*换一换的显示与隐藏*/
            if(id=="#box1"){
                achange.className="active";
            }else{
                achange.className="hidden";
            }
            //猜您喜欢，今日推荐，预售的详情切换
            var div=document.querySelector(id);
            if(div.className=="hidden"){
                /*将当前的显示，其余的隐藏*/
                var a=document.querySelectorAll("[data-toggle=div]");
                for(var tmp of a){
                    tmp.className="hidden";
                }
                div.className="";
             }
        }

    }

    /*焦点图*/
    var divs=document.querySelectorAll(".opa-3");
    for(var f of divs){
        var floorDiv=document.querySelector("[data-toggle=floor-div]");
        f.onmouseenter=e=>{
            e.preventDefault();
            floorDiv.style.display="block";
            // floorDiv.style.top="0px";
        }
        f.onmouseleave=e=>{
            e.preventDefault();
            // progress+=50;
            floorDiv.style.top="114px";
            setTimeout(()=>{
                floorDiv.style.display="none";
                floorDiv.style.top="-114px";
            },300)
        }

    }

 /*艺人，场馆切换*/
    var orderTabs=document.querySelectorAll("[data-toggle=orderTabs]");
    for(var o of orderTabs){
        o.onclick=e=>{
            e.preventDefault(); //阻止艺人，场馆点击的默认行为
        }
        o.onmouseenter=e=>{
            e.preventDefault();
            //艺人场馆标签切换
            var a=e.target;
            for(var tmp of orderTabs){
                tmp.className="";
            }
            a.className="itm2";
            //艺人,场馆详情切换
            var id=a.dataset.target;
            var ul=document.querySelector(id);
            if(ul.className=="hidden"){
                var b=document.querySelectorAll(".order-detail>div ul");
                for(var tmp of b){
                    tmp.className="hidden"
                }
                ul.className="";
            }
        }
    }
 /*大剧场，小剧场切换*/
    var theatres=document.querySelectorAll("[data-toggle=theatre]");
    for(var t of theatres){
        t.onclick=e=>{
            e.preventDefault();
        }
        t.onmouseenter=e=>{
            e.preventDefault();
            //场馆标签切换
            var a=e.target;
            if(a.className=="rtab-dark"){
                for(var t of theatres){
                    t.className="rtab-dark";
                }
                a.className="rtab-active";
            }
            //场馆详情切换
            var b=a.dataset.target;
            var ol=document.querySelector(b);
            var ols=document.querySelectorAll(".rg-con ol");
            console.log(ol);
            if(ol.className=="hidden"){
               for(var tmp of ols){
                   tmp.className="hidden";
               }
               ol.className="live";
            }
        }
    }
    /*跳转到亲子界面*/
var parentOffspring=document.querySelector(".parent-offspring");
    parentOffspring.onclick=e=>{
        e.preventDefault();
        location="classify/classify.html";
    }


 /*楼层显示，放在楼层加载之后*/
    //当滚动到500px的时候，显示class为side-sort的div
    window.onscroll=function(){
        var scrollTop=
            document.documentElement.scrollTop
            ||document.body.scrollTop;
        // console.log(scrollTop);
        if(scrollTop>=500)
            document.querySelector(".side-sort").style.display="block";
        else
            document.querySelector(".side-sort").style.display="none";
    }
 /*楼层滚动*/
    floor1.onclick=function(e){
        //拿a当按钮时,先阻止默认行为
        e.preventDefault();
        // var scrollTop=$(".floor1").offset().top;
        var scrollTop=parseFloat(document.getElementById("FL1").offsetTop);
        // console.log("scrollTop:"+scrollTop);
        moveTo(scrollTop);
    }
    floor2.onclick=function(e){
        //拿a当按钮时,先阻止默认行为
        e.preventDefault();
        // var scrollTop=$(".floor2").offset().top;
        var scrollTop=parseFloat(document.getElementById("FL2").offsetTop);
        moveTo(scrollTop);
    }
    floor3.onclick=function(e){
        //拿a当按钮时,先阻止默认行为
        e.preventDefault();
        // var scrollTop=$(".floor3").offset().top;
        var scrollTop=parseFloat(document.getElementById("FL3").offsetTop);
        moveTo(scrollTop);
    }
    floor4.onclick=function(e){
        //拿a当按钮时,先阻止默认行为
        e.preventDefault();
        // var scrollTop=$(".floor4").offset().top;
        var scrollTop=parseFloat(document.getElementById("FL4").offsetTop);
        moveTo(scrollTop);
    }
    floor5.onclick=function(e){
        //拿a当按钮时,先阻止默认行为
        e.preventDefault();
        // var scrollTop=$(".floor5").offset().top;
        var scrollTop=parseFloat(document.getElementById("FL5").offsetTop);
        moveTo(scrollTop);
    }
    toTop.onclick=function(e){
        e.preventDefault();
        moveTo(0);
    }
    var onService=document.querySelector(".on-service");
    onService.onclick=function(e){
        e.preventDefault();
    }
    var sortDm=document.querySelector(".sort-dm");
    sortDm.onclick=function(e){
        e.preventDefault();
    }
/*楼层滚动动画*/
    var dist=0,dura=500,steps=50,
        interval=dura/steps,step=0,
        moved=steps,timer=null;
    function moveTo(targetTop){//启动移动:
        if(timer==null){//防止动画叠加
            var scrollTop=document.documentElement.scrollTop
                ||document.body.scrollTop;
            dist=targetTop-scrollTop;
            step=dist/steps;
            timer=setInterval(function(){
                window.scrollBy(0,step);
                moved--;
                if(moved==0){
                    clearInterval(timer);
                    timer=null;
                    moved=steps;
                }
            },interval);
        }
    }
/*楼层点亮*/
    var $lift=$(".side-sort-con");
    //为window绑定滚动事件
    $(window).scroll(()=>{
        var scrollTop=$("html,body").scrollTop();
        var $floors=$(".floor");
        $floors.each((i,elem)=>{
            var $f=$(elem);
            if($f.offset().top<(scrollTop+innerHeight/2))
            {
                $lift.find(".on-service:eq("+i+")").find("i").hide()
                    .siblings('.sideTxt').css("display","block");
                $lift.find(".on-service:eq("+i+")").siblings('a')
                     .find('i').css('display',"block")
                    .siblings('.sideTxt').hide();
            }
        })
    })

})();


/*轮播*/
$(()=>{
    var length=$(".banner li").length;
    var index=$(".banner li").index();//初始值为0
    $(".banner li").eq(0).show().siblings().hide();

    /*上一张按钮*/
    $(".slide-main").mouseenter(()=>{
        $(".skip").css("display","block");
    });
    $(".prev").mouseenter(()=>{
        $(".prev").css(
            "background",
            "url('img/banner/slide-main-btns.png') no-repeat 0 -110px"
        );
    });
    $(".prev").mouseleave(()=>{
        $(".prev").css(
            "background",
            "url('img/banner/slide-main-btns.png') no-repeat 0 0"
        );
    });
    /*下一张按钮*/
    $(".slide-main").mouseleave(()=>{
        $(".skip").css("display","none");
    });
    $(".next").mouseenter(()=>{
        $(".next").css(
            "background",
            "url('img/banner/slide-main-btns.png') no-repeat -60px -110px"
        );
    });
    $(".next").mouseleave(()=>{
        $(".next").css(
            "background",
            "url('img/banner/slide-main-btns.png') no-repeat -60px 0"
        );
    });

    /*轮播*/
    var $ul=$(".banner");
    const WAIT=3000,DURA=1000;
    var timer=null;
    // var i=1;
    function move(dir){
        $ul.animate({
            // left:index++
            backgroundImage:`url(img/banner/banner_0${index+1}.jpg)`,
            transition:`all .3s linear`
        },DURA,()=>{
            if(!dir){
                dir=1;
            }
            index+=dir;
            if(index==length){
                index=0;
                $ul.css("backgroudImage",`url(img/banner/banner_01.jpg)`);
            }
            $(".banner li").eq(index).show().siblings().hide();

        })

    }
    var timer=setInterval(move,WAIT);
    /*鼠标移入停止轮播，鼠标移出继续轮播*/
    $(".slide-main").hover(
        ()=>{ clearInterval(timer); timer=null;},
        ()=>{ timer=setInterval(move,WAIT);}
    );
    /*上一张*/
    $("[data-move=left]").click((e)=>{
        e.preventDefault();
        if(!$ul.is(":animated")){
            move(1);
        }
    });
    /*下一张*/
    $("[data-move=right]").click((e)=>{
        e.preventDefault();
        if(!$ul.is(":animated")){
            if(index==0){
                $ul.css("backgroudImage",`url(img/banner/banner_01.jpg)`);
                index=length;
            }
            move(dir=-1);
        }
    })
    $(".box").on("click","li",function(e){
        e.preventDefault();
        var index=$(this).index();
        $(".banner li").eq(index).show().siblings().hide();
    })




});