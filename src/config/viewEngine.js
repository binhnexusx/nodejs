const path = require('path');
const express = require('express');
const conFigViewEngine = (app) => {
    console.log('>>>> Check dirname:', __dirname);
    app.set('views', path.join('./src', './views/'));
    app.set('view engine', 'ejs')
    //  config static files
    app.use(express.static(path.join('./src', 'public')));
}
module.exports = conFigViewEngine;