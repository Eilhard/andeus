const winston = require('winston');
const { format } = winston;

let time = () => {
  let date = new Date();
  return date.getDate() + "." + (date.getMonth() + 1) + "." +  date.getFullYear();
};

const logFormat = format.printf(({ level, name, message, timestamp }) => {
  return `${timestamp} [${level}] ${name}: ${message}`;
});

const logger = winston.createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    logFormat,
  ),
  defaultMeta: { service: 'Mirror API' },
  transports: [
    new winston.transports.File({ filename: `./logger/log/${time()}.log`, level: 'error' }),
  ]
});

module.exports.logErrorGlobal = function (err, req, res, next) {
    logger.error(err)
    next()
}

module.exports.logError = function (err) {
    logger.error(err);
}
