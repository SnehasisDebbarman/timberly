export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "cancelled" | "success" | "failed";
  email: string;
};
export interface RequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  redirect: "follow" | "error" | "manual";
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
