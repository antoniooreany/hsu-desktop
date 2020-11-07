const {app} = require('electron');
const Window = require('./src/window');

function main() {
    const file = './renderer/index.html';
    let mainWindow = new Window({
        file: file
    })
}

app.on('ready', main);

app.on('window-all-closed', function () {
    app.quit();
});
