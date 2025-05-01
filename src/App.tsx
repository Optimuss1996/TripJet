import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/home/Home";
import Tour from "./pages/tour/Tour";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import AppLayout from "./layouts/AppLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tour/:tourId" element={<Tour />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
