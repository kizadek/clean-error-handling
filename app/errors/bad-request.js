const { CustomAPIErrors } = require(".");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends CustomAPIErrors {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
