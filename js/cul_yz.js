//品牌文化，姓名手机号验证
//姓名

function check_naph(){
  var txtName=$('input[name="yy_name"]').val();
  var txtName_reg=/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\s]{1,20})$/;
    if (!txtName_reg.test(txtName)){
      alert("请填写正确的用户名！");
      return false;
    }
}
//失去input手机号焦点(验证手机号)
var $jump=$("#txtphone");
$jump.blur(function(){
var txtPhone=$('input[name="yy_phone"]').val();
var txtPhone_reg= /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
  if (!txtPhone_reg.test(txtPhone)){
    alert("请填写正确的手机号码！");
    return false;
  }
})

var $jum=$(".shopButton");
var $font_b=$(".click_p1");
$font_b.hide();
$jum.click(function(){
  var provs=$('select[name="provinces"]').val(); 
  console.log(provs);
  var cities=$('select[name="cities"]').val();
  if(provs=="0"){
    alert("请选择相应省份");
  }else if(cities=="请选择店铺"){
    alert("请选择相应店铺");}
  var txtName=$('input[name="yy_name"]').val();
  var txtPhone=$('input[name="yy_phone"]').val();
  if(txtName==""||txtPhone==""){
    $font_b.show();
  }else{
    alert("OK!");
  }
})
