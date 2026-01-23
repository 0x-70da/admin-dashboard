import OrdersTable from "@/components/OrdersTable";
import StatCard from "@/components/StatCard";
import { ShoppingCart, CheckCircle, Clock, XCircle } from "lucide-react";

const OrdersPage = () => {
  return (
    <main className="space-y-8">
      <section className="flex flex-col md:flex-row gap-4">
        <StatCard name="Total Orders" icon={ShoppingCart} value={"2,847"} />
        <StatCard name="Completed Orders" icon={CheckCircle} value={"2,156"} />
        <StatCard name="Pending Orders" icon={Clock} value={"549"} />
        <StatCard name="Cancelled Orders" icon={XCircle} value={"142"} />
      </section>

      <OrdersTable />
    </main>
  );
};

export default OrdersPage;
