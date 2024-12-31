import React, { useEffect, useState } from "react";
import { fetchPieChart } from "../api";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const PieChartComponent = ({ selectedMonth }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPieChart({ month: selectedMonth });
      setData(response.data);
    };
    fetchData();
  }, [selectedMonth]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="count"
        nameKey="_id"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
