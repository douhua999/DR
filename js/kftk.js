//验证手机号 
function check(){
  var gr_tel= $('input[name="gr_tel"]').val();
  var reg=/^1[345789]\d{9}$/;
  if (!reg.test(gr_tel)){
      alert("请输入正确的手机号码！");
      return false;
  }else{
      alert("OK!");
  }
}
//点击客服对话框，出现弹框
//先找到要频繁操作的对话框div
var $alert=$("div.alert");
//var $jump=$("div.dr_tk");
//单机按钮btn为div.alert添加in class
$("#btn").click(function(){
  $alert.addClass("in")
})
//单机x为div移除in class
$("div.alert>.close").click(function(){
  $alert.removeClass("in")
  //$jump.hide()
})