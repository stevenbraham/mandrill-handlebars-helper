var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var webServer = express();
var handlebars = require('handlebars');
var jsonfile = require('jsonfile')

config = {
    "jsonFile": "",
    "htmlFile": ""
};

webServer.use(express.static('server/static'));
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({extended: false}));
webServer.listen(20755);
webServer.get('/', function (req, res) {
    var htmlSource = fs.readFileSync(config.htmlFile).toString();
    var template = handlebars.compile(htmlSource);
    res.send(template(jsonfile.readFileSync(config.jsonFile)));
});

webServer.post('/updateConfig', function (req, res) {
    config = req.body;
    res.end();
});