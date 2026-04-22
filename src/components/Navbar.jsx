const Navbar = ({ search, setSearch }) => {
  return (
    <div className="h-16 bg-white shadow border-b flex items-center justify-between px-6 ">

      {/* 🔍 Search Section */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 👤 Profile Section */}
      <div className="flex items-center gap-4">

        {/* Notification Icon */}
        <span className="text-lg cursor-pointer">🔔</span>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          
          {/* Avatar */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-semibold">
            A
          </div>

          {/* Name */}
          <span className="font-medium">Ankita</span>
        </div>

      </div>
    </div>
  )
}
export default Navbar