var express = require('express');
var handlebarsEngine = require('express-handlebars');
var bodyParser = require('body-parser')
var webServer = express();

var fs = require('fs-sync');

config = {
    "jsonFile": "",
    "htmlFile": ""
};
webServer.engine('handlebars', handlebarsEngine({defaultLayout: 'main'}));
webServer.use(express.static('server/static'));
webServer.use(bodyParser.json());
webServer.use(bodyParser.urlencoded({extended: false}));
webServer.listen(20755);
webServer.get('/', function (req, res) {
    res.send(JSON.stringify(config));
});

webServer.post('/updateConfig', function (req, res) {
    config = req.body;
});