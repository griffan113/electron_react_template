import { app, BrowserWindow } from 'electron'
import MainProcess from './MainProcess'

app.on('ready', MainProcess.createWindow)
  .whenReady()
  .then(MainProcess.registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  };
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    MainProcess.createWindow();
  };
});
