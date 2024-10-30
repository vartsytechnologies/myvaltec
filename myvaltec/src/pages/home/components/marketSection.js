
import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Markets from './Markets';

function MarketSection() {
  return (
    <Router>
      <div>
        <Markets />
      </div>
    </Router>
  );
}

export default MarketSection;
