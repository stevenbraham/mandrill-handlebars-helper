$(document).ready(function () {
    $("#uploadForm").on('submit', function (e) {
        e.preventDefault();
        $.post('http://localhost:20755/updateConfig', $("#uploadForm").serialize(), function () {
            open("http://localhost:20755/");
        });
    });

    $("a[target=_blank]").on('click', function (e) {
        e.preventDefault();
        open($(this).attr("href"));
    });

    $("#htmlFile, #jsonFile").on("drop", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.preventDefault();
        var file = e.originalEvent.dataTransfer.files[0];
        switch (file.type) {
            case "text/html":
                $("#htmlFile").val(file.path);
                break;
            case "application/json":
                $("#jsonFile").val(file.path);
                break;
            default:
                break;
        }
        return false;
    });
});