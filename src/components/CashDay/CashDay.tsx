import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import type { RootState, AppDispatch } from "../../store/store.ts";

import type {
  ICreateCashRegister,
  IUpdateCashRegister,
} from "../../interfaces/CashRegister.ts";

import {
  createCashRegisterAPI,
  updateCashRegisterAPI,
} from "../../services/cashRegisterService.ts";

import { createCashMovementAPI } from "../../services/cashMovementService.ts";

import {
  addCashRegister,
  updateCashRegister,
} from "../../store/slices/cashRegisterSlice.ts";

import { addCashMovement } from "../../store/slices/cashMovementSlice.ts";

import { getDateOnly, formatDate, getDateTime } from "../Utils/Formats.tsx";

import ModalForm from "../ModalForm/ModalForm.tsx";

import CashMovementSummary from "../CashMovementSumary/CashMovementSummary.tsx";

import CashMovementForm from "../Forms/CashMovementForm/CashMovementForm.tsx";
import OpenCashForm from "../Forms/StatusCashForm/OpenCashForm.tsx";
import CloseCashForm from "../Forms/StatusCashForm/CloseCashForm.tsx";

import ListTable from "../Tables/ListTable.tsx";
import { TableRow } from "../Tables/ListTableStyles.ts";

import {
  SummaryBar,
  SummaryItem,
  SummaryIcon,
  SummaryInfo,
  SummaryLabel,
  SummaryValue,
  SummaryDivider,
  CashDayContent,
  CashContent,
  SalesContainer,
  OpenCashContainer,
  OpenCashButton,
  CloseCashButton,
  SummaryGrup,
  SummaryGroupTitle,
  SummaryGroupItems,
  CashMobileTabs,
  CashMobileTab,
} from "./CashDayStyles.ts";

import type { CashMovementType } from "../../interfaces/CashMovements.ts";

import { selectDay, selectShift } from "../../store/slices/daySelectedSlice.ts";

import { MdOutlineWarning } from "react-icons/md";
import { getAxiosErrorMessage } from "../Utils/ErrorAxios.tsx";

type ActiveTab = "today" | "history";

interface CashDayProps {
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}

