import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { browserRouter } from "./routes/browserRouter";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";
import { injectStore } from "./utils/http";
import Loader from "./components/loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const persistor = persistStore(store);
injectStore(store);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <RouterProvider router={browserRouter} />
            <Toaster />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
