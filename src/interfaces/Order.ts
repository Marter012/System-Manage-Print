export interface IOrderItem {
  id: string;
  item_type: "product" | "promotion";
  product_id: string | null;
  promotion_id: string | null;
  name: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  promotion_selections?: PromotionSelection[];
  status: boolean;
}

export interface PromotionSelection {
  promotion_item_id: string;
  product_id: string;
  quantity: number;
}

export interface ICreateOrderItem {
  item_type: "product" | "promotion";
  product_id: string | null;
  promotion_id: string | null;
  quantity: number;
  promotion_selections: PromotionSelection[];
}

export interface IOrder {
  id: string;
  order_number: number;
  customer_name: string;

  items: IOrderItem[];

  method_payment: string;
  status_payment: string;
  delivery_time: string;
  cash_register_id: string;
  status: boolean;
  total_price: number;
  created_at: string;
}

export interface ICreateOrder {
  order_number?: number;
  customer_name: string;

  items: ICreateOrderItem[];

  method_payment: string;
  status_payment: string;
  delivery_time: string;
  cash_register_id: string;
  status: boolean;
}

export interface IUpdateOrder {
  order_number?: number;
  customer_name?: string;

  items?: ICreateOrderItem[];

  method_payment?: string;
  status_payment?: string;
  delivery_time?: string;
  cash_register_id?: string;
  status?: boolean;
}

export interface OrderItemForm {
  product_id: string;
  quantity: number;
}

export interface OrderFormValues {
  order_number?: number;
  customer_name: string;
  items: OrderItemForm[];
  method_payment: string;
  status_payment: string;
  delivery_time: string;
  status: boolean;
}

export interface OrderFormProps {
  mode?: "create" | "edit";
  order?: IOrder;
  onSuccess?: () => void;
  onDeactivate?: () => void;
}