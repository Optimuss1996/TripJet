import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/home/Home";
import Tour from "./pages/tour/Tour";
import About from "./pages/about/About";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import AppLayout from "./layouts/AppLayout";
import AuthModal from "./components/auth/AuthModal";
import { Toaster } from "sonner";
import Profile from "./pages/profile/Profile";
import Account from "./pages/profile/components/Account";
import Orders from "./pages/profile/components/Orders";
import WishList from "./pages/profile/components/WishList";
import Payments from "./pages/profile/components/Payments";
import SelectPassengers from "./pages/checkout/components/SelectPassengers";
import Review from "./pages/checkout/components/Review";
import Payment from "./pages/checkout/components/Payment";
import Ticket from "./pages/checkout/components/Ticket";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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

            {/* Protected Routes */}
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<Account />} />
              <Route path="account" element={<Account />} />
              <Route path="orders" element={<Orders />} />
              <Route path="wishList" element={<WishList />} />
              <Route path="payments" element={<Payments />} />
            </Route>

            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            >
              <Route index element={<SelectPassengers />} />
              <Route path="select-passengers" element={<SelectPassengers />} />
              <Route path="review" element={<Review />} />
              <Route path="payment" element={<Payment />} />
              <Route path="ticket" element={<Ticket />} />
            </Route>

            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
        <AuthModal />
        <Toaster
          position="top-center"
          richColors
          className=" z-50 absolute top-0 left-0 right-0 bottom-0"
          duration={4000}
          toastOptions={{
            style: {
              fontFamily: "IranSans, sans-serif",
              fontWeight: 600,
              borderRadius: "12px",
              boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
              padding: "16px 20px",
              fontSize: "16px",
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
