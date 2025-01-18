import React from "react";
import ReactDOM from "react-dom/client";
import './i18n';
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
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
import i18next from "./i18n";

const persistor = persistStore(store);
injectStore(store);
const queryClient = new QueryClient();

// Handle language direction change
i18next.on('languageChanged', (lng) => {
  // Set the text direction based on language
  if (lng === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }
});

// Initialize the direction based on the default language
if (i18next.language === 'ar') {
  document.documentElement.setAttribute('dir', 'rtl');
} else {
  document.documentElement.setAttribute('dir', 'ltr');
}

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
