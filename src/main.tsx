import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';

// Global styles
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fafafa;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: inherit;
  }

  input {
    font-family: inherit;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

// Add global styles to document head
const styleElement = document.createElement('style');
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
