import React, { useEffect, useState } from "react";
import { fetchStatistics } from "../api";

const StatisticsBox = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchStatistics({ month: selectedMonth });
      setStatistics(response.data);
    };
    fetchData();
  }, [selectedMonth]);

  return (
    <div>
      <div>Total Sales: ${statistics.totalSaleAmount || 0}</div>
      <div>Sold Items: {statistics.totalSoldItems || 0}</div>
      <div>Not Sold Items: {statistics.totalNotSoldItems || 0}</div>
    </div>
  );
};

export default StatisticsBox;
