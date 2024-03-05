/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useQuery,
} from '@tanstack/react-query';
import { RequestOptions } from '@/lib/types';

import { DataTable } from '@/components/DataTable';
import { transactionColumns } from '@/lib/columns';
import { transactionTypeList } from '@/lib/data';

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
    const requestOptions: RequestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch("https://businesswithalldata-production.up.railway.app/api/getTransactionData", requestOptions).then((res) =>
                res.json(),
            ),
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className={'grid'}>
                <DataTable filterOptions={filterOptions} columns={transactionColumns} data={data} />
                {/* {
                    data.map((it: any, i: number) => (
                        <div key={i}>
                            <Card className={it?.transactionType === "Buy" ? "bg-green-200" : "bg-red-200"}>
                                <CardHeader>
                                    <CardTitle>{it?.propertyName}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-col gap-2'>
                                        {
                                            Object.keys(it).map((key, i: number) => {
                                                return <InfoChip key={i} type={key} value={it[key]} />
                                            })
                                        }
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))
                } */}

            </div>

        </div>
    )
}