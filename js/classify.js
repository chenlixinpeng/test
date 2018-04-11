(()=>{
    ajax({
        type:"get",
        url:"../data/classify/getDateMsg.php",
        dataType:"json"
    }).then(output=>{
        // console.log(output);
        var ul=document.querySelector(".cal_center ul");
        var html="";
        for(var i=0;i<5;i++){
            html+=`<li></li>`;
        }
        for(var i=0;i<11;i++){
            p=output[i];
            html+=`<li><dl>
                         <dt>
                             <img src="../${p.sm}">
                         </dt>
                     </dl></li>`;
        }
        html+=`<li></li>`;
        html+=`<li>
                    <dl>
                         <dt>
                             <img src="../${output[11].sm}">
                         </dt>
                     </dl>
                </li>`;
        html+=`<li></li>`;
        for(var i=12;i<output.length;i++){
            p=output[i];
            html+=`<li>
                       <dl>
                         <dt>
                             <img src="../${p.sm}">
                         </dt>
                     </dl>
                  </li>`;
        }
        // console.log(html);
        ul.innerHTML=html;
    });
})();
/*轮播*/
$(()=>{
    /*轮播*/
    const LIWIDTH=1366;
    $.get("../data/classify/getClassify.php")
        .then((data)=>{
            var html="";
            for(var img of data){
                html+=`<li>
                        <a href="#" title="${img.title}">
                            <img src="../${img.lg}">
                        </a>
                    </li>`;
            }
            html+=`<li>
              <a href="#" title="${data[0].title}">
                 <img src="../${data[0].lg}">
              </a>
              </li>`;
            var length=data.length;
            var $ul=$(".banner");
            $ul.html(html)
                .css("width",LIWIDTH*(length+1));
            var $ids=$(".indicators");
            $ids.html("<li></li>".repeat(length))
                .children().first().addClass("hover");
            const WAIT=3000,DURA=1000;
            var moved=0,timer=null;
            function move(dir=1){
                moved+=dir;
                $ul.animate({
                    left:-LIWIDTH*moved
                },DURA,()=>{
                    if(moved == data.length){
                        $ul.css("left",0);
                        moved=0;
                    }
                    $ids.children(":eq("+moved+")")
                        .addClass("hover")
                        .siblings().removeClass("hover");
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
                    move();
                }
            });
            /*下一张*/
            $("[data-move=right]").click((e)=>{
                e.preventDefault();
                if(!$ul.is(":animated")){
                    if(moved==0){
                        $ul.css("left",-LIWIDTH*data.length);
                        moved=data.length;
                    }
                    move(-1);
                }
            })

            $ids.on("click","li",function(){
                var $li=$(this);
                var i=$li.index();
                moved=i;
                $ul.stop(true).animate({
                    left:-LIWIDTH*moved
                },DURA,()=>{
                    $ids.children(":eq("+i+")")
                        .addClass("hover")
                        .siblings().removeClass("hover");
                })
            });
        });


    /*上一张按钮*/
    $(".slide-main").mouseenter(()=>{
        $(".skip").css("display","block");
    });
    $(".prev").mouseenter(()=>{
        $(".prev").css(
            "background",
            "url('../img/banner/slide-main-btns.png') no-repeat 0 -110px"
        );
    });
    $(".prev").mouseleave(()=>{
        $(".prev").css(
            "background",
            "url('../img/banner/slide-main-btns.png') no-repeat 0 0"
        );
    });
    /*下一张按钮*/
    $(".slide-main").mouseleave(()=>{
        $(".skip").css("display","none");
    });
    $(".next").mouseenter(()=>{
        $(".next").css(
            "background",
            "url('../img/banner/slide-main-btns.png') no-repeat -60px -110px"
        );
    });
    $(".next").mouseleave(()=>{
        $(".next").css(
            "background",
            "url('../img/banner/slide-main-btns.png') no-repeat -60px 0"
        );
    });



});