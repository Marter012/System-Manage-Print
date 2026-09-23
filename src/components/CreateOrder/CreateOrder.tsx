import { useState } from "react";
import { ErrorMessage, Field } from "formik";
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
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  isSubmitting: boolean;
  errors: string;
  appliedPromotions: AppliedPromotion[];
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
  isSubmitting,
  errors,
  appliedPromotions,
}: CreateOrderProps) {
  const [showPromotions, setShowPromotions] = useState(false);

  const selectedDay = useSelector((state: RootState) => state.daySelected.day);

  const promotionsQuantity = appliedPromotions.reduce(
    (total, promotion) => total + promotion.quantity,
    0,
  );

  return (
    <OrderSection>
      <OrderHeader>
        <h3>Nueva comanda</h3>

        <span>N.º {nextOrderNumber}</span>

        <Field
          as={CustomerInput}
          name="customer_name"
          placeholder="Nombre del cliente"
          autoComplete="off"
        />
      </OrderHeader>

      <OrderItems>
        {values.items.length === 0 ? (
          <p>No hay productos agregados a la comanda.</p>
        ) : (
          values.items.map((item: OrderItemForm) => {
            const product = getProduct(item.product_id);

            if (!product) {
              return null;
            }

            return (
              <OrderItem key={item.product_id}>
                <div>
                  <h4>{product.name}</h4>

                  <span>
                    ${(product.price * item.quantity).toLocaleString("es-AR")}
                  </span>
                </div>

                <QuantityControls>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.product_id)}
                  >
                    −
                  </button>

                  <strong>{item.quantity}</strong>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.product_id)}
                    disabled={
                      item.quantity >=
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

      <TotalSection>
        <div className="subtotal-row">
          <div className="subtotal-info">
            <span>Subtotal</span>

            <strong>${subtotal.toLocaleString("es-AR")}</strong>
          </div>

          {promotionDiscount > 0 && (
            <span className="discount">
              Descuento -$
              {promotionDiscount.toLocaleString("es-AR")}
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
              {promotionsQuantity !== 1 ? "s" : ""} {showPromotions ? "▲" : "▼"}
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

      <OrderData>
        <label>
          Medio de pago
          <Field as={Select} name="method_payment">
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

        <label>
          Horario de entrega
          <Field as={TimeInput} type="time" name="delivery_time" />
          <ErrorMessage name="delivery_time" component="span" />
        </label>

        <label>
          Fecha
          <input className="date-display" value={selectedDay} readOnly />
        </label>
      </OrderData>

      {errors && <Error>{errors}</Error>}

      <CreateOrderButton
        type="submit"
        disabled={isSubmitting || values.items.length === 0}
      >
        {isSubmitting ? "Creando comanda..." : "Crear comanda"}
      </CreateOrderButton>
    </OrderSection>
  );
}
