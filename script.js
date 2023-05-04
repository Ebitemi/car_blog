 function showMenu(){
        $("#navLinks").show();
    }
    function hideMenu(){
        $("#navLinks").hide();
    }
    function hide_close(){
        if($(window).width() < 768 ) { // 768 represents break-point measure
            $(".fa-sharp").show();//show close
             }else{
            $(".fa-sharp").hide();//hide close
            $(".fa-bars").click();
            }
    }
    $(function () {setInterval(hide_close, 1000);});