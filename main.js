import { BrowserWindow, app } from "electron";
import url from 'url';
import path from 'path';
let win;

var createMainWIndow = () => {
  win = new BrowserWindow({
    width:500,
    height: 350,
    title:'School of net'  
  });
  
  win.loadURL(
    url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:'
  }));
}



app.on('ready')









// const electron  = require ('electron');
// const url       = require('url');
// const path      = require('path');
// const { Menu } = require('electron/main');
// const app       = electron.app;
// const dialog = electron.dialog;

// let win

// app.on('ready', function(){
//   let win = new electron.BrowserWindow({
//     widht: 600,
//     height: 600
//   });

//   win.loadURL(url.format({
//     pathname: path.join(__dirname, 'index.html'),
//     protocol: 'file:'
//   }));

//   win.webContents.openDevTools();

//   win.on('closed', function(){
//     console.log('Bye bye')
//   });

//   dialog.showMessageBox(win,{
//     type: 'none',
//     message: 'Hello from dialog',
//     title: 'SON',
//     buttons:[]
//   });

//   dialog.showOpenDialog(win, {
//     title: 'Select a new file from Electron',
//     buttonLabel: 'SON'
//   });

//   dialog.showErrorBox('Title errror', 'Content')

//   dialog.showSaveDialog(win, {
//     title: 'Save dialog',
//     buttonLabel: 'Save here'
//   })

//   let menuTemplate = [
//     {
//     label: 'Menu 1',
//     },
//     {
//       label: 'Menu 2',
//       submenu: [
//         {
//           label: 'Hello',
//           click: function(item, win, event) {
//             dialog.showMessageBox(win, {
//               title: 'Hello from Menu',
//               message: 'Hi this is the submenu',
//               buttons: []
//             })
//           }
//         }
//       ]
//     }
//   ];

//   const menu = new Menu();

//   menu.append(new MenuItem({
//     label: 'Menu 1'
//   }));
//   menu.append(new MenuItem({
//     label: 'Menu 2',
//     click: function(){
//       dialog.showMessageBox(win,{
//       type: 'none',
//       message: 'Hello from dialog',
//       title: 'SON',
//       buttons:[]
//       });
//     }
//   }))


//   const menu = Menu.buildFromTemplate(menuTemplate);
//   Menu.setApplicationMenu(menu);
// });

// app.on('before-quit', function(){
//   console.log('Bye bye app')
// });