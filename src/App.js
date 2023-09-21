import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users?page=1`');
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <nav>
        <span className="brand">Manoj Gupta</span>
        <span className="topic">LGMVIP-Web-Task-02-Web-Application</span>
        <button onClick={getUsers}>Get Users Data</button>
      </nav>
      <div className="container">
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="card-grid">
            {users.map((user) => (
              <div className="card" key={user.id}>
                <img src={user.avatar} alt={user.first_name} />
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
