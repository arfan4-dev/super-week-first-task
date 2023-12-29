import { store, persistor } from "@/src/store";
import { Provider } from "react-redux";
import "@/styles/globals.scss";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <Toaster/>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
