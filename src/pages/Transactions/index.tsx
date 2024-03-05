// import React from 'react'

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddTransaction from "./AddTransaction";
import { useState } from "react";
import TransactionList from "./TransactionList";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import TransactionOverview from "./TransactionOverview";


export default function Transaction() {
    const [addTransactionOpen, setAddTransactionOpen] = useState(false)
    return (
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold tracking-tight">Transactions</h2>





                <Dialog open={addTransactionOpen} onOpenChange={setAddTransactionOpen}>
                    <DialogTrigger>
                        <Button onClick={() => { setAddTransactionOpen(true) }}>  <PlusIcon className="mr-2" /> Add Transactions</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="pb-5 text-3xl "> Add New Transaction</DialogTitle>
                            <DialogDescription>
                                <AddTransaction setAddTransactionOpen={setAddTransactionOpen} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </div>
            <TransactionOverview />





            <h2 className="p-5 pl-2 text-xl font-bold tracking-tight">Transactions History</h2>
            <TransactionList />
        </div>
    )
}
