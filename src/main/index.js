import * as path from 'path'
import { format as formatUrl } from 'url'

import { BrowserWindow, app, ipcMain, nativeTheme } from 'electron'

import { themeBackgroundColor } from './utils/themeUtils'

const IS_DEV_MODE = process.env.NODE_ENV !== 'production'

let mainWindow = null

function createMainWindow () {
  if (mainWindow !== null) return

  mainWindow = new BrowserWindow({
    backgroundColor: themeBackgroundColor(),
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (IS_DEV_MODE) {
    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  } else {
    mainWindow.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  mainWindow.on('ready-to-show', mainWindow.show)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createMainWindow)

// macOS behavior: Don't quit when all windows are closed
app.on('activate', createMainWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// Provide dark theme support to renderers
ipcMain.handle('should-use-dark-colors', () => nativeTheme.shouldUseDarkColors)
nativeTheme.on('updated', () => {
  BrowserWindow.getAllWindows().forEach(window => {
    window.setBackgroundColor(themeBackgroundColor())
    window.webContents.send('should-use-dark-colors-updated', nativeTheme.shouldUseDarkColors)
  })
})
