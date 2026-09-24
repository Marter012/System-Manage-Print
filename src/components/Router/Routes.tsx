import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home.tsx";
import Products from "../Pages/Products/Products.tsx";
import Orders from "../Pages/Orders/Orders.tsx";
import CashRegister from "../Pages/Cash/CashRegister.tsx";
import Promotions from "../Pages/Promotions/Promotions.tsx";
import Login from "../Pages/Login/Login.tsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.tsx";


const Router = () => {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cashRegister" element={<CashRegister />} />
      </Route>

      {/* Cualquier ruta inexistente */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;