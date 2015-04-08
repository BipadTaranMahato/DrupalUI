/**
 * Created by abu on 3/4/15.
 */
$(function () {
    $(".menu-item").hover(function () {
            $("#navigation").toggleClass("navigation-light");
            $(".menu-link").toggleClass("menu-link-light");
            $("#site-name").toggleClass("site-name-light");
            $(this).find(".menu-bg").stop(true, true).slideDown(1000, function () {

            });
        },
        function () {
            $("#site-name").toggleClass("site-name-light");
            $(".menu-link").toggleClass("menu-link-light");

            $("#navigation").toggleClass("navigation-light");
            $(this).find(".menu-bg").slideUp(1000, function () {
            });
        });
});

/*! nixon 03-04-2015 */

jQuery(".nav-primary-item.has-subnav").on({
    mouseenter: function () {
        if (window.innerWidth >= 768) {
            var element = this;
            if (clearTimeout(timeoutExit), clearTimeout(timeoutEnter), clearTimeout(switchClassTimer), clearTimeout(timeoutExitHovered), !Modernizr.touch && jQuery(element).hasClass("active"))return;
            Modernizr.touch && $("#navbar-tablet-bg").addClass("active"), jQuery(element).addClass("set"), timeoutEnter = setTimeout(function () {
                if (jQuery(element).hasClass("set")) {
                    deactivateOthers(), switchClassTimer = setTimeout(function () {
                        jQuery(element).removeClass("set"), jQuery(element).addClass("active")
                    }, 150);
                    var height = 400, subelement = jQuery(element).find(".nix-nav-submenu");
                    jQuery(".navbar.nix-navbar").addClass("nix-navbar-hovered"), jQuery(".navbar-overlay").css({height: height}), subelement.stop().css({height: "auto"}), height = subelement.height() + 40 < 480 ? 480 : subelement.height() + 80, subelement.css({height: height}), jQuery(".navbar-overlay").css({height: height})
                }
            }, 100)
        }
    }, mouseleave: function () {
        window.innerWidth >= 768 && (element = this, deactivateAll(element))
    }
}), Modernizr.touch && $(".nix-nav-submenu-link").on("click", function (e) {
    var $navPrimaryItem = $(this).parent(".nav-primary-item");
    return $navPrimaryItem.hasClass("active") || !$navPrimaryItem.hasClass("has-subnav") ? !0 : (e.preventDefault(), !0)
});

function deactivateAll(element) {
    Modernizr.touch && $("#navbar-tablet-bg").removeClass("active"), clearTimeout(switchClassTimer), clearTimeout(timeoutEnter), clearTimeout(timeoutExit), clearTimeout(timeoutExitHovered), (jQuery(element).hasClass("active") || jQuery(element).hasClass("set")) && (jQuery(element).removeClass("active"), jQuery(element).removeClass("set"), jQuery(element).children(".nix-nav-submenu").css({transition: "height 0.3s ease-in-out"}), jQuery(element).children(".nix-nav-submenu").css({height: 0})), timeoutExit = setTimeout(function () {
        deactivateOthers();
        var active = jQuery(".nav.navbar-nav.nix-nav-list > li.active").length, setted = jQuery(".nav.navbar-nav.nix-nav-list > li.set").length;
        0 == active && 0 == setted && (jQuery(".navbar-overlay").css({height: 0}), timeoutExitHovered = setTimeout(function () {
            clearTimeout(switchClassTimer), clearTimeout(timeoutEnter), jQuery(".navbar.nix-navbar").removeClass("nix-navbar-hovered"), jQuery(".navbar-overlay").removeAttr("style")
        }, 250))
    }, 250)
}
function deactivateOthers() {
    clearTimeout(timeoutEnter), clearTimeout(switchClassTimer), clearTimeout(timeoutExitHovered), jQuery(".nav.navbar-nav.nix-nav-list > li").each(function (key, element) {
        jQuery(element).removeClass("set"), jQuery(element).removeClass("active"), jQuery(element).children(".nix-nav-submenu").css({transition: "height 0.3s ease-in-out"}), jQuery(element).children(".nix-nav-submenu").css({height: 0})
    })
}
