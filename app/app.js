var {app} = require('electron');
var path = require('path');
var window = require('electron-window');
app.on('ready', function () {
    const mainWindow = window.createWindow({
        width: 600, height: 450, resizable: false,
    })
    mainWindow.showUrl('app/views/index.html');
});