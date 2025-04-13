import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ChessGame from './components/gameplay/ChessGame';
import AnalysisGame from './components/analysis/AnalysisGame';
import { ConfigProvider } from './context/configContext';
import "./styles/global.css"
import StockfishHello from './components/StockfishHello';
import StockfishProvider from "./context/StockfishContext"

const App = () => {
  return (
    <ConfigProvider>
      <Router basename="/chess-frontend">
        <nav className="routes">
              <Link to="/" className='action-button no-decoration'>Analysis</Link>
              <Link to="/analysis" className='action-button no-decoration'>Gameplay</Link>
              <Link to="/engine" className='action-button no-decoration'>StockfishTest</Link>
        </nav>
        <Routes>
          <Route path="/" element={
              <StockfishProvider>
                <AnalysisGame/>
              </StockfishProvider>
            } />
          <Route path="/analysis" element={<ChessGame/>} />
          <Route path="/engine" element={<StockfishHello/>} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
