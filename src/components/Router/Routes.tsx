import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home.tsx";
import Products from "../Pages/Products/Products.tsx";
import Orders from "../Pages/Orders/Orders.tsx";
import CashRegister from "../Pages/Cash/CashRegister.tsx";
import Promotions from "../Pages/Promotions/Promotions.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/promotions" element={<Promotions />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/cashRegister" element={<CashRegister />} />
    </Routes>
  );
};

export default Router;
