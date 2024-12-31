const Transaction = require("../models/transactionModel");

exports.getBarChart = async (req, res) => {
  debugger;
  console.log('request query',req.query);
  const { month } = req.query;

  try {
    debugger;

    const query = {
      dateOfSale: { $gte: new Date(2021, month - 1, 1), $lt: new Date(2021, month, 1) },
    };

    const transactions = await Transaction.find(query);
    const ranges = Array(10).fill(0);
    const labels = [
      "0-100", "101-200", "201-300", "301-400", "401-500",
      "501-600", "601-700", "701-800", "801-900", "901+"
    ];

    transactions.forEach((t) => {
      const idx = Math.min(Math.floor(t.price / 100), 9);
      ranges[idx]++;
    });

    res.status(200).json(labels.map((range, i) => ({ range, count: ranges[i] })));
  } catch (error) {
    res.status(500).json({ message: "Error fetching bar chart data", error });
  }
};
