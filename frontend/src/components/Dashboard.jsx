import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Dashboard() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Read from state OR localStorage
  const username = location.state?.username || localStorage.getItem('username');

  useEffect(() => {
    if (!username) {
      navigate('/');
      return;
    }

    axios.get('https://intern-portal-bpnp.onrender.com/api/intern')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [username, navigate]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xl font-semibold">
        ⏳ Loading your Dashboard...
      </div>
    );
  }

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="dashboard-glass-box">
        <h1 className="dashboard-welcome">👋 Welcome, {username}</h1>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3 className="dashboard-card-title">📊 Your Stats</h3>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Referral Code:</strong> {data.referralCode}</p>
            <p><strong>Total Donations:</strong> ₹{data.donationsRaised}</p>
          </div>

          <div className="dashboard-card">
            <h3 className="dashboard-card-title">🎁 Rewards</h3>
            <ul className="dashboard-list">
              <li>🎉 Welcome Badge</li>
              <li>💸 ₹5000 Milestone Badge</li>
              <li>📢 Early Promoter Title</li>
              <li>🚀 Next Level: ₹10,000 – Unlock Swag Pack</li>
            </ul>
          </div>
        </div>

        <div className="dashboard-button-container">
          <Link to="/leaderboard">
            <button className="dashboard-button">🏆 View Leaderboard</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Dashboard;
