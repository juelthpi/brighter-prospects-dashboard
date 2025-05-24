$(document).ready(function () {
    $(".sweetButton").on("click", function () {
        const data = $(this).data();
        const icon = data.icon ? data.icon : "question";
        const url = data.url;
        const type = data.type;
        const title = data.title ? data.title : "Warning";
        const text = data.text
            ? data.text
            : "Are you sure? You want to process this action.";
        const cancelText = data.cancelText
            ? data.cancelText
            : "Your process has been cancelled.😇";
        const confirmText = data.confirmText ? data.confirmText : "Yes Sure!";
        const csrfToken = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showCancelButton: true,
            confirmButtonText: confirmText,
        }).then((result) => {
            if (result.isConfirmed) {
                if (type == "post") {
                    var form = document.createElement("form");
                    form.action = url;
                    form.id = "postForm";
                    form.method = "POST";

                    //create CSRF Token
                    var csrfInput = document.createElement("input");
                    csrfInput.type = "hidden";
                    csrfInput.name = "_token";
                    csrfInput.value = csrfToken;
                    form.appendChild(csrfInput);

                    // Create METHOD Filed
                    var methodInput = document.createElement("input");
                    methodInput.type = "hidden";
                    methodInput.name = "_method";
                    methodInput.value = "POST";
                    form.appendChild(methodInput);

                    document.body.appendChild(form);
                    document.getElementById("postForm").submit();
                } else if (type == "form") {
                    document.getElementById(data.formId).submit();
                } else if (type == "get") {
                    window.location.href = url;
                } else if (type == "delete") {
                    var form = document.createElement("form");
                    form.action = url;
                    form.id = "deleteForm";
                    form.method = "POST";

                    //create CSRF Token
                    var csrfInput = document.createElement("input");
                    csrfInput.type = "hidden";
                    csrfInput.name = "_token";
                    csrfInput.value = csrfToken;
                    form.appendChild(csrfInput);

                    // Create METHOD Filed
                    var methodInput = document.createElement("input");
                    methodInput.type = "hidden";
                    methodInput.name = "_method";
                    methodInput.value = "DELETE";
                    form.appendChild(methodInput);

                    document.body.appendChild(form);
                    document.getElementById("deleteForm").submit();
                }
            } else {
                /* Swal.fire({
                    title: "Cancelled",
                    text: cancelText,
                    icon: "error",
                }); */
            }
        });
    });
});
