import React, { Profiler } from "react";
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
import App from "./App";

const persistor = persistStore(store);
injectStore(store);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000,
    },
  },
});

i18next.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
});
document.documentElement.setAttribute('dir', i18next.language === 'ar' ? 'rtl' : 'ltr');

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
  // make detail ti be shown in the console
  console.log('id', id);
  console.log('phase', phase);
  console.log('actualDuration', actualDuration);
  console.log('baseDuration', baseDuration);
  console.log('startTime', startTime);
  console.log('commitTime', commitTime);
  console.log('----------------------');
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

      <PersistGate loading={<Loader />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>


          <ThemeProvider>
            {/* <RouterProvider router={browserRouter} /> */}
            <Profiler id="App" onRender={onRender}>
              <App />

            </Profiler>
            <Toaster />
          </ThemeProvider>
        </QueryClientProvider>

      </PersistGate>

    </Provider>
  </React.StrictMode >
);
