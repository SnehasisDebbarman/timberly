import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  // CheckCircledIcon,
  // CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import { Payment } from "./types";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

//"pending" | "processing" | "success" | "failed"'
export const statuses = [
  {
    value: "pending",
    label: "pending",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "processing",
    label: "processing",
    icon: StopwatchIcon,
  },
  // {
  //   value: "success",
  //   label: "success",
  //   icon: CheckCircledIcon,
  // },
  // {
  //   value: "failed",
  //   label: "failed",
  //   icon: CrossCircledIcon,
  // },
  // {
  //   value: "canceled",
  //   label: "Canceled",
  //   icon: CrossCircledIcon,
  // },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

export const payments: Payment[] = [
  {
    id: "728ed52fsss",
    amount: 100,
    status: "pending",
    email: "pinu@example.com",
  },
  {
    id: "728ed52fsss",
    amount: 100,
    status: "pending",
    email: "snehasis@example.com",
  },
  {
    id: "728ed52fsussj",
    amount: 100,
    status: "processing",
    email: "indranil@example.com",
  },
  {
    id: "728ed52sjjs",
    amount: 100,
    status: "processing",
    email: "anindya@example.com",
  },
];
