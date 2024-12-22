const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/registerpatient").post(authController.registerPatient);
router.route("/registermedecin").post(authController.registerMedecin);
router.post('/login', authController.login);

module.exports = router;
