const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_test');
mongoose.connection
    .once('open', () => {
        console.log('Connected');
    })
    .once('error', (error) => {
        console.warn('Warning', error);
    });