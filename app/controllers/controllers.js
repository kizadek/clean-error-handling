const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const getController = (req, res, next) => {
  const luckyNumber = Math.round();
  return res.status(StatusCodes.OK).json({
    success: true,
    msg: `you lucky number is ${luckyNumber}`,
  });
};

const get = (req, res, next) => {
  res.status(StatusCodes.OK).send(`,getSome`);
};

module.exports = {
  getController,
  get,
};
