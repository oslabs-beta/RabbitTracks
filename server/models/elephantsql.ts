import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize(process.env.SQL_URI, {
  logging: false,
});
try {
  sequelize.authenticate();
} catch (err) {
  console.error('Unable to connect to the database: ', err);
}

module.exports = sequelize;
