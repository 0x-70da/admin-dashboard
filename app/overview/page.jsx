"use client";
import StatCard from "@/components/StatCard";
import { DollarSign, ShoppingBag, SquareActivity, Users } from "lucide-react";
import { motion } from "framer-motion";
import SalesOverviewChart from "@/components/charts/SalesOverviewChart";
import CategoryDistributionChart from "@/components/charts/CategoryDistributionChart";
import OrderDistributionChart from "@/components/charts/OrderDistributionChart";
import ProductPerformanceChart from "@/components/charts/ProductPerformanceChart";

const OverviewPage = () => {
  return (
    <main className="space-y-8">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <StatCard name="Total Sales" icon={DollarSign} value="$182,450" />
        <StatCard name="Total Clients" icon={Users} value="1,437" />
        <StatCard name="Total Products" icon={ShoppingBag} value="674" />
        <StatCard name="Stock" icon={SquareActivity} value="12,845" />
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SalesOverviewChart />
        <CategoryDistributionChart />
        <OrderDistributionChart />
        <ProductPerformanceChart />
      </section>
    </main>
  );
};

export default OverviewPage;
