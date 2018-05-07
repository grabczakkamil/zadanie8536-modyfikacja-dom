'use strict';
$(function () {


    $("#first").click(function () {

        $("#main").prepend($("p:last"));

    });


    $("#second").click(function () {

        $("#main").append($("p:first"));

    });
});