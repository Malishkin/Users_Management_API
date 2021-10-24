
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Users from "./Users";




export const MainPage = (props) =>
{
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    console.log("received userID: " + props.match.params.userId);
  
    

    useEffect(() =>
    {
        async function fetchData ()
        {
  
            let resp = await axios.get('/api/users');
            
          
            let usersByUrlParam = [];
            if (props.match.params.userId === undefined || props.match.params.userId === null) {
                usersByUrlParam = resp.data;
            }
            else {
                usersByUrlParam = resp.data.filter(user => user._id === props.match.params.userId);
            }
          
            setUsers(usersByUrlParam);
            setFilteredUsers(usersByUrlParam);
    
         
        } fetchData();
            
            
            
          
      
    
    }, []);
     
    const findByText = () =>
    {
        
      let userSearch = users.filter(x => x.firstName.toLowerCase().includes(text.toLowerCase()) || x.lastName.toLowerCase().includes(text.toLowerCase()));
      setFilteredUsers(userSearch);
        
    }

    const reset = () =>
  {
    window.location.reload();
  }
    
   
    return (
        <div  >
            <h1 className='large text-primary'>All Users</h1>
            
            <input className="form .social-input i" placeholder="Find movie" onChange={e=>setText(e.target.value)} />
            <input type="button" className='btn-success' value="Find..." onClick={findByText} />
            <input type="button" className='btn-dark' value="Reset" onClick={reset} />
        
            
        {
          { findByText } ?
          filteredUsers.map(item =>
              {
                  return <Users key={item._id} usersData={item }/>
              }) :
              
               users.map(item =>
                {
                    return <Users key={item._id} usersData={item }/>
               })
         
        
        }
     
            
        </div>
    )
}
