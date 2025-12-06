import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </StrictMode>
);
