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
  const basePath = '/v3'; // Base path

  // Initialize the currentPage based on the URL
  const [currentPage, setCurrentPage] = useState(window.location.pathname.replace(basePath, ''));

  // Update currentPage state when the URL changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(window.location.pathname.replace(basePath, ''));
    };

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
          <li><a href={`${basePath}/`} onClick={(e) => { e.preventDefault(); setCurrentPage('/'); window.history.pushState({}, '', `${basePath}/`); }}>Home</a></li>
          <li><a href={`${basePath}/about`} onClick={(e) => { e.preventDefault(); setCurrentPage('/about'); window.history.pushState({}, '', `${basePath}/about`); }}>About</a></li>
          <li><a href={`${basePath}/contact`} onClick={(e) => { e.preventDefault(); setCurrentPage('/contact'); window.history.pushState({}, '', `${basePath}/contact`); }}>Contact</a></li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
