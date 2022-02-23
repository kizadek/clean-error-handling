const jwt = require("jsonwebtoken");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { UnAuthenticatedError } = require("../errors");
const jwtKey = privateKey;
const authenticationMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || authorizationHeader === "undefined") {
    throw new UnAuthenticatedError(ReasonPhrases.UNAUTHORIZED);
  }

  const token = authorizationHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, jwtKey);
    next();
  } catch (error) {
    throw new UnAuthenticatedError(ReasonPhrases.UNAUTHORIZED);
  }
};

module.exports = authenticationMiddleware;
