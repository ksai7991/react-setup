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
  const [currentPage, setCurrentPage] = useState('/');

  // Check the URL on component mount
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

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
          <li><a href="/" onClick={(e) => { e.preventDefault(); setCurrentPage('/'); }}>Home</a></li>
          <li><a href="/about" onClick={(e) => { e.preventDefault(); setCurrentPage('/about'); }}>About</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); setCurrentPage('/contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
