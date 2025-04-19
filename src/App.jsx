import React, {Suspense, lazy} from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { ConfigProvider } from './context/configContext';
import "./styles/global.css"
import StockfishProvider from "./context/StockfishContext"
import FenViewer from "./components/fenviewer/FenViewer";
const ChessGame = lazy(() => import('./components/gameplay/ChessGame'));
const AnalysisGame = lazy(() => import('./components/analysis/AnalysisGame'));
const BoardEditor = lazy(() => import('./components/boardeditor/BoardEditor'));

const App = () => {
  return (
    <ConfigProvider>
      <Router>
        <nav className="routes">
              <Link to="/fenviewer" className='action-button no-decoration'>FenViewer</Link>
              <Link to="/analysis" className='action-button no-decoration'>Analysis</Link>
              <Link to="/gameplay" className='action-button no-decoration'>Gameplay</Link>
              <Link to="/boardeditor" className='action-button no-decoration'>BoardEditor</Link>
        </nav>
        <Suspense fallback={<div className="loading-screen">Loading...</div>}>
          <Routes>
            <Route path="/fenviewer" element={<FenViewer/>} />
            <Route path="/analysis" element={
              <StockfishProvider>
                <AnalysisGame/>
              </StockfishProvider>
            } />
            <Route path="/gameplay" element={<ChessGame/>} />
            <Route path="/boardeditor" element={<BoardEditor/>} />
            <Route path="*" element={<FenViewer />} /> {/* fallback route */}
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
};

export default App;
