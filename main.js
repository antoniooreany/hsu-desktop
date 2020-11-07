const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        // width: 1740,
        width: 1760,
        // height: 960,
        height: 950,
        resizable: false,
        webPreferences: {
            javascript: true,
            webgl: true,
            nodeIntegration: true,
            webviewTag: true
        }
})

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});