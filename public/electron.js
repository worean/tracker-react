const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
    
    // 브라우저 창을 생성합니다.
    const win = new BrowserWindow({
        width:1280,
        height:800,
        icon : path.join(__dirname, 'assets/logo.png'),
    });

    
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true,
    });

    // 초기 로드할 웹사이트의 주소를 지정합니다.
    win.loadURL(startUrl);
}

app.on('ready', createWindow);