export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "cancelled" | "success" | "failed";
  email: string;
};
