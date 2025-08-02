import { Link, useLocation } from 'react-router-dom';
import './styles.css';

function Navbar() {
  const location = useLocation();
  const isOnDashboard = location.pathname === '/dashboard';
  const isOnLeaderboard = location.pathname === '/leaderboard';

  return (
    <nav className="navbar">
      <h1 className="navbar-title">🚀 Intern Portal</h1>
      <div className="navbar-links">
        {isOnDashboard && (
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        )}
        {isOnLeaderboard && (
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
