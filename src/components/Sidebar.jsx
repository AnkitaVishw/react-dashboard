const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 ">
      <h2 className="text-2xl font-bold mb-10">Dashboard</h2>

      <ul className="space-y-2">
        <li className="flex items-center gap-2 bg-gray-700 p-3 rounded-lg cursor-pointer">Dashboard</li>

        <li className=" hover:bg-gray-800 p-3 rounded cursor-pointer transition duration-200">
          Users
        </li>

        <li className="hover:bg-gray-800 p-3 rounded cursor-pointer transition duration-200">
          Settings
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
