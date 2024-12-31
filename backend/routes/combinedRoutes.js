const express = require("express");
const { getCombinedData } = require("../controllers/combinedController");

const router = express.Router();

router.get("/", getCombinedData);  // Add the route for the combined data API

module.exports = router;
