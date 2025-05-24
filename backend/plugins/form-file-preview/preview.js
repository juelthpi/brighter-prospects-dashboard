$(document).on("click", '[data-provides="imageUpload"]', function (e) {
    var $input = $(this);
    if ($input.length === 0) return;

    var $removePreview = $input.siblings().first();
    var $previewContainer = $input.parent().siblings().first();
    var $preview = $previewContainer.find(".preview-thumbnail");

    $input.on("change", function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (re) {
                $preview.html(
                    `<img src="${reader.result}" class="img-fluid img-thumbnail rounded">`
                );
                $previewContainer.removeClass("d-none");
                $removePreview.attr("disabled", false);
            };
            reader.readAsDataURL(file);
        } else {
            $preview.html("");
            $previewContainer.addClass("d-none");
            $removePreview.attr("disabled", true);
        }
    });
});

$(document).on("click", '[data-provides="imageUploadRemove"]', function (e) {
    var $remove = $(this);
    if ($remove.length === 0) return;
    var $input = $remove.siblings().first();
    var $previewContainer = $input.parent().siblings().first();
    var $preview = $previewContainer.find(".preview-thumbnail");
    $input.val("");
    $preview.html("");
    $previewContainer.addClass("d-none");
    $remove.attr("disabled", true);
});
