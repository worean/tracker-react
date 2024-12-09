const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
    
    // 브라우저 창을 생성합니다.
    const win = new BrowserWindow({
        width:800,
        height:600,
        icon : path.join(__dirname, 'src/assets/images/logo.png'),
    });

    // 생성되는 웹 서버에 연결한다.
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true,
    });

    //win.openDevTools(); // 개발자 도구를 엽니다.

    // 초기 로드할 웹사이트의 주소를 지정합니다.
    win.loadURL(startUrl);
    
    //win.loadFile('build/index.html');

}

app.on('ready', createWindow);