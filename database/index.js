const { Sequelize } = require('sequelize');

// CONEXÃO MYSQL
const sequelize = new Sequelize('etiquetas', 'root', 'usbw', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false

});


try {
  sequelize.authenticate();
  console.log('MySQL Conectado');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;