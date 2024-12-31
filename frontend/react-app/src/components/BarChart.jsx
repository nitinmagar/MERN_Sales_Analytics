import React, { useEffect, useState } from "react";
import { fetchBarChart } from "../api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarChartComponent = ({ selectedMonth }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBarChart({ month: selectedMonth });
      setData(response.data);
    };
    fetchData();
  }, [selectedMonth]);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartComponent;
