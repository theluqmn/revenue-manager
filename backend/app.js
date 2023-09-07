const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Requiring the routes
const userRoutes = require('./routes/users')
const roleRoutes = require('./routes/roles')

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes that will handle requests
app.use('/users', userRoutes);
app.use('/roles', roleRoutes);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;