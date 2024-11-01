import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Blog from './components/blog';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Header /> {/* Navigation bar component */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
