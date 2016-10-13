function updateSetting(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.preventDefault();
    var file = e.dataTransfer.files[0];
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
    postUpdate();
    return false;
}

function postUpdate() {
    $.post('http://localhost:20755/updateConfig', $("#uploadForm").serialize());
}

$(document).ready(function () {
    document.getElementById("htmlFile").addEventListener("drop", updateSetting, false);
    document.getElementById("jsonFile").addEventListener("drop", updateSetting, false);
});

function start() {
    var open = require("open");
    open("http://localhost:20755/");
}