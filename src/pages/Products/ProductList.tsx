/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useQuery,
} from '@tanstack/react-query'
import { RequestOptions } from '@/lib/types';

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
import InfoChip from '../CustomComponents/InfoChip';
import { Separator } from '@/components/ui/separator';


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
            <div className='grid grid-cols-1 gap-2 m-2 text-black md:grid-cols-3'>
                {
                    data.map((it: any, i: number) => (
                        <div key={i}>
                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl ">
                                    <img
                                        src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
                                        alt="card-image" className="object-cover w-full h-40" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-medium truncate text-blue-gray-700 ">
                                            {it?.propertyName?.replace(/[^a-zA-Z0-9 ]/g, " ")}
                                        </p>
                                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                            $95.00
                                        </p>
                                    </div>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                        <div className="flex items-center h-5 space-x-4 text-sm">
                                            <div>{it?.subCategoryName}</div>
                                            <Separator orientation="vertical" />
                                            <div>{it?.categoryName}</div>
                                            <Separator orientation="vertical" />
                                            <div>{it?.productType}</div>
                                        </div>
                                    </p>
                                    <div className="block pt-4 font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                        {
                                            it?.unitType === "lengthWise" ?
                                                <InfoChip type={"Dimensions"} value={`${it?.height} * ${it?.width}`} /> :
                                                <InfoChip type={"Weight"} value={`${it?.weight}`} />
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
