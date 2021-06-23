'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

// const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
const sequelize = new Sequelize('sqlite:memory:', {});

module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
};