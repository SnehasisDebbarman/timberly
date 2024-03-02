export default function InfoChip({ type, value }: { type: string, value: string }) {
    return (
        <div className="inline-flex rounded-md " role="group">
            <div className="px-2 py-1 text-xs font-medium text-gray-100 bg-gray-700 border border-gray-200 rounded-s-lg ">
                {type}
            </div>
            <div className="px-2 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 ">
                {value}
            </div>
        </div>
    )
}
