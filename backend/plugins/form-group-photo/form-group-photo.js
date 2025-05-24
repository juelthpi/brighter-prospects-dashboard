$(document).on("click", '[data-provides="fileinput"]', function (e) {
    const $this = $(this);
    const $input = $this.find(":file");
    if ($input.length === 0) return;

    const $img = $("<img/>", {
        class: "image-preview-thumb",
    });

    $input.on("change", function (e) {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function (re) {
            $this.find(".image-preview-input-title").text("Change");
            $this.find(".image-preview-clear").show();
            $this.find(".image-preview-filename").val(file.name);
            $img.attr("src", reader.result);
            $this.children(".image-preview-fileinput").prevObject.attr("data-bs-content", $img[0].outerHTML);
        };
        reader.readAsDataURL(file);
    });
});

$(document).on("click", '[data-dismiss="fileinput"]', function (e) {
    const $this = $(this);
    $this.parent().parent().attr("data-bs-content", "");
    $this.parent().prev(".image-preview-filename").val("No file chosen");
    $this.hide();
    $this.next().find(".image-preview-input input:file").val("");
    $this.next().find(".image-preview-input-title").text("Browse");
});
