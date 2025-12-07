import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store,persistor } from "./store/Store.ts";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="max-w-7xl mx-auto">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <App />
        </PersistGate>
      </Provider>
    </div>
  </StrictMode>
);
