"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// test data
const data = [
  { name: "Product A", sales: 4500, revenue: 12000 },
  { name: "Product B", sales: 3200, revenue: 8500 },
  { name: "Product C", sales: 5800, revenue: 15000 },
  { name: "Product D", sales: 2800, revenue: 7200 },
  { name: "Product E", sales: 4200, revenue: 11000 },
];

const ProductPerformanceChart = () => {
  return (
    <div className="p-4 md:p-6 bg-(--background-secondary) rounded-lg">
      <h2 className="text-base md:text-lg font-medium mb-4 text-center md:text-left">
        Product Performance
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ fontSize: "12px" }}
            />
            <Bar dataKey="sales" fill="#3b82f6" />
            <Bar dataKey="revenue" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductPerformanceChart;
