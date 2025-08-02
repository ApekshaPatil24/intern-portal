import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './styles.css'; // Make sure this is included

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('https://intern-portal-bpnp.onrender.com/api/leaderboard')
      .then(res => setLeaders(res.data))
      .catch(err => console.error(err));
  }, []);

  const getMedal = (index) => {
    const medals = ['🥇', '🥈', '🥉'];
    return medals[index] || '';
  };

  return (
    <motion.div
      className="leaderboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="leaderboard-card">
        <h2 className="leaderboard-title">🏆 Top Interns Leaderboard</h2>
        <ol className="leaderboard-list">
          {leaders.map((item, index) => (
            <li key={index} className="leaderboard-item">
              <div className="leaderboard-rank">
                <span className="medal">{getMedal(index)}</span>
                <span>{index + 1}. {item.name}</span>
              </div>
              <span className="leaderboard-points">{item.points} pts</span>
            </li>
          ))}
        </ol>
      </div>
    </motion.div>
  );
}

export default Leaderboard;
