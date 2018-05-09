"use strict";

let currentTable;
let name, quantity;


$(document).ready(() => {

    //Initially hiding the box
    $("#reserve_box").hide();

    //When I click anywhere on the document with a class of available
    $(document).on("click", ".available", (e) => {
        currentTable = $(e.target);
        $(".reserve_number").text(`Table Number: ${currentTable.text()}`);
        $("#reserve_box").slideDown();
        $("#name").val("");
        $("#number").val("");
        $("#quantity").val("");
    });
    
    //Click button do stuff
    $("#button").on("click", () => {    
        name = $("#name").val();
        quantity = $("#quantity").val();
        currentTable.removeClass("available").addClass("reserved");
        currentTable.attr("name", name);
        currentTable.attr("party", quantity);
        $("#reserve_box").slideUp();
    });

    // MOUSEOVER FOR INFO

    //Mouse IN for info
    $(document).on("mouseover", ".reserved", (e) => {
        name = $(e.target).attr("name");
        quantity = $(e.target).attr("party");
        currentTable = $(e.target);
        $("#hover_box").show();
        $("#hover_box").html(`
        <p>Name: ${name}</p>
        <p>Size of party: ${quantity}</p>`);
        $(currentTable).append($("#hover_box"));
    });
    //Mouse OUT for info
    $(document).on("mouseout", ".reserved", () => {
        $("#hover_box").hide();
    })


    //CLOSING FORM

    //Click X to close
    $(".location").on("click", () => {
        $("#reserve_box").fadeOut();
    });

    //Escape to close
    $(document).on('keydown', (e) => {
        if (e.keyCode === 27) { // ESC
            $("#reserve_box").fadeOut();
        }
    });

});