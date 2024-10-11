// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Offline, Online } from "react-detect-offline";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <Online>
      <App />
    </Online>
    <Offline>
      <span>
      Отсутствует сетевое подключение. Прежде, чем продолжить работу, проверьте интернет-соединение.
      </span>
    </Offline>
  </>,
);
