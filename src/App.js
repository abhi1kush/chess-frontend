import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChessGame from './components/gameplay/ChessGame';
import AnalysisGame from './components/analysis/AnalysisGame';
import { ConfigProvider } from './context/configContext';
import "./styles/global.css"

const App = () => {
  return (
    <ConfigProvider>
      <Router basename="/chess-frontend">
        <nav className="routes">
            <div>
              <Link to="/" className='action-button'>Analysis</Link>
            </div>
            <div>
              <Link to="/analysis" className='action-button'>Gameplay</Link>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<AnalysisGame/>} />
          <Route path="/analysis" element={<ChessGame/>} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;