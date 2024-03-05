import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomInput({ valueList }: { valueList: any }) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                {
                    valueList.map((value: string, index: number) => {
                        <SelectItem key={index} value={value}>{value}</SelectItem>
                    })
                }
            </SelectContent>
        </Select>

    )
}

