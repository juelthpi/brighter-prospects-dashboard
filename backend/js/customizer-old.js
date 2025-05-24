var themeprimary = localStorage.getItem("themeprimary") || "#043ac7";
var themesecondary = localStorage.getItem("themesecondary") || "#f99809";
var themesuccess = localStorage.getItem("themesuccess") || "#83C31B";
var themeinfo = localStorage.getItem("themeinfo") || "#18a0fb";
var themewarning = localStorage.getItem("themewarning") || "#FFC261";
var ltrAction = localStorage.getItem("ltrAction") || "ltr";
var lightAction = localStorage.getItem("lightAction") || "light";

window.backendomeki = {
    themeprimary: themeprimary,
    themesecondary: themesecondary,
    themesuccess: themesuccess,
    themeinfo: themeinfo,
    themewarning: themewarning,
};

//*** light & dark action  ***//
$(".action-dark").click(function () {
    $(this).toggleClass("action-light");
    $(".icon-dark").toggle("");
    $(".icon-light").toggle("");
    $("body").toggleClass("darkmode");
});

//*** customizer ***//
$(".customizer-action").click(function () {
    $(".theme-cutomizer , .customizer-layer").toggleClass("active");
});

$(".customizer-header").click(function () {
    $(".theme-cutomizer , .customizer-layer").toggleClass("active");
});

if (ltrAction === "ltr") {
    $("body").removeClass("rtlmode");
} else {
    $("body").addClass("rtlmode");
}

if (lightAction === "light") {
    $("body").removeClass("darkmode");
}
if (lightAction === "dark") {
    $("body").addClass("darkmode");
}

$(".dark-action").click(function () {
    $("body").addClass("darkmode");
    localStorage.setItem("lightAction", "dark");
});

$(".light-action").click(function () {
    $("body").removeClass("darkmode");
    localStorage.setItem("lightAction", "light");
});

$(".customizeoption-list li").click(function () {
    $(this).addClass("active-mode");
    $(this).siblings().removeClass("active-mode");
});

$(".ltr-action").click(function () {
    $("body").removeClass("rtlmode");
    localStorage.setItem("ltrAction", "ltr");
});
$(".rtl-action").click(function () {
    $("body").addClass("rtlmode");
    localStorage.setItem("ltrAction", "rtl");
});

$(".customizer-layer").click(function () {
    $(this).removeClass("active");
    $(".theme-cutomizer").removeClass("active");
});
