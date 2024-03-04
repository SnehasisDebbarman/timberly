export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "cancelled" | "success" | "failed";
  email: string;
};
export interface RequestOptions {
  method: string;
  headers?: Headers;
  body?: BodyInit;
  redirect: RequestRedirect;
}
export interface ProductInfo {
  propertyName: string;
  unitType: string;
  categoryName: string;
  subCategoryName: string;
  productType: string;
  height: string;
  width: string;
  weight?: null;
  remarks: string;
}
export interface TransactionType {
  propertyName: string;
  transactionType: "Buy" | "Sell";
  quantity: string;
  pricePerUnit: string;
  date: string;
  customerName: string;
  customerAddress: string;
  customerPhNo: string;
  transactionIdfromFE: string | null;
  remarks: string;
  currentBuyPriceFromFE: string;
}
