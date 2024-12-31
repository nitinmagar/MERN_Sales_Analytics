const express = require("express");
const { seedDatabase } = require("../controllers/seedController");

const router = express.Router();

router.get("/", seedDatabase);
console.log("Seed route hit");
module.exports = router;

