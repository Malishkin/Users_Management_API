import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

export const UpdateUser = () => {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      let resp = await axios.get('/api/users/' + params.id);
      setUser(resp.data);
    }
    fetchData();
  }, []);

  const customSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
    };
    await axios.put('/api/users/' + params.id, obj);

    history.push('/users');
  };

  const cancelUpdate = () => {
    history.push('/users');
  };
  return (
    <div className='App'>
      <h1 className='large text-primary'>Update Movie</h1>

      <div
        className='App'
        style={{
          width: '500px',
          marginLeft: '33%',
          padding: '1rem',
          marginBottom: '1rem',
          marginTop: '0,5rem',
        }}>
        <form className='form' onSubmit={(e) => customSubmit(e)}>
          <div className='form-group'>
            First Name: &nbsp; &nbsp;{' '}
            <input
              type='text'
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className='form-group'>
            Last Name: &nbsp;{' '}
            <input
              type='text'
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className='form-group'>
            Phone Number:{' '}
            <input
              type='text'
              value={user.phoneNumber}
              onChange={(e) =>
                setUser({ ...user, phoneNumber: e.target.value })
              }
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Save Data' />
          &nbsp;
          <input
            type='button'
            className='btn btn-primary btn-dark'
            value='Cancel'
            onClick={cancelUpdate}
          />
        </form>
      </div>
    </div>
  );
};
