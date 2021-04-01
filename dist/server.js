"use strict";
var _app = require('./lib/app');
var _pool = require('./lib/utils/pool');
var PORT = process.env.PORT || 7890;
_app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("Started on " + PORT);
});
process.on('exit', function () {
    console.log('Goodbye!');
    _pool.end();
});
