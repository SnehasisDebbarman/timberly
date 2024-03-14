/* eslint-disable @typescript-eslint/no-explicit-any */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// import { columns } from "@/components/columns"
// import { payments } from "@/lib/data"
// import { DataTable } from "@/components/DataTable"
import { useEffect, useState } from "react"
import AddProduct from './AddProduct'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import ProductList from "./ProductList"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { GetAllCategory, GetAllSubCategory } from "@/Service/CategoryService"
function Products() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
    const [isRefreshed, setIsRefreshed] = useState<boolean>(false);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [Category, setCategory] = useState<any>(null);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [subCategoryList, setSubCategoryList] = useState<any>(null)
    useEffect(() => {
        setSubCategoryList(GetAllSubCategory(Category))
        console.log(Category, GetAllSubCategory(Category))

    }, [Category])


    const categoriesData = GetAllCategory()
    return (
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                    <DialogTrigger>
                        <Button onClick={() => { setIsAddDialogOpen(true) }}>  <PlusIcon className="mr-2" /> Add Transactions</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="pb-5 text-2xl "> Add New Product</DialogTitle>
                            <DialogDescription>
                                <AddProduct setIsRefreshed={setIsRefreshed} setIsAddDialogOpen={setIsAddDialogOpen} />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
            {/* filter */}
            <div className="flex gap-2">
                <Select value={Category} onValueChange={(value) => { setCategory(value) }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="category" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            categoriesData?.data?.map((it: any, i: number) => {
                                return <SelectItem key={`key-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    i}`} value={it.categoryName}>{it.categoryName}</SelectItem>
                            })
                        }
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="SubCategory" />
                    </SelectTrigger>
                    <SelectContent>
                        {
                            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                            subCategoryList?.data?.map((it: any, i: number) => {
                                return <SelectItem key={`${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    i}-key`} value={it.categoryName}>{it.categoryName}</SelectItem>
                            })
                        }


                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Unit Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="lengthWise">Length Wise</SelectItem>
                        <SelectItem value="weightWise">Weight Wise</SelectItem>

                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Product Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {
                isRefreshed ? <ProductList /> : <ProductList />
            }
            {/* {
                isAddDialogOpen && <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.3)]">
                    <Button onClick={() => setIsAddDialogOpen(false)}>X</Button>
                    <div className="p-8 bg-white border-2 border-gray-200 rounded-lg opacity-100 max-w-max">
                        <AddProduct setIsRefreshed={setIsRefreshed} setIsAddDialogOpen={setIsAddDialogOpen} />
                    </div>
                </div>
            } */}

        </div>
    )
}

export default Products