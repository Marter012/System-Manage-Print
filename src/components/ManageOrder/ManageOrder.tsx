import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { MdOutlineMoreHoriz, MdPrint } from "react-icons/md";

import ModalForm from "../../components/ModalForm/ModalForm.tsx";

import type { RootState } from "../../store/store.ts";
import type { IOrder } from "../../interfaces/Order.ts";

import OrderForm from "../Forms/OrderForm/OrderForm.tsx";

import {
  ContainerManageOrders,
  ActionButton,
  Status,
  EmptyMessage,
} from "./ManageOrderStyles.ts";

import { TableRow } from "../Tables/ListTableStyles.ts";
import { getDateOnly } from "../Utils/Formats.tsx";

import usePrintAgent from "../../hooks/usePrintOrder.ts";
import { buildOrderTicket } from "../Utils/OrderTicket.ts";
import ListTable from "../../components/Tables/ListTable.tsx";
interface ManageOrderProps {
  orderIdToEdit?: string;
}

const ManageOrder = ({ orderIdToEdit }: ManageOrderProps) => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  const cashRegisters = useSelector(
    (state: RootState) => state.cashRegister.cashRegister,
  );

  const selectedDay = useSelector((state: RootState) => state.daySelected.day);

  const selectedShift = useSelector(
    (state: RootState) => state.daySelected.shift,
  );

  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  const [mode, setMode] = useState<"create" | "edit" | "delete">("create");

  const selectedCashRegister = useMemo(() => {
    return cashRegisters.find((cashRegister) => {
      const cashDate = cashRegister.date
        ? getDateOnly(cashRegister.date)
        : getDateOnly(cashRegister.opened_at);

      return cashDate === selectedDay && cashRegister.shift === selectedShift;
    });
  }, [cashRegisters, selectedDay, selectedShift]);

  const handleEdit = (order: IOrder) => {
    if (!order.status) return;

    setSelectedOrder(order);
    setMode("edit");
  };

  useEffect(() => {
    if (!orderIdToEdit) return;

    const order = orders.find(
      (item) => String(item.id) === String(orderIdToEdit),
    );

    if (order?.status) {
      setSelectedOrder(order);
      setMode("edit");
    }
  }, [orderIdToEdit, orders]);

  const { printTicket, showPrinterModal, setShowPrinterModal } =
    usePrintAgent();

  const handlePrint = async (order: IOrder) => {
    const ticket = buildOrderTicket(order);

    await printTicket(ticket);
  };

  const handleClose = () => {
    setSelectedOrder(null);
    setMode("create");
  };

  const handleSuccess = () => {
    setSelectedOrder(null);
    setMode("create");
  };

  const filteredOrders = useMemo(() => {
    if (!selectedCashRegister) return [];

    return orders.filter(
      (order) => order.cash_register_id === selectedCashRegister.id,
    );
  }, [orders, selectedCashRegister]);

  return (
    <ContainerManageOrders>
      <ListTable
        className="orders-table"
        headers={[
          "Comanda",
          "Nombre",
          "Estado de pago",
          "Tipo de pago",
          "Acciones",
        ]}
      >
        {filteredOrders.length === 0 ? (
          <EmptyMessage>No hay comandas registradas.</EmptyMessage>
        ) : (
          filteredOrders.map((order) => (
            <TableRow
              $columns={5}
              className={`orders-table-row ${order.status_payment}`}
              key={order.id}
              onClick={() => handleEdit(order)}
              style={{ cursor: "pointer" }}
            >
              <p className="order-number">
                #{String(order.order_number).padStart(2, "0")}
              </p>

              <p className="quantity">{order.customer_name || "Sin nombre"}</p>

              <p className="payment-status">
                {order.status_payment === "paid"
                  ? "Pagado"
                  : order.status_payment === "pending"
                    ? "Pendiente"
                    : "Cancelado"}
              </p>

              <p className="payment-method">
                {(() => {
                  const paymentLabels: Record<string, string> = {
                    cash: "Efectivo",
                    transfer: "Transferencia",
                    qr: "QR",
                    debit: "Débito",
                    debit_card: "Débito",
                    mercado_pago: "Mercado Pago",
                  };
                  const payments = order.payments?.length
                    ? order.payments
                    : [
                        {
                          method_payment: order.method_payment,
                          amount: order.total_price,
                        },
                      ];
                  return [
                    ...new Set(
                      payments.map(
                        (payment) =>
                          paymentLabels[payment.method_payment] ??
                          payment.method_payment,
                      ),
                    ),
                  ].join(" + ");
                })()}
              </p>

              <div className="actions">
                <Status className={order.status ? "active" : "inactive"}>
                  {order.status ? "Activa" : "Inactiva"}
                </Status>

                <ActionButton
                  type="button"
                  title="Reimprimir comanda"
                  aria-label="Reimprimir comanda"
                  onClick={(event) => {
                    event.stopPropagation();
                    handlePrint(order);
                  }}
                >
                  <MdPrint />
                </ActionButton>

                <ActionButton
                  type="button"
                  title="Modificar comanda"
                  aria-label="Modificar comanda"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleEdit(order);
                  }}
                >
                  <MdOutlineMoreHoriz />
                </ActionButton>
              </div>
            </TableRow>
          ))
        )}
      </ListTable>

      {/* =====================================================
          MODAL IMPRESORA
      ===================================================== */}

      <ModalForm
        isOpen={showPrinterModal}
        title="Impresora"
        onClose={() => setShowPrinterModal(false)}
      >
        <p
          style={{
            textAlign: "center",
            margin: 0,
          }}
        >
          La impresora está desconectada.
        </p>
      </ModalForm>

      {/* =====================================================
          MODAL MODIFICAR COMANDA
      ===================================================== */}

      <ModalForm
        isOpen={mode !== "create" || selectedOrder !== null}
        title={mode === "edit" ? "Modificar comanda" : ""}
        onClose={handleClose}
      >
        {mode === "edit" && selectedOrder && (
          <OrderForm
            mode="edit"
            order={selectedOrder}
            onSuccess={handleSuccess}
            onDeactivate={() => setMode("delete")}
          />
        )}
      </ModalForm>
    </ContainerManageOrders>
  );
};

export default ManageOrder;
