import { Link } from 'react-router-dom';
import '../../Styles/navbar.css';

function Navbar() {
  const [user, setUser] = useState({ name: 'John Doe' }); // Example user data

  const handleLogout = () => {
    // Perform logout logic here
    console.log('User logged out');
  };

  return (
    <header className="navbar">
      <h1 className="navbar-title">
        <Link to="/admin/overview">Dashboard</Link>
      </h1>
      <div className="navbar-user">
        <span>{user.name}</span> | <span onClick={handleLogout}>Logout</span>
      </div>
    </header>
  );
}

export default Navbar;
