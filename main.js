var {app} = require('electron');
var path = require('path');
var window = require('electron-window');

app.on('ready', function () {
    const mainWindow = window.createWindow({width: 1000, height: 800})
    const someArgs = {data: 'hi'}
    mainWindow.showUrl('app/views/index.html', someArgs);
});

//webserver
var express = require('express');
var handlebarsEngine = require('express-handlebars');
var webServer = express();
var fs = require('fs-sync');
webServer.engine('handlebars', handlebarsEngine({defaultLayout: 'main'}));
webServer.use(express.static('server/static'));
webServer.listen(20755);
