import { useEffect } from 'react';
import { HashRouter as Router, useLocation } from 'react-router-dom';

import { ConfigProvider } from './configContext';
import '../styles/global.css';
import EngineProvider from '../features/engine/hooks/useEngine';
import AppRoutes from './routes';

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
      <EngineProvider>
        <Router>
          <PageViewTracker />
          <AppRoutes />
        </Router>
      </EngineProvider>
    </ConfigProvider>
  );
};

export default App;
