/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from '@/components/DataTable';
import { transactionColumns } from '@/lib/columns';
import { transactionTypeList } from '@/lib/data';
import { useGetTransactionListHook } from '@/hooks/GetTransactionListHook';

const filterOptions = [
    {
        name: "Customer Name",
        value: "customerName",
        filterInputType: "input"
    },
    {
        name: "Transaction Type",
        value: "transactionType",
        filterInputType: "faceted",
        values: transactionTypeList
    }
]


export default function TransactionList() {
    const jerk = useGetTransactionListHook();
    const { isPending, error, data } = jerk
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className={'grid'}>
                <DataTable filterOptions={filterOptions} columns={transactionColumns} data={data} />
            </div>

        </div>
    )
}
