var mongoose = require('mongoose');
var credential = require(process.env.DEV ? './secret' : './credential');

module.exports = function(logger) {
    var connect = mongoose.connection;
    if (connect) {
        mongoose.Promise = global.Promise;
        mongoose.connect(credential.db);
    }
    connect.on('error', function(error) {
        return logger.error(error.message);
    });
};