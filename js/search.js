//search
var $search=$(".dr_part06_search");
$search.click(function(){
  var provs=$('select[name="provs"]').val();
  //console.log(provs); 
  var cities=$('select[name="cities"]').val();
  //console.log(cities);
  if(provs=="0"){
    alert("请选择相应省份");
  }else if(cities=="请选择城市"){
    alert("请选择相应城市");
  }else{alert("OK!");}
  /*
  if(cities=="0"){
    alert("请选择相应城市");
  }else if(cities!=="请选择城市"){alert("已选择城市")}
*/
  })