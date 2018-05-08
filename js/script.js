"use strict";

$(document).ready(() => {
    //Initially hiding the box
    $("#reserve_box").hide();
    //When I click anywhere on the document with a class of available
    $(document).on("click", ".available", (event) => {
        //Click X Button to close
        $(".location").on("click", () => {
            $("#reserve_box").fadeOut();
        });
        //Escape to close
        $(document).on('keydown', (e) => {
            if (e.keyCode === 27) { // ESC
                $("#reserve_box").fadeOut();
            }
        });
        //Click submit do stuff
        $("#button").on("click", () => {    
            $(event.target).removeClass("available").addClass("reserved");
            $("#reserve_box").slideUp();
            let name = $("#name").val();
            let number = $("#number").val();
            let quantity = $("#quantity").val();
            console.log(name.val());
            console.log(number.val());
            console.log(quantity.val());
            name.val("");
            number.val("");
            quantity.val("");
        });
        $("#reserve_box").slideToggle();
    })
});