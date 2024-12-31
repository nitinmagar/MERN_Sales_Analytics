const axios = require("axios");
const Transaction = require("../models/transactionModel");


exports.seedDatabase = async (req, res) => {
  console.log("Seed API hit");
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    console.log('seed controller hit');
    console.log("Fetched data:", response.data);

    if (!response.data || response.data.length === 0) {
      console.log("No data found in API response");
      return res.status(400).json({ message: "No data found in the API response" });
    }

    console.log("Deleting existing data");
    await Transaction.deleteMany({});
    console.log("Inserting new data");
    await Transaction.insertMany(response.data);

    console.log("Seeding completed");
    res.status(200).json({ message: "Database seeded successfully",data:response.data });
  } catch (error) {
    console.error("Error during seeding:", error.message);
    res.status(500).json({ message: "Error seeding database", error });
  }
};
