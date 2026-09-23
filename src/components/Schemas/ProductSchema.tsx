import * as Yup from "yup";
import type { ProductFormValues } from "../../interfaces/Product.ts";

export const ProductSchema = Yup.object({
  name: Yup.string().trim().required("El nombre es obligatorio"),

  price: Yup.number()
    .typeError("El precio debe ser un número")
    .required("El precio es obligatorio")
    .positive("El precio debe ser positivo"),

  category: Yup.string().trim().required("La categoría es obligatoria"),
});

export const getProductInitialValues = (product?: ProductFormValues) => ({
  name: product?.name ?? "",
  price: product?.price ?? 0,
  category: product?.category ?? "",
});
