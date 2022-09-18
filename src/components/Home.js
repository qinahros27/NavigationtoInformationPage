import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(Object.values(data)))
    .catch(err => console.error(err))
  }

  return (
    <div>
      <h1 className='header'>Contact Information</h1> 
    <div className='App'>
    <div className="container">
      {users.map((user, index) => 
      <div key={index} className='box'>

        <p className='first-letter'> {user.name[0]}</p>
        <p className='name'>{user.name}</p>
        <p className='username'>@{user.username}</p>
        <p><a href='#'>http://{user.website}</a></p>
        <button onClick={() => navigate("/user/"+ `${user.id}`)} className='button'>More Details</button>
      </div> )
}
    </div>
    </div>
    </div>
   );
}





export default Home;