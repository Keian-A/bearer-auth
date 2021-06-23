'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { next('No header information found.'); }

  try {

    let basic = req.headers.authorization.split(' ');
    let encodedString = basic.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');

    req.user = await users.authenticateBasic(username, password);

    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
}