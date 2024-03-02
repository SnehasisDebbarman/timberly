// import { columns } from "@/components/columns"
// import { payments } from "@/lib/data"
// import { DataTable } from "@/components/DataTable"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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



    return (
        <div>
            <div className="flex justify-between p-2">
                <h2 className="text-2xl font-bold tracking-tight">Products</h2>
                <Dialog>
                    <DialogTrigger>
                        <Button>  <PlusIcon className="mr-2" /> Add Products</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                <AddProduct />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
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






            {/* <DataTable columns={columns} data={payments} /> */}
            <ProductList />
        </div>
    )
}

export default Products