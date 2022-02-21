const notFoundMiddleware = require("./not-found");
const errorHandleMiddleware = require("./error-handler");
const authenticationMiddleware = require("./auth");
module.exports = {
  notFoundMiddleware,
  errorHandleMiddleware,
  authenticationMiddleware,
};
