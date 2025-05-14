import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/home/Gallery/Gallery';
import Process from './pages/Process/Process';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/works" element={<Gallery />} />
                    <Route path="/process" element={<Process />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
