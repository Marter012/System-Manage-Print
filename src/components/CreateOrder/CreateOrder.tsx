import { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field } from "formik";
import type { FieldProps } from "formik";
import { useSelector } from "react-redux";

import {
  CreateOrderButton,
  CustomerInput,
  Error,
  OrderData,
  OrderHeader,
  OrderItem,
  OrderItems,
  OrderSection,
  QuantityControls,
  Select,
  TimeInput,
  TotalSection,
} from "./CreateOrderStyles";
import type { OrderItemForm, OrderFormValues } from "../../interfaces/Order.ts";
import type { Product } from "../../interfaces/Product";
import type { RootState } from "../../store/store.ts";
import type { AppliedPromotion } from "../NewOrder/NewOrder.tsx";

interface CreateOrderProps {
  nextOrderNumber: number;
  values: OrderFormValues;
  subtotal: number;
  promotionDiscount: number;
  totalPrice: number;
  getProduct: (id: string) => Product | undefined;
  increaseQuantity: (id: string, garnish?: string) => void;
  decreaseQuantity: (id: string, garnish?: string) => void;
  allowOutOfStock: boolean;
  isSubmitting: boolean;
  errors: string;
  appliedPromotions: AppliedPromotion[];
  setFieldValue: (field: string, value: unknown) => void;
}

