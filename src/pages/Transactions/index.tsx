// import React from 'react'

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddTransaction from "./AddTransaction";
import { useState } from "react";
import TransactionList from "./TransactionList";

export default function Transaction() {
    const [addTransactionOpen, setAddTransactionOpen] = useState(false)
    return (
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold tracking-tight">Transactions</h2>
                <Button onClick={() => { setAddTransactionOpen(true) }}>  <PlusIcon className="mr-2" /> Add Transactions</Button>


                {addTransactionOpen &&
                    <div className="absolute  top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.3)]">
                        <div className="p-10 max-h-[90vh] overflow-y-scroll bg-white border-2 border-gray-200 rounded-lg opacity-100 max-w-max">
                            <AddTransaction setAddTransactionOpen={setAddTransactionOpen} />
                        </div>
                    </div>
                }
            </div>
            <TransactionList />
        </div>
    )
}
