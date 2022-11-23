import React, { useState } from 'react';
import { Card, Button, Form, Alert, Navbar } from 'react-bootstrap';
import './profile.scss';
import NavBar from '../NavBar/NavBar';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError('');

    try {
      navigate('/signin');
    } catch {
      setError('failed to log out');
    }
  };

  return (
    <>
      <NavBar />
      <div className="profile-container" style={{}}>
        <div className="profile-card">
          {error && <Alert variant="danger">{error}</Alert>}
          <h2>Profile</h2>
          <p>email</p>
          <ul></ul>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
