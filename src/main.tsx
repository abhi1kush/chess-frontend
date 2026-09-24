import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';

// Remove invalid JSON from localStorage so old/corrupt data (e.g. "system") never reaches JSON.parse
function sanitizeLocalStorage(): void {
  const keys: string[] = [
    'theme', 
    'enableSound', 
    'timerDuration', 
    'isFlipped', 
    'persist:root'
  ];
  keys.forEach((key: string) => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        JSON.parse(raw);
      }
    } catch {
      localStorage.removeItem(key);
    }
  });
}
sanitizeLocalStorage();

const rootElement = document.getElementById("root");

if (!rootElement) { 
  throw new Error("Root element with id 'root' not found"); 
}

createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
)
