/*eslint-env browser*/
/*jslint browser: true*/
/*global $, alert*/

//JS
$('document').ready(function () {
    "use strict";
    //Script Here
    $('.tab-item > a').click(function () {
        $('.tab-item').removeClass('isSelected');
        $(this).parent().addClass('isSelected');
    });
});
