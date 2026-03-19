import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App.jsx'

// Remove invalid JSON from localStorage so old/corrupt data (e.g. "system") never reaches JSON.parse
function sanitizeLocalStorage() {
  const keys = ['theme', 'enableSound', 'timerDuration', 'isFlipped', 'persist:root'];
  keys.forEach((key) => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) JSON.parse(raw);
    } catch {
      localStorage.removeItem(key);
    }
  });
}
sanitizeLocalStorage();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
