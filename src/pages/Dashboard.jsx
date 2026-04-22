import StatsCard from "../components/StatsCard"
import Table from "../components/Table"
import { useEffect, useState } from "react"

const Dashboard = ({ search }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard Overview 🚀
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard title="Users" value={users.length} />
        <StatsCard title="Revenue" value="$8,500" />
        <StatsCard title="Orders" value="320" />
        <StatsCard title="Growth" value="+12%" />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table users={filteredUsers} />
      )}
    </div>
  )
}

export default Dashboard