const jwt = require("jsonwebtoken");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { UnAuthenticatedError } = require("../errors");

const authenticationMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  console.log(authorizationHeader);

  if (!authorizationHeader || authorizationHeader === "undefined") {
    throw new UnAuthenticatedError(ReasonPhrases.UNAUTHORIZED);
  }
};

module.exports = authenticationMiddleware;
