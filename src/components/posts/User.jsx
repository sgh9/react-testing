const User = ({user})=> {
    return (
        <div className="user">
            <p data-testid={user.name}>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default User;