import { columns } from "@/lib/columns"
import { payments } from "@/lib/data"
import { DataTable } from "@/components/DataTable"

function Home() {
    return (
        <DataTable columns={columns} data={payments} />
    )
}

export default Home