const { app, BrowserWindow, ipcMain } = require('electron')
const PomodoroTimer = require('./src/main/PomodoroTimer.js')

const path = require('path')
let pomoTimer;


function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: true
    }
  })

  win.loadFile('src/index.html')
  if (!app.isPackaged) {
    win.webContents.openDevTools();
  }

  pomoTimer = new PomodoroTimer(win);
}

app.whenReady().then(createWindow)


//IPC MAIN HANDLE SECTION

ipcMain.handle('start-timer', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender) // retrieve the window which sent the message
  console.log("The start timer button has been pressed (MAIN side).")
  pomoTimer.start(pomoTimer.displayTimerAndPhase("startWork", 0), undefined, 10)
})

ipcMain.handle('stop-timer', (event) => {
  console.log("The stop timer button has been pressed (MAIN side).")
  pomoTimer.stop()
})

ipcMain.handle('reset', (event) => {
  console.log("The reset timer button has been pressed. (MAIN side).")
  pomoTimer.reset()
})
