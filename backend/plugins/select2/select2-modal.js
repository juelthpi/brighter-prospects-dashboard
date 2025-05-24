"use strict";
$(function () {
    let modalId = $('[id$="Modal"]');
    $(".select2Modal").select2({
        theme: "bootstrap-5",
        width: "100%",
        dropdownParent: $(modalId),
    });
});
