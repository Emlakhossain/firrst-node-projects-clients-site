import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email }

    /* Post data To Server */
    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newUser = [...users, data]
        setUsers(newUser)
      })
  }
  return (
    <div className="App">
      <h2>User{users.length}</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='Enter Your Name' required />
          <input type="email" name="email" id="" placeholder='Email' required />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        {
          users.map(user => <User
            key={user.id}
            user={user}
          ></User>)
        }
      </div>
    </div>
  );
}

export default App;
