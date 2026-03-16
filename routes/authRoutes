const express = require("express");

const authController = require("../controllers/authController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authController.renderHome);
router.get("/signup", authController.renderSignup);
router.post("/signup", authController.signup);
router.get("/login", authController.renderLogin);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/dashboard", requireAuth, authController.dashboard);

module.exports = router;
