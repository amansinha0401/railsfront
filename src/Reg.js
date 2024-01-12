import React, { useState } from 'react';
import './h1.css'; // Import the CSS file directly
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const reguser = async () => {
    try {
      if (password !== repeatPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await fetch('https://raildk.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await response.json();
      console.log(data);

      if (data.status === 'ok') {
        navigate('/home');
        alert("User Registered")
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    reguser();
  };

  return (
    <div className='hh1'>
    

      <div className="box">
        <form action="action_page.php" style={{ border: '1px solid #ccc' }} onSubmit={handleSubmit}>
          <div className="container">
            <h3>Sign Up</h3>
            <p>Please fill in this form to create an account.<br/>
            Already a customer <a href='/login'>log-in</a>
            </p>
            <hr />

            <label htmlFor="name"><b>Name</b></label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              value={name}
              onChange={handleNameChange}
            />

            <label htmlFor="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
            />

            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />

            <label htmlFor="repeat-password"><b>Repeat Password</b></label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="repeat-password"
              required
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
             <div className="clearfix">
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reg;
