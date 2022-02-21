const router = require("express").Router();
const { getController } = require("../controllers/controllers");
const authenticationMiddleware = require("../middleware/auth");
router.route("/get").get([authenticationMiddleware], getController);

module.exports = router;
