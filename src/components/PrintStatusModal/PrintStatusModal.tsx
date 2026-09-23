import { useEffect, useMemo, useRef, useState } from "react";

import {
  MdCheckCircle,
  MdError,
  MdPrint,
  MdRefresh,
  MdWarning,
  MdCancel,
  MdReceiptLong,
  MdListAlt,
} from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "../../store/store.ts";

import {
  getHealth,
  getPrintConfigAPI,
  getPrintHistoryAPI,
  getPrintJobsAPI,
  getPrintersAPI,
  getPrinterStatusAPI,
  cancelPrintJobAPI,
  printOrderAPI,
  updatePrintConfigAPI,
  getOpenQueueWindows,
} from "../../services/printAgentService.ts";

import { buildOrderTicket } from "../Utils/OrderTicket.ts";

import {
  Overlay,
  Modal,
  Header,
  Title,
  CloseButton,
  Section,
  SectionTitle,
  StatusRow,
  StatusIndicator,
  StatusText,
  PrinterName,
  InfoRow,
  InfoLabel,
  InfoValue,
  RefreshButton,
  Loading,
  ErrorMessage,
  ActionButton,
  SecondaryButton,
  Select,
  JobList,
  JobItem,
  JobRadio,
  JobInfo,
  JobTitle,
  JobStatus,
  DangerButton,
  CashOrderList,
  CashOrderItem,
  CashOrderInfo,
  CashOrderTitle,
  CashOrderCustomer,
  CashOrderTotal,
  EmptyMessage,
  ModalFooter,
  SmallInfo,
  SubModal,
  SubModalHeader,
  SubModalTitle,
} from "./PrintStatusModalStyles.ts";

import type {
  PrintConfig,
  PrintHistory,
  PrintJob,
  PrintPrinter,
  PrinterStatus,
} from "../../interfaces/PrintAgent.ts";
import { getAxiosErrorMessage } from "../Utils/ErrorAxios.tsx";
import { setPrinterActive } from "../../store/slices/printAgentSlice.ts";

interface PrintStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubModalType = "jobs" | "orders" | null;

