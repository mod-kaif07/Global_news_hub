
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NewsProvider } from "./Context/NewsContext";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NewsProvider>
      <App />
    </NewsProvider>
  </BrowserRouter>
);
