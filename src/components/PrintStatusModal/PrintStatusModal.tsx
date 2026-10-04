import { useEffect, useMemo, useRef, useState } from "react";

import {
  MdCheckCircle,
  MdClose,
  MdError,
  MdListAlt,
  MdPrint,
  MdReceiptLong,
  MdRefresh,
  MdSettings,
  MdUsb,
  MdWarning,
  MdWifi,
  MdWifiOff,
} from "react-icons/md";

import { useSelector } from "react-redux";

import type { RootState } from "../../store/store.ts";

import {
  getHealth,
  getPrintConfigAPI,
  getPrintersAPI,
  getPrinterStatusAPI,
  getOpenQueueWindows,
  printOrderAPI,
  updatePrintConfigAPI,
} from "../../services/printAgentService.ts";

import { buildOrderTicket } from "../Utils/OrderTicket.ts";

import {
  Overlay,
  Modal,
  Header,
  HeaderLeft,
  Title,
  Subtitle,
  CloseButton,
  DashboardGrid,
  StatusCard,
  StatusCardHeader,
  StatusIcon,
  StatusCardTitle,
  StatusCardValue,
  StatusCardDescription,
  StatusDot,
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionIcon,
  InfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  PrinterSelector,
  PrinterIcon,
  PrinterSelect,
  ActionGrid,
  ActionButton,
  SecondaryButton,
  RefreshButton,
  Loading,
  ErrorMessage,
  EmptyMessage,
  QueueBadge,
  QueueBadgeLabel,
  QueueBadgeValue,
  QueueSummary,
  QueueSummaryItem,
  QueueSummaryIcon,
  StatusBanner,
  StatusBannerIcon,
  StatusBannerText,
  StatusBannerTitle,
  StatusBannerDescription,
  SubModalOverlay,
  SubModalHeader,
  SubModalTitle,
  SubModalClose,
  SelectWrapper,
  SelectLabel,
  Select,
  ResponsiveRow,
  OrderList,
  OrderItem,
  OrderIcon,
  OrderInfo,
  OrderTitle,
  OrderCustomer,
  OrderTotal,
  ModalFooter,
} from "./PrintStatusModalStyles.ts";

import type {
  PrintConfig,
  PrintPrinter,
  PrinterStatus,
} from "../../interfaces/PrintAgent.ts";

import { getAxiosErrorMessage } from "../Utils/ErrorAxios.tsx";

import {
  isPrintServer,
  requestPrintFromPrintServer,
} from "../../websocket/websocketService.ts";

interface PrintStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type SubModalType = "orders" | null;

