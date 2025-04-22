import React, {Suspense, lazy} from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ConfigProvider } from './context/configContext';
import "./styles/global.css"
import StockfishProvider from "./context/StockfishContext"
const ChessGame = lazy(() => import('./components/gameplay/ChessGame'));
const AnalysisGame = lazy(() => import('./components/analysis/AnalysisGame'));
import BoardEditor from "./components/boardeditor/BoardEditor";

const App = () => {
  return (
    <ConfigProvider>
      <Router>
        <nav className="routes">
              <Link to="/boardeditor" className='action-button no-decoration'>Board Editor</Link>
              <Link to="/analysis" className='action-button no-decoration'>Analyse Game</Link>
              <Link to="/gameplay" className='action-button no-decoration'>Play Game</Link>
        </nav>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <Routes>
            <Route path="/analysis" element={
              <StockfishProvider>
                <AnalysisGame/>
              </StockfishProvider>
            } />
            <Route path="/gameplay" element={<ChessGame/>} />
            <Route path="/boardeditor" element={<BoardEditor/>} />
            <Route path="*" element={<BoardEditor/>} /> {/* fallback route */}
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
};

export default App;
