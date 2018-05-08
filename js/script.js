"use strict";

$(document).ready(() => {
    
    //Initially hiding the box
    $("#reserve_box").hide();

    //Tables that are available to click
    $(document).on("click", "available", () => {
        $("#reserve_box").slideToggle();
        console.log("YES YOU CLICKED AVAILABLE");
    });

    //Clicking the X to close the form
    $(".location").on("click", () => {
        $("#reserve_box").slideToggle();
    });

    //Submit Button
    $("#button").on("click", () => {
        let username = $("#name").val();
        console.log(username);
        $("input").val("");
        $("#reserve_box").slideToggle();
    });

    //Close form on escape key
    $(document).on('keydown', (e) => {
        if (e.keyCode === 27) { // ESC
            $($("#reserve_box")).fadeOut();
        }
    });

    $(document).on("click", ".available", (event) => {
        $(event.target).removeClass("available").addClass("reserved");
        $("#reserve_box").slideToggle();
    })

});