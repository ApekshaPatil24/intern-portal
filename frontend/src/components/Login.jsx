// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.css';
import heroImage from '../assets/login-image.webp';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  if (username.trim()) {
    localStorage.setItem('username', username); // Save to localStorage
    navigate('/dashboard', { state: { username } });
  } else {
    alert('Please enter a username');
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="login-wrapper"
    >
      <div className="login-container">
        {/* LEFT - TEXT + LOGIN FORM */}
        <div className="login-content">
          <h1 className="login-title">
            Helping people <br />
            <span>communicate in simple ways</span>
          </h1>
          <p className="login-description">
            We create communication apps with real-time chat, messaging and calling features – with a focus on Internet Privacy.
          </p>

          <div className="login-form-box">
            <h2 className="form-title">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="form-button">Login</button>
            </form>
            <p className="form-note">* Dummy login only – no authentication</p>
          </div>

          {/* Decorative blue dots */}
          <div className="blue-dots">
            {Array.from({ length: 42 }).map((_, i) => (
              <div key={i} />
            ))}
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="image-wrapper">
          <img src={heroImage} alt="Person on Phone" className="login-image" />
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
