const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const express = require("express");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    app.quit();
}

const server = express()
    .use(express.static(path.join(__dirname, "dist")))
    .listen(0, "localhost");

const TITLEBAR_HEIGHT = 36;
const createWindow = async () => {
    const mainWindow = new BrowserWindow({
        width: 1360,
        height: 720,
        titleBarStyle: "hidden",
        titleBarOverlay: {
            height: TITLEBAR_HEIGHT,
        },
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    await mainWindow.loadURL(`http://localhost:${server.address().port}`);

    await mainWindow.webContents.executeJavaScript(`
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
        new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.attributeName === "content") {
                    window.electronAPI.setThemeColor(themeColorMeta.content);
                }
            }
        }).observe(themeColorMeta, { attributes: true });
    }
    `);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    ipcMain.on("set-theme-color", (event, color) => {
        const window = BrowserWindow.fromWebContents(event.sender);
        window.setTitleBarOverlay({ color, height: TITLEBAR_HEIGHT });
    });
    createWindow();

    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