const PrintStatusModal = ({ isOpen, onClose }: PrintStatusModalProps) => {
  const [online, setOnline] = useState(false);

  const [config, setConfig] = useState<PrintConfig | null>(null);

  const [printerStatus, setPrinterStatus] = useState<PrinterStatus | null>(
    null,
  );

  const [printers, setPrinters] = useState<PrintPrinter[]>([]);

  const [selectedPrinter, setSelectedPrinter] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [subModal, setSubModal] = useState<SubModalType>(null);

  const [selectedCashRegisterId, setSelectedCashRegisterId] = useState("");

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const [printingOrderId, setPrintingOrderId] = useState<string | null>(null);

  const refreshingStatusRef = useRef(false);

  const cashRegisters = useSelector(
    (state: RootState) => state.cashRegister.cashRegister,
  );

  const orders = useSelector((state: RootState) => state.orders.orders);

  const remoteAgentConnected = useSelector(
    (state: RootState) => state.printAgent.agentConnected,
  );

  const remotePrinterStatus = useSelector(
    (state: RootState) => state.printAgent.printerStatus,
  );

  const loadInitialData = async () => {
    try {
      setLoading(true);
      setError(false);

      const [health, configData, printersData] = await Promise.all([
        getHealth(),
        getPrintConfigAPI(),
        getPrintersAPI(),
      ]);

      setOnline(health);
      setConfig(configData);
      setPrinters(printersData);

      if (configData?.printer_name && !selectedPrinter) {
        setSelectedPrinter(configData.printer_name);
      }

      try {
        const printerStatusData = await getPrinterStatusAPI();

        setPrinterStatus(printerStatusData);
      } catch (printerError) {
        getAxiosErrorMessage(printerError);

        setPrinterStatus(null);
      }
    } catch (error) {
      console.log(error);
      getAxiosErrorMessage(error);

      setOnline(false);
      setPrinterStatus(null);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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

      setError(false);
    } catch (error) {
      getAxiosErrorMessage(error);

      setOnline(false);
      setPrinterStatus(null);

      setError(true);
    } finally {
      refreshingStatusRef.current = false;
    }
  };

  /*
   * =========================================================
   * ESTADO REMOTO
   * =========================================================
   */

  useEffect(() => {
    if (!isOpen || isPrintServer()) {
      return;
    }

    setOnline(remoteAgentConnected);
    setPrinterStatus(remotePrinterStatus);

    if (remotePrinterStatus) {
      setConfig({
        printer_name: remotePrinterStatus.printer,
        printer_type: remotePrinterStatus.printer_type,
        printer_ip: null,
        printer_port: 0,
        simulation: false,
        business_name: "",
      });

      setSelectedPrinter(remotePrinterStatus.printer || "");
    } else {
      setConfig(null);
    }

    setError(false);
    setLoading(false);
  }, [isOpen, remoteAgentConnected, remotePrinterStatus]);

  /*
   * =========================================================
   * PRINT SERVER
   * =========================================================
   */

  useEffect(() => {
    if (!isOpen || !isPrintServer()) {
      return;
    }

    void loadInitialData();
  }, [isOpen]);

  /*
   * =========================================================
   * DATOS DE IMPRESORA
   * =========================================================
   */

  const printerConnected = printerStatus?.connected ?? false;

  const printerOnline = printerStatus?.online ?? false;

  const printerStatusMessage =
    printerStatus?.status_message ??
    "No se pudo obtener el estado de la impresora.";

  const windowsQueueCount = printerStatus?.queue_count ?? 0;

  const agentQueueCount = printerStatus?.agent_queue_count ?? 0;

  /*
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

  /*
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

      if (isPrintServer()) {
        await printOrderAPI(ticket);

        window.setTimeout(() => {
          void refreshPrinterStatus();
        }, 500);
      } else {
        const success = await requestPrintFromPrintServer(ticket);

        if (!success) {
          throw new Error(
            "La PC con el Print Agent no pudo imprimir la comanda.",
          );
        }
      }

      setSelectedOrderId(null);
    } catch (error) {
      getAxiosErrorMessage(error);
      setError(true);
    } finally {
      setPrintingOrderId(null);
    }
  };

  /*
   * =========================================================
   * CAMBIAR IMPRESORA
   * =========================================================
   */

  const handlePrinterChange = async (printerName: string) => {
    if (!isPrintServer() || !config) {
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

  /*
   * =========================================================
   * ACTUALIZACIÓN MANUAL
   * =========================================================
   */

  const handleFullRefresh = async () => {
    await loadInitialData();
  };

  /*
   * =========================================================
   * ABRIR COLA DE WINDOWS
   * =========================================================
   */

  const handleOpenQueueWindows = async () => {
    try {
      await getOpenQueueWindows();
    } catch (error) {
      getAxiosErrorMessage(error);
    }
  };

  /*
   * =========================================================
   * CERRAR SUBMODAL
   * =========================================================
   */

  const handleCloseSubModal = () => {
    setSubModal(null);
    setSelectedOrderId(null);
  };

  if (!isOpen) {
    return null;
  }

  const agentStatusText = online ? "Conectado" : "Desconectado";

  const printerConnectionText = printerConnected ? "Conectada" : "Desconectada";

  const windowsStatusText = printerOnline ? "Online" : "Offline";

  const systemReady = online && printerConnected && printerOnline;

  return (
    <>
      <Overlay onClick={onClose}>
        <Modal onClick={(event) => event.stopPropagation()}>
          <Header>
            <HeaderLeft>
              <Title>
                <MdPrint />
                Centro de impresión
              </Title>

              <Subtitle>Monitor y administración de impresión</Subtitle>
            </HeaderLeft>

            <CloseButton type="button" onClick={onClose} aria-label="Cerrar">
              <MdClose />
            </CloseButton>
          </Header>

          {loading && !config ? (
            <Loading>
              <MdRefresh />
              <span>Conectando con el sistema de impresión...</span>
            </Loading>
          ) : (
            <>
              {/* ================================================= */}
              {/* ESTADO GENERAL */}
              {/* ================================================= */}

              <DashboardGrid>
                <StatusCard $active={online}>
                  <StatusCardHeader>
                    <StatusIcon $active={online}>
                      {online ? <MdWifi /> : <MdWifiOff />}
                    </StatusIcon>

                    <StatusDot $active={online} />
                  </StatusCardHeader>

                  <StatusCardTitle>Print Agent</StatusCardTitle>

                  <StatusCardValue $active={online}>
                    {agentStatusText}
                  </StatusCardValue>

                  <StatusCardDescription>
                    Comunicación con el programa de impresión
                  </StatusCardDescription>
                </StatusCard>

                <StatusCard $active={printerConnected}>
                  <StatusCardHeader>
                    <StatusIcon $active={printerConnected}>
                      <MdUsb />
                    </StatusIcon>

                    <StatusDot $active={printerConnected} />
                  </StatusCardHeader>

                  <StatusCardTitle>Conexión USB</StatusCardTitle>

                  <StatusCardValue $active={printerConnected}>
                    {printerConnectionText}
                  </StatusCardValue>

                  <StatusCardDescription>
                    Conexión física de la impresora
                  </StatusCardDescription>
                </StatusCard>

                <StatusCard $active={printerOnline}>
                  <StatusCardHeader>
                    <StatusIcon $active={printerOnline}>
                      {printerOnline ? <MdCheckCircle /> : <MdWarning />}
                    </StatusIcon>

                    <StatusDot $active={printerOnline} />
                  </StatusCardHeader>

                  <StatusCardTitle>Windows</StatusCardTitle>

                  <StatusCardValue $active={printerOnline}>
                    {windowsStatusText}
                  </StatusCardValue>

                  <StatusCardDescription>
                    Estado de la impresora en Windows
                  </StatusCardDescription>
                </StatusCard>
              </DashboardGrid>

              {/* ================================================= */}
              {/* BANNER DE ESTADO */}
              {/* ================================================= */}

              <StatusBanner $success={systemReady}>
                <StatusBannerIcon $success={systemReady}>
                  {systemReady ? <MdCheckCircle /> : <MdWarning />}
                </StatusBannerIcon>

                <StatusBannerText>
                  <StatusBannerTitle>
                    {systemReady
                      ? "Sistema listo para imprimir"
                      : "Revisar estado de impresión"}
                  </StatusBannerTitle>

                  <StatusBannerDescription>
                    {printerStatusMessage}
                  </StatusBannerDescription>
                </StatusBannerText>
              </StatusBanner>

              {/* ================================================= */}
              {/* IMPRESORA */}
              {/* ================================================= */}

              <Section>
                <SectionHeader>
                  <div>
                    <SectionTitle>
                      <SectionIcon>
                        <MdPrint />
                      </SectionIcon>
                      Impresora
                    </SectionTitle>

                    <SectionDescription>
                      Configuración y estado de la impresora actualmente
                      seleccionada.
                    </SectionDescription>
                  </div>

                  <MdSettings />
                </SectionHeader>

                {config ? (
                  <>
                    <PrinterSelector>
                      <PrinterIcon>
                        <MdPrint />
                      </PrinterIcon>

                      <div>
                        <InfoLabel>Impresora seleccionada</InfoLabel>

                        {printerStatus?.printer ? (
                          <PrinterSelect
                            value={selectedPrinter || printerStatus.printer}
                            onChange={(event) =>
                              handlePrinterChange(event.target.value)
                            }
                            disabled={!isPrintServer() || loading}
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
                          </PrinterSelect>
                        ) : (
                          <InfoValue>No hay impresora disponible</InfoValue>
                        )}
                      </div>
                    </PrinterSelector>

                    <InfoGrid>
                      <InfoCard>
                        <InfoLabel>Tipo</InfoLabel>

                        <InfoValue>
                          {config.printer_type || "No especificado"}
                        </InfoValue>
                      </InfoCard>

                      <InfoCard>
                        <InfoLabel>Conexión</InfoLabel>

                        <InfoValue
                          $success={printerConnected}
                          $error={!printerConnected}
                        >
                          {printerConnected
                            ? "USB conectada"
                            : "USB desconectada"}
                        </InfoValue>
                      </InfoCard>

                      <InfoCard>
                        <InfoLabel>Estado Windows</InfoLabel>

                        <InfoValue
                          $success={printerOnline}
                          $error={!printerOnline}
                        >
                          {printerOnline ? "Online" : "Offline"}
                        </InfoValue>
                      </InfoCard>

                      {printerStatus?.driver && (
                        <InfoCard>
                          <InfoLabel>Driver</InfoLabel>

                          <InfoValue>{printerStatus.driver}</InfoValue>
                        </InfoCard>
                      )}

                    </InfoGrid>
                  </>
                ) : (
                  <EmptyMessage>
                    No se pudo obtener la configuración de la impresora.
                  </EmptyMessage>
                )}
              </Section>

              {/* ================================================= */}
              {/* COLAS */}
              {/* ================================================= */}

              <Section>
                <SectionHeader>
                  <div>
                    <SectionTitle>
                      <SectionIcon>
                        <MdListAlt />
                      </SectionIcon>
                      Colas de impresión
                    </SectionTitle>

                    <SectionDescription>
                      Estado de los trabajos pendientes de impresión.
                    </SectionDescription>
                  </div>
                </SectionHeader>

                <QueueSummary>
                  <QueueSummaryItem>
                    <QueueSummaryIcon>
                      <MdPrint />
                    </QueueSummaryIcon>

                    <div>
                      <QueueBadgeLabel>Windows</QueueBadgeLabel>

                      <QueueBadgeValue>{windowsQueueCount}</QueueBadgeValue>
                    </div>
                  </QueueSummaryItem>

                  <QueueSummaryItem>
                    <QueueSummaryIcon>
                      <MdListAlt />
                    </QueueSummaryIcon>

                    <div>
                      <QueueBadgeLabel>Programa de impresión</QueueBadgeLabel>

                      <QueueBadgeValue>{agentQueueCount}</QueueBadgeValue>
                    </div>
                  </QueueSummaryItem>

                  <QueueBadge $warning={windowsQueueCount > 0}>
                    {windowsQueueCount > 0 ? (
                      <>
                        <MdWarning />
                        Hay trabajos pendientes
                      </>
                    ) : (
                      <>
                        <MdCheckCircle />
                        Cola de Windows vacía
                      </>
                    )}
                  </QueueBadge>
                </QueueSummary>

                <ActionGrid>
                  <SecondaryButton
                    type="button"
                    onClick={handleOpenQueueWindows}
                  >
                    <MdPrint />
                    Abrir cola de Windows
                  </SecondaryButton>
                </ActionGrid>
              </Section>

              {/* ================================================= */}
              {/* COMANDAS */}
              {/* ================================================= */}

              <Section>
                <SectionHeader>
                  <div>
                    <SectionTitle>
                      <SectionIcon>
                        <MdReceiptLong />
                      </SectionIcon>
                      Comandas
                    </SectionTitle>

                    <SectionDescription>
                      Seleccioná una caja para consultar y reimprimir sus
                      comandas.
                    </SectionDescription>
                  </div>
                </SectionHeader>

                <ActionButton
                  type="button"
                  onClick={() => setSubModal("orders")}
                >
                  <MdReceiptLong />
                  Ver comandas por caja
                </ActionButton>
              </Section>

              {/* ================================================= */}
              {/* ERROR */}
              {/* ================================================= */}

              {error && (
                <ErrorMessage>
                  <MdError />

                  <span>
                    No se pudo actualizar correctamente el estado del Print
                    Agent.
                  </span>
                </ErrorMessage>
              )}

              {/* ================================================= */}
              {/* FOOTER */}
              {/* ================================================= */}

              <ResponsiveRow>
                <RefreshButton
                  type="button"
                  onClick={handleFullRefresh}
                  disabled={loading}
                >
                  <MdRefresh />

                  {loading ? "Actualizando..." : "Actualizar estado"}
                </RefreshButton>
              </ResponsiveRow>
            </>
          )}
        </Modal>
      </Overlay>

      {/* =======================================================
          SUBMODAL - COMANDAS
      ======================================================= */}

      {subModal === "orders" && (
        <SubModalOverlay onClick={handleCloseSubModal}>
          <Modal onClick={(event) => event.stopPropagation()}>
            <SubModalHeader>
              <SubModalTitle>
                <MdReceiptLong />
                Comandas
              </SubModalTitle>

              <SubModalClose type="button" onClick={handleCloseSubModal}>
                <MdClose />
              </SubModalClose>
            </SubModalHeader>

            <Section>
              <SelectWrapper>
                <SelectLabel>Seleccionar caja</SelectLabel>

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
              </SelectWrapper>
            </Section>

            {selectedCashRegisterId && (
              <div className="containerOrders">
                <QueueSummary>
                  <QueueSummaryItem>
                    <QueueSummaryIcon>
                      <MdReceiptLong />
                    </QueueSummaryIcon>

                    <div>
                      <QueueBadgeLabel>Comandas encontradas</QueueBadgeLabel>

                      <QueueBadgeValue>{cashOrders.length}</QueueBadgeValue>
                    </div>
                  </QueueSummaryItem>
                </QueueSummary>

                {cashOrders.length === 0 ? (
                  <EmptyMessage>
                    No hay comandas asociadas a esta caja.
                  </EmptyMessage>
                ) : (
                  <OrderList>
                    {cashOrders.map((order) => {
                      const selected = selectedOrderId === order.id;

                      return (
                        <OrderItem
                          key={order.id}
                          $selected={selected}
                          onClick={() => setSelectedOrderId(order.id)}
                        >
                          <OrderIcon>
                            <MdReceiptLong />
                          </OrderIcon>

                          <OrderInfo>
                            <OrderTitle>
                              Comanda #{order.order_number}
                            </OrderTitle>

                            <OrderCustomer>
                              {order.customer_name || "Sin cliente"}
                            </OrderCustomer>
                          </OrderInfo>

                          <OrderTotal>
                            ${order.total_price.toLocaleString("es-AR")}
                          </OrderTotal>
                        </OrderItem>
                      );
                    })}
                  </OrderList>
                )}
              </div>
            )}
            {selectedCashRegisterId ? (
              <ModalFooter>
                <ActionButton
                  type="button"
                  disabled={selectedOrder?.id === undefined}
                  onClick={handleReprintOrder}
                >
                  <MdPrint />

                  {printingOrderId === selectedOrder?.id
                    ? "Enviando..."
                    : `${selectedOrder ? `Reimprimir comanda #${selectedOrder?.order_number}` : "Seleccione una comanda"}`}
                </ActionButton>
              </ModalFooter>
            ):<></>}
          </Modal>
        </SubModalOverlay>
      )}
    </>
  );
};

export default PrintStatusModal;
