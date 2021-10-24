import { useHistory } from 'react-router';
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import 'bootstrap/dist/css/bootstrap.css';

function Users(props) {
  const history = useHistory();
  const update = () => {
    history.push('/updateuser/' + props.usersData._id);
  };
  const deleteUser = () => {
    const MySwal = withReactContent(Swal);

    const swalWithBootstrapButtons = MySwal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete('/api/users/' + props.usersData._id);
          swalWithBootstrapButtons
            .fire('Deleted!', 'Your file has been deleted.', 'success')
            .then(function () {
              window.location.reload();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };

  return (
    <div
      className='App'
      style={{
        borderStyle: 'solid',
        width: '500px',
        marginLeft: '33%',
        padding: '1rem',
        marginBottom: '1rem',
        marginTop: '0,5rem',
      }}>
      First Name: {props.usersData.firstName} <br />
      <br />
      Last Name: {props.usersData.lastName} <br />
      <br />
      Phone Number: {props.usersData.phoneNumber} <br />
      <br />
      <input
        className='btn btn-success'
        type='button'
        value='Edit user'
        onClick={update}
      />{' '}
      &nbsp;
      <input
        className='btn btn-danger'
        type='button'
        value='Delete user'
        onClick={deleteUser}
      />
    </div>
  );
}

export default Users;
