import StatsCard from "../components/StatsCard"
import Table from "../components/Table"

const Dashboard = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-6">
      Dashboard Overview🚀
    </h2>
    <div className="grid grid-cols-4 gap-6 mb-8">
      <StatsCard title="Users" value="1,200" />
      <StatsCard title="Revenue" value="$8,500" />
      <StatsCard title="Orders" value="320" />
      <StatsCard title="Growth" value="+12%" />
      
    </div>
    <Table />
    </div>
    
  )
}

export default Dashboard