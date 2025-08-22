import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { ResourceHub } from './pages/ResourceHub';
import { Community } from './pages/Community';
import { Mentorship } from './pages/Mentorship';
import { Funding } from './pages/Funding';
import { Blog } from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<ResourceHub />} />
            <Route path="/community" element={<Community />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/funding" element={<Funding />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;