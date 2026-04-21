import { useEffect, useState } from "react"
const Table = () =>{
    const [users, setUsers] = useState([])    // store data
    const [loading, setLoading] = useState(true) //loading state
    const [error, setError] = useState(null)     //error state

    // Fetch data when component loads

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then ((data) =>{
            setUsers(data)
            setLoading(false)
        })
        .catch((err) =>{
            setError("Failed to fetch data")
            setLoading(false)
        })
    }, [])

    //Loading UI
    if (loading) {
        return <p className="p-6">Loading users...</p>

    }

    // Error UI
    if(error){
        return <p>{error}</p>
    } 

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
                    {users.map((user) =>(
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-2">{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default Table