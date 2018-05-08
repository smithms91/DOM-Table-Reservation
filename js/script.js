"use strict";

$(document).ready(() => {
    
    //Initially hiding the box
    $("#reserve_box").hide();

    //Tables that are available to click
    $(".available").on("click", () => {
        $("#reserve_box").slideToggle();
        console.log("YES YOU CLICKED AVAILABLE");
    });

    //Clicking the X to close the form
    $(".location").click(() => {
        $("#reserve_box").slideToggle();
    });

    //Submit Button
    $("#button").click(() => {
        console.log($("input"));
        $("input").val("");
        $("#reserve_box").slideToggle();
    });

    //Close form on escape key
    $(document).on('keydown', (e) => {
        if (e.keyCode === 27) { // ESC
            $($("#reserve_box")).fadeOut();
        }
    });

});