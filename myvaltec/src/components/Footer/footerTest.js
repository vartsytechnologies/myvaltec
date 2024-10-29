
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Other components or Routes can be added here */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
