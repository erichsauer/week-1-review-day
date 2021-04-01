"use strict";
var Pool = require('pg').Pool;
var pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGSSLMODE && { rejectUnauthorized: false }
});
pool.on('connect', function () { return console.log('Postgres connected'); });
module.exports = pool;
