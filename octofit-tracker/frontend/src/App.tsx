import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>OctoFit Tracker</h1>
      <p className="lead">
        Welcome to the modern multi-tier tracker app. Start by building your user profiles,
        activity logs, and team leaderboards.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="container mt-5">
      <h2>About OctoFit</h2>
      <p>React 19 + Vite frontend paired with a Node.js + Express + TypeScript backend.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
          <div>
            <Link className="nav-link d-inline-block me-3" to="/">
              Home
            </Link>
            <Link className="nav-link d-inline-block" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
