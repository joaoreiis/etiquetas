const mysql = require('./database/index');
const { Devices } = require('./database/models');


const server = require('./app.js');
const zebra = require('./services/zebra');

async function init() {
    await mysql.sync();

}
init();
