const Transaction = require("../models/transactionModel");

exports.getTransactions = async (req, res) => {
  const { month, search, page = 1, perPage = 10 } = req.query;
debugger;
console.log('request query',req.query);
  try {
    debugger;
    const query = {
      dateOfSale: {
        $gte: new Date(2021, month - 1, 1),
        $lt: new Date(2021, month, 1),
      },
    };

    if (search) {
      debugger;
      const isNumeric = !isNaN(search);
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        ...(isNumeric ? [{ price: parseFloat(search) }] : []),
      ];
    }

    const transactions = await Transaction.find(query)
      .skip((page - 1) * parseInt(perPage))
      .limit(parseInt(perPage));

    const total = await Transaction.countDocuments(query);

    res.status(200).json({ transactions, total });
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions", error });
  }
};
