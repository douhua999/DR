//1.右侧固定条(客服解答框)
var $alert=$("div.online_word");
$(".dr_quickservice").hover(function(){
     $alert.addClass("fade");
       })
  $(".close").click(function(){
     $alert.addClass("in");
    }) 
//2.当点击客服弹框div时，跳出响应的服务弹框
//先找到要频繁操作的对话框div
  var $jump=$("div.dr_tk");
    $jump.hide();
//单机div.online_word,显示
$("div.online_word>p").click(function(){
  $jump.show();
})
//单机xdiv移除
$("div.dr_tk>.close").click(function(){
  $jump.hide();
})

/*3.单击在线客服，弹出弹框*/ 
var $jump=$("div.dr_tk");
  $jump.hide();
//单机div.online_word,显示
$(".kf_droline").click(function(){
  $jump.show();
})
//单机xdiv移除
$("div.dr_tk>.close").click(function(){
  $jump.hide();
})

//4.预约
var $yuyue=$(".drdate_word");
$(".quick_cort").mouseover(function(){
     $yuyue.addClass("appear");
  })
  $(".quick_cort").mouseleave(function(){
    $yuyue.addClass("disappear");
 })
 //5.购物车
var $shopping=$(".drdate_word1");
$(".quick_cort1").mouseover(function(){
     $shopping.addClass("appear");
  })
  $(".quick_cort1").mouseleave(function(){
    $shopping.addClass("disappear");
 })
//5.订单
var $order=$(".drdate_word2");
$(".quick_cort2").hover(function(){
     $order.addClass("appear");
  })
  $(".quick_cort2").mouseleave(function(){
    $order.addClass("disappear");
 })
  //5.收藏
var $shou=$(".drdate_word3");
$(".quick_cort3").hover(function(){
     $shou.addClass("appear");
  })
  $(".quick_cort3").mouseleave(function(){
    $shou.addClass("disappear");
 })
//6.新人礼
var $gift=$(".drdate_word4");
$(".quick_cort4").hover(function(){
     $gift.addClass("appear");
  })
  $(".quick_cort4").mouseleave(function(){
    $gift.addClass("disappear");
 })
 //6.phone 
var $phone=$(".drdate_word5");
$(".quick_cort5").hover(function(){
     $phone.addClass("appear");
  })
  $(".quick_cort5").mouseleave(function(){
    $phone.addClass("disappear");
 })
 


 
  