import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '0.5rem 0',
  },
  input: {
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: '1rem',
  },
  passwordInput: {
    width:"100%",
    padding: '0.5rem',
    paddingRight: '2rem', // Adjusted padding to accommodate the eye icon
    marginBottom: '1rem',
  },
  eyeButton: {
    position: 'absolute',
    top: '38%',
    right: '5px',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  // Media queries for responsiveness
  '@media (max-width: 600px)': {
    card: {
      width: '80%',
    },
  },
};
  return (
    <div style={styles.container}>
      <div style={styles.card} className='shadow'>
        <h1 className='text-center ' >Login</h1>
        <form style={styles.form}>
          <label style={styles.label}><strong>Username:</strong></label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input} className="rounded-5 border shadow"
          />

          <label style={styles.label}><strong>Password:</strong></label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.passwordInput} className="rounded-5 shadow border"
            />
            <button type="button" onClick={togglePasswordVisibility} style={styles.eyeButton}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button type="button" className='btn btn-success w-50 mx-auto shadow rounded-4' onClick={handleLogin} >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};



export default LoginPage;
