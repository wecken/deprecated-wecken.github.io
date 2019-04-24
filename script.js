/*eslint-env browser*/
/*jslint browser: true*/
/*global $, alert*/

//JS
$('document').ready(function () {
    "use strict";
    //Script Here

    //Tab UI, move selected tab
    $('.tab-item > a').click(function () {
        $('.tab-item').removeClass('isSelected');
        $(this).parent().addClass('isSelected');
    });

    //Automatically hide header on scroll
    //Hide Header on on scroll down

    function hide() {
        $('header').addClass('hide');
    }

    function unhide() {
        $('header').removeClass('hide');
    }

    var startPos = 0,
        winScrollTop = 0,
        flug = true;

    function checkScroll() {

        if (winScrollTop > startPos) {
            hide();
        } else {
            unhide();
        }
        startPos = winScrollTop;

    }

    $(window).scroll(function () {
        if (flug) {
            flug = false;
            winScrollTop = $(window).scrollTop();
            setTimeout(function () {
                // ここに処理を書く
                checkScroll();
                flug = true;
                return flug;
            }, 700);
        }
    });

});
