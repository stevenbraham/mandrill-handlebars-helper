var express = require('express');
var handlebarsEngine = require('express-handlebars');
var app = express();
var fs = require('fs-sync');

function loadConfig() {
    if (!fs.exists('config.json')) {
        fs.write('config.json', JSON.stringify({"templatePath": "", "jsonPath": ""}));
    }
    return JSON.parse(fs.read('config.json'));
}

var config = loadConfig();
app.engine('handlebars', handlebarsEngine({defaultLayout: 'main'}));
app.use(express.static('static'));
console.log(config);
app.listen(20755);
