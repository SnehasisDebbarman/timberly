import { columns } from "@/components/columns"
import { payments } from "@/lib/data"
import { DataTable } from "@/components/DataTable"

function Home() {
    return (
        <DataTable columns={columns} data={payments} />
    )
}

export default Home