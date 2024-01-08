import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
