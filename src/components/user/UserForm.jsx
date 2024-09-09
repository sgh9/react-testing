import { useState } from "react";

const defaultUser = {
    name: "",
    email: "",
    mobile: ""
}

const UserForm = ({ addUser })=> {

    const [user, setUser] = useState(defaultUser);

    const handleUserChange = (e)=> {
        const { value , id } = e.target;
        setUser(prev=> ({ ...prev, [id]: value}))
    }

    const handleSubmitUser = (e)=> {
        e.preventDefault();
        if(!(user.name && user.email && user.mobile)) return;
        addUser(user); 
        setUser(defaultUser);
    }

    return (
        <form className="userForm" onSubmit={handleSubmitUser}>
            <div className="input-name">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" className="input" value={user.name} onChange={handleUserChange} />
            </div>
            <div className="input-name">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" className="input" value={user.email} onChange={handleUserChange}/>
            </div>

            <div className="input-name">
                <label htmlFor="name">Mobile</label>
                <input id="mobile" name="mobile" type="text" className="input" value={user.mobile} onChange={handleUserChange}/>
            </div>

            <button>Submit</button>
        </form>
    )
}

export default UserForm;