const router = require("express").Router();
const { getController, get } = require("../controllers/controllers");
const authenticationMiddleware = require("../middleware/auth");
router
  .route("/get")
  .get([authenticationMiddleware], getController)
  .post([authenticationMiddleware], get);

module.exports = router;
