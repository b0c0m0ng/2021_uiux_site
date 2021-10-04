$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false
    });
    $(".nextBtn").click(function(){
        slider1.goToNextSlide();
    });
    $(".prevBtn").click(function(){
        slider1.goToPrevSlide();
    });

    const slider2 = $(".slider2").bxSlider({
        controls:false
    });

    // $(".toggle").on("이벤트명",리스너);
    // $(".toggle").on("click",function(){});
    // $(".toggle").click(function(){})
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); // value toggle
        console.log(toggle);

        if( toggle == "toggle"){
            //$(".toggle").addClass("active");
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            //$(".toggle").removeClass("active");
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

    $(window).resize(function(){
        $(".toggle").removeClass("active");
        $(".gnb").removeClass("view");
    });


    $(".tabmenu1 ul li").click(function(){

        let num = $(this).index();
    
        console.log($(this).index());
        $(".tabmenu1 ul li").removeClass();
        $(this).addClass("on");
    
        $(".con>div").hide();
        $(".con>div").eq(num).fadeIn();
    
    });
    $(".tabmenu2 ul li").click(function(){

        let num = $(this).index();
    
        console.log($(this).index());
        $(".tabmenu2 ul li").removeClass();
        $(this).addClass("on");
    
        $(".con>div").hide();
        $(".con>div").eq(num).fadeIn();
    
    });
    $(".tabmenu3 ul li").click(function(){

        let num = $(this).index();
    
        console.log($(this).index());
        $(".tabmenu3 ul li").removeClass();
        $(this).addClass("on");
    
        $(".con>div").hide();
        $(".con>div").eq(num).fadeIn();
    
    });
    $(".tabmenu4 ul li").click(function(){

        let num = $(this).index();
    
        console.log($(this).index());
        $(".tabmenu4 ul li").removeClass();
        $(this).addClass("on");
    
        $(".con>div").hide();
        $(".con>div").eq(num).fadeIn();
    
    });
    $(".tabmenu5 ul li").click(function(){

        let num = $(this).index();
    
        console.log($(this).index());
        $(".tabmenu5 ul li").removeClass();
        $(this).addClass("on");
    
        $(".con>div").hide();
        $(".con>div").eq(num).fadeIn();
    
    });
});