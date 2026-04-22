
const Table = ({users = []}) =>{
    

    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">
                Users
            </h3>
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b">
                        <th className="py-2">Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {!users ||users.length === 0 ?(
                        <tr>
                            <td colSpan="2" className="text-center py-4 text-gray-500">
                                No Users found
                            </td>
                        </tr>
                    ) :(

                        users.map((user) =>(
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                )}
                    
                    
                </tbody>
            </table>
        </div>
    )

}
export default Table