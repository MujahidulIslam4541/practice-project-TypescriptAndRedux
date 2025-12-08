import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store,persistor } from "@/redux/store.ts";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <App />
        </PersistGate>
      </Provider>
    </div>
  </StrictMode>
);
