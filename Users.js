import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user details from the backend
    axios.get('http://localhost:5040/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div className="admin-dashboard" style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ color: '#333' }}>Admin Dashboard - User Details</h2>
      <p>Total number of users: {users.length}</p>

      <table className="user-table" style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Email</th>
            {/* Add more user details headers as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td style={thTdStyle}>{user.username}</td>
              <td style={thTdStyle}>{user.email}</td>
              {/* Display more user details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
