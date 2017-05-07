const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_test');
const db = mongoose.connection
    .once('open', () => {
        console.log('Connected');
    })
    .once('error', (error) => {
        console.warn('Warning', error);
    });

// Executed before each test
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test
        done();
    });
});