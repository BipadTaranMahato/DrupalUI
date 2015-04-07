/**
 * Created by abu on 3/4/15.
 */
$(function(){
    $(".menu-item").hover(function () {
            $("#navigation").toggleClass("navigation-light");
            $(".menu-link").toggleClass("menu-link-light");
            $("#site-name").toggleClass("site-name-light");
        $(this).find(".menu-bg").stop(true,true).slideDown(1000,function(){

        });
    },
    function(){
        $("#site-name").toggleClass("site-name-light");
        $(".menu-link").toggleClass("menu-link-light");

        $("#navigation").toggleClass("navigation-light");
        $(this).find(".menu-bg").slideUp(1000,function(){
        });
    });
});