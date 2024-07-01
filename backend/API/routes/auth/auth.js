const express = require("express");
const router = express.Router();
const register_action = require("./register");

console.log("ROUTE: AUTH");

router.post("/register", register_action);

// router.post("/login", setLogin);

module.exports = router;
