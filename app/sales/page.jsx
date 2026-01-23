'use client'

import CategoryDistributionChart from "@/components/charts/CategoryDistributionChart"
import SalesOverviewChart from "@/components/charts/SalesOverviewChart"
import StatCard from "@/components/StatCard"
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react"

const SalesPage = () => {
  return (
    <main className="space-y-8">
        <section className="flex flex-col md:flex-row gap-4">
            <StatCard name="Total Revenue" icon={DollarSign} value="$42,300"/>
            <StatCard name="Avg. Order Value" icon={ShoppingCart} value="$78,50"/>
            <StatCard name="Total Sales" icon={CreditCard} value="128,500"/>
            <StatCard name="Total Growth" icon={TrendingUp} value="36.2%"/>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SalesOverviewChart />
            <CategoryDistributionChart />
        </section>
    </main>
  )
}

export default SalesPage