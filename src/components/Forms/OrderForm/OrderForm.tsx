import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import type { RootState, AppDispatch } from "../../../store/store.ts";

import type {
  IUpdateOrder,
  OrderFormProps,
  OrderFormValues,
} from "../../../interfaces/Order.ts";

import { updateOrderAPI } from "../../../services/orderService.ts";

import { setOrders } from "../../../store/slices/orderSlice.ts";

import {
  FormContainer,
  FormGroup,
  FormRow,
  Label,
  Input,
  Select,
  ErrorText,
  ProductsContainer,
  ProductRow,
  QuantityInput,
  FormActions,
  CancelButton,
  SubmitButton,
} from "./OrderFormStyles.ts";

import {
  getOrderInitialValues,
  OrderSchema,
} from "../../Schemas/OrderSchema.tsx";

import { getCashMovementsAPI } from "../../../services/cashMovementService.ts";
import { setCashMovements } from "../../../store/slices/cashMovementSlice.ts";

const OrderForm = ({ order, onSuccess }: OrderFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const orders = useSelector((state: RootState) => state.orders.orders);

  const products = useSelector((state: RootState) => state.products.products);

  const [error, setError] = useState<string | null>(null);

  if (!order) {
    return (
      <FormContainer>
        <ErrorText>No se encontró la comanda que se desea modificar.</ErrorText>
      </FormContainer>
    );
  }

  const handleSubmit = async (
    values: OrderFormValues,
    {
      setSubmitting,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
    },
  ) => {
    try {
      setError(null);

      const updateData: IUpdateOrder = {
        order_number: values.order_number,
        customer_name: values.customer_name,
        method_payment: values.method_payment,
        status_payment: values.status_payment,
        delivery_time: values.delivery_time,
        cash_register_id: order.cash_register_id,
        status: values.status,
      };

      const response = await updateOrderAPI(order.id, updateData);

      dispatch(
        setOrders(
          orders.map((item) => (item.id === order.id ? response : item)),
        ),
      );

      try {
        const movements = await getCashMovementsAPI();

        dispatch(setCashMovements(movements));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Error actualizando movimientos de caja:",
            error.response?.data ?? error.message,
          );
        } else {
          console.error(
            "Error desconocido actualizando movimientos de caja:",
            error,
          );
        }
      }

      onSuccess?.();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.detail ??
          error.response?.data?.message ??
          error.message ??
          "Ocurrió un error al actualizar la comanda.";

        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);
        console.log("ERROR:", message);

        setError(
          typeof message === "string"
            ? message
            : "Ocurrió un error al actualizar la comanda.",
        );
      } else {
        console.error("Error desconocido:", error);

        setError("Ocurrió un error inesperado.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const activeProducts = products.filter((product) => product.status === true);

  return (
    <Formik
      initialValues={getOrderInitialValues(order)}
      validationSchema={OrderSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <FormContainer>
            {error && <ErrorText>{error}</ErrorText>}

            <FormGroup>
              <Label htmlFor="order_number">Número de comanda</Label>

              <Field
                as={Input}
                id="order_number"
                name="order_number"
                type="number"
                disabled
              />

              <ErrorMessage name="order_number" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="customer_name">Nombre del cliente</Label>

              <Field
                as={Input}
                id="customer_name"
                name="customer_name"
                placeholder="Opcional"
              />

              <ErrorMessage name="customer_name" component={ErrorText} />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label htmlFor="method_payment">Método de pago</Label>

                <Field as={Select} id="method_payment" name="method_payment">
                  <option value="cash">Efectivo</option>
                  <option value="transfer">Transferencia</option>
                  <option value="qr">QR</option>
                  <option value="debit_card">Débito</option>
                </Field>

                <ErrorMessage name="method_payment" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="status_payment">Estado del pago</Label>

                <Field as={Select} id="status_payment" name="status_payment">
                  <option value="pending">Pendiente</option>
                  <option value="paid">Pagado</option>
                  <option value="cancelled">Cancelado</option>
                </Field>

                <ErrorMessage name="status_payment" component={ErrorText} />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="delivery_time">Horario de entrega</Label>

              <Field
                as={Input}
                id="delivery_time"
                name="delivery_time"
                type="time"
              />

              <ErrorMessage name="delivery_time" component={ErrorText} />
            </FormGroup>

            <ProductsContainer>
              <Label>Productos</Label>

              {order.items?.map((item, index) => {
                const isPromotion =
                  item.item_type === "promotion" || !!item.promotion_id;

                const product = item.product_id
                  ? activeProducts.find(
                      (product) => product.id === item.product_id,
                    )
                  : undefined;
                console.log(item);
                return (
                  <ProductRow key={item.id ?? index}>
                    <FormGroup>
                      <Label>{isPromotion ? "Promoción" : "Producto"}</Label>

                      <Input
                        value={
                          isPromotion
                            ? `🎁 ${item.name ?? "Promoción"}`
                            : (product?.name ?? item.name ?? "Producto")
                        }
                        disabled
                        readOnly
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Cantidad</Label>
                      <QuantityInput value={item.quantity} disabled readOnly />
                    </FormGroup>
                  </ProductRow>
                );
              })}
            </ProductsContainer>

            <FormActions>
              <CancelButton type="button" onClick={() => onSuccess?.()}>
                Cancelar
              </CancelButton>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Guardando..." : "Guardar cambios"}
              </SubmitButton>
            </FormActions>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
