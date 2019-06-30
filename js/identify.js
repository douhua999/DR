     //input身份证号，先隐藏
     $('.drmember_yz-word').hide();
       $('.fr_in input').hover(function(){
            $(".drmember_yz-word").show();
            },
            function(){
                $('.drmember_yz-word').hide();
            }
        )