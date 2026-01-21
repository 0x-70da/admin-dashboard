import ProductsTable from "@/components/ProductsTable"
import StatCard from "@/components/StatCard"
import { ChartBarStacked, DollarSign, ShoppingBag, SquareActivity } from "lucide-react"

const ProductsPage = () => {
  return (
    <main className="space-y-8">
      <section className="flex flex-col md:flex-row gap-4">
        <StatCard name="Total Products" icon={ShoppingBag} value={"4,352"} />
        <StatCard name="Total Stock" icon={SquareActivity} value={"18,450"} />
        <StatCard name="Total Sold" icon={DollarSign} value={"12,780"} />
        <StatCard name="Total Categories" icon={ChartBarStacked} value={"8"} />
      </section>
      
      <ProductsTable />
    </main>
  )
}

export default ProductsPage