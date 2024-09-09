const UserList = ({users = []})=> {

    return (
        <div className="users">
            <table>
                <tbody>

                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                    </tr>
                </tbody>
                <tbody data-testid="users">

                    {
                        users.length > 0 && users.map(user=> (
                            <tr key={user.name}>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default UserList;