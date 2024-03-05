/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useQuery,
} from '@tanstack/react-query'
import { RequestOptions } from '@/lib/types';

import {
    Card,
    CardContent,
    // CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InfoChip from '../CustomComponents/InfoChip';


export default function CustomerList() {
    const requestOptions: RequestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch("https://businesswithalldata-production.up.railway.app/api/getAllCustomers", requestOptions).then((res) =>
                res.json(),
            ),
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className={'grid grid-cols-1 gap-2 m-2 md:grid-cols-3'}>
                {
                    data.map((it: any, i: number) => (
                        <div key={i}>
                            <Card >
                                <CardHeader>
                                    <CardTitle>{it?.name}</CardTitle>
                                    {/* <CardDescription>lengthWise</CardDescription> */}
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
                }

            </div>

        </div>
    )
}