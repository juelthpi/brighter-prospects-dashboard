/*!
* IconPicker DEMO ('https://github.com/furcan/IconPicker')
* Version: 1.5.0
* Author: Furkan MT ('https://github.com/furcan')
* Dependencies: FontAwesome v5.11.2 (https://fontawesome.com/license/free)
* Copyright 2019 IconPicker, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

// DEMO: IconPicker on
IconPicker.Init({
    jsonUrl: '/backend/plugins/iconpicker/iconpicker-1.5.0.json',
});
IconPicker.Run('#GetIconPicker', function () {
    console.log('Icon Picker');
});
// IconPicker.Run('#GetIconPicker');

// DEMO: Check Browser on
$(document).on('click', 'button#GetIconPicker', function () {
    // if chrome browser
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        // if protocol not http
        if (window.location.protocol.indexOf('http') <= -1) {
            var theMessage = 'Your protocol is: <b style="transform:scale(1.1);">' + window.location.protocol + '</b> <br />Chrome Browser blocked this request by CORS policy. You can try on Firefox Browser.';
            console.log(theMessage);
            return false;
        }
    }
});
// DEMO: Check Browser off

// DEMO: Button Highlighted on
$(document).on('mouseenter', 'code span.the-button', function () {
    $('.form-input button#GetIconPicker').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-button', function () {
    $('.form-input button#GetIconPicker').removeClass('highlighted');
});
// DEMO: Button Highlighted off

// DEMO: Input Highlighted on
$(document).on('mouseenter', 'code span.the-input', function () {
    $('.form-input div.export').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-input', function () {
    $('.form-input div.export').removeClass('highlighted');
});
// DEMO: Input Highlighted off

// DEMO: Icon Highlighted on
$(document).on('mouseenter', 'code span.the-preview', function () {
    $('.form-input div.icon-preview').addClass('highlighted');
});
$(document).on('mouseleave', 'code span.the-preview', function () {
    $('.form-input div.icon-preview').removeClass('highlighted');
});
// DEMO: Icon Highlighted off
