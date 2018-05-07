"use strict";

$(document).ready(() => {
    
    $("#reserve_box").hide();

    const tables = $(".table");
    tables.click(() => {
        $("#reserve_box").toggle();
    })

    let close = $(".location");
    close.click(() => {
        $("#reserve_box").toggle();
    })
})