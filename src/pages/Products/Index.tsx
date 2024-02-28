import { columns } from "@/components/columns"
import { payments } from "@/lib/data"
import { DataTable } from "@/components/DataTable"
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


            <DataTable columns={columns} data={payments} />
        </div>
    )
}

export default Products