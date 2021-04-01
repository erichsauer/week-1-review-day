"use strict";
// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status);
    console.log(err);
    res.send({
        status: status,
        message: err.message
    });
};
