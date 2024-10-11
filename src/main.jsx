// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { Offline, Online } from 'react-detect-offline';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <>
    <Online>
      <App />
    </Online>
    <Offline>
      <span className="centralized">
        <span className="errorStyle">Internet connection is not defined</span>
      </span>
    </Offline>
  </>
);
