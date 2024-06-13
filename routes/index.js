const express = require('express');
const mainRouter = express.Router();
const playlistRouter = require('./playlistRoute');
const songRoute = require('./songRoute'); 
const userRoute = require('./userRoute');

function mainRouting(app){
    app.use('/api/v1/songapp', mainRouter);
    mainRouter.use('/playlist', playlistRouter);
    mainRouter.use('/user', userRoute);
    mainRouter.use('/song', songRoute);
}

module.exports = mainRouting;