var viewAction = localStorage.getItem("viewAction") || "light";

if (viewAction === "light") {
    $(".icon-dark").css("display", "none");
    $(".icon-light").css("display", "block");
    $("body").removeClass("darkmode");
}
if (viewAction === "dark") {
    $("body").addClass("darkmode");
    $(".icon-dark").css("display", "block");
    $(".icon-light").css("display", "none");
}

$(".viewAction").click(function () {
    var currentViewAction = localStorage.getItem("viewAction") || "light";
    if (currentViewAction === "light") {
        $("body").addClass("darkmode");
        $(".icon-dark").css("display", "block");
        $(".icon-light").css("display", "none");
        localStorage.setItem("viewAction", "dark");
    } else {
        $("body").removeClass("darkmode");
        $(".icon-dark").css("display", "none");
        $(".icon-light").css("display", "block");
        localStorage.setItem("viewAction", "light");
    }
});

$(".ltr-action").click(function () {
    $("body").removeClass("rtlmode");
    localStorage.setItem("dirAction", "ltr");
});

$(".rtl-action").click(function () {
    $("body").addClass("rtlmode");
    localStorage.setItem("dirAction", "rtl");
});
