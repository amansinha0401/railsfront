import React, { useState } from 'react';
import './h1.css'; // Import the CSS file directly
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error message
  const navigate = useNavigate();

  async function logUser() {
    try {
      const response = await fetch('https://raildk.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await response.json();

      if (data.status === 'ok') {
        navigate('/home');
        alert("Login Succesfull")
      } else {
        // If the response status is not 'ok', set the error state
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      // Handle other types of errors (e.g., network issues)
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  }
  const handleButtonClick = () => {
    navigate('/signup'); 
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before making a new request
    logUser();
  };



  return (
    <>
      
        
        <div className="box">
          <form action="action_page.php" method="post" onSubmit={handleSubmit}>
            <div class="container">
              {error && <div className="error-popup">{error}</div>}
              <label for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required value={email} onChange={handleEmailChange} />
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={handlePasswordChange} />
              <div class="clearfix"> 
                <button type="submit">Login</button>
                <button className='ak' onClick={handleButtonClick}>Register</button>
              </div>
              
            </div>
          </form>
          
        </div>
      
    </>
  );
};

export default Login;
