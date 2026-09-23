import type { OrderItemForm } from "./Order.ts";
import type { Promotion } from "./Promotion.ts";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
  status: boolean;
}

export interface ProductFormValues {
  name: string;
  price: number;
  category: string;
}

export interface CreateProductValues
  extends ProductFormValues {
  quantity: number;
}

export interface ProductFormProps {
  mode: "create" | "edit";
  product?: Product;
  onSuccess: () => void;
  categories? : string[]
}

export interface ProductsForOrderProps {
  products: Product[];
  items: OrderItemForm[];

  addProduct: (product: Product) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  addPromotion: (promotion: Promotion) => void;
}
