import React from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Users = (props) => {
  const name = props.user.name.first + ' ' + props.user.name.last;
  const email = props.user.email;
  const phone = props.user.phone;
  const salary = (props.user.dob.age + 13) * 1000;
  const img = props.user.picture.large;
  const handleAdd = props.handleAdd;

  return (
    <div className='users-container'>
      <div className='img-container'>
        <img src={img} alt='' />
      </div>
      <div className='user-details'>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <small>Phone: {phone}</small>
        <br />
        <small>Salary: ${salary} /yr</small>
      </div>
      <div className='add-user'>
        <button class='button button1' onClick={() => handleAdd(props.user)}>
        <FontAwesomeIcon icon={faUser} /> Add User
        </button>
      </div>
    </div>
  );
};

export default Users;
