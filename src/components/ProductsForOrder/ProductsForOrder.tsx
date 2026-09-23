import { useMemo, useState } from "react";

import type { ProductsForOrderProps } from "../../interfaces/Product";
import type { Promotion } from "../../interfaces/Promotion";

import {
  ProductsSection,
  ProductsHeader,
  SearchInput,
  ProductGrid,
  ProductCard,
  ModalOverlay,
  PromotionModal,
  CategorySelect,
} from "./ProductsForOrderStyles.ts";

import { QuantityControls } from "../CreateOrder/CreateOrderStyles.ts";

import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";


const ProductsForOrder = ({
  products,
  items,
  addProduct,
  increaseQuantity,
  decreaseQuantity,
  addPromotion,
}: ProductsForOrderProps) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const [showPromotionInfo, setShowPromotionInfo] = useState(false);

  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(
    null,
  );

  const promotions = useSelector(
    (state: RootState) => state.promotion.promotions,
  );

  const categories = [
    "Todos",
    ...Array.from(new Set(products.map((product) => product.category))).sort(
      (a, b) => a.localeCompare(b, "es"),
    ),
    "Promociones",
  ];

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) &&
          (category === "Todos" ||
            category === "Promociones" ||
            product.category === category),
      ),
    [products, search, category],
  );

  const filteredPromotions = useMemo(
    () =>
      promotions.filter(
        (promotion) =>
          promotion.status &&
          promotion.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [promotions, search],
  );

  const handlePromotionClick = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setShowPromotionInfo(true);
  };

  const confirmPromotion = () => {
    if (!selectedPromotion) {
      return;
    }

    addPromotion(selectedPromotion);

    setShowPromotionInfo(false);
    setSelectedPromotion(null);
  };

  const closePromotionModal = () => {
    setShowPromotionInfo(false);
    setSelectedPromotion(null);
  };

  const showPromotions = category === "Todos" || category === "Promociones";

  const showProducts = category !== "Promociones";

  return (
    <>
      <ProductsSection>
        <ProductsHeader>
          <h3>Productos</h3>

          <SearchInput
            type="text"
            placeholder="Buscar producto o promoción..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </ProductsHeader>

        <CategorySelect
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </CategorySelect>

        <ProductGrid>
          {/* =========================
      PRODUCTOS
  ========================= */}

          {showProducts &&
            filteredProducts.map((product) => {
              const quantity =
                items.find((item) => item.product_id === product.id)
                  ?.quantity ?? 0;

              return (
                <ProductCard key={product.id}>
                  <div className="product-info">
                    <div className="product-name">
                      <h4>{product.name}</h4>

                      <small>Stock: {product.quantity}</small>
                    </div>

                    <span className="product-price">
                      ${product.price.toLocaleString("es-AR")}
                    </span>
                  </div>

                  {quantity === 0 ? (
                    <button
                      type="button"
                      disabled={!product.quantity}
                      onClick={() => addProduct(product)}
                    >
                      + AGREGAR
                    </button>
                  ) : (
                    <QuantityControls>
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(product.id)}
                      >
                        −
                      </button>

                      <strong>{quantity}</strong>

                      <button
                        type="button"
                        disabled={quantity >= product.quantity}
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </QuantityControls>
                  )}
                </ProductCard>
              );
            })}

          {/* =========================
      PROMOCIONES
  ========================= */}

          {showPromotions &&
            filteredPromotions.map((promotion) => (
              <ProductCard key={`promotion-${promotion.id}`}>
                <div className="product-info">
                  <div className="product-name">
                    <h4>🎁 {promotion.name}</h4>

                    <small>{promotion.description}</small>
                  </div>

                  <span className="product-price">
                    ${promotion.price.toLocaleString("es-AR")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handlePromotionClick(promotion)}
                >
                  + AGREGAR PROMO
                </button>
              </ProductCard>
            ))}
        </ProductGrid>
      </ProductsSection>

      {showPromotionInfo && selectedPromotion && (
        <ModalOverlay>
          <PromotionModal>
            <h3>🎁 {selectedPromotion.name}</h3>

            <p>
              Esta promoción se aplica automáticamente al seleccionar los
              productos necesarios para completarla.
            </p>

            <button type="button" onClick={confirmPromotion}>
              Continuar
            </button>

            <button
              type="button"
              onClick={closePromotionModal}
              style={{
                marginTop: "8px",
                backgroundColor: "#ddd",
              }}
            >
              Cancelar
            </button>
          </PromotionModal>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductsForOrder;
