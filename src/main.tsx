import { createRoot } from 'react-dom/client'
// CSS is handled by the bundler; TypeScript has no declaration for this side-effect import.
// @ts-expect-error Missing declaration for the stylesheet module.
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App.js'

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
