const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    setThemeColor: (color) => ipcRenderer.send("set-theme-color", color),
});
