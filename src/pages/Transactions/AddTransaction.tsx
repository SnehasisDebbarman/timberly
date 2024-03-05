/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import { TransactionType } from "@/lib/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductInfo, RequestOptions } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { addTransactionHandler } from "@/Service/CategoryService"

// const formSchema = z.object({
//     username: z.string().min(2, {
//         message: "Username must be at least 2 characters.",
//     }),
// })

const formSchema = z.object({
    propertyName: z.string().min(2, {
        message: "Please Select a Product from the list",
    }),
    transactionType: z.union([z.literal("Buy"), z.literal("Sell")]),
    quantity: z.string().min(1, {
        message: "Username must be at least 2 characters.",
    }),
    pricePerUnit: z.string().nonempty(),
    date: z.string(),
    customerName: z.string().min(2, {
        message: "Customer Name must be at least 2 characters.",
    }),
    customerAddress: z.string().min(2, {
        message: "Customer Address must be at least 2 characters.",
    }),
    customerPhNo: z.string().min(10, {
        message: "Customer PhNo must be at least 10 characters.",
    }),
    transactionIdfromFE: z.string().nullable(),
    remarks: z.string(),
    currentBuyPriceFromFE: z.string()
})

export default function AddTransaction({ setAddTransactionOpen }: { setAddTransactionOpen: any }) {
    const [productSelected, setProductSelected] = useState<ProductInfo | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const requestOptions: RequestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['transactionData'],
        queryFn: () =>
            fetch("https://businesswithalldata-production.up.railway.app/api/getProperties", requestOptions).then((res) =>
                res.json(),
            ),
    })
    console.log("stst", isPending, error)

    useEffect(() => {
        setProductSelected(data?.[0] ?? null)
        console.log('object', data)

    }, [data])



    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            propertyName: productSelected?.propertyName ?? "",
            transactionType: "Buy",
            quantity: "0",
            pricePerUnit: "",
            date: new Date().toDateString(),
            customerName: "",
            customerAddress: "",
            customerPhNo: "",
            transactionIdfromFE: null,
            remarks: "",
            currentBuyPriceFromFE: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        // console.log(values);
        // alert(JSON.stringify(values));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        addTransactionHandler(values)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(() => { setAddTransactionOpen(false); setIsLoading(false) })



        // addTransactionHandler(values)
        //     .then((info) => { alert(JSON.stringify(info, null, 2)); })
        //     .finally(() => {
        //         setAddTransactionOpen(false)
        //         // setIsRefreshed(true);
        //     })
    }


    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 gird-cols-1 sm:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="propertyName"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Product Name</FormLabel>
                                <Select onValueChange={(e) => { field.onChange(e); }} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an Product Name" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            data?.map((it: any) =>
                                                <SelectItem value={it.propertyName}>{it.propertyName}</SelectItem>
                                            )
                                        }
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="transactionType"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel>Transaction Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an Transaction Type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Buy">Buy</SelectItem>
                                        <SelectItem value="Sell">Sell</SelectItem>
                                    </SelectContent>
                                </Select>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="pricePerUnit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>price Per Unit</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Customer Name</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="customerAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>customerAddress</FormLabel>
                                <FormControl>
                                    <Input  {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="customerPhNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>customerPhNo</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="remarks"
                        render={({ field }) => (
                            <FormItem className="col-span-2">
                                <FormLabel>remarks</FormLabel>
                                <FormControl>
                                    <Textarea   {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button className="col-span-2" type="submit">Submit</Button>
                </form>
            </Form>
            {
                isLoading && <div className="absolute top-0 left-0 grid w-screen h-screen place-items-center ">
                    <p>  Loading....</p>
                </div>
            }


        </div>
    )
}
