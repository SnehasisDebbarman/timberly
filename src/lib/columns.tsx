import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import DataTableColumnHeader from "../components/DataTableColumnHeader"
import { Payment, TransactionType } from "@/lib/types"
import moment from "moment"


export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="w-4 h-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Email" />
            )
        },
    },
    {
        accessorKey: "amount",
        // header: "Amount",
        header: ({ column }) => <DataTableColumnHeader className="justify-end " column={column} title="Amount" />,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)
            return <div className="font-medium text-right">{formatted}</div>
        },
    },
]

export const transactionColumns: ColumnDef<TransactionType>[] = [
    {
        accessorKey: "customerName",
        header: "Customer",
        cell: ({ row }) => {
            // const name = JSON.stringify()
            return <div className="font-semibold">{row.getValue("customerName")}</div>
        },
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => {
            const date = row.getValue("date") ?? new Date()
            return (
                <div className="flex space-x-2">
                    {moment(date).format("dddd, DD MMM Y")}
                </div>
            )
        },
    },
    {
        accessorKey: "pricePerUnit",
        header: "Price per unit",
        // header: ({ column }) => <DataTableColumnHeader className="text-xs" column={column} title="Price per Unit" />,
    },
    {
        accessorKey: "quantity",
        header: "Quantity ",
        // header: ({ column }) => <DataTableColumnHeader className="" column={column} title="Quantity" />,
    },
    // {
    //     accessorKey: "transactionIdfromFE",
    //     header: "Transaction ID",
    // },


    {
        accessorKey: "customerPhNo",
        header: "Contact Number",
    },
    {
        accessorKey: "transactionType",
        header: "Transaction Type ",
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        }
    },
    {
        accessorKey: "Total",
        header: "Total",
        // header: ({ column }) => <DataTableColumnHeader className="justify-end " column={column} title="Total" />,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("pricePerUnit"))
            const quantity = parseFloat(row.getValue("quantity"));
            const total = amount * quantity
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
            }).format(total)
            return <div className="font-medium text-right">{formatted}</div>
        },
    },


    // {
    //     accessorKey: "email",
    //     header: ({ column }) => {
    //         return (
    //             <DataTableColumnHeader column={column} title="Email" />
    //         )
    //     },
    // },
    // {
    //     accessorKey: "amount",
    //     // header: "Amount",
    //     header: ({ column }) => <DataTableColumnHeader className="justify-end " column={column} title="Amount" />,
    //     cell: ({ row }) => {
    //         const amount = parseFloat(row.getValue("amount"))
    //         const formatted = new Intl.NumberFormat("en-US", {
    //             style: "currency",
    //             currency: "USD",
    //         }).format(amount)
    //         return <div className="font-medium text-right">{formatted}</div>
    //     },
    // },
]

