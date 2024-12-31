import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import TransactionsTable from "../components/TransactionTable";
import StatisticsBox from "../components/StatisticsBox";
import BarChartComponent from "../components/BarChart";
import PieChartComponent from "../components/PieChart";
import "./Dashboard.css";  

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Transactions Dashboard</h1>

      <div className="controls-container">
        <Dropdown selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        <input
          type="text"
          placeholder="Search transactions..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="stats-container">
        <StatisticsBox selectedMonth={selectedMonth} />
      </div>

      <div className="charts-container">
        <BarChartComponent selectedMonth={selectedMonth} />
        <PieChartComponent selectedMonth={selectedMonth} />
      </div>

      <div className="transactions-container">
        <TransactionsTable selectedMonth={selectedMonth} searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Dashboard;
