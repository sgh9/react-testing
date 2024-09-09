import './styles.css';
import ProductList from './components/ProductList';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import { useState } from 'react';
import Posts from './components/posts/Posts';
import axios from 'axios';

export default function App() {

  const [users, setUsers] = useState([]);


  const addUser = (user)=> {
    setUsers(prev => [...prev, user]);
  }

  const getUsers = async()=> {
    const finalUrl = "https://jsonplaceholder.typicode.com/users/";

    try {
        const response =await axios.get(finalUrl);
        const data = await response.data;

    } catch (error) {
        console.log(error)
    }
}

  const isGetDataCalled = (call, userId)=> {
    console.log({call, userId});
    getUsers()
  }

  return (
    <div className="container mx-auto">
      {/* <ProductList />
      <UserForm addUser={addUser}/>
      <hr/>
      <UserList users={users}/> */}
      <Posts visible={true} isGetDataCalled={isGetDataCalled}/>
    </div>
  );
}
