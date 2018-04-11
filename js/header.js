(()=>{
  $(".header").load("header.html",()=>{
    var aSearch=document.querySelector(".search-btn");
    var searchText=document.querySelector(".search-text");
    aSearch.onclick=e=>{
      e.preventDefault();
      if(searchText.value.trim()!=="")
      location="product.html?kw="+searchText.value.trim();
    };
    if(location.search.indexOf("kw=")!=-1){
     searchText.value=decodeURI(location.search.split("=")[1]);
    }
    //console.log(searchText.value);
    searchText.onkeydown=e=>{
      if(e.keyCode==13)
        aSearch.onclick(e)
    }
  });

})()