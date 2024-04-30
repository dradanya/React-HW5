import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles\.css'

function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className='main-wrapper'>
      <div className='wrapper'>
      <h2>User List</h2>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <Link to={`/albums/${user.id}`}>Albums</Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UserListPage;