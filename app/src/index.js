const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const fastify = require("fastify");
const fastifyStatic = require("@fastify/static");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    app.quit();
}

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

    await mainWindow.loadURL(`http://localhost:${PORT}`);

    await mainWindow.webContents.executeJavaScript(`
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
        window.electronAPI.setThemeColor(themeColorMeta.content);
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

// the fixed port serves two purposes: it keeps a stable URL for persisting data in localStorage
// and acts as a single-instance lock to prevent multiple instances of the app from running simultaneously
const PORT = 50320; // rolled the dice
fastify()
    .register(fastifyStatic, { root: path.join(__dirname, "dist") })
    .listen({ port: PORT, host: "localhost" })
    .then(
        () => {
            app.whenReady().then(() => {
                ipcMain.on("set-theme-color", (event, color) => {
                    const window = BrowserWindow.fromWebContents(event.sender);
                    window.setTitleBarOverlay({ color, height: TITLEBAR_HEIGHT });
                });
                createWindow().then();

                // On OS X it's common to re-create a window in the app when the
                // dock icon is clicked and there are no other windows open.
                app.on("activate", () => {
                    if (BrowserWindow.getAllWindows().length === 0) {
                        createWindow().then();
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
        },
        (err) => {
            console.error("Failed to start server:", err);
            app.quit();
        }
    );
