import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const isDev: boolean = !app.isPackaged;
const assetsPath: string = process.env.NODE_ENV === 'production'
  ? process.resourcesPath
  : app.getAppPath();

class MainProcess {
  public createWindow (): void {
    mainWindow = new BrowserWindow({
      icon: path.join(assetsPath, 'assets', 'icon.png'),
      minHeight: 600,
      minWidth: 500,
      width: 1300,
      height: 700,
      backgroundColor: '#FFF',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
      }
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    mainWindow.on('closed', () => {
      mainWindow = null
    })

    // Auto-Open Dev tools when in development mode.
    isDev && mainWindow.webContents.openDevTools();
  }

  public async registerListeners (): Promise<void> {
    ipcMain.on('ping', (event, message) => {
      event.reply("ping", "Pong!");
      // Prints "Ping"
      console.log(message);
    })
  }
}

export default new MainProcess();