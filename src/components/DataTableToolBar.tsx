/* eslint-disable @typescript-eslint/no-unused-vars */
import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./DataTableViewOptions"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
// import { statuses } from "@/lib/data"
import { filterType } from "@/lib/types"

// import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
// import { statuses } from "@/lib/data"

interface DataTableToolbarProps<TData> {
    table: Table<TData>,
    filterOptions?: filterType[]
}

export function DataTableToolbar<TData>({
    table,
    filterOptions
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 space-x-2">
                {
                    filterOptions?.map((it) => {
                        const { value, name, filterInputType } = it
                        if (filterInputType === "input") {
                            return <Input
                                placeholder={`Filter ${name}s`}
                                value={(table.getColumn(value)?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn(value)?.setFilterValue(event.target.value)
                                }
                                className="h-8 w-[150px] lg:w-[250px]"
                            />
                        }
                        else if (filterInputType === "faceted") {
                            {
                                return table.getColumn(value) &&
                                    <DataTableFacetedFilter
                                        column={table.getColumn(value)}
                                        title={name}
                                        options={it?.values ?? [
                                            {
                                                label: "No Data",
                                                value: "noData"
                                            }
                                        ]}
                                    />
                            }
                        }
                        return <div>{JSON.stringify(it)}</div>
                    })
                }
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>
            <DataTableViewOptions table={table} />
        </div>
    )
}
