var {app} = require('electron');
var path = require('path');
var window = require('electron-window');
app.on('ready', function () {
    const mainWindow = window.createWindow({
        width: 1000, height: 500, resizable: false,
    })
    const someArgs = {data: 'hi'}
    mainWindow.showUrl('app/views/index.html', someArgs);
});