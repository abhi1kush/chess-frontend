import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ConfigProvider } from './context/configContext';
import './styles/global.css';
import StockfishProvider from './context/StockfishContext';
const AnalysisGame = lazy(() => import('./components/analysis/AnalysisGame'));

const App = () => {
  return (
    <ConfigProvider>
      <StockfishProvider>
        <Router>
          <Suspense fallback={<div className="loading-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/analysis" replace />} />
              <Route path="/analysis" element={<AnalysisGame />} />
              <Route path="*" element={<Navigate to="/analysis" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </StockfishProvider>
    </ConfigProvider>
  );
};

export default App;
