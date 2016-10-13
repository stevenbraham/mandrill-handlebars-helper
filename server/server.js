var express = require('express');
var handlebarsEngine = require('express-handlebars');
var webServer = express();
var fs = require('fs-sync');
webServer.engine('handlebars', handlebarsEngine({defaultLayout: 'main'}));
webServer.use(express.static('server/static'));
webServer.listen(20755);