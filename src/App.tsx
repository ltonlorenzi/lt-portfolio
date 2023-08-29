import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header title="My Portfolio" />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;