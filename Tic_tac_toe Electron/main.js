const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'icon', 'icon.png'),
    width: 600,
    height: 650,

    minWidth: 400,
    minHeight: 450,

    maxWidth: 700,
    maxHeight: 750,

    icon: path.join(__dirname, 'icon', 'icon.png'), // по желанию
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Убираем меню
  Menu.setApplicationMenu(null);

  // Загружаем HTML
  mainWindow.loadFile('index.html');

  // Соотношение сторон (если нужно)
  mainWindow.on('resize', () => {
    mainWindow.setAspectRatio(0.9);
  });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
