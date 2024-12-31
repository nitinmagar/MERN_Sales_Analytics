const Transaction = require("../models/transactionModel");

exports.getStatistics = async (req, res) => {
  const { month } = req.query;

  try {
    debugger;
    console.log('request query',req.query);
    const query = {
      dateOfSale: { $gte: new Date(2021, month - 1, 1), $lt: new Date(2021, month, 1) },
    };
    console.log('request query',query);
    const transactions = await Transaction.find(query);
    const totalSaleAmount = transactions.reduce((sum, t) => sum + (t.sold ? t.price : 0), 0);
    const totalSoldItems = transactions.filter((t) => t.sold).length;
    const totalNotSoldItems = transactions.filter((t) => !t.sold).length;

    res.status(200).json({ totalSaleAmount, totalSoldItems, totalNotSoldItems });
  } catch (error) {
    res.status(500).json({ message: "Error fetching statistics", error });
  }
};
