import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const MainLayout = ({ children, search, setSearch }) => {
  console.log("MainLayout props:", search, setSearch)
  return (
    <div className="flex">
      
      <Sidebar />

      <div className="flex-1">

        <Navbar search={search} setSearch={setSearch} />

        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  )
}
export default MainLayout