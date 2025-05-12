import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/home/Home";
import Tour from "./pages/tour/Tour";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import AppLayout from "./layouts/AppLayout";
import AuthModal from "./components/auth/AuthModal";
import { Toaster } from "sonner";
function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutUs" element={<About />} />
            <Route path="/tour/:slug" element={<Tour />} />
            <Route path="account" element={<Account />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
        <AuthModal />

        <Toaster
          position="top-center"
          richColors
          duration={4000}
          toastOptions={{
            style: {
              // background: "#12b76a",
              // color: "#ffffff",
              fontFamily: "IranSans, sans-serif",
              fontWeight: 600,
              borderRadius: "12px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
              padding: "16px 20px",
              fontSize: "20px",
              width: "fit-content",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
