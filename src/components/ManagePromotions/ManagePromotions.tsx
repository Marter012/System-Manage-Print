import { forwardRef, useImperativeHandle, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaPlus } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";

import ListTable from "../../components/Tables/ListTable";
import ModalForm from "../../components/ModalForm/ModalForm";

import type { AppDispatch, RootState } from "../../store/store";

import {
  setPromotions,
  updatePromotion,
} from "../../store/slices/promotionSlice";

import {
  getPromotionsAPI,
  updatePromotionStatusAPI,
} from "../../services/promotionService";

import type { Promotion } from "../../interfaces/Promotion";

import PromotionForm from "../Forms/PromotionForm/PromotionForm.tsx";

import {
  ContainerManagePromotions,
  Filter,
  AddPromotionButton,
  PromotionOptions,
  PromotionInfo,
  PromotionItems,
  PromotionItem,
  PromotionActions,
  ActionButton,
  CancelButton,
  StatusButton,
} from "./ManagePromotionsStyles.ts";

import { TableButton, TableRow } from "../Tables/ListTableStyles";

type ModalMode = "options" | "create" | "edit" | "delete";

interface ManagePromotionProps {
  showActive: boolean;
  setShowActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ManagePromotionRef {
  openModal: () => void;
}

export const AddPromotion = ({ onClick }: { onClick: () => void }) => {
  return (
    <AddPromotionButton type="button" onClick={onClick}>
      <FaPlus />
      Nueva promoción
    </AddPromotionButton>
  );
};

const ManagePromotions = forwardRef<
  ManagePromotionRef,
  ManagePromotionProps
>(({ showActive, setShowActive }, ref) => {
  const dispatch = useDispatch<AppDispatch>();

  const { promotions, loading, error } = useSelector(
    (state: RootState) => state.promotion,
  );

  const products = useSelector(
    (state: RootState) => state.products.products,
  );

  const [modalOpen, setModalOpen] = useState(false);

  const [modalMode, setModalMode] =
    useState<ModalMode>("options");

  const [selectedPromotion, setSelectedPromotion] =
    useState<Promotion | null>(null);

  const [deleteError, setDeleteError] =
    useState<string | null>(null);

  const [deleting, setDeleting] = useState(false);

  const loadPromotions = async () => {
    try {
      const data = await getPromotionsAPI();

      dispatch(setPromotions(data));
    } catch (error) {
      console.error("Error cargando promociones:", error);
    }
  };

  const filteredPromotions = promotions.filter(
    (promotion) => promotion.status === showActive,
  );

  const openModal = (
    mode: ModalMode,
    promotion?: Promotion,
  ) => {
    setModalMode(mode);

    setSelectedPromotion(promotion ?? null);

    setDeleteError(null);

    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);

    setSelectedPromotion(null);

    setModalMode("options");

    setDeleteError(null);

    setDeleting(false);
  };

  const getModalTitle = () => {
    switch (modalMode) {
      case "create":
        return "Nueva promoción";

      case "edit":
        return "Editar promoción";

      case "delete":
        return selectedPromotion?.status
          ? "Desactivar promoción"
          : "Activar promoción";

      default:
        return "Opciones de la promoción";
    }
  };

  const getProductName = (productId: string) => {
    return (
      products.find((product) => product.id === productId)?.name ??
      productId
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        openModal("create");
      },
    }),
    [products],
  );

  return (
    <ContainerManagePromotions>
      <Filter>
        <button
          type="button"
          className={showActive ? "active" : ""}
          onClick={() => setShowActive(true)}
        >
          Activas
        </button>

        <button
          type="button"
          className={!showActive ? "active" : ""}
          onClick={() => setShowActive(false)}
        >
          Inactivas
        </button>
      </Filter>

      {loading && <p>Cargando promociones...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <ListTable
          headers={[
            "Nombre",
            "Descripción",
            "Precio",
            "Composición",
            "Acciones",
          ]}
        >
          {filteredPromotions.map((promotion) => (
            <TableRow $columns={5} key={promotion.id}>
              <div className="promotion-name">
                <strong>{promotion.name}</strong>
              </div>

              <p className="promotion-description">
                {promotion.description}
              </p>

              <p className="price">
                ${promotion.price.toLocaleString("es-AR")}
              </p>

              <div className="promotion-composition">
                {promotion.items.map((item) => (
                  <div key={item.id}>
                    <strong>
                      {item.quantity} {item.name}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="actions">
                <TableButton
                  type="button"
                  title="Opciones"
                  aria-label="Opciones de promoción"
                  onClick={() =>
                    openModal("options", promotion)
                  }
                  className={
                    promotion.status ? "active" : "inactive"
                  }
                >
                  <span className="status-text">
                    {promotion.status ? "Activa" : "Inactiva"}
                  </span>

                  <MdOutlineMoreHoriz />
                </TableButton>
              </div>
            </TableRow>
          ))}
        </ListTable>
      )}

      {!loading &&
        !error &&
        filteredPromotions.length === 0 && (
          <p>
            {showActive
              ? "No hay promociones activas."
              : "No hay promociones inactivas."}
          </p>
        )}

      <ModalForm
        isOpen={modalOpen}
        title={getModalTitle()}
        onClose={closeModal}
      >
        {modalMode === "options" && selectedPromotion && (
          <PromotionOptions>
            <PromotionInfo>
              <h3>{selectedPromotion.name}</h3>

              <div>
                <span>Descripción</span>

                <strong>
                  {selectedPromotion.description}
                </strong>
              </div>

              <div>
                <span>Precio</span>

                <strong>
                  $
                  {selectedPromotion.price.toLocaleString(
                    "es-AR",
                  )}
                </strong>
              </div>
            </PromotionInfo>

            <PromotionItems>
              <h3>Composición</h3>

              {selectedPromotion.items.map((item) => (
                <PromotionItem key={item.id}>
                  <div>
                    <strong>{item.name}</strong>

                    <span>
                      Cantidad: {item.quantity}
                    </span>
                  </div>

                  <div>
                    <span>Productos permitidos</span>

                    {item.product_ids.map((productId) => (
                      <p key={productId}>
                        {getProductName(productId)}
                      </p>
                    ))}
                  </div>
                </PromotionItem>
              ))}
            </PromotionItems>

            <PromotionActions>
              {selectedPromotion.status && (
                <ActionButton
                  type="button"
                  onClick={() => setModalMode("edit")}
                >
                  Modificar promoción
                </ActionButton>
              )}

              <StatusButton
                className={
                  selectedPromotion.status
                    ? "active"
                    : "inactive"
                }
                type="button"
                onClick={() => {
                  setDeleteError(null);

                  setModalMode("delete");
                }}
              >
                {selectedPromotion.status
                  ? "Desactivar promoción"
                  : "Activar promoción"}
              </StatusButton>

              <CancelButton
                type="button"
                onClick={closeModal}
              >
                Cancelar
              </CancelButton>
            </PromotionActions>
          </PromotionOptions>
        )}

        {modalMode === "create" && (
          <PromotionForm
            mode="create"
            onSuccess={async () => {
              await loadPromotions();
              closeModal();
            }}
          />
        )}

        {modalMode === "edit" && selectedPromotion && (
          <PromotionForm
            mode="edit"
            promotion={selectedPromotion}
            onSuccess={async () => {
              await loadPromotions();
              closeModal();
            }}
          />
        )}

        {modalMode === "delete" && selectedPromotion && (
          <PromotionOptions>
            <PromotionInfo>
              <h3>
                {selectedPromotion.status
                  ? "Desactivar promoción"
                  : "Activar promoción"}
              </h3>

              <p>
                {selectedPromotion.status
                  ? "¿Estás seguro de que querés desactivar esta promoción?"
                  : "¿Estás seguro de que querés activar esta promoción?"}
              </p>

              <strong>{selectedPromotion.name}</strong>

              {deleteError && <p>{deleteError}</p>}
            </PromotionInfo>

            <PromotionActions>
              <StatusButton
                className={
                  selectedPromotion.status
                    ? "active"
                    : "inactive"
                }
                type="button"
                disabled={deleting}
                onClick={async () => {
                  try {
                    setDeleting(true);

                    const status = !selectedPromotion.status;

                    const updated =
                      await updatePromotionStatusAPI(
                        selectedPromotion.id,
                        status,
                      );

                    dispatch(updatePromotion(updated));

                    setShowActive(status);

                    closeModal();
                  } catch (error) {
                    console.error(
                      "Error actualizando promoción:",
                      error,
                    );

                    setDeleteError(
                      "No se pudo actualizar el estado de la promoción.",
                    );
                  } finally {
                    setDeleting(false);
                  }
                }}
              >
                {deleting
                  ? "Procesando..."
                  : selectedPromotion.status
                    ? "Desactivar"
                    : "Activar"}
              </StatusButton>

              <CancelButton
                type="button"
                disabled={deleting}
                onClick={() => setModalMode("options")}
              >
                Cancelar
              </CancelButton>
            </PromotionActions>
          </PromotionOptions>
        )}
      </ModalForm>
    </ContainerManagePromotions>
  );
});

ManagePromotions.displayName = "ManagePromotions";

export default ManagePromotions;