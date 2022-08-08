const auth = require("../controllers/auth");
const router = require("express").Router();

router.post("/signup", auth.signup);
router.post("/login", auth.login);
router.post("/verify-email", auth.verifyEmail);
router.post("/resend-otp", auth.resendOTP);
router.post("/logout", auth.logout);

module.exports = router;
