const Transaction = require("../models/transactionModel");

exports.getPieChart = async (req, res) => {
  const { month } = req.query;

  try {
    const query = {
      dateOfSale: { $gte: new Date(2021, month - 1, 1), $lt: new Date(2021, month, 1) },
    };

    const categories = await Transaction.aggregate([
      { $match: query },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pie chart data", error });
  }
};