const CashDay = ({ setActiveTab }: CashDayProps) => {
  const dispatch = useDispatch<AppDispatch>();

  /* =========================================================
     REDUX
  ========================================================= */

  const cashRegisters = useSelector(
    (state: RootState) => state.cashRegister.cashRegister,
  );

  const movements = useSelector(
    (state: RootState) => state.cashMovement.cashMovements,
  );

  const orders = useSelector((state: RootState) => state.orders.orders);

  const selectedDay = useSelector((state: RootState) => state.daySelected.day);

  const selectedShift = useSelector(
    (state: RootState) => state.daySelected.shift,
  );

  /* =========================================================
     ESTADOS
  ========================================================= */

  const [openCashModal, setOpenCashModal] = useState(false);

  const [closeCashModal, setCloseCashModal] = useState(false);

  const [infoModal, setInfoModal] = useState(false);

  const [infoMessage, setInfoMessage] = useState("");

  const [movementModalOpen, setMovementModalOpen] = useState(false);

  const [movementType, setMovementType] = useState<CashMovementType>("inflow");

  const [summaryOpen, setSummaryOpen] = useState(false);

  /*
   * En dispositivos chicos permite alternar entre
   * ventas y movimientos.
   *
   * En notebook/PC ambos paneles se muestran siempre.
   */
  const [cashMobileSection, setCashMobileSection] = useState<
    "sales" | "movements"
  >("sales");

  const [pendingCashRegister, setPendingCashRegister] = useState<
    (typeof cashRegisters)[number] | null
  >(null);

  /* =========================================================
     FECHA
  ========================================================= */

  const today = getDateOnly(new Date());

  const isToday = formatDate(selectedDay) === formatDate(today);

  /* =========================================================
     CAJAS DEL DÍA SELECCIONADO
  ========================================================= */

  const dayCashRegisters = useMemo(() => {
    return cashRegisters.filter((cashRegister) => {
      const cashDate = cashRegister.date
        ? getDateOnly(cashRegister.date)
        : getDateOnly(cashRegister.opened_at);

      return cashDate === selectedDay;
    });
  }, [cashRegisters, selectedDay]);

  /* =========================================================
     CAJA SELECCIONADA
  ========================================================= */

  const selectedCashRegister = useMemo(() => {
    return dayCashRegisters.find(
      (cashRegister) => cashRegister.shift === selectedShift,
    );
  }, [dayCashRegisters, selectedShift]);

  const cashStatus = selectedCashRegister?.status_cash_register;

  const canModifyCash = cashStatus === "open";

  /* =========================================================
     OTRA CAJA ABIERTA
  ========================================================= */

  const anotherOpenCashRegister = useMemo(() => {
    return cashRegisters.find((cashRegister) => {
      const cashDate = cashRegister.date
        ? getDateOnly(cashRegister.date)
        : getDateOnly(cashRegister.opened_at);

      const isOpen = cashRegister.status_cash_register === "open";

      const isDifferentCash =
        cashDate !== selectedDay || cashRegister.shift !== selectedShift;

      return isOpen && isDifferentCash;
    });
  }, [cashRegisters, selectedDay, selectedShift]);

  /* =========================================================
     MOVIMIENTOS DE ESTA CAJA
  ========================================================= */

  const cashRegisterMovements = useMemo(() => {
    if (!selectedCashRegister) return [];

    return movements.filter((movement) => {
      const movementDate = movement.date.split("T")[0];

      return (
        movement.cash_register_id === selectedCashRegister.id &&
        movementDate === selectedDay
      );
    });
  }, [movements, selectedDay, selectedCashRegister]);

  /* =========================================================
     SEPARACIÓN PRINCIPAL
  ========================================================= */

  const sales = useMemo(
    () =>
      cashRegisterMovements.filter((movement) => Boolean(movement.order_id)),
    [cashRegisterMovements],
  );

  const manualMovements = useMemo(
    () => cashRegisterMovements.filter((movement) => !movement.order_id),
    [cashRegisterMovements],
  );

  /* =========================================================
     TOTALES DE VENTAS
  ========================================================= */

  const salesTotal = useMemo(() => {
    return sales
      .filter((movement) => movement.type === "inflow")
      .reduce((total, movement) => total + movement.amount, 0);
  }, [sales]);

  /* =========================================================
     MÉTODOS DE PAGO
  ========================================================= */

  const getSalesPaymentTotal = (method: string) => {
    return sales
      .filter(
        (movement) =>
          movement.method_payment === method && movement.type === "inflow",
      )
      .reduce((total, movement) => total + movement.amount, 0);
  };

  const totalCash = getSalesPaymentTotal("cash");
  const totalTransfer = getSalesPaymentTotal("transfer");
  const totalQR = getSalesPaymentTotal("qr");
  const totalDebit = getSalesPaymentTotal("debit_card");

  /* =========================================================
     MOVIMIENTOS MANUALES
  ========================================================= */

  const manualIncome = useMemo(() => {
    return manualMovements
      .filter((movement) => movement.type === "inflow")
      .reduce((total, movement) => total + movement.amount, 0);
  }, [manualMovements]);

  const manualExpense = useMemo(() => {
    return manualMovements
      .filter((movement) => movement.type === "outflow")
      .reduce((total, movement) => total + movement.amount, 0);
  }, [manualMovements]);

  const manualBalance = manualIncome - manualExpense;

  /* =========================================================
     MAPA DE COMANDAS
  ========================================================= */

  const ordersMap = useMemo(
    () => new Map(orders.map((order) => [order.id, order.order_number])),
    [orders],
  );

  /* =========================================================
     MENSAJES
  ========================================================= */

  const showInfo = (message: string) => {
    setInfoMessage(message);
    setInfoModal(true);
  };

  /* =========================================================
     IR A LA CAJA ABIERTA
  ========================================================= */

  const handleGoToOpenCash = () => {
    const cashToOpen = pendingCashRegister ?? anotherOpenCashRegister;

    if (!cashToOpen) {
      return;
    }

    const cashDate = cashToOpen.date
      ? getDateOnly(cashToOpen.date)
      : getDateOnly(cashToOpen.opened_at);

    dispatch(selectDay(cashDate));
    dispatch(selectShift(cashToOpen.shift));

    setInfoModal(false);
    setPendingCashRegister(null);
    setOpenCashModal(false);
  };

  const handleOpenCashRequest = () => {
    if (anotherOpenCashRegister) {
      setPendingCashRegister(anotherOpenCashRegister);
      setInfoModal(true);

      return;
    }

    setOpenCashModal(true);
  };

  /* =========================================================
     CREAR CAJA
  ========================================================= */

  const handleCreateCash = async (openingAmount: number) => {
    const anotherOpenCash = cashRegisters.find((cashRegister) => {
      const cashDate = cashRegister.date
        ? getDateOnly(cashRegister.date)
        : getDateOnly(cashRegister.opened_at);

      return (
        cashRegister.status_cash_register === "open" &&
        (cashDate !== selectedDay || cashRegister.shift !== selectedShift)
      );
    });

    if (anotherOpenCash) {
      setOpenCashModal(false);
      setPendingCashRegister(anotherOpenCash);
      setInfoModal(true);

      return;
    }

    const existingCashRegister = dayCashRegisters.find(
      (cashRegister) => cashRegister.shift === selectedShift,
    );

    if (existingCashRegister) {
      setOpenCashModal(false);

      showInfo(
        `La caja de ${
          selectedShift === "morning" ? "mañana" : "noche"
        } ya existe para este día.`,
      );

      return;
    }

    try {
      const newCashRegister: ICreateCashRegister = {
        date: selectedDay,
        shift: selectedShift,
        opened_at: getDateTime(new Date()),
        opening_amount: openingAmount,
        status_cash_register: "open",
        status: true,
      };

      const response = await createCashRegisterAPI(newCashRegister);

      dispatch(addCashRegister(response));

      setOpenCashModal(false);

      showInfo(
        `La caja de ${
          selectedShift === "morning" ? "mañana" : "noche"
        } fue abierta correctamente.`,
      );
    } catch (error) {
      console.error("Error al abrir caja:", error);

      showInfo(
        getAxiosErrorMessage(error, "Ocurrió un error al abrir la caja."),
      );
    }
  };

  /* =========================================================
     INGRESO / EGRESO MANUAL
  ========================================================= */

  const handleOpenMovement = (type: CashMovementType) => {
    if (!canModifyCash) {
      showInfo(
        `La caja no está disponible para registrar ${
          type === "inflow" ? "ingresos" : "egresos"
        }.`,
      );

      return;
    }

    setMovementType(type);
    setMovementModalOpen(true);
  };

  const handleOpenIncome = () => {
    handleOpenMovement("inflow");
  };

  const handleOpenExpense = () => {
    handleOpenMovement("outflow");
  };

  /* =========================================================
     CREAR MOVIMIENTO MANUAL
  ========================================================= */

  const handleCreateMovement = async (data: any) => {
    if (!canModifyCash) {
      showInfo("La caja no está abierta. No se puede registrar el movimiento.");

      return;
    }

    try {
      const response = await createCashMovementAPI(data);

      dispatch(addCashMovement(response));

      setMovementModalOpen(false);

      showInfo(
        data.type === "inflow"
          ? "El ingreso fue registrado correctamente."
          : "El egreso fue registrado correctamente.",
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.detail ??
          error.response?.data?.message ??
          error.message ??
          "Ocurrió un error al guardar el movimiento.";

        console.log("STATUS:", error.response?.status);

        console.log("DATA:", error.response?.data);

        console.log("ERROR:", message);
      } else {
        console.error("Error desconocido:", error);
      }

      showInfo(
        getAxiosErrorMessage(
          error,
          "Ocurrió un error al registrar el movimiento.",
        ),
      );
    }
  };

  const handleCloseCash = () => {
    setCloseCashModal(true);
  };

  /* =========================================================
     CERRAR CAJA
  ========================================================= */

  const handleSubmitCloseCash = async (closingAmount: number) => {
    if (!selectedCashRegister) {
      showInfo("No se encontró una caja para cerrar.");

      return;
    }

    try {
      const updateData: IUpdateCashRegister = {
        date: selectedCashRegister.date,
        shift: selectedCashRegister.shift,
        opened_at: selectedCashRegister.opened_at,
        opening_amount: selectedCashRegister.opening_amount,
        closed_at: getDateTime(new Date()),
        closing_amount: closingAmount,
        status_cash_register: "close",
        status: true,
      };

      const response = await updateCashRegisterAPI(
        selectedCashRegister.id,
        updateData,
      );

      dispatch(updateCashRegister(response));

      setCloseCashModal(false);

      showInfo("La caja fue cerrada correctamente.");

      setActiveTab("history");
    } catch (error) {
      console.error("🔴 ERROR AL CERRAR CAJA:", error);

      showInfo(
        getAxiosErrorMessage(error, "Ocurrió un error al cerrar la caja."),
      );
    }
  };

  /* =========================================================
     ESTADOS DE PANTALLA
  ========================================================= */

  const showBlockedByOpenCash =
    !selectedCashRegister && Boolean(anotherOpenCashRegister);

  const showOpenCash =
    isToday && !selectedCashRegister && !anotherOpenCashRegister;

  const showNoCash =
    !isToday && !selectedCashRegister && !anotherOpenCashRegister;

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* =====================================================
          CAJA BLOQUEADA POR OTRA CAJA ABIERTA
      ===================================================== */}

      {showBlockedByOpenCash && anotherOpenCashRegister && (
        <OpenCashContainer>
          <MdOutlineWarning />

          <h2>No se puede abrir una nueva caja</h2>

          <p>
            Actualmente hay una caja abierta y debe cerrarse antes de poder
            abrir otra.
          </p>

          <p>
            <strong>Día:</strong>{" "}
            {formatDate(
              anotherOpenCashRegister.date
                ? getDateOnly(anotherOpenCashRegister.date)
                : getDateOnly(anotherOpenCashRegister.opened_at),
            )}
          </p>

          <p>
            <strong>Turno:</strong>{" "}
            {anotherOpenCashRegister.shift === "morning" ? "Mañana" : "Noche"}
          </p>

          <OpenCashButton type="button" onClick={handleGoToOpenCash}>
            Ir a la caja abierta
          </OpenCashButton>
        </OpenCashContainer>
      )}

      {/* =====================================================
          SIN CAJA - HOY
      ===================================================== */}

      {showOpenCash && (
        <OpenCashContainer>
          <h2>
            La caja del turno {selectedShift === "morning" ? "MAÑANA" : "NOCHE"}{" "}
            del día {formatDate(selectedDay)} todavía no está abierta
          </h2>

          <p>
            Para comenzar a registrar ingresos y egresos tenés que abrir la caja
            con el monto inicial de efectivo.
          </p>

          <OpenCashButton type="button" onClick={handleOpenCashRequest}>
            Abrir caja
          </OpenCashButton>
        </OpenCashContainer>
      )}

      {/* =====================================================
          SIN CAJA - HISTÓRICO
      ===================================================== */}

      {showNoCash && (
        <OpenCashContainer>
          <h2>Caja no disponible</h2>

          <p>
            La caja del dia {formatDate(selectedDay)} en el turno{" "}
            {selectedShift === "morning" ? "mañana" : "noche"} no fue abierta.
          </p>
        </OpenCashContainer>
      )}

      {/* =====================================================
          CAJA DISPONIBLE
      ===================================================== */}

      {selectedCashRegister && (
        <CashDayContent>
          {summaryOpen && (
            <div
              className="summary-overlay"
              onClick={() => setSummaryOpen(false)}
              aria-hidden="true"
            />
          )}
          {/* =================================================
              RESUMEN
          ================================================= */}

          <SummaryBar className={summaryOpen ? "summary-open" : ""}>
            <button
              type="button"
              className="summary-toggle"
              onClick={() => setSummaryOpen((current) => !current)}
              aria-expanded={summaryOpen}
            >
              <span className="summary-toggle-icon">📊</span>

              <span className="summary-toggle-info">
                <strong>Resumen de caja</strong>

                <small>Ventas ${salesTotal.toLocaleString("es-AR")}</small>
              </span>

              <span className="summary-toggle-arrow">
                {summaryOpen ? "▲" : "▼"}
              </span>
            </button>

            <div className="summary-content">
              {/* TURNO */}

              <SummaryItem data-type="shift">
                <SummaryIcon>
                  {selectedCashRegister.shift === "morning" ? "☀" : "☾"}
                </SummaryIcon>

                <SummaryInfo>
                  <SummaryLabel>Turno</SummaryLabel>

                  <SummaryValue>
                    {selectedCashRegister.shift === "morning"
                      ? "Mañana"
                      : "Noche"}
                  </SummaryValue>
                </SummaryInfo>
              </SummaryItem>

              {/* APERTURA */}

              <SummaryItem data-type="opening">
                <SummaryInfo>
                  <SummaryLabel>Apertura</SummaryLabel>

                  <SummaryValue>
                    $
                    {selectedCashRegister.opening_amount.toLocaleString(
                      "es-AR",
                    )}
                  </SummaryValue>
                </SummaryInfo>
              </SummaryItem>

              {/* VENTAS */}

              <SummaryGrup>
                <SummaryGroupTitle className="gain">
                  Ventas Totales ${salesTotal.toLocaleString("es-AR")}
                </SummaryGroupTitle>

                <SummaryGroupItems>
                  <SummaryItem data-type="payment">
                    <SummaryInfo>
                      <SummaryLabel>Efectivo</SummaryLabel>

                      <SummaryValue>
                        ${totalCash.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>

                  <SummaryItem data-type="payment">
                    <SummaryInfo>
                      <SummaryLabel>Transferencia</SummaryLabel>

                      <SummaryValue>
                        ${totalTransfer.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>

                  <SummaryItem data-type="payment">
                    <SummaryInfo>
                      <SummaryLabel>QR</SummaryLabel>

                      <SummaryValue>
                        ${totalQR.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>

                  <SummaryItem data-type="payment">
                    <SummaryInfo>
                      <SummaryLabel>Débito</SummaryLabel>

                      <SummaryValue>
                        ${totalDebit.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>
                </SummaryGroupItems>
              </SummaryGrup>

              <SummaryDivider />

              {/* MOVIMIENTOS */}

              <SummaryGrup>
                <SummaryGroupTitle
                  className={manualBalance < 0 ? "loss" : "gain"}
                >
                  Movimientos ${manualBalance.toLocaleString("es-AR")}
                </SummaryGroupTitle>

                <SummaryGroupItems>
                  <SummaryItem data-type="income">
                    <SummaryInfo>
                      <SummaryLabel>Ingresos</SummaryLabel>

                      <SummaryValue>
                        + ${manualIncome.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>

                  <SummaryItem data-type="expense">
                    <SummaryInfo>
                      <SummaryLabel>Egresos</SummaryLabel>

                      <SummaryValue>
                        - ${manualExpense.toLocaleString("es-AR")}
                      </SummaryValue>
                    </SummaryInfo>
                  </SummaryItem>
                </SummaryGroupItems>
              </SummaryGrup>
            </div>
          </SummaryBar>

          {/* =================================================
              SELECTOR MOBILE / TABLET
          ================================================= */}

          <CashMobileTabs>
            <CashMobileTab
              type="button"
              $active={cashMobileSection === "sales"}
              onClick={() => setCashMobileSection("sales")}
            >
              🛒 Ventas
            </CashMobileTab>

            <CashMobileTab
              type="button"
              $active={cashMobileSection === "movements"}
              onClick={() => setCashMobileSection("movements")}
            >
              💰 Movimientos
            </CashMobileTab>
          </CashMobileTabs>

          {/* =================================================
              CONTENIDO
          ================================================= */}

          <CashContent>
            {/* VENTAS */}

            <div
              className={`cash-sales ${
                cashMobileSection === "sales"
                  ? "cash-mobile-active"
                  : "cash-mobile-hidden"
              }`}
            >
              <SalesContainer>
                <ListTable
                  headers={[
                    "Comanda",
                    "Categoría",
                    "Método",
                    "Descripción",
                    "Monto",
                  ]}
                >
                  {sales.length === 0 ? (
                    <p>No hay ventas registradas en esta caja.</p>
                  ) : (
                    sales.map((movement) => (
                      <TableRow
                        className={movement.amount === 0 ? "pending" : ""}
                        key={movement.id}
                        $columns={5}
                      >
                        <strong>
                          #
                          {movement.order_id
                            ? (ordersMap.get(movement.order_id) ?? "-")
                            : "-"}
                        </strong>

                        <span>
                          {movement.category === "sale"
                            ? "VENTA"
                            : movement.category}
                        </span>

                        <span>
                          {movement.method_payment === "cash"
                            ? "Efectivo"
                            : movement.method_payment === "qr"
                              ? "QR"
                              : movement.method_payment === "transfer"
                                ? "Transferencia"
                                : "Debito"}
                        </span>

                        <span>
                          {movement.amount === 0
                            ? "Pendiente"
                            : movement.description || "Sin descripción"}
                        </span>

                        <strong>
                          {movement.type === "outflow" ? "- " : "+ "}$
                          {movement.amount.toLocaleString("es-AR")}
                        </strong>
                      </TableRow>
                    ))
                  )}
                </ListTable>
              </SalesContainer>
            </div>

            {/* MOVIMIENTOS MANUALES */}

            <div
              className={`cash-movements ${
                cashMobileSection === "movements"
                  ? "cash-mobile-active"
                  : "cash-mobile-hidden"
              }`}
            >
              <CashMovementSummary
                movements={manualMovements}
                canModifyCash={canModifyCash}
                onIncome={handleOpenIncome}
                onExpense={handleOpenExpense}
              />
            </div>

            {/* CERRAR CAJA */}

            <div className="cash-close">
              {selectedCashRegister.status_cash_register === "open" ? (
                <CloseCashButton type="button" onClick={handleCloseCash}>
                  Cerrar caja
                </CloseCashButton>
              ) : null}
            </div>
          </CashContent>
        </CashDayContent>
      )}

      {/* =====================================================
          MODAL ABRIR CAJA
      ===================================================== */}

      {openCashModal && (
        <ModalForm
          isOpen={openCashModal}
          title={`Abrir caja ${
            selectedShift === "morning" ? "Turno mañana" : "Turno noche"
          }`}
          onClose={() => setOpenCashModal(false)}
        >
          <OpenCashForm
            onSubmit={handleCreateCash}
            onClose={() => setOpenCashModal(false)}
          />
        </ModalForm>
      )}

      {/* =====================================================
          MODAL CERRAR CAJA
      ===================================================== */}

      {closeCashModal && selectedCashRegister && (
        <ModalForm
          isOpen={closeCashModal}
          title={`Cerrar caja ${
            selectedCashRegister.shift === "morning" ? "de mañana" : "de noche"
          }`}
          onClose={() => setCloseCashModal(false)}
        >
          <CloseCashForm
            openingAmount={selectedCashRegister.opening_amount}
            onSubmit={handleSubmitCloseCash}
            onClose={() => setCloseCashModal(false)}
          />
        </ModalForm>
      )}

      {/* =====================================================
          MODAL MOVIMIENTO
      ===================================================== */}

      {movementModalOpen && (
        <CashMovementForm
          isOpen={movementModalOpen}
          type={movementType}
          cashRegisterId={selectedCashRegister?.id ?? ""}
          onClose={() => setMovementModalOpen(false)}
          onSubmit={handleCreateMovement}
        />
      )}

      {/* =====================================================
          MODAL INFORMACIÓN
      ===================================================== */}

      {infoModal && (
        <ModalForm
          isOpen={infoModal}
          title={pendingCashRegister ? "Caja abierta" : "Información"}
          onClose={() => {
            setInfoModal(false);
            setPendingCashRegister(null);
          }}
        >
          {pendingCashRegister ? (
            <>
              <p>
                No podés abrir una nueva caja porque existe otra caja que
                todavía está abierta.
              </p>

              <p>Primero tenés que cerrar la caja actual.</p>

              <p>
                <strong>Día:</strong>{" "}
                {formatDate(
                  pendingCashRegister.date
                    ? getDateOnly(pendingCashRegister.date)
                    : getDateOnly(pendingCashRegister.opened_at),
                )}
              </p>

              <p>
                <strong>Turno:</strong>{" "}
                {pendingCashRegister.shift === "morning" ? "Mañana" : "Noche"}
              </p>

              <button type="button" onClick={handleGoToOpenCash}>
                Ir a la caja abierta
              </button>
            </>
          ) : (
            <p>{infoMessage}</p>
          )}
        </ModalForm>
      )}
    </>
  );
};

export default CashDay;
