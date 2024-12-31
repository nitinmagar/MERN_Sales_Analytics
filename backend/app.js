const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const seedRoutes = require("./routes/seedRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const statisticsRoutes = require("./routes/statisticsRoutes");
const barChartRoutes = require("./routes/barchartRoutes");
const pieChartRoutes = require("./routes/piechartRoutes");
const combinedRoutes = require("./routes/combinedRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });
  
debugger;
app.use("/api/seed", seedRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/statistics", statisticsRoutes);
app.use("/api/bar-chart", barChartRoutes);
app.use("/api/pie-chart", pieChartRoutes);
app.use("/api/combined", combinedRoutes);
module.exports = app;
