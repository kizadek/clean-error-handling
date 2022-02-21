const { StatusCodes } = require("http-status-codes");
const CustomAPIErrors = require("./custom-error");

class UnAuthenticatedError extends CustomAPIErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticatedError;
