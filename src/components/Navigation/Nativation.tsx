import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBoxOpen,
  FaClipboardList,
  FaCashRegister,
  FaTags,
  FaPrint,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  NavigationContainer,
  PrintButton,
  PrintIndicator,
} from "./NavigationStyles.ts";

import PrintStatusModal from "../PrintStatusModal/PrintStatusModal.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isOnline = useSelector(
    (state: RootState) => state.printAgent.printerActive,
  );

  const [showPrintModal, setShowPrintModal] = useState(false);

  useEffect(() => {}, [isOnline]);

  return (
    <NavigationContainer>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setShowMenu((current) => !current)}
        aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
      >
        {showMenu ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navigation-links ${showMenu ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setShowMenu(false)}>
          <FaHome />
          <span>Inicio</span>
        </NavLink>

        <NavLink to="/products" onClick={() => setShowMenu(false)}>
          <FaBoxOpen />
          <span>Productos</span>
        </NavLink>

        <NavLink to="/promotions" onClick={() => setShowMenu(false)}>
          <FaTags />
          <span>Promociones</span>
        </NavLink>

        <NavLink to="/orders" onClick={() => setShowMenu(false)}>
          <FaClipboardList />
          <span>Comandas</span>
        </NavLink>

        <NavLink to="/cashRegister" onClick={() => setShowMenu(false)}>
          <FaCashRegister />
          <span>Caja</span>
        </NavLink>

        <PrintButton
          type="button"
          title={isOnline ? "Impresora conectada" : "Impresora desconectada"}
          onClick={() => setShowPrintModal((current) => !current)}
        >
          <FaPrint />
          <span>Impresora</span>

          <PrintIndicator $online={isOnline} />
        </PrintButton>
      </div>

      <PrintStatusModal
        isOpen={showPrintModal}
        onClose={() => setShowPrintModal(false)}
      />
    </NavigationContainer>
  );
};

export default Navigation;