const PrintStatusModal = ({ isOpen, onClose }: PrintStatusModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [online, setOnline] = useState(false);

  const [config, setConfig] = useState<PrintConfig | null>(null);

  const [printerStatus, setPrinterStatus] = useState<PrinterStatus | null>(
    null,
  );

  const [jobs, setJobs] = useState<PrintJob[]>([]);

  const [history, setHistory] = useState<PrintHistory[]>([]);

  const [printers, setPrinters] = useState<PrintPrinter[]>([]);

  const [selectedPrinter, setSelectedPrinter] = useState("");

  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const [cancellingJob, setCancellingJob] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [subModal, setSubModal] = useState<SubModalType>(null);

  const cashRegisters = useSelector(
    (state: RootState) => state.cashRegister.cashRegister,
  );

  const orders = useSelector((state: RootState) => state.orders.orders);

  const [selectedCashRegisterId, setSelectedCashRegisterId] = useState("");

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const [printingOrderId, setPrintingOrderId] = useState<string | null>(null);

  /**
   * =========================================================
   * CARGA COMPLETA
   * =========================================================
   *
   * Se ejecuta al abrir el modal o cuando hacemos
   * una actualización manual.
   *
   * NO se ejecuta cada 5 segundos.
   */
  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(false);

      // Cargamos los datos generales sin depender
      // del estado físico de la impresora.
      const [health, configData, jobsData, historyData, printersData] =
        await Promise.all([
          getHealth(),
          getPrintConfigAPI(),
          getPrintJobsAPI(),
          getPrintHistoryAPI(),
          getPrintersAPI(),
        ]);

      setOnline(health);
      setConfig(configData);
      setJobs(jobsData);
      setHistory(historyData);
      setPrinters(printersData);

      if (configData?.printer_name && !selectedPrinter) {
        setSelectedPrinter(configData.printer_name);
      }

      // El estado de la impresora se obtiene
      // por separado.
      try {
        const printerStatusData = await getPrinterStatusAPI();

        setPrinterStatus(printerStatusData);
        dispatch(
          setPrinterActive(
            Boolean(printerStatusData.connected && printerStatusData.online),
          ),
        );
      } catch (printerError) {
        getAxiosErrorMessage(printerError);
        setPrinterStatus(null);
        dispatch(setPrinterActive(false));
      }
    } catch (error) {
      getAxiosErrorMessage(error);

      setOnline(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  /**
   * =========================================================
   * ACTUALIZACIÓN RÁPIDA
   * =========================================================
   *
   * Esta función se ejecuta cada 5 segundos.
   *
   * Solamente consulta:
   *
   * GET /
   * GET /printer/status
   *
   * De esta manera podemos saber constantemente:
   *
   * - si el Agent está funcionando
   * - si la impresora USB está conectada
   * - si Windows la considera online
   * - estado de la impresora
   * - cola de Windows
   * - trabajos de Windows
   * - cantidad de trabajos internos del Agent
   */

  const refreshingStatusRef = useRef(false);

  const refreshPrinterStatus = async () => {
    if (refreshingStatusRef.current) {
      return;
    }

    try {
      refreshingStatusRef.current = true;

      const [health, printerStatusData] = await Promise.all([
        getHealth(),
        getPrinterStatusAPI(),
      ]);

      setOnline(health);

      setPrinterStatus(printerStatusData);

      dispatch(
        setPrinterActive(
          Boolean(printerStatusData.connected && printerStatusData.online),
        ),
      );
      setError(false);
    } catch (error) {
      getAxiosErrorMessage(error);
      setOnline(false);
      setPrinterActive(false);
      setError(true);
    } finally {
      refreshingStatusRef.current = false;
    }
  };

  /**
   * =========================================================
   * POLLING
   * =========================================================
   */

  useEffect(() => {
    if (!isOpen) return;

    loadInitialData();

    const interval = setInterval(() => {
      refreshPrinterStatus();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen]);

  /**
   * =========================================================
   * DATOS DE WINDOWS
   * =========================================================
   */

  const windowsJobs = printerStatus?.jobs ?? [];

  const windowsQueueCount = printerStatus?.queue_count ?? 0;

  const agentQueueCount = printerStatus?.agent_queue_count ?? 0;

  /**
   * =========================================================
   * CANCELAR TRABAJO DEL AGENT
   * =========================================================
   */

  const handleCancelJob = async () => {
    if (selectedJobId === null) {
      return;
    }

    try {
      setCancellingJob(true);
      setError(false);

      await cancelPrintJobAPI(selectedJobId);

      setSelectedJobId(null);

      /*
       * Actualizamos los trabajos internos
       * porque acabamos de modificar el Agent.
       */
      const jobsData = await getPrintJobsAPI();

      setJobs(jobsData);

      /*
       * Actualizamos también el estado
       * de Windows.
       */
      await refreshPrinterStatus();
    } catch (error) {
      getAxiosErrorMessage(error);
      setError(true);
    } finally {
      setCancellingJob(false);
    }
  };

  /**
   * =========================================================
   * COMANDAS
   * =========================================================
   */

  const cashOrders = useMemo(() => {
    if (!selectedCashRegisterId) {
      return [];
    }

    return orders
      .filter((order) => order.cash_register_id === selectedCashRegisterId)
      .sort((a, b) => b.order_number - a.order_number);
  }, [orders, selectedCashRegisterId]);

  const selectedOrder = useMemo(() => {
    return orders.find((order) => order.id === selectedOrderId);
  }, [orders, selectedOrderId]);

  /**
   * =========================================================
   * REIMPRIMIR COMANDA
   * =========================================================
   */

  const handleReprintOrder = async () => {
    if (!selectedOrder) {
      return;
    }

    try {
      setPrintingOrderId(selectedOrder.id);

      setError(false);

      const ticket = buildOrderTicket(selectedOrder);

      await printOrderAPI(ticket);

      setSelectedOrderId(null);

      /*
       * Esperamos un pequeño momento para
       * permitir que Windows registre el trabajo.
       */
      setTimeout(() => {
        refreshPrinterStatus();
      }, 500);
    } catch (error) {
      getAxiosErrorMessage(error);
      setError(true);
    } finally {
      setPrintingOrderId(null);
    }
  };

  /**
   * =========================================================
   * HISTORIAL
   * =========================================================
   */

  const completedCount = history.filter(
    (item) => item.status?.toUpperCase() === "COMPLETED",
  ).length;

  const cancelledCount = history.filter((item) => {
    const status = item.status?.toUpperCase();

    return status === "CANCELLED" || status === "CANCELED";
  }).length;

  const errorCount = history.filter((item) => {
    const status = item.status?.toUpperCase();

    return status === "FAILED" || status === "ERROR";
  }).length;

  /**
   * =========================================================
   * CAMBIAR IMPRESORA
   * =========================================================
   */

  const handlePrinterChange = async (printerName: string) => {
    if (!config) {
      return;
    }

    try {
      setError(false);
      setLoading(true);

      const updatedConfig = await updatePrintConfigAPI({
        printer_name: printerName,
        simulation: config.simulation,
        business_name: config.business_name,
      });

      setSelectedPrinter(updatedConfig.printer_name);

      setConfig(updatedConfig);

      /*
       * Solo necesitamos actualizar
       * el estado de la nueva impresora.
       */
      const newPrinterStatus = await getPrinterStatusAPI();

      setPrinterStatus(newPrinterStatus);
    } catch (error) {
      getAxiosErrorMessage(error);
      setError(true);

      setSelectedPrinter(config.printer_name);
    } finally {
      setLoading(false);
    }
  };

  /**
   * =========================================================
   * ACTUALIZACIÓN MANUAL
   * =========================================================
   *
   * El botón "Actualizar" sí vuelve a cargar
   * toda la información.
   */

  const handleFullRefresh = async () => {
    try {
      await loadInitialData();
    } catch (error) {
      getAxiosErrorMessage(error);
    }
  };

  /**
   * =========================================================
   * CERRAR SUBMODAL
   * =========================================================
   */

  const handleCloseSubModal = () => {
    setSubModal(null);
    setSelectedJobId(null);
    setSelectedOrderId(null);
  };

  if (!isOpen) {
    return null;
  }

  const printerConnected = printerStatus?.connected ?? false;

  const printerOnline = printerStatus?.online ?? false;

  const printerStatusName = printerStatus?.status ?? "UNKNOWN";

  const printerStatusMessage =
    printerStatus?.status_message ??
    "No se pudo obtener el estado de la impresora.";

  const handleOpenQueueWindows = async () => {
    try {
      await getOpenQueueWindows();
    } catch (error) {
      getAxiosErrorMessage(error);
    }
  };

  return (
    <>
      <Overlay onClick={onClose}>
        <Modal onClick={(event) => event.stopPropagation()}>
          <Header>
            <Title>
              <MdPrint />
              Estado de impresión
            </Title>

            <CloseButton onClick={onClose} type="button">
              x
            </CloseButton>
          </Header>

          <Section>
            <SectionTitle>Estado</SectionTitle>

            <StatusRow>
              <StatusIndicator $online={online} />

              <StatusText $online={online}>
                {online
                  ? "Programa de impresión conectado"
                  : "Programa de impresión desconectado"}
              </StatusText>
            </StatusRow>

            <StatusRow>
              <StatusIndicator $online={printerConnected} />

              <StatusText $online={printerConnected}>
                {printerConnected
                  ? "Impresora conectada"
                  : "Impresora desconectada"}
              </StatusText>
            </StatusRow>

            {printerStatus && (
              <>
                <InfoRow>
                  <InfoLabel>Estado</InfoLabel>

                  <InfoValue>{printerStatusName}</InfoValue>
                </InfoRow>

                <SmallInfo>{printerStatusMessage}</SmallInfo>
              </>
            )}
          </Section>

          {loading && !config ? (
            <Loading>Cargando estado...</Loading>
          ) : printerConnected && printerStatus ? (
            <>
              {/* ================================================= */}
              {/* ESTADO */}
              {/* ================================================= */}

              {/* ================================================= */}
              {/* IMPRESORA */}
              {/* ================================================= */}
              <Section>
                <SectionTitle>Impresora</SectionTitle>

                {config ? (
                  <>
                    {printerStatus?.printer ? (
                      <PrinterName>
                        <MdPrint />

                        <select
                          value={selectedPrinter || printerStatus.printer}
                          onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>,
                          ) => handlePrinterChange(event.target.value)}
                          style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            font: "inherit",
                            color: "inherit",
                            fontWeight: "inherit",
                            cursor: "pointer",
                            width: "100%",
                          }}
                        >
                          {printers.length > 0 ? (
                            printers.map((printer) => (
                              <option key={printer.name} value={printer.name}>
                                {printer.name}
                              </option>
                            ))
                          ) : (
                            <option value={printerStatus.printer}>
                              {printerStatus.printer}
                            </option>
                          )}
                        </select>
                      </PrinterName>
                    ) : (
                      <PrinterName>
                        <MdPrint />
                        No hay impresoras disponibles
                      </PrinterName>
                    )}

                    <InfoRow>
                      <InfoLabel>Tipo</InfoLabel>

                      <InfoValue>{config.printer_type}</InfoValue>
                    </InfoRow>

                    <InfoRow>
                      <InfoLabel>Simulación</InfoLabel>

                      <InfoValue>{config.simulation ? "Sí" : "No"}</InfoValue>
                    </InfoRow>

                    {printerStatus && (
                      <>
                        <InfoRow>
                          <InfoLabel>Conexión</InfoLabel>

                          <InfoValue
                            $success={printerConnected}
                            $error={!printerConnected}
                          >
                            {printerConnected
                              ? "USB conectada"
                              : "USB desconectada"}
                          </InfoValue>
                        </InfoRow>

                        <InfoRow>
                          <InfoLabel>Estado Windows</InfoLabel>

                          <InfoValue>
                            {printerOnline ? "Online" : "Offline"}
                          </InfoValue>
                        </InfoRow>

                        {printerStatus.driver && (
                          <InfoRow>
                            <InfoLabel>Driver</InfoLabel>

                            <InfoValue>{printerStatus.driver}</InfoValue>
                          </InfoRow>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <ErrorMessage>
                    No se pudo obtener la configuración.
                  </ErrorMessage>
                )}
              </Section>

              {/* ================================================= */}
              {/* COLA */}
              {/* ================================================= */}

              <Section>
                <SectionTitle>Cola de impresión</SectionTitle>

                <InfoRow>
                  <InfoLabel>Trabajos en Windows</InfoLabel>

                  <InfoValue>{windowsQueueCount}</InfoValue>
                </InfoRow>

                <InfoRow>
                  <InfoLabel>Trabajos del Agent</InfoLabel>

                  <InfoValue>{agentQueueCount}</InfoValue>
                </InfoRow>

                {windowsQueueCount > 0 && (
                  <StatusRow>
                    <MdWarning />

                    <StatusText $online={false}>
                      Hay trabajos en la cola de Windows
                    </StatusText>
                  </StatusRow>
                )}

                {!printerConnected && (
                  <StatusRow>
                    <MdError />

                    <StatusText $online={false}>
                      La impresora no está conectada por USB
                    </StatusText>
                  </StatusRow>
                )}

                <SecondaryButton
                  type="button"
                  onClick={() => setSubModal("jobs")}
                >
                  <MdListAlt />
                  Ver trabajos
                </SecondaryButton>
              </Section>

              {/* ================================================= */}
              {/* COMANDAS */}
              {/* ================================================= */}

              <Section>
                <SectionTitle>Comandas</SectionTitle>

                <ActionButton
                  type="button"
                  onClick={() => setSubModal("orders")}
                >
                  <MdReceiptLong />
                  Ver comandas por caja
                </ActionButton>
              </Section>

              {/* ================================================= */}
              {/* HISTORIAL */}
              {/* ================================================= */}

              <Section>
                <SectionTitle>Historial</SectionTitle>

                <InfoRow>
                  <InfoLabel>Completados</InfoLabel>

                  <InfoValue $success>
                    <MdCheckCircle />
                    {completedCount}
                  </InfoValue>
                </InfoRow>

                <InfoRow>
                  <InfoLabel>Con error</InfoLabel>

                  <InfoValue $error>
                    <MdError />
                    {errorCount}
                  </InfoValue>
                </InfoRow>

                <InfoRow>
                  <InfoLabel>Cancelados</InfoLabel>

                  <InfoValue>{cancelledCount}</InfoValue>
                </InfoRow>
              </Section>

              {error && (
                <ErrorMessage>
                  No se pudo actualizar el estado del Print Agent.
                </ErrorMessage>
              )}

              <RefreshButton
                type="button"
                onClick={handleFullRefresh}
                disabled={loading}
              >
                <MdRefresh />

                {loading ? "Actualizando..." : "Actualizar"}
              </RefreshButton>
            </>
          ) : (
            <></>
          )}
        </Modal>
      </Overlay>

      {/* ======================================================= */}
      {/* SUBMODAL - TRABAJOS */}
      {/* ======================================================= */}

      {subModal === "jobs" && (
        <Overlay $above onClick={handleCloseSubModal}>
          <SubModal onClick={(event) => event.stopPropagation()}>
            <SubModalHeader>
              <SubModalTitle>
                <MdPrint />
                Trabajos de impresión
              </SubModalTitle>

              <CloseButton type="button" onClick={handleCloseSubModal}>
                ×
              </CloseButton>
            </SubModalHeader>

            {/* ================================================= */}
            {/* WINDOWS */}
            {/* ================================================= */}

            <Section>
              <SectionTitle>Cola de Windows</SectionTitle>

              {windowsJobs.length === 0 ? (
                <EmptyMessage>
                  No hay trabajos en la cola de Windows.
                </EmptyMessage>
              ) : (
                <JobList>
                  {windowsJobs.map((job, index) => (
                    <JobItem
                      onClick={handleOpenQueueWindows}
                      key={`windows-${job.id ?? index}-${job.document}`}
                      $selected={false}
                    >
                      <MdPrint />

                      <JobInfo>
                        <JobTitle>{job.document || "Documento"}</JobTitle>

                        <JobStatus>
                          Estado: {job.status || "Desconocido"}
                        </JobStatus>

                        {job.status_message && (
                          <JobStatus>{job.status_message}</JobStatus>
                        )}

                        {job.position !== undefined && (
                          <JobStatus>Posición: {job.position}</JobStatus>
                        )}

                        {job.id !== undefined && (
                          <JobStatus>ID Windows: {job.id}</JobStatus>
                        )}
                      </JobInfo>
                    </JobItem>
                  ))}
                </JobList>
              )}
            </Section>

            {/* ================================================= */}
            {/* AGENT */}
            {/* ================================================= */}

            <Section>
              <SectionTitle>Trabajos del Print Agent</SectionTitle>

              {jobs.length === 0 ? (
                <EmptyMessage>No hay trabajos internos del Agent.</EmptyMessage>
              ) : (
                <>
                  <JobList>
                    {jobs.map((job) => {
                      const selected = selectedJobId === job.id;

                      return (
                        <JobItem
                          key={job.id}
                          $selected={selected}
                          onClick={() => setSelectedJobId(job.id)}
                        >
                          <JobRadio
                            type="radio"
                            name="print-job"
                            checked={selected}
                            onChange={() => setSelectedJobId(job.id)}
                          />

                          <JobInfo>
                            <JobTitle>Trabajo #{job.id}</JobTitle>

                            <JobStatus>
                              Estado: {job.status ?? "Desconocido"}
                            </JobStatus>

                            {job.attempts !== undefined && (
                              <JobStatus>Intentos: {job.attempts}</JobStatus>
                            )}
                          </JobInfo>
                        </JobItem>
                      );
                    })}
                  </JobList>

                  <ModalFooter>
                    <DangerButton
                      type="button"
                      disabled={selectedJobId === null || cancellingJob}
                      onClick={handleCancelJob}
                    >
                      <MdCancel />

                      {cancellingJob
                        ? "Cancelando..."
                        : "Cancelar seleccionado"}
                    </DangerButton>
                  </ModalFooter>
                </>
              )}
            </Section>
          </SubModal>
        </Overlay>
      )}

      {/* ======================================================= */}
      {/* SUBMODAL - COMANDAS */}
      {/* ======================================================= */}

      {subModal === "orders" && (
        <Overlay $above onClick={handleCloseSubModal}>
          <SubModal onClick={(event) => event.stopPropagation()}>
            <SubModalHeader>
              <SubModalTitle>
                <MdReceiptLong />
                Comandas por caja
              </SubModalTitle>

              <CloseButton type="button" onClick={handleCloseSubModal}>
                ×
              </CloseButton>
            </SubModalHeader>

            <Section>
              <InfoLabel>Caja</InfoLabel>

              <Select
                value={selectedCashRegisterId}
                onChange={(event) => {
                  setSelectedCashRegisterId(event.target.value);

                  setSelectedOrderId(null);
                }}
              >
                <option value="">Seleccionar caja...</option>

                {cashRegisters
                  .slice()
                  .sort(
                    (a, b) =>
                      new Date(b.opened_at).getTime() -
                      new Date(a.opened_at).getTime(),
                  )
                  .map((cash) => (
                    <option key={cash.id} value={cash.id}>
                      {cash.date} —{" "}
                      {cash.shift === "morning" ? "Mañana" : "Noche"} —{" "}
                      {cash.status_cash_register === "open"
                        ? "ABIERTA"
                        : "CERRADA"}
                    </option>
                  ))}
              </Select>
            </Section>

            {selectedCashRegisterId && (
              <>
                <InfoRow>
                  <InfoLabel>Comandas</InfoLabel>

                  <InfoValue>{cashOrders.length}</InfoValue>
                </InfoRow>

                {cashOrders.length === 0 ? (
                  <EmptyMessage>
                    No hay comandas asociadas a esta caja.
                  </EmptyMessage>
                ) : (
                  <CashOrderList>
                    {cashOrders.map((order) => {
                      const selected = selectedOrderId === order.id;

                      return (
                        <CashOrderItem
                          key={order.id}
                          $selected={selected}
                          onClick={() => setSelectedOrderId(order.id)}
                        >
                          <MdReceiptLong />

                          <CashOrderInfo>
                            <CashOrderTitle>
                              Comanda #{order.order_number}
                            </CashOrderTitle>

                            <CashOrderCustomer>
                              {order.customer_name || "Sin cliente"}
                            </CashOrderCustomer>
                          </CashOrderInfo>

                          <CashOrderTotal>
                            ${order.total_price.toLocaleString("es-AR")}
                          </CashOrderTotal>
                        </CashOrderItem>
                      );
                    })}
                  </CashOrderList>
                )}

                {selectedOrder && (
                  <ModalFooter>
                    <ActionButton
                      type="button"
                      disabled={printingOrderId === selectedOrder.id}
                      onClick={handleReprintOrder}
                    >
                      <MdPrint />

                      {printingOrderId === selectedOrder.id
                        ? "Enviando..."
                        : `Reimprimir comanda #${selectedOrder.order_number}`}
                    </ActionButton>
                  </ModalFooter>
                )}
              </>
            )}
          </SubModal>
        </Overlay>
      )}
    </>
  );
};

export default PrintStatusModal;
