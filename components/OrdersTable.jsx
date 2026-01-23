"use client";
import { useEffect, useState } from "react";
import { Ban } from "lucide-react";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/orderData.json")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCancel = (id) => {
    if (
      confirm(
        "Are you sure you want to cancel this order? This action cannot be undone.",
      )
    ) {
      setOrders(
        orders.map((order) =>
          order.id === id ? { ...order, status: "cancelled" } : order,
        ),
      );
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "delivered":
        return "bg-green-500";
      case "pending":
        return "bg-orange-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="bg-(--background-secondary) rounded-xl p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-white text-2xl font-semibold">Orders List</h2>
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-auto min-w-[250px] px-4 py-3 border border-[#2a2a3e] rounded-lg bg-neutral-800 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse bg-(--background-secondary)">
          <thead className="hidden lg:table-header-group border-b border-neutral-600">
            <tr>
              {[
                "Order ID",
                "Client",
                "Total Cost",
                "Status",
                "Date",
                "Country",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-4 text-left text-[#a0a0b0] font-semibold text-xs uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-neutral-700 hover:bg-(--background-secondary-hover) transition-colors lg:table-row flex flex-col lg:flex-row mb-4 lg:mb-0 rounded-lg lg:rounded-none"
              >
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Order ID"
                >
                  <span className="font-semibold">{order.id}</span>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Client"
                >
                  {order.client}
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Total Cost"
                >
                  <span className="font-semibold">
                    {formatCurrency(order.totalCost)}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Status"
                >
                  <span
                    className={`inline-block px-3 py-1.5 ${getStatusColor(order.status)} text-white rounded-md text-xs font-medium capitalize`}
                  >
                    {order.status}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Date"
                >
                  {formatDate(order.date)}
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none border-b border-[#2a2a3e] lg:border-none"
                  data-label="Country"
                >
                  <span className="inline-block px-3 py-1.5 bg-(--primary-green) text-white rounded-md text-xs font-medium">
                    {order.country}
                  </span>
                </td>
                <td
                  className="px-4 py-4 text-[#e0e0e0] flex justify-between items-center lg:table-cell before:content-[attr(data-label)] before:font-semibold before:text-[#a0a0b0] before:text-xs before:uppercase before:mr-4 lg:before:content-none lg:border-none"
                  data-label="Actions"
                >
                  <div className="flex gap-2 justify-end md:justify-start w-full lg:w-auto">
                    <button
                      onClick={() => handleCancel(order.id)}
                      disabled={order.status === "cancelled"}
                      className={`p-2 ${
                        order.status === "cancelled"
                          ? "bg-gray-500 cursor-not-allowed opacity-50"
                          : "bg-red-500 hover:bg-red-600 cursor-pointer hover:-translate-y-0.5"
                      } text-white rounded-md transition-all inline-flex items-center justify-center`}
                      title={
                        order.status === "cancelled"
                          ? "Already Cancelled"
                          : "Cancel Order"
                      }
                    >
                      <Ban size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-8 text-[#a0a0b0]">
          {`No orders found matching "${searchTerm}"`}
        </div>
      )}
    </section>
  );
};

export default OrdersTable;
