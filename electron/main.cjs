const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

ipcMain.on('window-minimize', () => {
  mainWindow.minimize();
});

ipcMain.on('window-maximize', () => {
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});

ipcMain.on('window-close', () => {
  mainWindow.close();
});

function createWindow() {
  mainWindow = new BrowserWindow({
    frame: false,
    transparent: true,
    hasShadow: false,
    useContentSize: true,
    backgroundColor: '#00000000',
    icon: path.join(__dirname, '../public/icon.ico'),

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  
  Menu.setApplicationMenu(null);

  mainWindow.setSize(400, 630);
  mainWindow.setMinimumSize(300, 475); /*min size*/
  mainWindow.setMaximumSize(460, 745); /*max size*/

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  };

  mainWindow.on('resize', () => {
    const [winWidth, winHeight] = mainWindow.getSize();
  
    // Установи свой min и max размеры
    const minHeight = 475;
    const maxHeight = 745;
  
    const minRatio = 1 / 1.608;
    const maxRatio = 1 / 1.555;

    // Ограничим высоту в рамках [minHeight, maxHeight]
    const clampedHeight = Math.max(minHeight, Math.min(maxHeight, winHeight));
  
    // Преобразуем высоту в [0,1] диапазон
    const t = (clampedHeight - minHeight) / (maxHeight - minHeight);
  
    // Линейная интерполяция между minRatio и maxRatio
    const currentAspect = minRatio + (maxRatio - minRatio) * t;
  
    mainWindow.setAspectRatio(currentAspect);
  });  
};

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

