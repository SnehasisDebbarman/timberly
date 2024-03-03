import {
    useQuery,
} from '@tanstack/react-query'
import { RequestOptions } from '@/lib/types';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import InfoChip from '../CustomComponents/InfoChip';


export default function ProductList() {
    const requestOptions: RequestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch("https://businesswithalldata-production.up.railway.app/api/getProperties", requestOptions).then((res) =>
                res.json(),
            ),
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <div className='grid grid-cols-1 gap-2 m-2 md:grid-cols-3'>
                {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    data.map((it: any, i: number) => (
                        <div key={i}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{it?.propertyName}</CardTitle>
                                    <CardDescription>lengthWise</CardDescription>
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
                                <CardFooter>
                                    {/* <p>Card Footer</p> */}
                                </CardFooter>
                            </Card>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
