const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const errorHandleMiddleware = (err, req, res, next) => {
  console.log(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
};

module.exports = errorHandleMiddleware;
