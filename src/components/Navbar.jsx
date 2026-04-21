const Navbar = () => {
  return (
    <div className="h-16 bg-white shadow border-b flex items-center justify-between px-6">
      
      <div className="flex items-center gap-2">
        <input
      type="text"
      placeholder="Search.."
      className="border border-gray-300 rounded-lg px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400"
      
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Search
      </button>

      </div>
      
      <div className="flex items-center gap-4">

        <span className="cursor-pointer text xl">🔔</span>


        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-300 rounded-full">
            <span className="font-medium">Ankita</span>
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
