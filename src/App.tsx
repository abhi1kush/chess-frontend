import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { ConfigProvider } from './context/configContext';
// CSS is handled by the bundler; TypeScript does not need to type-check this side-effect import.
import './styles/global.css';
import StockfishProvider from './context/StockfishContext';
const AnalysisGame = lazy(() => import('./components/analysis/AnalysisGame'));

const GA_MEASUREMENT_ID = 'G-KZRHN2TP97';

/* ---------------------------------- */ 
/* Google Analytics */ 
/* ---------------------------------- */ 
declare global { 
  interface Window { 
    gtag?: ( command: string, eventName: string, params?: { 
        page_path?: string; 
        page_location?: string; 
        send_to?: string; 
        [key: string]: unknown; 
      } 
    ) => void; 
} }

const PageViewTracker = (): null => { 
  const location = useLocation(); 
  useEffect(() => { 
    if (typeof window.gtag !== "function") { 
      return; 
    } 
    const pagePath = `${location.pathname}${location.search}${location.hash}`; 
    window.gtag("event", "page_view", { 
      page_path: pagePath, 
      page_location: window.location.href, 
      send_to: GA_MEASUREMENT_ID, 
    }); 
  }, [location]); 
  return null; 
};

const App = () => {
  return (
    <ConfigProvider>
      <StockfishProvider>
        <Router>
          <PageViewTracker />
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
