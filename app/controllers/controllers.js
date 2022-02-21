const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const getController = (req, res, next) => {
  return res.status(StatusCodes);
};

module.exports = {
  getController,
};
