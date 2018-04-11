(()=>{
    function IndexNum(){
        var lis=document.querySelectorAll(".search-page-num li");
        var index = 0;
        for(var i=1;i<lis.length;i++){
            if(lis[i].className == "light search-page"){
                index=lis[i].dataset.num;
                return index;
            }
        }
    }
    var pages=document.querySelector(".pages");
    function load(pno=1) {
        var kw=location.search.split("=")[1];
        var data=(kw?"kw="+kw+"&":"")+`pno=${pno}`;
        ajax({
            type:"get",
            url:"data/product/getProductsByKw.php",
            dataType:"json",
            data:data
        }).then((output)=> {
            var ul = document.querySelector(".search_list");
            var html ="";
            var lists=output.data;
            for(var list of lists){
                html+=`<li>
                <div class="search_img">
                    <a href="#">
                        <img src="${list.sm}" alt="">
                    </a>
                </div>
                <div class="search_txt">
                    <h3>${list.title}</h3>
                    <p class="c3 search_txt_cut">${list.detail}</p>
                    <p class="search_txt_time c3">
                        <a href="#" class="search_txt_time_icon1"></a>
                        <span class="c3">${list.showTime}</span>
                    </p>
                    <p class="c3">
                        <a href="#" class="search_txt_time_icon2"></a>
                        <span>${list.city}-${list.venues}</span>
                    </p>
                    <p class="search_txt_piao c3">
                        <em>${list.price}元</em> 预定
                    </p>
                    <p class="search_txt_line">
                        <a href="#" class="search_txt_time_icon3"></a>
                        <span class="span_txt">电子票</span>
                    </p>
                </div>
                <p class="search_txt_bottom"></p>
            </li>`;
            }
            ul.innerHTML=html;
            var pno=output.pno,pageCount=output.pageCount;
            html="";
            html+=`<ul class="search-page-num">
                    <li  class="search-pagePrev ${pno==1?'gray':''}">上一页</li>`;
            //上上一页
            for(var i=1;i<=pageCount;i++){
                html+=`<li data-num="${i}" class="${pno==i?'light':''} search-page">${i}</li>`;
            }
            html+=`<li  class="search-pageNext  ${pno==pageCount?'gray':''}" data-pageCount="${pageCount}">下一页</li>
                </ul>`;
            pages.innerHTML=html;
        })
    }
    load();
    function prevPage() {
        var num=IndexNum();
        if(num == 1){
            return num;
        }else{
            num --;
        }
        load(num);
    }
    function nextPage() {
        var num=IndexNum();
        var next=document.querySelector(".search-pageNext");
        if(num == next.dataset.pagecount){
            return num;
        }else{
           num++;
        }
        load(num);
    }
    pages.onclick=e=>{
        e.preventDefault();
        var tar=e.target;
        // var num=num();
        if(tar.nodeName == "LI"){
            switch(tar.innerHTML){
                case "上一页":{
                    prevPage()
                }break;
                case "下一页":{
                    nextPage()
                } break;
                default: load(tar.innerHTML);
            }
        }
    };

})()