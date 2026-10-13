import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  FormContainer,
  FormGroup,
  ErrorText,
  FormActions,
  CancelButton,
  SubmitButton,
  ItemsContainer,
  PromotionItem,
  ItemHeader,
  RemoveItemButton,
  AddItemButton,
  ProductToolbar,
  SearchInput,
  CategorySelect,
  ProductSelection,
  ProductOption,
  ProductCheck,
  SelectedProductsInfo,
  EmptyProductsMessage,
  SectionTitle,
} from "./PromotionFormStyles.ts";

import type { AppDispatch, RootState } from "../../../store/store.ts";

import type { PromotionFormProps } from "../../../interfaces/Promotion.ts";

import {
  addPromotion,
  updatePromotion,
} from "../../../store/slices/promotionSlice.ts";

import {
  createPromotionAPI,
  updatePromotionAPI,
} from "../../../services/promotionService.ts";

import {
  getPromotionInitialValues,
  PromotionSchema,
} from "../../Schemas/PromotionSchema.tsx";

import { getAxiosErrorMessage } from "../../Utils/ErrorAxios.tsx";

const PromotionForm = ({
  mode,
  promotion,
  onSuccess,
}: PromotionFormProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(
    (state: RootState) => state.products.products,
  );

  const activeProducts = products.filter((product) => product.status);

  const categories = Array.from(
    new Set(
      activeProducts
        .map((product) => product.category)
        .filter(Boolean),
    ),
  );

  const [searchByGroup, setSearchByGroup] = useState<
    Record<number, string>
  >({});

  const [categoryByGroup, setCategoryByGroup] = useState<
    Record<number, string>
  >({});

  const toggleProduct = (
    productId: string,
    currentIds: string[],
    setFieldValue: (
      field: string,
      value: unknown,
    ) => void,
    fieldName: string,
  ) => {
    const exists = currentIds.includes(productId);

    const newIds = exists
      ? currentIds.filter((id) => id !== productId)
      : [...currentIds, productId];

    setFieldValue(fieldName, newIds);
  };

  return (
    <Formik
      initialValues={getPromotionInitialValues(promotion)}
      enableReinitialize
      validationSchema={PromotionSchema}
      onSubmit={async (
        values,
        { setSubmitting, setStatus },
      ) => {
        setSubmitting(true);
        setStatus(null);

        try {
          const promotionData = {
            name: values.name.trim(),
            description: values.description.trim(),
            price: Number(values.price),

            items: values.items.map((item) => ({
              name: item.name.trim(),
              quantity: Number(item.quantity),
              product_ids: item.product_ids,
            })),

            status: values.status,
          };

          if (mode === "create") {
            try {
              const newPromotion =
                await createPromotionAPI(promotionData);

              dispatch(addPromotion(newPromotion));
            } catch (error) {
              const message = getAxiosErrorMessage(error);

              console.error(
                "Error creando promoción:",
                error,
              );

              setStatus(message);
              return;
            }
          }

          if (mode === "edit" && promotion) {
            try {
              const updatedPromotion =
                await updatePromotionAPI(
                  promotion.id,
                  promotionData,
                );

              dispatch(updatePromotion(updatedPromotion));
            } catch (error) {
              const message = getAxiosErrorMessage(error);

              console.error(
                "Error actualizando promoción:",
                error,
              );

              setStatus(message);
              return;
            }
          }

          onSuccess();
        } catch (error) {
          const message = getAxiosErrorMessage(error);

          console.error(
            "Error guardando promoción:",
            error,
          );

          setStatus(message);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        isSubmitting,
        status,
        values,
        setFieldValue,
      }) => (
        <Form>
          <FormContainer>
            {/* DATOS DE LA PROMOCIÓN */}
            <SectionTitle>
              Datos de la promoción
            </SectionTitle>

            <FormGroup>
              <label htmlFor="name">
                Nombre de la promoción
              </label>

              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Ej: Promo Pollo + 6 Empanadas"
              />

              <ErrorMessage
                name="name"
                component={ErrorText}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="description">
                Descripción
              </label>

              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Ej: 1 pollo + 6 empanadas a elección"
              />

              <ErrorMessage
                name="description"
                component={ErrorText}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="price">
                Precio
              </label>

              <Field
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="Ej: 35000"
              />

              <ErrorMessage
                name="price"
                component={ErrorText}
              />
            </FormGroup>

            {/* COMPOSICIÓN */}
            <div>
              <SectionTitle>
                ¿Qué incluye la promoción?
              </SectionTitle>

            </div>

            <FormGroup>
              <FieldArray name="items">
                {({ push, remove }) => (
                  <ItemsContainer>
                    {values.items.map((item, index) => {
                      const search =
                        searchByGroup[index] ?? "";

                      const category =
                        categoryByGroup[index] ?? "";

                      const filteredProducts =
                        activeProducts.filter(
                          (product) => {
                            const matchesSearch =
                              product.name
                                .toLowerCase()
                                .includes(
                                  search.toLowerCase(),
                                );

                            const matchesCategory =
                              !category ||
                              product.category ===
                                category;

                            return (
                              matchesSearch &&
                              matchesCategory
                            );
                          },
                        );

                      return (
                        <PromotionItem key={index}>
                          {/* CABECERA DEL GRUPO */}
                          <ItemHeader>
                            <div>
                              <strong>
                                Grupo {index + 1}
                              </strong>

                              <span>
                                Ejemplo: 6 empanadas
                                para elegir
                              </span>
                            </div>

                            {values.items.length > 1 && (
                              <RemoveItemButton
                                type="button"
                                onClick={() =>
                                  remove(index)
                                }
                              >
                                Eliminar
                              </RemoveItemButton>
                            )}
                          </ItemHeader>

                          {/* NOMBRE */}
                          <FormGroup>
                            <label
                              htmlFor={`items.${index}.name`}
                            >
                              ¿Qué incluye?
                            </label>

                            <Field
                              id={`items.${index}.name`}
                              name={`items.${index}.name`}
                              type="text"
                              placeholder="Ej: Empanadas"
                            />

                            <ErrorMessage
                              name={`items.${index}.name`}
                              component={ErrorText}
                            />
                          </FormGroup>

                          {/* CANTIDAD */}
                          <FormGroup>
                            <label
                              htmlFor={`items.${index}.quantity`}
                            >
                              Cantidad
                            </label>

                            <Field
                              id={`items.${index}.quantity`}
                              name={`items.${index}.quantity`}
                              type="number"
                              min="1"
                              step="1"
                              placeholder="Ej: 6"
                            />

                            <small>
                              Cantidad de unidades que
                              incluye este grupo.
                            </small>

                            <ErrorMessage
                              name={`items.${index}.quantity`}
                              component={ErrorText}
                            />
                          </FormGroup>

                          {/* PRODUCTOS */}
                          <FormGroup>
                            <label>
                              Productos para elegir
                            </label>

                            {activeProducts.length ===
                            0 ? (
                              <EmptyProductsMessage>
                                No hay productos activos
                                disponibles.
                              </EmptyProductsMessage>
                            ) : (
                              <>
                                <ProductToolbar>
                                  <SearchInput
                                    type="text"
                                    placeholder="Buscar producto..."
                                    value={search}
                                    onChange={(event) =>
                                      setSearchByGroup(
                                        (previous) => ({
                                          ...previous,
                                          [index]:
                                            event.target
                                              .value,
                                        }),
                                      )
                                    }
                                  />

                                  <CategorySelect
                                    value={category}
                                    onChange={(event) =>
                                      setCategoryByGroup(
                                        (previous) => ({
                                          ...previous,
                                          [index]:
                                            event.target
                                              .value,
                                        }),
                                      )
                                    }
                                  >
                                    <option value="">
                                      Todas las categorías
                                    </option>

                                    {categories.map(
                                      (categoryName) => (
                                        <option
                                          key={
                                            categoryName
                                          }
                                          value={
                                            categoryName
                                          }
                                        >
                                          {categoryName}
                                        </option>
                                      ),
                                    )}
                                  </CategorySelect>
                                </ProductToolbar>

                                <ProductSelection>
                                  {filteredProducts.length ===
                                  0 ? (
                                    <EmptyProductsMessage>
                                      No se encontraron
                                      productos.
                                    </EmptyProductsMessage>
                                  ) : (
                                    filteredProducts.map(
                                      (product) => {
                                        const selected =
                                          item.product_ids.includes(
                                            product.id,
                                          );

                                        return (
                                          <ProductOption
                                            key={product.id}
                                            $selected={
                                              selected
                                            }
                                            type="button"
                                            onClick={() =>
                                              toggleProduct(
                                                product.id,
                                                item.product_ids,
                                                setFieldValue,
                                                `items.${index}.product_ids`,
                                              )
                                            }
                                          >
                                            <ProductCheck
                                              $selected={
                                                selected
                                              }
                                            >
                                              {selected
                                                ? "✓"
                                                : ""}
                                            </ProductCheck>

                                            <span>
                                              {
                                                product.name
                                              }
                                            </span>
                                          </ProductOption>
                                        );
                                      },
                                    )
                                  )}
                                </ProductSelection>

                                <SelectedProductsInfo>
                                  {item.product_ids
                                    .length === 0
                                    ? "Elegí los productos que pueden formar parte de este grupo."
                                    : `${item.product_ids.length} producto${
                                        item.product_ids
                                          .length !==
                                        1
                                          ? "s"
                                          : ""
                                      } seleccionado${
                                        item.product_ids
                                          .length !==
                                        1
                                          ? "s"
                                          : ""
                                      }`}
                                </SelectedProductsInfo>
                              </>
                            )}

                            <ErrorMessage
                              name={`items.${index}.product_ids`}
                              component={ErrorText}
                            />
                          </FormGroup>
                        </PromotionItem>
                      );
                    })}

                    <AddItemButton
                      type="button"
                      onClick={() =>
                        push({
                          name: "",
                          quantity: 1,
                          product_ids: [],
                        })
                      }
                    >
                      + Agregar otro grupo
                    </AddItemButton>
                  </ItemsContainer>
                )}
              </FieldArray>
            </FormGroup>

            {/* ERROR DEL BACKEND */}
            {status && (
              <ErrorText>{status}</ErrorText>
            )}

            {/* BOTONES */}
            <FormActions>
              <CancelButton
                type="button"
                onClick={onSuccess}
              >
                Cancelar
              </CancelButton>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Guardando..."
                  : mode === "create"
                    ? "Crear promoción"
                    : "Guardar cambios"}
              </SubmitButton>
            </FormActions>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default PromotionForm;