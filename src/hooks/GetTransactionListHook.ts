import { RequestOptions } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { transactionListDataState } from "@/store/store";
// import { useEffect, useState } from "react";

export function useGetTransactionListHook() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTransactionListData] = useRecoilState(transactionListDataState);
  const requestOptions: RequestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const jerk = useQuery({
    queryKey: ["transactionListData"],
    queryFn: () =>
      fetch(
        "https://businesswithalldata-production.up.railway.app/api/getTransactionData",
        requestOptions
      ).then((res) => res.json()),
  });
  useEffect(() => {
    setTransactionListData(jerk?.data);
  }, [jerk, jerk?.data, setTransactionListData]);

  return jerk;
}
