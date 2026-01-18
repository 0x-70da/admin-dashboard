"use client";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"];

const CategoryDistributionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = fetch("/data/categoryDistributionData.json")
      .then((response) => {
        if (!response.ok) throw new Error("error fetching data");
        return response.json();
      })
      .then((data) => {
        setData(data.categories);
      })
      .catch((err) => {
        console.error("Error fetching category distribution data:", err);
      });
  }, []);
  return (
    <div className="p-4 md:p-6 bg-(--background-secondary) rounded-lg">
      <h2 className="text-base md:text-lg font-medium mb-4 text-center md:text-left">
        Category Distribution
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 95, 0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryDistributionChart;
