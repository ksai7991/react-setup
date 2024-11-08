import React, { useState, useEffect } from 'react';

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
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  // Check the URL on component mount and whenever it changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    // Listen to popstate event for back/forward navigation
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Render page based on current path
  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><a href="/" onClick={(e) => { e.preventDefault(); setCurrentPage('/'); window.history.pushState({}, '', '/'); }}>Home</a></li>
          <li><a href="/about" onClick={(e) => { e.preventDefault(); setCurrentPage('/about'); window.history.pushState({}, '', '/about'); }}>About</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); setCurrentPage('/contact'); window.history.pushState({}, '', '/contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
