import { Formik, Form, Field, ErrorMessage } from "formik";

import {
  FormContainer,
  FormGroup,
  ErrorText,
  FormActions,
  CancelButton,
  SubmitButton,
} from "./ProductFormStyles.ts";

import { useDispatch } from "react-redux";

import type {
  ProductFormProps,
} from "../../../interfaces/Product.ts";

import type { AppDispatch } from "../../../store/store.ts";

import {
  addProduct,
  updateProduct,
} from "../../../store/slices/productSlice.ts";

import {
  createProductApi,
  updateProductApi,
} from "../../../services/productService.ts";

import { getProductInitialValues, ProductSchema } from "../../Schemas/ProductSchema.tsx";

const ProductForm = ({
  mode,
  product,
  onSuccess,
  categories,
}: ProductFormProps) => {

  const dispatch = useDispatch<AppDispatch>();

 
  const formatCategory = (category: string) => {
    const trimmed = category.trim();

    if (!trimmed) {
      return "";
    }

    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  };

  return (
    <Formik
      initialValues={getProductInitialValues(product)}
      enableReinitialize
      validationSchema={ProductSchema}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          setStatus(null);

          const formattedValues = {
            ...values,
            category: formatCategory(values.category),
          };

          if (mode === "create") {
            const productData = {
              ...formattedValues,
              quantity: 0,
            };

            const newProduct = await createProductApi(productData);

            dispatch(addProduct(newProduct));
          }

          if (mode === "edit" && product) {
            const updatedProduct = await updateProductApi(
              product.id,
              formattedValues,
            );

            dispatch(updateProduct(updatedProduct));
          }

          onSuccess();
        } catch (error) {
          console.error("Error guardando producto:", error);

          setStatus("No se pudo guardar el producto");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <FormContainer>
            <FormGroup>
              <label htmlFor="name">Nombre</label>

              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Ej: Empanada de jamón y queso"
              />

              <ErrorMessage name="name" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">Precio</label>

              <Field
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
              />

              <ErrorMessage name="price" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <label htmlFor="category">Categoría</label>

              <div className="category-input">
                <Field
                  id="category"
                  name="category"
                  type="text"
                  autoComplete="off"
                  placeholder="Ingrese el nombre de la categoria"
                />

                <Field as="select" name="category" id="category-select">
                  <option value="">Seleccionar</option>

                  {categories?.map((category) => (
                    <option key={category} value={formatCategory(category)}>
                      {formatCategory(category)}
                    </option>
                  ))}
                </Field>
              </div>

              <ErrorMessage name="category" component={ErrorText} />
            </FormGroup>

            {status && <ErrorText>{status}</ErrorText>}

            <FormActions>
              <CancelButton type="button" onClick={onSuccess}>
                Cancelar
              </CancelButton>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "Guardando..."
                  : mode === "create"
                    ? "Crear producto"
                    : "Guardar cambios"}
              </SubmitButton>
            </FormActions>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
