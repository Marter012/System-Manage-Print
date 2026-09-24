import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaBoxes, FaEdit } from "react-icons/fa";

import ListTable from "../../components/Tables/ListTable.tsx";

import {
  ContainerManageProducts,
  Filter,
  AddProductButton,
  ProductOptions,
  ProductInfo,
  ProductActions,
  ActionButton,
  CancelButton,
  StatusButton,
} from "./ManageProductsStyles.ts";

import type { AppDispatch, RootState } from "../../store/store.ts";

import { updateProduct } from "../../store/slices/productSlice.ts";

import { updateProductStatusAPI } from "../../services/productService.ts";

import ModalForm from "../../components/ModalForm/ModalForm.tsx";

import type { Product } from "../../interfaces/Product.ts";

import ProductForm from "../Forms/ProductForm/ProductForm.tsx";

import StockForm from "../Forms/StockForm/StockForm.tsx";

import {
  TableButton,
  TableRow,
} from "../Tables/ListTableStyles.ts";

import { buildProductsTicket } from "../Utils/ProductsTicket.ts";

import usePrintAgent from "../../hooks/usePrintOrder.ts";

type ModalMode =
  | "options"
  | "edit"
  | "delete"
  | "create"
  | "updateQuantity";

export interface ManageProductsRef {
  openCreate: () => void;
  printProducts: () => void;
}

interface ManageProductsProps {
  showActive: boolean;
  setShowActive: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export const AddProduct = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <AddProductButton
      type="button"
      onClick={onClick}
    >
      <FaPlus />
      Nuevo producto
    </AddProductButton>
  );
};

export const PrintProducts = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <AddProductButton
      type="button"
      onClick={onClick}
    >
      🖨️ Imprimir Productos
    </AddProductButton>
  );
};

const ManageProducts = forwardRef<
  ManageProductsRef,
  ManageProductsProps
