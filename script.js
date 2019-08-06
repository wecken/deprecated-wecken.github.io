/*eslint-env browser*/
/*jslint browser: true*/
/*global $, alert*/

//JS
$('document').ready(function () {
    "use strict";
    //Script Here
    //Initialize Variables
    var startPos = 0,
        winScrollTop = 0,
        flug = true,
        date = new Date(),
        hour = date.getHours();



    //Get the current time and set the initial Dark Mode state
    if (hour >= 16 || hour <= 6) {
        $('body').addClass('Dark-Mode');
    } else {
        $('body').removeClass('Dark-Mode');
    }

    //Tab UI, move selected tab
    $('.tab-item > a').click(function () {
        $('.tab-item').removeClass('isSelected');
        $(this).parent().addClass('isSelected');
    });

    //Darkmode Switcher

    $('#DarkModeSwitcher > button').click(function () {
        $('body').toggleClass('Dark-Mode');
    });

    //Automatically hide header on scroll
    //Hide Header on on scroll down
    function hide() {
        $('header').addClass('hide');
    }
    //Unhide Header on on scroll up
    function unhide() {
        $('header').removeClass('hide');
    }

    //This function checks the direction of scroll, up or down
    //Then perform hide or unhide header.
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
            //Timeout is for delaying judgement of scroll up or down. 
            //Otherwise, scroll bouncing on Safari gives unwanted behavior. 
            setTimeout(function () {
                // Script Here 
                checkScroll();
                flug = true;
                return flug;
            }, 700);
        }

    });

    //Show image in full-screen on click.
    $('img[data-enlargable]').addClass('img-enlargable').click(function () {
        var src = $(this).attr('src');
        $('<div>').css({
            background: 'RGBA(0,0,0,.8) url(' + src + ') no-repeat center',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'zoom-out'
        }).click(function () {
            $(this).remove();
        }).appendTo('body');
    });

});