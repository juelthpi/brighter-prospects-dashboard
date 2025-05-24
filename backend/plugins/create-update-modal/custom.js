const modalElement = $("#CreateUpdateModal");
const myModal = new bootstrap.Modal(
    document.querySelector("#CreateUpdateModal")
);
const myForm = modalElement.find("form");
const action = myForm[0] ? myForm[0].action : null;

$(document).on("click", ".createModalButton", function () {
    let data = $(this).data();
    resetForm(); // reset the myForm
    modalElement.find(".createUpdateModalLabel").text(`${data.title}`);
    myModal.show();
});

$(document).on("click", ".editModalButton", function () {
    let data = $(this).data();
    let contents = data.contents ?? null;

    // reset myForm
    resetForm();
    myForm[0].action = `${action}/${contents.id}`;

    let myFormFields = modalElement.find("input, select, textarea");
    let myFormFieldName;
    myFormFields.each(function (index, element) {
        myFormFieldName = element.name;
        if (
            myFormFieldName != "_token" &&
            contents.hasOwnProperty(myFormFieldName)
        ) {
            if (element.tagName == "SELECT") {
                if ($(element).hasClass("select2Modal")) {
                    $(`[name='${element.name}']`)
                        .select2({
                            theme: "bootstrap-5",
                            width: "100%",
                            dropdownParent: modalElement,
                        })
                        .val(contents[myFormFieldName])
                        .trigger("change");
                } else {
                    $(`[name='${element.name}']`).val(
                        contents[myFormFieldName]
                    );
                }
            } else if (element.tagName == "TEXTAREA") {
                if ($(element).hasClass("summernote")) {
                    $(`[name='${myFormFieldName}']`).summernote(
                        "code",
                        contents[myFormFieldName]
                    );
                } else {
                    $(`[name='${myFormFieldName}']`).val(
                        contents[myFormFieldName]
                    );
                }
            } else if ($(element).data("toggle") == "toggle") {
                if (contents[myFormFieldName]) {
                    $(element).bootstrapToggle("on");
                } else {
                    $(element).bootstrapToggle("off");
                }
            } else if (element.type == "file") {
                if ($(element).hasClass("imageUpload")) {
                    var previewContainer = $(element)
                        .parent()
                        .siblings()
                        .first();
                    var preview = previewContainer.find(".preview-thumbnail");
                    preview.html(
                        `<img src="${contents[myFormFieldName]}" class="img-fluid img-thumbnail rounded">`
                    );
                    previewContainer.removeClass("d-none");
                }
            } else {
                $(`[name='${element.name}']`).val(contents[myFormFieldName]);
            }
        }
    });
    modalElement.find(".createUpdateModalLabel").text(`${data.title}`);
    myModal.show();
});

function resetForm() {
    $(myForm).trigger("reset");
    $(".preview-container").addClass("d-none");
    $(".preview-thumbnail").html("");
    if (myForm.find(".summernote").length) {
        $(".summernote").summernote("code", "");
    }
    if (myForm.find(".select2Modal").length) {
        $(".select2Modal")
            .select2({
                theme: "bootstrap-5",
                width: "100%",
                dropdownParent: modalElement,
            })
            .val("")
            .trigger("change");
    }
}
