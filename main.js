const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow(slidesFolderPath) {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');

  // Przekazujemy ścieżkę do folderu ze slajdami do procesu renderowania
  mainWindow.webContents.send('slidesFolderPath', slidesFolderPath);
}

app.whenReady().then(() => {
  // Określamy ścieżkę do folderu z plikami PPTX na podstawie bieżącego katalogu aplikacji
  const slidesFolderPath = path.join(__dirname, 'img');
  createWindow(slidesFolderPath);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    // Określamy ścieżkę do folderu z plikami PPTX na podstawie bieżącego katalogu aplikacji
    const slidesFolderPath = path.join(__dirname, 'img');
    createWindow(slidesFolderPath);
  }
});
