var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var settingRouter = require('./routes/setting');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const config = require('./config/index')

mongoose.connect( config.MONGODB_URI, {useNewUrlParser: true, useCreateIndex:true});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/setting', settingRouter);

module.exports = app;
