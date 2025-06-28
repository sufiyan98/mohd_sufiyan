import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SmoothScrolling from './components/SmoothScrolling.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* Wrapping the entire app in buttery goodness */}
  <SmoothScrolling>
    <App />
  </SmoothScrolling>
</React.StrictMode>
);
