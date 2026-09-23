import * as Yup from "yup";
import type { IOrder } from "../../interfaces/Order";

export const OrderSchema = Yup.object({
  customer_name: Yup.string().optional(),

  items: Yup.array()
    .of(
      Yup.object({
        product_id: Yup.string().optional(),

        promotion_id: Yup.string()
          .nullable()
          .optional(),

        quantity: Yup.number()
          .required("La cantidad es obligatoria")
          .integer("La cantidad debe ser un número entero")
          .min(1, "La cantidad debe ser mayor a 0"),
      }).test(
        "product-or-promotion",
        "Seleccioná un producto o una promoción",
        (item) =>
          Boolean(
            item?.product_id || item?.promotion_id,
          ),
      ),
    )
    .min(1, "La comanda debe tener al menos un producto")
    .required("La comanda debe tener productos"),

  method_payment: Yup.string().required(
    "Seleccioná un método de pago",
  ),

  status_payment: Yup.string().required(
    "Seleccioná el estado del pago",
  ),

  delivery_time: Yup.string().optional(),

  status: Yup.boolean().required(),
});


export const getOrderInitialValues = (
  order: IOrder,
) => ({
  order_number: order.order_number ?? 1,

  customer_name: order.customer_name ?? "",

  items:
    order.items?.map((item) => ({
      product_id: item.product_id ?? "",
      promotion_id: item.promotion_id ?? null,
      quantity: item.quantity,
    })) ?? [],

  method_payment: order.method_payment ?? "cash",

  status_payment: order.status_payment ?? "pending",

  delivery_time: order.delivery_time ?? "",

  status: order.status ?? true,
});