const Sequelize = require('sequelize');
const database = require('../index');

const Devices = database.define('tb_devices', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    deviceid: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    imei: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bl1: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bl2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Devices;