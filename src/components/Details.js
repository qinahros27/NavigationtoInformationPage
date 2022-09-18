import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { useParams} from 'react-router-dom';
const Details = () => {

  
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const {id}  = useParams();

  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
         setUser(Object.values(data))
      })
  }

  useEffect(() => {
    fetchData()
  }, []);

  return <div>
  <h1 className='header'>User Details</h1> 
  <div className="detail-background">
    {user.map((user, index) => 
    <div key={index} className='details box name'>
      <p>- name: {user.name}</p>
        <p>- username: {user.username}</p>
        <p>- email: {user.email}</p>
        <p>- phone: {user.phone}</p>
        <p>- company: {user.company.name}</p>
        <p>- website: {user.website}</p>
        <p>- address: </p>
        <ul>
          <li>street: {user.address.street}</li>
          <li>suite: {user.address.suite}</li>
          <li>city: {user.address.city}</li>
          <li>zipcode: {user.address.zipcode}</li>
        </ul>
        
    </div> )}
    <button onClick={() => navigate(-1)} className='button'>Go Back</button>   
</div>
</div>
}



export default Details;