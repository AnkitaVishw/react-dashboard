import { useState } from "react"
import MainLayout from "./layout/MainLayout"
import Dashboard from "./pages/Dashboard"

function App() {
  const [search, setSearch] = useState("")

  return (
    <MainLayout search={search} setSearch={setSearch}>
      <Dashboard search={search} />
    </MainLayout>
  )
}

export default App