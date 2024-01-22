import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UsersPage from './pages/Users';
import PostsPage from './pages/Posts';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="main-container">
          <Routes>
            <Route path="/users" Component={UsersPage} />
            <Route path="/posts" Component={PostsPage} />
            <Route path="/" Component={HomePage} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
