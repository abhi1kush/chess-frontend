import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChessGame from './components/ChessGame';
import AnalysisGame from './components/AnalysisGame';
import { ConfigProvider } from './context/configContext';
import "./styles/global.css"

const App = () => {
  return (
    <ConfigProvider>
      <Router>
        <nav className="routes">
            <div>
              <Link to="/" className='action-button'>Gameplay</Link>
            </div>
            <div>
              <Link to="/analysis" className='action-button'>Analysis</Link>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<ChessGame />} />
          <Route path="/analysis" element={<AnalysisGame />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;