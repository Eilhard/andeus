const Article = require('../models/Article.js');
const config = require('../config/config.js');
const logger = require('../../logger/index.js');

module.exports.getAll = async function (req, res) {
  try {
    const articles = await Article.find({});
    res.send(articles);
  } catch (error) {
    // res.status(400).send(`Invalid token`);
    logger.logError(error);
  }
}

module.exports.create = async function (req, res) {
  try {
    const article = await new Article({
      title: req.body.title,
      body: req.body.body,
      imgSrc: req.file ? `${req.file.destination}/${req.file.filename}`  : '',
    }).save();
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(`Can't create article.`);
    logger.logError(error);
  }
}

module.exports.deleteById = async function (req, res) {
  try {
    await Article.remove({_id: req.params.id})
    res.status(200).send({
      id: req.params.id,
      message: "Article deleted"
    });
  } catch (error) {
    // res.status(400).send(`Invalid token`);
    logger.logError(error);
  }
}
