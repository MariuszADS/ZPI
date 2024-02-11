const { app, BrowserWindow } = require('electron');
const pptxParser = require('pptx-parser');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');

  // Wczytywanie i wyświetlanie slajdów po załadowaniu aplikacji
  displaySlides(path.join(__dirname, 'img'));
});

// Funkcja do odczytu i wyświetlania slajdów z pliku PPTX
function displaySlides(slidesFolderPath) {
  // Tutaj dodaj kod do odczytu plików PPTX z folderu
  // Następnie wyświetlaj slajdy w oknie głównym aplikacji
  // Możesz użyć pptxParser do parsowania plików PPTX
  // i wykorzystać odpowiednie metody BrowserWindow do wyświetlenia slajdów
}

// Funkcja do odczytu plików z folderu
// Następnie można przekazać ścieżkę każdego pliku PPTX do funkcji displaySlides
function readFilesFromFolder(folderPath) {
  // Tutaj dodaj kod do odczytu plików z folderu
}
