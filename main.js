const electron = require('electron')

const {app, BrowserWindow} = electron
let win

//When the application is ready we create a renderer instance or browser
app.on('ready', ()=>{
    win = new BrowserWindow({
        height:500,
        width: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
})

