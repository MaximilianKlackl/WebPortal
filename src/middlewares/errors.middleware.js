const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  /* eslint-enable no-unused-vars */
  console.log(err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
