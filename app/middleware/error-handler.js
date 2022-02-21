const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const CustomAPIErrors = require("../errors/custom-error");
const errorHandleMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIErrors) {
    return res.status(err.statusCode).json({
      success: false,
      msg: err.message,
    });
  }
  console.log(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
};

module.exports = errorHandleMiddleware;
