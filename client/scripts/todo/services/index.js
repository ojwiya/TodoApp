'use strict';

module.exports = function(app) {
    // inject:start
    require('./todo.service')(app);
    // inject:end
};