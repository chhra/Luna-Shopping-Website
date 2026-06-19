import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AuthProvider from "./contexts/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";

import ProductsContextProvider from "./contexts/ProductsContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </AuthProvider>
  </BrowserRouter>,
);
