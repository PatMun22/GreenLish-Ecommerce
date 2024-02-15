import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./i18n";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense>
    <React.StrictMode>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </React.StrictMode>
  </Suspense>
);
