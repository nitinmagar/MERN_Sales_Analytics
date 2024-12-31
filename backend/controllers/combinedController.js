const axios = require("axios");


exports.getCombinedData = async (req, res) => {
  const { month } = req.query;  // You can pass the month as a query parameter, for example: ?month=1
console.log(req.query);
  try {
    // Fetch transaction data
    const transactionsResponse = await axios.get(`http://localhost:5000/api/transactions?month=${month}`);
    const transactionsData = transactionsResponse.data;

    // Fetch bar chart data
    const barChartResponse = await axios.get(`http://localhost:5000/api/bar-chart?month=${month}`);
    const barChartData = barChartResponse.data;

    // Fetch pie chart data
    const pieChartResponse = await axios.get(`http://localhost:5000/api/pie-chart?month=${month}`);
    const pieChartData = pieChartResponse.data;

    // Combine the data into a single object
    const combinedData = {
      transactions: transactionsData,
      barChart: barChartData,
      pieChart: pieChartData,
    };

    // Send the combined data as the response
    res.status(200).json(combinedData);
  } catch (error) {
    console.error("Error fetching combined data:", error);
    res.status(500).json({ message: "Error fetching combined data", error });
  }
};
