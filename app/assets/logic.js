$(document).ready(function () {
    var storedFormValues = sessionStorage.getItem('storedFormValues');
    if (storedFormValues) {
        var parsedStoredFormValues = JSON.parse(storedFormValues);
        $("#bodyFile").val(parsedStoredFormValues.bodyFile);
        $("#contentFile").val(parsedStoredFormValues.contentFile);
        $("#jsonFile").val(parsedStoredFormValues.jsonFile);
    }
    $("#uploadForm").on('submit', function (e) {
        e.preventDefault();
        sessionStorage.setItem('storedFormValues', JSON.stringify({
            bodyFile: $("#bodyFile").val(),
            contentFile: $("#contentFile").val(),
            jsonFile: $("#jsonFile").val()
        }));
        $.post('http://localhost:20755/updateConfig', $("#uploadForm").serialize(), function () {
            open("http://localhost:20755/");
        });
    });

    $("a[target=_blank]").on('click', function (e) {
        e.preventDefault();
        open($(this).attr("href"));
    });

    $("#bodyFile, #contentFile, #jsonFile").on("drop", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        e.preventDefault();
        var file = e.originalEvent.dataTransfer.files[0];
        $(e.target).val(file.path);
        return false;
    });
});