// const mysql = require('mysql2/promise');
const { client } = require('ps')
// const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: '3306',
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

module.exports = {
    pool: pool
};