const mongoose = require('mongoose');

// ES6 promise
mongoose.Promise = global.Promise;

// Before all tests
before((done) => {
    mongoose.connect('mongodb://localhost/user_test');
    mongoose.connection
        .once('open', () => {
           done();
        })
        .on('error', (error) => {
            console.warn('Warning', error);
        });
});

// Executed before each test
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        // Ready to run the next test
        done();
    });
});