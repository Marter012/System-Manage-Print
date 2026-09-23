import { useEffect, useRef, useState } from "react";
import { FaCalendarAlt, FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../../store/store.ts";

import {
  selectDay,
  selectShift,
  type ShiftType,
} from "../../store/slices/daySelectedSlice.ts";

import {
  CashStatusContainer,
  DataSection,
  DateInfo,
  ShiftStatusContainer,
  ShiftStatusSection,
} from "./CashStatusStyles";

import { formatDate, getDateOnly } from "../Utils/Formats.tsx";
import { NavLink } from "react-router-dom";

type CashStatusType = "open" | "closed" | "not-open";

interface ShiftStatus {
  morning: CashStatusType;
  night: CashStatusType;
}

const CashStatus = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cashRegisters = useSelector(
    (state: RootState) => state.cashRegister.cashRegister,
  );

  const selectedDate = useSelector((state: RootState) => state.daySelected.day);

  const selectedShift = useSelector(
    (state: RootState) => state.daySelected.shift,
  );

  const [shiftStatus, setShiftStatus] = useState<ShiftStatus>({
    morning: "not-open",
    night: "not-open",
  });
  const [showMobileStatus, setShowMobileStatus] = useState(false);

  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!cashRegisters || cashRegisters.length === 0) {
      setShiftStatus({
        morning: "not-open",
        night: "not-open",
      });

      return;
    }

    const morningCashRegister = cashRegisters.find((cash) => {
      const cashDate = cash.date
        ? getDateOnly(cash.date)
        : getDateOnly(cash.opened_at);

      return cashDate === selectedDate && cash.shift === "morning";
    });

    const nightCashRegister = cashRegisters.find((cash) => {
      const cashDate = cash.date
        ? getDateOnly(cash.date)
        : getDateOnly(cash.opened_at);

      return cashDate === selectedDate && cash.shift === "night";
    });

    let morningStatus: CashStatusType = "not-open";

    if (morningCashRegister) {
      morningStatus =
        morningCashRegister.status_cash_register === "open" ? "open" : "closed";
    }

    // ---------------------------------------------------------
    // ESTADO NOCHE
    // ---------------------------------------------------------

    let nightStatus: CashStatusType = "not-open";

    if (nightCashRegister) {
      nightStatus =
        nightCashRegister.status_cash_register === "open" ? "open" : "closed";
    }

    // ---------------------------------------------------------
    // GUARDAR ESTADOS
    // ---------------------------------------------------------

    setShiftStatus({
      morning: morningStatus,
      night: nightStatus,
    });
  }, [selectedDate, cashRegisters]);

  // =========================================================
  // CAMBIO DE FECHA
  // =========================================================

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;

    dispatch(selectDay(date));
  };

  // =========================================================
  // ABRIR CALENDARIO
  // =========================================================

  const openCalendar = () => {
    dateInputRef.current?.showPicker();
  };

  // =========================================================
  // CAMBIO DE TURNO
  // =========================================================

  const handleShiftChange = (shift: ShiftType) => {
    dispatch(selectShift(shift));
  };

  // =========================================================
  // TEXTO DEL ESTADO
  // =========================================================

  const getCashStatusText = (status: CashStatusType) => {
    switch (status) {
      case "open":
        return "Caja abierta";

      case "closed":
        return "Caja cerrada";

      case "not-open":
        return "Abrir caja";

      default:
        return "Abrir caja";
    }
  };

  // =========================================================
  // ESTADO GENERAL
  // =========================================================

  const generalStatus: CashStatusType =
    shiftStatus.morning === "open" || shiftStatus.night === "open"
      ? "open"
      : shiftStatus.morning === "closed" && shiftStatus.night === "closed"
        ? "closed"
        : "not-open";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <CashStatusContainer
      $status={generalStatus}
      className={showMobileStatus ? "mobile-open" : ""}
    >
      {/* =====================================================
        BOTÓN MOBILE
    ===================================================== */}

      <button
        type="button"
        className="mobile-status-toggle"
        onClick={() => setShowMobileStatus((current) => !current)}
        aria-label={
          showMobileStatus ? "Ocultar estado de caja" : "Mostrar estado de caja"
        }
      >
        <span className="mobile-status-icon">
          <FaCalendarAlt />
        </span>

        <span className="mobile-status-text">
          <small>Caja</small>
          <strong>
            {generalStatus === "open"
              ? "Abierta"
              : generalStatus === "closed"
                ? "Cerrada"
                : "Sin abrir"}
          </strong>
        </span>

        <span className="mobile-status-arrow">
          {showMobileStatus ? "▲" : "▼"}
        </span>
      </button>

      {/* =====================================================
        CONTENIDO
    ===================================================== */}

      <div className="cash-status-content">
        {/* ===================================================
          FECHA
      =================================================== */}

        <DataSection className="date-section" onClick={openCalendar}>
          <div className="calendar-icon">
            <FaCalendarAlt />
          </div>

          <DateInfo>
            <span className="date-label">Día</span>

            <span className="day-name">{formatDate(selectedDate)}</span>
          </DateInfo>

          <input
            ref={dateInputRef}
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            aria-label="Seleccionar fecha"
          />
        </DataSection>

        <div className="divider" />

        {/* ===================================================
          TURNOS
      =================================================== */}

        <ShiftStatusContainer>
          {/* MAÑANA */}

          <ShiftStatusSection
            $status={shiftStatus.morning}
            $selected={selectedShift === "morning"}
            onClick={() => handleShiftChange("morning")}
          >
            <div className="shift-icon">
              <FaSun />
            </div>

            <div className="shift-info">
              <span className="shift-name">Mañana</span>

              {getCashStatusText(shiftStatus.morning) === "Abrir caja" ? (
                <NavLink to={"cashRegister"}>
                  <strong>{getCashStatusText(shiftStatus.morning)}</strong>
                </NavLink>
              ) : (
                <strong>{getCashStatusText(shiftStatus.morning)}</strong>
              )}
            </div>

            <span className="status-indicator" />
          </ShiftStatusSection>

          {/* NOCHE */}

          <ShiftStatusSection
            $status={shiftStatus.night}
            $selected={selectedShift === "night"}
            onClick={() => handleShiftChange("night")}
          >
            <div className="shift-icon">
              <FaMoon />
            </div>

            <div className="shift-info">
              <span className="shift-name">Noche</span>

              {getCashStatusText(shiftStatus.night) === "Abrir caja" ? (
                <NavLink to={"cashRegister"}>
                  <strong>{getCashStatusText(shiftStatus.night)}</strong>
                </NavLink>
              ) : (
                <strong>{getCashStatusText(shiftStatus.night)}</strong>
              )}
            </div>

            <span className="status-indicator" />
          </ShiftStatusSection>
        </ShiftStatusContainer>
      </div>
    </CashStatusContainer>
  );
};

export default CashStatus;
