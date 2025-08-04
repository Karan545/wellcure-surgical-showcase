
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setupRedirects } from './utils/redirects'

// Setup URL redirects to prevent duplicate content
setupRedirects();

createRoot(document.getElementById("root")!).render(
  <App />
);
