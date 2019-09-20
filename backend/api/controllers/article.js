const Article = require('../models/Article.js');
const config = require('../config/config.js');
const logger = require('../../logger/index.js');

module.exports.login = async function (req, res) {
  try {

  } catch (error) {
    // res.status(400).send(`Invalid token`);
    logger.logError(error);
  }
}
