import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './utils/export';
import SmoothScrolling from './utils/lenisConfig';


const App = () => {
  return (
    <Router>
      <SmoothScrolling>

      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
      </SmoothScrolling>
      
    </Router>
  );
};

export default App;
