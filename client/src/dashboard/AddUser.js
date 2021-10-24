import React, { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export const AddUser = () =>
{
    
    const history = useHistory();
    const [user, setUser] = useState([]);
    
    const customSubmit = async(e) =>
    {
      e.preventDefault();
      let obj = {
        firstName: user.firstName,
          lastName: user.lastName,
        phoneNumber: user.phoneNumber
      }
      await axios.post('/api/users', obj);
      
      history.push('/users');
    }
  
    const cancelUser = () =>
    {
      
      history.push('/users');
    }
   
    return (
        <div>
            <h1 className='large text-primary'>Add Movie</h1>
        
        <div className="App" style={{ width : "500px", marginLeft : "33%", padding: "1rem", marginBottom: "1rem", marginTop:"0,5rem"}}>
            
          <form className='form' onSubmit={e => customSubmit(e)} >
            <div className='form-group'>
              First Name: &nbsp; &nbsp; <input type="text" onChange={e => setUser({ ...user, firstName: e.target.value })} /></div>
            <div className='form-group'>
              Last Name: &nbsp; <input type="text" onChange={e => setUser({ ...user, lastName: e.target.value })} /></div>
            <div className='form-group' >
              Phone Number: <input type="text" onChange={e => setUser({ ...user, phoneNumber: e.target.value })} /></div>
            
            
       
            <input type="submit" className='btn btn-primary' value="Save Data" /> &nbsp;
            <input type = "button" className='btn btn-primary btn-dark' value="Cancel" onClick={cancelUser} />
          </form> 
         
  
            
           
        </div> 
        </div>
    )
}

