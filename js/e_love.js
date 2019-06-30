$(function(){
    var $banner=$("div.banner");
    var $bannerAdd=$("div.banner-add");
    var $div=$("div.item>div");
    //var $active=$("div.active")
    $div.css("background-size",$banner.width());
    var n=0;
    var spot=function(){
        n+=2
        $("div.active").removeClass("active").next().addClass("active").css("z-index",n).next().css("z-index",n-1);
        $("div.active").prev().remove().appendTo($bannerAdd);
    }
    var timer=setInterval(function(){
        spot()
    },4000)
})