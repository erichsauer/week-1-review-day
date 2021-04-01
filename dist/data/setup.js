"use strict";
var fs = require('fs').promises;
module.exports = function (pool) {
    return fs.readFile(__dirname + "/../sql/setup.sql", { encoding: 'utf-8' })
        .then(function (sql) { return pool.query(sql); });
};
