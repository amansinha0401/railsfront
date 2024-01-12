import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logsing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const logUser = async () => {
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
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); 
    logUser();
  };

  //signup
  const [name, setName] = useState("");
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const reguser = async () => {
    try {
      if (password1 !== repeatPassword) {
        setError("Passwords do not match");
        return;
      }

      const response = await fetch('https://raildk.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email: email1,
          password: password1
        })
      });

      const data = await response.json();

      if (data.status === 'ok') {
        navigate('/home');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange1 = (e) => {
    setEmail1(e.target.value);
  };

  const handlePasswordChange1 = (e) => {
    setPassword1(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before making a new request
    reguser();
  };

  return (
    <div className="row justify-content-center" style={{ paddingTop: '30px' }}>
    <div className="row justify-content-center">
      <div className="col-md-4 mb-3">
        {/* Registration */}
        <div className="card shadow p-2 animated zoomIn slow">
          <h3 className="text-center font-weight-bold text-uppercase mb-3">SIGN UP</h3>
          <form onSubmit={handleSubmit1}>
            <div className="form-group">
              <label htmlFor="name"><b>Name</b></label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input type="text" className="form-control" placeholder="Enter Email" name="email1" required value={email1} onChange={handleEmailChange1} />
            </div>
            <div className="form-group">
              <label>Enter Password</label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password1" required value={password1} onChange={handlePasswordChange1} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" name="repeatPassword" required value={repeatPassword} onChange={handleRepeatPasswordChange} />
            </div>
            <button type="submit" className="signupbtn">Sign Up</button>
            {error && <div className="text-danger">{error}</div>}
          </form>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        {/* Login */}
        <div className="card animated zoomIn slow p-2">
          <h3 className="text-center font-weight-bold text-uppercase mb-3">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Email</label>
              <input type="text" className="form-control" placeholder="Enter Email" name="email" required value={email} onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <label>Enter Password</label>
              <input type="password" className="form-control" placeholder="Enter Password" name="password" required value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Login</button>
            {error && <div className="text-danger">{error}</div>}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Logsing;
