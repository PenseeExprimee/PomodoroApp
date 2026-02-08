const { contextBridge,ipcRenderer, ipcMain } = require('electron')

contextBridge.exposeInMainWorld('pomodoroTimer', {
  startTimer: () => ipcRenderer.invoke('start-timer'),
  stopTimer: () => ipcRenderer.invoke('stop-timer'),
  resetTimer: () => ipcRenderer.invoke('reset'),
  onStateChange: (callback) => ipcRenderer.on("pomodoro:state", (_, data) => callback(data))
})
