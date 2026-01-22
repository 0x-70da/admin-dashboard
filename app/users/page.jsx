import UsersTable from "@/components/UsersTable"
import StatCard from "@/components/StatCard"
import { Users, UserPlus, UserCheck, UserCog } from "lucide-react"

const UsersPage = () => {
  return (
    <main className="space-y-8">
      <section className="flex flex-col md:flex-row gap-4">
        <StatCard name="Total Clients" icon={Users} value={"2,847"} />
        <StatCard name="New Clients" icon={UserPlus} value={"342"} />
        <StatCard name="Active Clients" icon={UserCheck} value={"2,156"} />
        <StatCard name="Returning Clients" icon={UserCog} value={"1,523"} />
      </section>
      
      <UsersTable />
    </main>
  )
}

export default UsersPage
