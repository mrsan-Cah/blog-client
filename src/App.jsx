import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import './styles.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>📝 Blog App</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/add">Add Post</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