export default function CreateOrder({
  nextOrderNumber,
  values,
  subtotal,
  promotionDiscount,
  totalPrice,
  getProduct,
  increaseQuantity,
  decreaseQuantity,
  allowOutOfStock,
  isSubmitting,
  errors,
  appliedPromotions,
  setFieldValue,
}: CreateOrderProps) {
  const [showPromotions, setShowPromotions] = useState(false);
  const [activeDetails, setActiveDetails] = useState<
    "delivery" | "discount" | "extra"
  >("delivery");

  const selectedDay = useSelector((state: RootState) => state.daySelected.day);
  useEffect(() => {
    const currentPayments = values.payments ?? [];

    // Si ya existen medios de pago, no los sobrescribimos.
    if (currentPayments.length > 0) return;

    // Si todavía no se seleccionó un método, no hacemos nada.
    if (!values.method_payment) return;

    // Creamos automáticamente el primer medio de pago.
    setFieldValue("payments", [
      {
        method_payment: values.method_payment,
        amount: totalPrice,
      },
    ]);
  }, [values.method_payment, values.payments, totalPrice, setFieldValue]);
  const previousTotalPrice = useRef(totalPrice);
  useEffect(() => {
    if (previousTotalPrice.current !== totalPrice) {
      previousTotalPrice.current = totalPrice;
      const currentPayments = values.payments ?? [];
      if (currentPayments.length >= 2) {
        const lastIndex = currentPayments.length - 1;
        const othersTotal = currentPayments.reduce(
          (sum, payment, index) =>
            sum +
            (index === lastIndex
              ? 0
              : Math.max(0, Number(payment.amount) || 0)),
          0,
        );
        const updated = currentPayments.map((payment, index) =>
          index === lastIndex
            ? {
                ...payment,
                amount: Math.max(
                  0,
                  Number((totalPrice - othersTotal).toFixed(2)),
                ),
              }
            : payment,
        );
        setFieldValue("payments", updated);
      } else if (currentPayments.length === 1) {
        setFieldValue("payments", [
          { ...currentPayments[0], amount: totalPrice },
        ]);
      }
    }
  }, [totalPrice, values.payments, setFieldValue]);

  const updatePaymentAmount = (index: number, rawValue: string) => {
    const current = [...(values.payments ?? [])];

    if (!current.length) return;

    const balanceIndex = current.findIndex(
      (_, itemIndex) => itemIndex !== index,
    );

    // Permite escribir libremente mientras se edita el importe.
    const entered = Math.max(0, Number(rawValue) || 0);

    // Sumamos los importes de los otros medios, excepto el que
    // estamos editando y el que usaremos para ajustar la diferencia.
    const fixedOthersTotal = current.reduce((sum, payment, itemIndex) => {
      if (itemIndex === index || itemIndex === balanceIndex) {
        return sum;
      }

      return sum + Math.max(0, Number(payment.amount) || 0);
    }, 0);

    // El importe editado no puede superar el total disponible.
    const available = Math.max(0, totalPrice - fixedOthersTotal);
    const amount = Math.min(entered, available);

    current[index] = {
      ...current[index],
      amount: Number(amount.toFixed(2)),
    };

    // El otro medio se ajusta automáticamente con la diferencia.
    if (balanceIndex >= 0) {
      current[balanceIndex] = {
        ...current[balanceIndex],
        amount: Number(
          Math.max(0, totalPrice - fixedOthersTotal - amount).toFixed(2),
        ),
      };
    }

    setFieldValue("payments", current);
  };

  const promotionsQuantity = appliedPromotions.reduce(
    (total, promotion) => total + promotion.quantity,
    0,
  );

  return (
    <OrderSection>
      {/* Fila 1: encabezado y cliente, ancho completo */}
      <OrderHeader className="order-header-row">
        <h3>Nueva comanda</h3>
        <span>N.º {nextOrderNumber}</span>
        <Field
          as={CustomerInput}
          name="customer_name"
          placeholder="Nombre del cliente"
          autoComplete="off"
        />
      </OrderHeader>

      {/* Fila 2: productos y opciones, dos columnas */}
      <div className="order-summary-column">
        <h3 className="section-title">Productos de la comanda</h3>
        <OrderItems>
          {values.items.length === 0 ? (
            <p>No hay productos agregados a la comanda.</p>
          ) : (
            values.items.map((item: OrderItemForm) => {
              const product = getProduct(item.product_id);

              if (!product) return null;

              return (
                <OrderItem
                  key={`${item.product_id}-${item.garnish ?? "sin-guarnicion"}`}
                >
                  <div>
                    <h4>{product.name}</h4>
                    {item.garnish && <small>Guarnición: {item.garnish}</small>}
                    <span>
                      ${(product.price * item.quantity).toLocaleString("es-AR")}
                    </span>
                  </div>

                  <QuantityControls>
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.product_id, item.garnish)
                      }
                    >
                      −
                    </button>
                    <strong>{item.quantity}</strong>
                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.product_id, item.garnish)
                      }
                      disabled={
                        !allowOutOfStock &&
                        values.items
                          .filter(
                            (entry) => entry.product_id === item.product_id,
                          )
                          .reduce((sum, entry) => sum + entry.quantity, 0) >=
                          (getProduct(item.product_id)?.quantity ?? 0)
                      }
                    >
                      +
                    </button>
                  </QuantityControls>
                </OrderItem>
              );
            })
          )}
        </OrderItems>
      </div>

      <div className="order-options-column">
        <OrderData>
          <section className="data-section payment-section">
            <div className="data-section-heading">
              <strong>Tipo de pago</strong>
            </div>
            <div className="fields-grid">
              <label>
                Medio de pago
                <Field as={Select} name="method_payment">
                  <option value="" disabled>
                    Seleccioná un medio de pago
                  </option>
                  <option value="cash">Efectivo</option>
                  <option value="transfer">Transferencia</option>
                  <option value="debit_card">Débito</option>
                  <option value="qr">QR</option>
                </Field>
                <ErrorMessage name="method_payment" component="span" />
              </label>
              <label>
                Estado del pago
                <Field as={Select} name="status_payment">
                  <option value="pending">Pendiente</option>
                  <option value="paid">Pagado</option>
                  <option value="cancelled">Cancelado</option>
                </Field>
                <ErrorMessage name="status_payment" component="span" />
              </label>
            </div>
            <div className="combined-payments">
              <div className="combined-payments-heading">
                <span>Pago combinado</span>
                <button
                  type="button"
                  onClick={() => {
                    const current = values.payments ?? [];
                    if (current.length === 0) {
                      setFieldValue("payments", [
                        {
                          method_payment: values.method_payment || "cash",
                          amount: totalPrice,
                        },
                        { method_payment: "debit_card", amount: 0 },
                      ]);
                    } else {
                      setFieldValue("payments", [
                        ...current,
                        { method_payment: "cash", amount: 0 },
                      ]);
                    }
                  }}
                >
                  + Agregar medio
                </button>
              </div>
              {(values.payments ?? []).map((_, index) => (
                <div className="combined-payment-row" key={`payment-${index}`}>
                  <Field
                    as={Select}
                    aria-label={`Medio de pago ${index + 1}`}
                    name={`payments.${index}.method_payment`}
                  >
                    <option value="cash">Efectivo</option>
                    <option value="transfer">Transferencia</option>
                    <option value="qr">QR</option>
                    <option value="debit_card">Débito</option>
                    <option value="mercado_pago">Mercado Pago</option>
                  </Field>
                  <Field name={`payments.${index}.amount`}>
                    {({ field }: FieldProps<number>) => (
                      <input
                        {...field}
                        aria-label={`Importe del medio de pago ${index + 1}`}
                        type="number"
                        min="0"
                        max={totalPrice}
                        step="0.01"
                        placeholder="Importe"
                        value={field.value ?? 0}
                        onChange={(event) =>
                          updatePaymentAmount(index, event.target.value)
                        }
                      />
                    )}
                  </Field>
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue(
                        "payments",
                        values.payments?.filter(
                          (_, itemIndex) => itemIndex !== index,
                        ) ?? [],
                      )
                    }
                  >
                    Quitar
                  </button>
                </div>
              ))}
            </div>
          </section>

          <nav className="details-nav" aria-label="Opciones de la comanda">
            <button
              type="button"
              className={activeDetails === "delivery" ? "active" : ""}
              onClick={() => setActiveDetails("delivery")}
              aria-pressed={activeDetails === "delivery"}
            >
              Entrega
            </button>
            <button
              type="button"
              className={activeDetails === "discount" ? "active" : ""}
              onClick={() => setActiveDetails("discount")}
              aria-pressed={activeDetails === "discount"}
            >
              Descuento
            </button>
            <button
              type="button"
              className={activeDetails === "extra" ? "active" : ""}
              onClick={() => setActiveDetails("extra")}
              aria-pressed={activeDetails === "extra"}
            >
              Producto extra
            </button>
          </nav>

          <div className="details-panel">
            {activeDetails === "discount" && (
              <section className="data-section discount-section">
                <div className="fields-grid">
                  <label>
                    Tipo de descuento
                    <Field as={Select} name="discount_type">
                      <option value="">Sin descuento</option>
                      <option value="percent">Porcentaje</option>
                      <option value="amount">Importe fijo</option>
                    </Field>
                  </label>
                  {values.discount_type && (
                    <label>
                      {values.discount_type === "percent"
                        ? "Porcentaje a descontar"
                        : "Importe a descontar"}
                      <Field
                        name="discount_value"
                        type="number"
                        min="0"
                        max={
                          values.discount_type === "percent" ? 100 : undefined
                        }
                        placeholder="0"
                      />
                    </label>
                  )}
                </div>
                <small className="discount-hint">
                  Se aplica sobre el total de la comanda.
                </small>
              </section>
            )}

            {activeDetails === "extra" && (
              <section className="data-section extras-section">
                <div className="fields-grid">
                  <label className="extra-name-field">
                    Producto extra
                    <Field
                      name="extra_name"
                      type="text"
                      placeholder="Ej.: envío, producto especial"
                    />
                  </label>
                  <label>
                    Precio extra
                    <Field
                      name="extra_price"
                      type="number"
                      min="0"
                      placeholder="$ 0"
                    />
                  </label>
                  <label>
                    Cantidad extra
                    <Field
                      name="extra_quantity"
                      type="number"
                      min="1"
                      placeholder="1"
                    />
                  </label>
                  <button
                    className="add-extra-button"
                    type="button"
                    disabled={!values.extra_name?.trim()}
                    onClick={() => {
                      const extra = {
                        name: values.extra_name!.trim(),
                        price: Number(values.extra_price ?? 0),
                        quantity: Number(values.extra_quantity ?? 1),
                      };
                      if (extra.price < 0 || extra.quantity < 1) return;
                      setFieldValue("extra_items", [
                        ...(values.extra_items ?? []),
                        extra,
                      ]);
                      setFieldValue("extra_name", "");
                      setFieldValue("extra_price", 0);
                      setFieldValue("extra_quantity", 1);
                    }}
                  >
                    + Agregar extra
                  </button>
                </div>
                {(values.extra_items ?? []).length > 0 && (
                  <div className="extra-items-list">
                    {(values.extra_items ?? []).map((extra, index) => (
                      <div
                        className="extra-item"
                        key={`${extra.name}-${index}`}
                      >
                        <span>
                          {extra.name} ×{extra.quantity}
                        </span>
                        <strong>
                          $
                          {(extra.price * extra.quantity).toLocaleString(
                            "es-AR",
                          )}
                        </strong>
                        <button
                          type="button"
                          onClick={() =>
                            setFieldValue(
                              "extra_items",
                              values.extra_items?.filter(
                                (_, itemIndex) => itemIndex !== index,
                              ) ?? [],
                            )
                          }
                        >
                          Quitar
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {activeDetails === "delivery" && (
              <section className="data-section delivery-section">
                <div className="fields-grid">
                  <label>
                    Horario
                    <Field as={TimeInput} type="time" name="delivery_time" />
                    <ErrorMessage name="delivery_time" component="span" />
                  </label>
                  <label>
                    Fecha
                    <input
                      className="date-display"
                      value={selectedDay}
                      readOnly
                    />
                  </label>
                </div>
              </section>
            )}
          </div>
        </OrderData>
        {errors && <Error>{errors}</Error>}
      </div>

      {/* Fila 3: totales y acción, ancho completo */}
      <div className="order-footer">
        <TotalSection>
          <div className="subtotal-row">
            <div className="subtotal-info">
              <span>Subtotal</span>
              <strong>${subtotal.toLocaleString("es-AR")}</strong>
            </div>
            {promotionDiscount > 0 && (
              <span className="discount">
                Descuento -${promotionDiscount.toLocaleString("es-AR")}
              </span>
            )}
          </div>

          <div className="total-row">
            <div className="total-info">
              <strong>Total</strong>
              <strong>${totalPrice.toLocaleString("es-AR")}</strong>
            </div>
            {appliedPromotions.length > 0 && (
              <button
                type="button"
                className="promotions-toggle"
                onClick={() => setShowPromotions((previous) => !previous)}
              >
                🎁 {promotionsQuantity} promo
                {promotionsQuantity !== 1 ? "s" : ""}{" "}
                {showPromotions ? "▲" : "▼"}
              </button>
            )}
          </div>

          {showPromotions && appliedPromotions.length > 0 && (
            <div className="promotions-details">
              {appliedPromotions.map((applied) => (
                <div className="promotion-row" key={applied.promotion.id}>
                  <span>
                    🎁 {applied.promotion.name} ×{applied.quantity}
                  </span>
                  <strong>${applied.totalPrice.toLocaleString("es-AR")}</strong>
                </div>
              ))}
            </div>
          )}
        </TotalSection>

        <CreateOrderButton
          type="submit"
          disabled={
            isSubmitting ||
            (values.items.length === 0 &&
              (values.extra_items ?? []).length === 0)
          }
        >
          {isSubmitting ? "Creando comanda..." : "Crear comanda"}
        </CreateOrderButton>
      </div>
    </OrderSection>
  );
}
