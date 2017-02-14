var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var webServer = express();
var handlebars = require('handlebars');
var jsonfile = require('jsonfile')

config = {
    "jsonFile": "",
    "bodyFile": "",
    "contentFile": ""
};

webServer.use(express.static('server/static'));
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({extended: false}));
webServer.listen(20755);
webServer.get('/', function (req, res) {
    var contentSource = fs.readFileSync(config.contentFile).toString();
    var bodySource = fs.readFileSync(config.bodyFile).toString();
    handlebars.registerPartial('content', contentSource);
    var template = handlebars.compile(bodySource);
    res.send(template(jsonfile.readFileSync(config.jsonFile)));
});

webServer.post('/updateConfig', function (req, res) {
    config = req.body;
    res.end();
});