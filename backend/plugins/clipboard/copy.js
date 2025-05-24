(function () {
    "use strict";
    document.body.addEventListener("click", copy, true);
    // event handler
    function copy(e) {
        var t = e.target,
            c = t.dataset.copytarget,
            inp = c ? document.querySelector(c) : null;
        if (inp && inp.select) {
            inp.select();
            try {
                document.execCommand("copy");
                inp.blur();
                t.classList.add("copiedMama");
                setTimeout(function () {
                    t.classList.remove("copiedMama");
                }, 1500);
            } catch (err) {
                alert("please press Ctrl/Cmd+C to copy");
            }
        }
    }
})();
