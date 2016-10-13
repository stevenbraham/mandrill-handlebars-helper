function updateSetting(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.preventDefault();
    var file = e.dataTransfer.files[0];
    switch (file.type) {
        case "text/html":
            document.getElementById('htmlFile').setAttribute('value', file.path);
            break;
        case "text/javascript":
            document.getElementById('jsonFile').setAttribute('value', file.path);
            break;
        default:
            break;
    }
    return false;
}

document.getElementById("htmlFile").addEventListener("drop", updateSetting, false);
document.getElementById("jsonFile").addEventListener("drop", updateSetting, false);

function start() {

}
