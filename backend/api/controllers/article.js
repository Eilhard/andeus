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
      sectionImages: req.body.sectionImages,
      sections: (typeof req.body.sections === 'string') ? JSON.parse(req.body.sections) : req.body.sections
    }).save();
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(`Can't create article.`);
    logger.logError(error);
  }
}

module.exports.update = async function (req, res) {
  let updated = {};
  if (req.body.title) updated.title = req.body.title;
  if (req.body.body) updated.body = req.body.body;
  if (req.file) updated.imgSrc = `${req.file.destination}/${req.file.filename}`;
  if (req.body.sectionImages) updated.sectionImages = req.body.sectionImages;
  if (req.body.sections) updated.sections = (typeof req.body.sections === 'string') ? JSON.parse(req.body.sections) : req.body.sections;
  try {
    let article = await Article.findOneAndUpdate(
    {_id: req.params.id},
    {$set: updated},
    {new: true}
  );
    res.status(200).send(article);
  } catch (error) {
    logger.logError(error);
    res.status(500).send("Can't update data. Try again later.");
  }
}


module.exports.deleteById = async function (req, res) {
  try {
    await Article.deleteOne({_id: req.params.id})
    res.status(200).send({
      id: req.params.id,
      message: "Article deleted"
    });
  } catch (error) {
    // res.status(400).send(`Invalid token`);
    logger.logError(error);
  }
}
