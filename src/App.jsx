import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Payroll from './pages/Payroll';
import GPA from './pages/GPA';

/**
 * Main Application Component
 * Configures routing and global layout with navigation
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/gpa" element={<GPA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
