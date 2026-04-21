import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 p-8 bg-gray-100 overflow-auto">
          {children}
        </div>
      </div>

    </div>
  )
}

export default MainLayout