import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ConfigProvider } from './context/configContext';
import "./styles/global.css"
import StockfishProvider from "./context/StockfishContext"
import FenViewer from "./components/fenviewer/FenViewer";
const ChessGame = lazy(() => import('./components/gameplay/ChessGame'));
const AnalysisGame = lazy(() => import('./components/analysis/AnalysisGame'));

const App = () => {
  return (
    <ConfigProvider>
      <Router basename="/chess-frontend">
        <nav className="routes">
              <Link to="/analysis" className='action-button no-decoration'>Analysis</Link>
              <Link to="/gameplay" className='action-button no-decoration'>Gameplay</Link>
              <Link to="/" className='action-button no-decoration'>FenViewer</Link>
        </nav>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <Routes>
            <Route path="/analysis" element={
              <StockfishProvider>
                <AnalysisGame/>
              </StockfishProvider>
            } />
            <Route path="/gameplay" element={<ChessGame/>} />
            <Route path="/" element={<FenViewer/>} />
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
};

export default App;
