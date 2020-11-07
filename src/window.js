const { BrowserWindow } = require('electron')
const defaultProps = require("../utils/settings");

class Window extends BrowserWindow {
    constructor({file, ...windowSettings}) {
        super({...defaultProps, ...windowSettings});
        this.loadFile(file);
        this.once('ready-to-show', () => {
            this.show();
        });
    }
}

module.exports = Window