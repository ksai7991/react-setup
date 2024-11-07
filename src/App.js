import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/react-setup/">Home</Link></li>
            <li><Link to="/react-setup/about">About</Link></li>
            <li><Link to="/react-setup/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/react-setup/" element={<Home />} />
          <Route path="/react-setup/about" element={<About />} />
          <Route path="/react-setup/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