>(({ showActive, setShowActive }, ref) => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    products,
    loading,
    error,
  } = useSelector(
    (state: RootState) => state.products,
  );

  const categories = [
    ...new Set(
      products.map(
        (product) => product.category,
      ),
    ),
  ];

  const [modalOpen, setModalOpen] =
    useState(false);

  const [modalMode, setModalMode] =
    useState<ModalMode>("options");

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [selectedCategory, setSelectedCategory] =
    useState("Todas");

  const [deleteError, setDeleteError] =
    useState<string | null>(null);

  const [deleting, setDeleting] =
    useState(false);

  const filteredProducts =
    products.filter((product) => {
      const matchesStatus =
        product.status === showActive;

      const matchesCategory =
        selectedCategory === "Todas" ||
        product.category === selectedCategory;

      return (
        matchesStatus &&
        matchesCategory
      );
    });

  const openModal = (
    mode: ModalMode,
    product?: Product,
  ) => {
    setModalMode(mode);
    setSelectedProduct(
      product ?? null,
    );
    setDeleteError(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
    setModalMode("options");
    setDeleteError(null);
    setDeleting(false);
  };

  const getModalTitle = () => {
    switch (modalMode) {
      case "create":
        return "Nuevo producto";

      case "edit":
        return "Editar producto";

      case "delete":
        return selectedProduct?.status
          ? "Desactivar producto"
          : "Activar producto";

      case "updateQuantity":
        return "Modificar stock";

      case "options":
        return "Opciones del producto";

      default:
        return "Producto";
    }
  };

  const {
    printTicket,
    showPrinterModal,
    setShowPrinterModal,
  } = usePrintAgent();

  const handlePrint = async (
    product: Product[],
  ) => {
    const ticket =
      buildProductsTicket(product);

    await printTicket(ticket);
  };

  useImperativeHandle(
    ref,
    () => ({
      openCreate: () => {
        openModal("create");
      },

      printProducts: () => {
        handlePrint(products);
      },
    }),
    [products],
  );

  return (
    <ContainerManageProducts>
      <ModalForm
        isOpen={showPrinterModal}
        title="Impresora"
        onClose={() =>
          setShowPrinterModal(false)
        }
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

      <Filter>
        <button
          type="button"
          className={
            showActive ? "active" : ""
          }
          onClick={() =>
            setShowActive(true)
          }
        >
          Activos
        </button>

        <button
          type="button"
          className={
            !showActive ? "active" : ""
          }
          onClick={() =>
            setShowActive(false)
          }
        >
          Inactivos
        </button>

        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(
              e.target.value,
            )
          }
        >
          <option value="Todas">
            Todas las categorías
          </option>

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </Filter>

      {loading && (
        <p>Cargando productos...</p>
      )}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <ListTable
          className="products-table"
          headers={[
            "Nombre",
            "Stock",
            "Precio",
            "Categoría",
            "Acciones",
          ]}
        >
          {filteredProducts.map(
            (product) => (
              <TableRow
                $columns={5}
                className="products-table-row"
                key={product.id}
              >
                <div className="product-name">
                  <strong>
                    {product.name}
                  </strong>
                </div>

                <p className="stock">
                  {product.quantity}
                </p>

                <p className="price">
                  $
                  {product.price.toLocaleString(
                    "es-AR",
                  )}
                </p>

                <div className="category">
                  <p>
                    {product.category}
                  </p>
                </div>

                <div className="actions">
                  {product.status ===
                    true && (
                    <TableButton
                      className="buttonstock"
                      type="button"
                      title="Modificar stock"
                      aria-label="Modificar stock"
                      onClick={() =>
                        openModal(
                          "updateQuantity",
                          product,
                        )
                      }
                    >
                      <FaBoxes />

                      <span className="button-text">
                        Modificar stock
                      </span>
                    </TableButton>
                  )}

                  <TableButton
                    type="button"
                    title="Opciones"
                    aria-label="Opciones"
                    onClick={() =>
                      openModal(
                        "options",
                        product,
                      )
                    }
                    className={
                      product.status
                        ? "active"
                        : "inactive"
                    }
                  >
                    <span className="status-text">
                      {product.status
                        ? "Activo"
                        : "Inactivo"}
                    </span>

                    <FaEdit />
                  </TableButton>
                </div>
              </TableRow>
            ),
          )}
        </ListTable>
      )}

      {!loading &&
        !error &&
        filteredProducts.length === 0 && (
          <p>
            {showActive
              ? "No hay productos activos."
              : "No hay productos inactivos."}
          </p>
        )}

      <ModalForm
        isOpen={modalOpen}
        title={getModalTitle()}
        onClose={closeModal}
      >
        {modalMode === "options" &&
          selectedProduct && (
            <ProductOptions>
              <ProductInfo>
                <h3>
                  {selectedProduct.name}
                </h3>

                <div>
                  <span>Stock</span>

                  <strong>
                    {selectedProduct.quantity}
                  </strong>
                </div>

                <div>
                  <span>Precio</span>

                  <strong>
                    $
                    {selectedProduct.price.toLocaleString(
                      "es-AR",
                    )}
                  </strong>
                </div>

                <div>
                  <span>Categoría</span>

                  <strong>
                    {selectedProduct.category}
                  </strong>
                </div>
              </ProductInfo>

              <ProductActions>
                <div>
                  {selectedProduct.status ===
                    true && (
                    <ActionButton
                      type="button"
                      onClick={() =>
                        setModalMode("edit")
                      }
                    >
                      Modificar producto
                    </ActionButton>
                  )}

                  <StatusButton
                    className={
                      selectedProduct.status
                        ? "active"
                        : "inactive"
                    }
                    type="button"
                    onClick={() => {
                      setDeleteError(null);
                      setModalMode("delete");
                    }}
                  >
                    {selectedProduct.status
                      ? "Desactivar Producto"
                      : "Activar Producto"}
                  </StatusButton>
                </div>

                <CancelButton
                  type="button"
                  onClick={closeModal}
                >
                  Cancelar
                </CancelButton>
              </ProductActions>
            </ProductOptions>
          )}

        {modalMode === "create" && (
          <ProductForm
            categories={categories}
            mode="create"
            onSuccess={closeModal}
          />
        )}

        {modalMode === "edit" &&
          selectedProduct && (
            <ProductForm
              mode="edit"
              product={selectedProduct}
              onSuccess={closeModal}
            />
          )}

        {modalMode ===
          "updateQuantity" &&
          selectedProduct && (
            <StockForm
              product={selectedProduct}
              onSuccess={closeModal}
            />
          )}

        {modalMode === "delete" &&
          selectedProduct && (
            <ProductOptions>
              <ProductInfo>
                <h3>
                  {selectedProduct.status
                    ? "Desactivar producto"
                    : "Activar producto"}
                </h3>

                <p>
                  {selectedProduct.status
                    ? "¿Estás seguro de que desea desactivar este producto?"
                    : "¿Estás seguro de que desea activar este producto?"}
                </p>

                <strong>
                  {selectedProduct.name}
                </strong>

                {deleteError && (
                  <p>{deleteError}</p>
                )}
              </ProductInfo>

              <ProductActions>
                <StatusButton
                  className={
                    selectedProduct.status
                      ? "active"
                      : "inactive"
                  }
                  type="button"
                  disabled={deleting}
                  onClick={async () => {
                    try {
                      setDeleting(true);
                      setDeleteError(null);

                      const status =
                        !selectedProduct.status;

                      await updateProductStatusAPI(
                        selectedProduct.id,
                        status,
                      );

                      dispatch(
                        updateProduct({
                          ...selectedProduct,
                          status,
                        }),
                      );

                      setShowActive(
                        !selectedProduct.status,
                      );

                      closeModal();
                    } catch (error) {
                      console.error(
                        "Error actualizando producto:",
                        error,
                      );

                      setDeleteError(
                        selectedProduct.status
                          ? "No se pudo desactivar el producto. Intentá nuevamente."
                          : "No se pudo activar el producto. Intentá nuevamente.",
                      );
                    } finally {
                      setDeleting(false);
                    }
                  }}
                >
                  {deleting
                    ? "Procesando..."
                    : selectedProduct.status
                      ? "Desactivar"
                      : "Activar"}
                </StatusButton>

                <CancelButton
                  type="button"
                  disabled={deleting}
                  onClick={() =>
                    setModalMode("options")
                  }
                >
                  Cancelar
                </CancelButton>
              </ProductActions>
            </ProductOptions>
          )}
      </ModalForm>
    </ContainerManageProducts>
  );
});

ManageProducts.displayName =
  "ManageProducts";

export default ManageProducts;