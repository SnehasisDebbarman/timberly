import type { RequestOptions, ProductInfo, TransactionType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function GetAllCategory() {
  const requestOptions: RequestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["categoryData"],
    queryFn: () =>
      fetch(
        "https://businesswithalldata-production.up.railway.app/api/getCategories",
        requestOptions
      ).then((res) => res.json()),
  });

  return { isPending, error, data };
}

export function GetAllSubCategory(categoryName: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    categoryName: categoryName,
  });

  const requestOptions: RequestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://businesswithalldata-production.up.railway.app/api/getSubCategoriesByCategory",
    requestOptions
  )
    .then((response) => response.json())
    .then((responseData) => {
      return { error: null, data: responseData, isPending: false };
    })
    .catch((err) => {
      return { error: err, data: null, isPending: false };
    });
}

export async function AddProductWithDetails(values: ProductInfo) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const productName =
    values.unitType === "lengthWise"
      ? `${values.subCategoryName}-${values.productType}-${values.height}*${values.width}`
      : `${values.subCategoryName}-${values.productType}-${values.weight}`;

  const raw = JSON.stringify({
    propertyName: productName,
    unitType: values.unitType,
    categoryName: values.categoryName,
    subCategoryName: values.subCategoryName,
    productType: values.productType,
    height: values.height,
    width: values.width,
    weight: values.weight,
    remarks: values.remarks,
  });

  const requestOptions: RequestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://businesswithalldata-production.up.railway.app/api/createProperty",
    requestOptions
  );
  return await response.text();
}
export async function addTransactionHandler(values: TransactionType) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(values);

  const requestOptions: RequestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://businesswithalldata-production.up.railway.app/api/createTransactionData",
    requestOptions
  );
  return await response.text();
}
