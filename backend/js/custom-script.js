//***- Loader Start
$(window).on("load", function () {
    $(".backend-loader").fadeOut("slow");
});

$(document).ready(function () {
    "use strict";
    $("#menu_search").on("input", function () {
        var search = $(this).val().toLowerCase();
        var menu_search_result_area = $(
            ".menu-search-scope .menu-search-results"
        );
        $(menu_search_result_area).html("");
        $(".menu-search-scope").css("display", "block");
        if (search.length == 0) {
            return;
        }
        var match = $("#backend-menu .searchable")
            .filter(function (index, element) {
                return $(element).text().trim().toLowerCase().indexOf(search) >=
                    0
                    ? element
                    : null;
            })
            .sort();
        if (match.length == 0) {
            $(menu_search_result_area).append(
                '<li class="list-group-item text-muted">No search result found.</li>'
            );
            return;
        }
        match.each(function (index, element) {
            var item_url = $(element).find("a:first").attr("href");
            var item_icon = $(element).find(".icon-item").html();
            var item_text = $(element).text().replace(/(\d+)/g, "").trim();
            $(menu_search_result_area).append(
                `<li class="list-group-item"><a href="${item_url}">${item_icon} ${item_text}</a></li>`
            );
        });
    });

    $('a[data-action="collapse"]').on("click", function (e) {
        e.preventDefault();
        $(this).closest(".card").children(".card-content").collapse("toggle");
        $(this)
            .closest(".card")
            .find('[data-action="collapse"] i')
            .toggleClass("fas fa-plus fas fa-minus");
    });

    $('a[data-action="close"]').on("click", function () {
        $(this).closest(".card").removeClass().slideUp("fast");
    });

    //***- SIDEBAR - START
    $(".submenu-list").slideUp(300);
    $(".secondsubmenu-list").slideUp(300);
    $(".backend-menu .menu-item").click(function () {
        $(this).children(".submenu-list").slideToggle(300);
        $(this).siblings().children(".submenu-list").slideUp(300);
    });

    var menuUrl = window.location;
    $(".backend-menu .menu-item a").each(function () {
        if ($(this).attr("href")) {
            if (menuUrl == $(this).attr("href")) {
                $(this).addClass("active");
                $(this).parent().addClass("active");
                $(this).parent().parent().parent().addClass("active");
            }
        }
    });

    $(".sidebar-action").click(function () {
        $("body").toggleClass("deactive-sidebar");
    });
    $(".backend-header .header-left .form-group .input-group-text").click(
        function () {
            $(
                ".backend-header .header-left .form-group .form-control"
            ).toggleClass("active");
        }
    );

    $(".bkendapp-toggle").click(function () {
        $(".bkendapp-sidebar ,.bkendapp-xl-sidebar").toggleClass(
            "show-sidebar"
        );
    });

    //*** HEADER START
    $(".header-menu .bkendaction-menu,.header-menu ul.menu-list >li >a").click(
        function () {
            $(this).siblings(".menu-list,.sub-list").toggleClass("open");
            $(this)
                .parent(".menu-item")
                .siblings(".menu-item")
                .children(".sub-list")
                .removeClass("open");
        }
    );

    //*** Dropdown Action
    $(".action-menu .action-toggle").click(function () {
        $(this).next(".action-dropdown").toggleClass("active");
    });

    //*** Authentication
    $(".toggle-show").click(function () {
        var inp = $(".showhide-password");
        if (inp.attr("type") == "password") {
            setTimeout(function () {
                inp.attr("type", "text");
                $(".toggle-show").addClass("fa-eye-slash");
            }, 250);
        } else {
            setTimeout(function () {
                inp.attr("type", "password");
                $(".toggle-show").removeClass("fa-eye-slash");
            }, 250);
        }
    });

    $(".toggle-show2").click(function () {
        var inp = $(".showhide-password2");
        if (inp.attr("type") == "password") {
            setTimeout(function () {
                inp.attr("type", "text");
                $(".toggle-show2").addClass("fa-eye-slash");
            }, 250);
        } else {
            setTimeout(function () {
                inp.attr("type", "password");
                $(".toggle-show2").removeClass("fa-eye-slash");
            }, 250);
        }
    });

    //*** Email-Send-Modal-TextBox-Focus - START
    $("#emailcreat").on("shown.bs.modal", function () {
        $(this).find("input#toInput").focus();
    });

    //*** Window Full Screen - START
    $(".btn-windowfull").on("click", function () {
        (document.fullScreenElement && null !== document.fullScreenElement) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
            ? document.documentElement.requestFullScreen
                ? document.documentElement.requestFullScreen()
                : document.documentElement.mozRequestFullScreen
                ? document.documentElement.mozRequestFullScreen()
                : document.documentElement.webkitRequestFullScreen &&
                  document.documentElement.webkitRequestFullScreen(
                      Element.ALLOW_KEYBOARD_INPUT
                  )
            : document.cancelFullScreen
            ? document.cancelFullScreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen();
    });

    //*** - Tooltip-JS
    $('[data-bs-toggle="tooltip"]').tooltip();
    //** POPOVER JS **//
    var popoverTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

$(document).on("click", function (event) {
    //***Action Menu
    var $trigger = $(".action-toggle, .action-dropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".action-dropdown").removeClass("active");
    }
});

$(document).on("click", function (event) {
    //***Action Menu
    var $trigger = $(".action-toggle, .action-dropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".action-dropdown").removeClass("active");
    }
});

$(document).on("click", function (event) {
    //***Action Menu
    var $trigger = $(".bkendaction-menu, ul.menu-list, .header-menu");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".menu-list").removeClass("open");
    }
});
