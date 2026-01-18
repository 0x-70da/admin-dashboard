"use client";
import { useEffect, useState } from "react";
import { LineChart } from "recharts";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SalesOverviewChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = fetch("/data/SalesOverviewData.json")
      .then((response) => {
        if (!response.ok) throw new Error("error fetching data");
        return response.json();
      })
      .then((data) => {
        setData(data.sales);
      })
      .catch((err) => {
        console.error("Error fetching sales overview data:", err);
      });
  }, []);

  return (
    <div className="p-4 md:p-6 bg-(--background-secondary) rounded-lg">
      <h2 className="text-base md:text-lg font-medium mb-4 text-center md:text-left">
        Sales Overview
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 95, 0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="var(--primary-green)"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
