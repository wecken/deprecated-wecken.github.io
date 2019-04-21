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
    var startPos = 0,
        winScrollTop = 0;
    $(window).on('scroll', function () {
        winScrollTop = $(this).scrollTop();
        if (winScrollTop > startPos) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
        startPos = winScrollTop;
    });
});
