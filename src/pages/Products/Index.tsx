// import { columns } from "@/components/columns"
// import { payments } from "@/lib/data"
// import { DataTable } from "@/components/DataTable"
import { useState } from "react"
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
function Products() {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
    const [isRefreshed, setIsRefreshed] = useState<boolean>(false)
    return (
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                <Button onClick={() => setIsAddDialogOpen(true)}>  <PlusIcon className="mr-2" /> Add Products</Button>
            </div>
            {/* filter */}
            <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="SubCategory" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
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
            {
                isAddDialogOpen && <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.3)]">
                    <div className="p-8 bg-white border-2 border-gray-200 rounded-lg opacity-100 max-w-max">
                        <AddProduct setIsRefreshed={setIsRefreshed} setIsAddDialogOpen={setIsAddDialogOpen} />
                    </div>
                </div>
            }
        </div>
    )
}

export default Products