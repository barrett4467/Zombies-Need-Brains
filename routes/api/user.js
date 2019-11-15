const router = require("express").Router();
const userController = require("../../controllers/modelcontroller");

router.route("/")
  .post(userController.create)
  .get(userController.find);


module.exports = router;